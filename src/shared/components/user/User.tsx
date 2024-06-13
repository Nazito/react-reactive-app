import React from "react";
import useAuth from "../../../features/authentication/hooks/useAuth";

const User: React.FC = () => {
  const { isAuthenticated, currentUser } = useAuth();

  return isAuthenticated ? (
    <div className="relative mt-8 mb-5 flex items-center gap-x-4 rounded-full ring-2 ring-gray-300 p-2">
      <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <svg
          className="absolute w-12 h-12 text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="text-sm leading-6">
        <p className="font-semibold text-gray-900">
          <a href="#">
            <span className="absolute inset-0"></span>
            {currentUser?.username}
          </a>
          <p className="text-sm font-semibold leading-6 text-gray-600">
            {currentUser?.email}
          </p>
        </p>
      </div>
    </div>
  ) : null;
};

export default User;
