
"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import toast from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Sign In successful!");
      console.log(data);
    }

    if (error) {
      toast.error(error.message || "Something went wrong!");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl font-bold text-red-700 mb-2">
        সাইন ইন
      </h2>

      <Form
        className="flex w-md flex-col gap-2"
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>ইমেইল</Label>

          <Input
            placeholder="Email"
            className="w-md"
          />

          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="password"
          type="password"
          minLength={8}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }

            return null;
          }}
        >
          <Label>পাসওয়ার্ড</Label>

          <Input
            placeholder="Password"
            className="w-md"
          />

          <FieldError />
        </TextField>

        <Button
          type="submit"
          className="w-md text-white bg-red-700 mt-3"
        >
          সাইন ইন করুন
        </Button>
      </Form>
    </div>
  );
};

export default SignInPage;

