"use server";

import { z } from "zod";
import validator from "validator";
import crypto from "crypto";
import twilio from "twilio";
import db from "@/lib/db";
import userLogin from "@/lib/login";

const phoneSchema = z
  .string()
  .trim()
  .refine(
    (phone) => validator.isMobilePhone(phone, "ko-KR"),
    "유효한 전화번호가 아닙니다."
  );

const tokenExists = async (token: number) => {
  const exists = await db.sMSToken.findUnique({
    where: {
      token: token.toString(),
    },
    select: {
      id: true,
    },
  });

  return Boolean(exists);
};
const tokenSchema = z.coerce
  .number()
  .min(100000)
  .max(999999)
  .refine(tokenExists, "유효하지 않은 인증번호 입니다.");

interface ActionState {
  token: boolean;
}

const getToken = async (): Promise<string> => {
  const token = crypto.randomInt(100000, 999999).toString();
  const exist = await db.sMSToken.findUnique({
    where: {
      token,
    },
    select: {
      id: true,
    },
  });

  if (exist) {
    return getToken();
  } else return token;
};

export const smsLogin = async (prevState: ActionState, formData: FormData) => {
  const phone = formData.get("phoneNumber");
  const token = formData.get("token");

  if (!prevState.token) {
    const result = phoneSchema.safeParse(phone);
    if (!result.success) return { token: false, error: result.error.flatten() };
    else {
      await db.sMSToken.deleteMany({
        where: {
          user: {
            phone: result.data,
          },
        },
      });

      const token = await getToken();
      await db.sMSToken.create({
        data: {
          token,
          user: {
            connectOrCreate: {
              where: {
                phone: result.data,
              },
              create: {
                phone: result.data,
                username: crypto.randomBytes(10).toString("hex"),
              },
            },
          },
        },
      });

      const client_twilio = twilio(
        process.env.TWILIO_ACCOUNT_ID,
        process.env.TWILIO_AUTH_TOKEN
      );

      await client_twilio.messages.create({
        body: `[carrotMarket] 인증번호는 ${token}`,
        from: process.env.TWILIO_PHONE_NUMBER!,
        to: process.env.MY_PHONE_NUMBER!,
      });
      return {
        token: true,
      };
    }
  } else {
    const result = await tokenSchema.safeParseAsync(token);

    if (!result.success)
      return {
        token: true,
        error: result.error.flatten(),
      };
    else {
      const token = await db.sMSToken.findUnique({
        where: {
          token: result.data.toString(),
        },
        select: {
          id: true,
          userId: true,
        },
      });

      await db.sMSToken.delete({
        where: {
          id: token!.id,
        },
      });
      await userLogin(token!.userId);
      return {
        token: false,
      };
    }
  }
};
