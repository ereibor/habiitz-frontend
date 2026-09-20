import React, { useState } from "react";
import { LucideIcon, EyeIcon, EyeOffIcon } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: LucideIcon;
  error?: string;
  showPasswordToggle?: boolean;
}

export default function Input({
  label,
  icon: Icon,
  error,
  className = "",
  id,
  type,
  showPasswordToggle = false,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const shouldShowToggle = isPassword && showPasswordToggle;

  return (
    <div>
      {/* Label */}
      <label
        htmlFor={id}
        className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide"
      >
        {label}
      </label>

      {/* Input wrapper */}
      <div className="relative">
        {/* Left icon */}
        {Icon && (
          <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
        )}

        {/* Input */}
        <input
          id={id}
          type={isPassword && showPassword ? "text" : type}
          {...props}
          className={`w-full ${Icon ? "pl-10" : "pl-4"} ${
            shouldShowToggle ? "pr-11" : "pr-4"
          } py-3 rounded-xl border text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow ${
            error
              ? "border-red-300 bg-red-50/50"
              : "border-gray-200 bg-gray-50/50"
          } ${className}`}
        />

        {/* Password visibility button */}
        {shouldShowToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOffIcon className="w-4 h-4" />
            ) : (
              <EyeIcon className="w-4 h-4" />
            )}
          </button>
        )}
      </div>

      {/* Error message */}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
