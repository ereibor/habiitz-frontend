"use client";
import React, { ReactNode } from "react";

interface ButtonProps {
  label: string;
  color?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button = ({
  label,
  color = "bg-blue-500 hover:bg-blue-600",
  type = "button",
  onClick,
  leftIcon,
  rightIcon,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-white text-sm font-medium transition-colors shadow-sm cursor-pointer ${color}`}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}

      <span>{label}</span>

      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
};

export default Button;
