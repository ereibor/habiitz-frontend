"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { routes } from "@/routes";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarCheckIcon,
  MailIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen w-full flex">
      <div className="flex-1 flex flex-col bg-white">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-5 py-4 border-b border-gray-100">
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

        {/* Desktop Back Button */}
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
        <div className="flex-1 flex items-center justify-center px-5 py-12">
          <div className="w-full max-w-sm">
            <div className="mb-8">
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-1.5">
                Forgot your password?
              </h1>

              <p className="text-sm text-gray-400">
                Enter your email and we&apos;ll send you a link to reset your
                password.
              </p>
            </div>

            <form className="space-y-4">
              <Input
                type="email"
                placeholder="you@email.com"
                label="Email"
                className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow border-gray-200 bg-gray-50/50"
                icon={MailIcon}
                id="forgot-password-email"
              />

              <Button
                type="submit"
                className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Reset Link
                    <ArrowRightIcon className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-center text-sm text-gray-400 mt-6">
              Remember your password?{" "}
              <Link
                href={routes.SIGNIN}
                className="text-blue-500 hover:text-blue-600 font-semibold transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
