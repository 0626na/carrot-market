"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import SocialLogin from "@/components/socialLogin";
import { useFormState } from "react-dom";
import { login } from "./action";
import { PASSWORD_MINLENGTH } from "@/lib/constants";

const Login = () => {
  const [state, action] = useFormState(login, null);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col *:font-medium ">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h1 className="text-xl">Log in with Email</h1>
      </div>
      <form className="flex flex-col gap-3" action={action}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
          minLength={PASSWORD_MINLENGTH}
          required
          errors={state?.fieldErrors.password}
        />
        <Button text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
