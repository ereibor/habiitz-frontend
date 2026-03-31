"use client";
import { useRouter } from "next/navigation";

interface ButtonProps {
  label: string;
  color?: string; // Tailwind classes
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: string; // for routing
}

const Button = ({
  label,
  color = "bg-blue-500 hover:bg-blue-600",
  type = "button",
  onClick,
  href,
}: ButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`px-5 py-2 rounded-lg text-white text-sm font-medium transition-colors shadow-sm cursor-pointer ${color}`}
    >
      {label}
    </button>
  );
};

export default Button;
