import React, { ComponentProps, ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
  icon?: LucideIcon;
  error?: string;
  rightElement?: ReactNode;
}

export default function Input({
  label,
  icon: Icon,
  error,
  rightElement,
  className = "",
  id,
  ...props
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide"
      >
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
        )}

        <input
          id={id}
          {...props}
          className={`w-full ${
            Icon ? "pl-10" : "pl-4"
          } ${rightElement ? "pr-11" : "pr-4"} py-3 rounded-xl border text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow ${
            error
              ? "border-red-300 bg-red-50/50"
              : "border-gray-200 bg-gray-50/50"
          } ${className}`}
        />

        {rightElement && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
