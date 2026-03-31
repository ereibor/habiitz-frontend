import { CalendarCheckIcon } from "lucide-react";
import Link from "next/link";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-md shadow-blue-200">
            <CalendarCheckIcon className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900 tracking-tight">
            Habiitz
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Features
          </Link>
          <Link
            href="#preview"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Preview
          </Link>
          <Link
            href="#features"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Sign In
          </Link>
          <Link
            href="#preview"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Preview
          </Link>

          <Button label="Sign Up" type="submit" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
