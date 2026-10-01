"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import GoogleIcon from "@/helpers/googleIcon";
import { routes } from "@/routes";
import {
  ArrowLeftIcon,
  CalendarCheckIcon,
  CheckCircleIcon,
  LockIcon,
  MailIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
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
        <div className="flex-1 flex items-center justify-center px-5 py-12">
          <div className="w-full max-w-sm">
            <div className="mb-8">
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-1.5">
                Welcome back
              </h1>
              <p className="text-sm text-gray-400">
                Sign in to your account to continue
              </p>
            </div>

            <form className="space-y-4">
              <Input
                type="email"
                placeholder="you@email.com"
                label="Email"
                className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow border-gray-200 bg-gray-50/50"
                icon={MailIcon}
                id="signup-email"
              />
              <Input
                type="password"
                placeholder="Password"
                label="PASSWORD"
                className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow border-gray-200 bg-gray-50/50"
                icon={LockIcon}
                id="signup-password"
                showPasswordToggle
              />

              <div className="flex items-center justify-end">
                <Link
                  className="text-blue-500 hover:text-blue-600 text-xs transition-colors"
                  href={routes.FORGOT_PASSWORD}
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In
                    <CheckCircleIcon className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>

            {/* Divider */}

            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-gray-300">or</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* Social Signup */}

            <Button className="flex items-center justify-content-center gap-2.5 w-full py-3 border border-gray-300 hover:bg-gray-50 text-gray-600 font-medium rounded-xl transition-colors">
              <GoogleIcon />
              Continue with Google
            </Button>

            {/* Login link */}
            <p className="text-center text-sm text-gray-400 mt-6">
              Don&apos;t have an account?{" "}
              <Link
                className="text-blue-500 hover:text-blue-600 font-semibold transition-colors"
                href={routes.SIGNUP}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
