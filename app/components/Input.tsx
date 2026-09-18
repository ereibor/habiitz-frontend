import React, { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  label?: string;
  icon?: React.ReactNode;
}

const Input = ({ label, icon, id, ...props }: InputProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-gray-600 mb-1.5 uppercase tracking-wide"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
            {icon}
          </div>
        )}
        <input id={id} {...props} />
      </div>
    </div>
  );
};

export default Input;
