"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useFormState } from "react-dom";
import { smsLogin } from "./action";

const initialState = {
  token: false,
  error: undefined,
};

const SMSLogin = () => {
  const [state, action] = useFormState(smsLogin, initialState);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col *:font-medium ">
        <h1 className="text-2xl">SMS Login</h1>
        <h1 className="text-xl">Verify your phone number</h1>
      </div>
      <form className="flex flex-col gap-3" action={action}>
        {state.token ? (
          <Input
            key="token"
            name="token"
            placeholder="Verification Code"
            required
            type="text"
            min={100000}
            max={999999}
            errors={state.error?.formErrors}
          />
        ) : (
          <Input
            key="phone"
            name="phoneNumber"
            placeholder="phoneNumber"
            required
            type="number"
            errors={state.error?.formErrors}
          />
        )}

        <Button text={state.token ? "인증하기" : "인증번호 받기"} />
      </form>
    </div>
  );
};

export default SMSLogin;
