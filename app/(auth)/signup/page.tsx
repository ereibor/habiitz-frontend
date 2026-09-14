"use client";
import Button from "@/app/components/Button";
import { ArrowLeftIcon, CalendarCheckIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full flex">
      <div className="flex-1 flex flex-col bg-white">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-5 py-4 border-b border-gray-100 ">
          <Button
            onClick={() => router.back()}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-linear-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <CalendarCheckIcon className="w-3.5 h-3.5 text-white" />
            </div>

            <span className="text-sm font-bold text-gray-900">Habiitz</span>
          </div>
          <div className="w-8" />
        </div>
        {/* Desktop back button */}

        <div className="hidden lg:block px-8 pt-8">
          <Button
            onClick={() => router.back()}
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back
          </Button>
        </div>

        {/* Form */}
      </div>
    </div>
  );
};

export default SignUp;
