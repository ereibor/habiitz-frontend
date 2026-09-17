import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`flex items-center justify-center cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
