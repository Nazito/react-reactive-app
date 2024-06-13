import React from "react";
import { container } from "tsyringe";
import AuthService from "../../../core/services/AuthService";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../../../shared/components/form/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validation/loginSchema";
import { useNavigate } from "@tanstack/react-router";

interface FormValues {
  username: string;
  password: string;
  email: string;
}

const LoginForm: React.FC = () => {
  const authService = container.resolve(AuthService);
  const navigate = useNavigate();

  const methods = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
    defaultValues: {
      username: "user",
      email: "test@test.com",
      password: "password",
    },
  });

  const {
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { isValid, errors },
  } = methods;

  const formData = watch();

  const handleLogin = ({ username, password, email }: FormValues) => {
    authService.login(username, password, email).subscribe({
      next: (isLoggedIn) => {
        if (!isLoggedIn) {
          setError("root", { type: "custom", message: "Invalid credentials" });
        } else {
          clearErrors("root");
          navigate({ to: "/" });
        }
      },
      error: () => {
        setError("root", { type: "custom", message: "An error occurred" });
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-3xl font-semibold text-gray-600 mb-5">Login</p>

              <Input
                placeholder={"... Username"}
                name="username"
                value={formData.username}
              />

              <Input
                placeholder={"... Email"}
                name="email"
                value={formData.email}
              />

              <Input
                placeholder={"... Password"}
                type="password"
                name="password"
                value={formData.password}
              />

              <button
                disabled={!isValid}
                className={`${!isValid ? "bg-blue-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-500"} mt-10 mb-3 block w-full rounded-md  px-3 py-2 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                Login
              </button>

              {errors?.root && (
                <p className="mt-2 text-xs text-red-600">
                  <span className="font-medium">
                    {errors?.root?.message as string}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
