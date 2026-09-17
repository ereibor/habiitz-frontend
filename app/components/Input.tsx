import React, { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  label?: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor="signup-name"
          className="block text-sm font-semibold text-gray-600 mb-1.5 uppercase tracking-wide"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input {...props} />
      </div>
    </div>
  );
};

export default Input;
