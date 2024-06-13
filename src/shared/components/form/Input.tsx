import React, { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps {
  type?: string;
  value: string;
  name: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  name,
  placeholder,
}) => {
  const {
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(name, e.target.value);
    trigger(name);
  };

  return (
    <>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          value={value}
          type={type}
          name={name}
          id={name}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          onChange={handleChange}
        />
        {errors?.[name] && (
          <p className="mt-2 text-xs text-red-600 text-right">
            <span className="font-medium">
              {errors?.[name]?.message as string}
            </span>
          </p>
        )}
      </div>
    </>
  );
};

export default Input;
