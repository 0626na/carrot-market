"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import SocialLogin from "@/components/socialLogin";
import { useFormState } from "react-dom";
import { createAccount } from "./action";

const CreateAccount = () => {
  const [state, action] = useFormState(createAccount, null);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col *:font-medium ">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h1 className="text-xl">Fill in the form below to join!</h1>
      </div>
      <form className="flex flex-col gap-3" action={action}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          required
          minLength={3}
          errors={state?.fieldErrors.username}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          required
          minLength={4}
          errors={state?.fieldErrors.password}
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          required
          minLength={4}
          errors={state?.fieldErrors.confirmPassword}
        />

        <Button text="Create Account" />
      </form>
      <SocialLogin />
    </div>
  );
};

export default CreateAccount;
