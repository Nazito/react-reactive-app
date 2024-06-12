import React, { useState } from "react";
import { container } from "tsyringe";
import AuthService from "../../../core/services/AuthService";

const LoginForm: React.FC = () => {
  const authService = container.resolve(AuthService);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    authService.login(username, password);
  };

  return (
    <div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-3xl font-semibold text-gray-600 mb-5">Login</p>

            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                value={username}
                type="text"
                name="username"
                id="username"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="... Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                value={password}
                type="password"
                name="password"
                id="password"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="... Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              onClick={handleLogin}
              className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
