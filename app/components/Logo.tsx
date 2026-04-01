import { CalendarCheckIcon } from "lucide-react";

interface LogoProps {
  className?: string;
  iconWrapperClassName?: string;
  iconClassName?: string;
  textClassName?: string;
}

const Logo = ({
  className = "",
  iconWrapperClassName = "",
  iconClassName = "",
  textClassName = "",
}: LogoProps) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div
        className={`w-9 h-9 rounded-xl bg-linear-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-md shadow-blue-200 ${iconWrapperClassName}`}
      >
        <CalendarCheckIcon
          className={`w-4.5 h-4.5 text-white ${iconClassName}`}
        />
      </div>

      <span
        className={`text-lg font-bold text-gray-900 tracking-tight ${textClassName}`}
      >
        Habiitz
      </span>
    </div>
  );
};

export default Logo;
