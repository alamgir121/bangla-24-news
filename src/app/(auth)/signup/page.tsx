"use client";
import { authClient } from "@/lib/auth-client";
import {

    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";

const SignUpPage = () => {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};

        formData.forEach((value, key) => {
            data[key] = value.toString();
        });


        const { data: signUp, error } = await authClient.signUp.email({
            name: data.name, // required, The name of the user.
            email: data.email, // required, The email address of the user.
            password: data.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
            image: data.image, // An optional profile image of the user.
            callbackURL: "/", // An optional URL to redirect to after the user signs up.
        });

    };
    return (

        <div className="flex flex-col items-center justify-center mt-5">
            <h2 className="text-2xl font-bold text-red-700">সাইন আপ</h2>

            <Form className="w-md" onSubmit={onSubmit}>
                <Fieldset className="fieldset rounded-box w-md">
                    <FieldGroup>

                        {/* Name */}
                        <TextField

                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label className="label">নাম</Label>
                            <Input
                                className="input w-md"

                            />
                            <FieldError />
                        </TextField>

                        {/* Image URL */}
                        <TextField
                            name="image"
                            type="url"

                        >
                            <Label className="label">ImageURL</Label>
                            <Input
                                className="input w-md"

                            />
                            <FieldError />
                        </TextField>

                        {/* Email */}
                        <TextField

                            name="email"
                            type="email"
                        >
                            <Label className="label">ইমেইল</Label>
                            <Input
                                className="input w-md"

                            />
                            <FieldError />
                        </TextField>

                        {/* Password */}
                        <TextField
                            name="password"
                            type="password"
                        >
                            <Label className="label">পাসওয়ার্ড</Label>
                            <Input
                                className="input w-md"

                            />
                            <FieldError />
                        </TextField>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn text-white bg-red-700 mt-4"
                        >
                            সাইন আপ করুন
                        </button>

                    </FieldGroup>
                </Fieldset>
            </Form>
        </div>


    );
};

export default SignUpPage;