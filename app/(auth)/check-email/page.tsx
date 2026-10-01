"use client";

import Button from "@/app/components/Button";
import { routes } from "@/routes";
import { ArrowLeftIcon, CalendarCheckIcon, MailCheckIcon } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const CheckEmail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "your email address";

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

        {/* Content */}
        <div className="flex-1 flex items-center justify-center px-5 py-12">
          <div className="w-full max-w-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-6">
              <MailCheckIcon className="w-7 h-7 text-blue-500" />
            </div>

            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-2">
              Check your email
            </h1>

            <p className="text-sm text-gray-400 leading-relaxed">
              We sent a password reset link to{" "}
              <span className="font-medium text-gray-600">{email}</span>. Check
              your inbox and follow the instructions to reset your password.
            </p>

            <Button
              type="button"
              className="w-full mt-8 py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors"
            >
              Open Email App
            </Button>

            <p className="text-sm text-gray-400 mt-6">
              Didn&apos;t receive the email?{" "}
              <button
                type="button"
                className="text-blue-500 hover:text-blue-600 font-semibold transition-colors"
              >
                Resend email
              </button>
            </p>

            <p className="text-sm text-gray-400 mt-4">
              <Link
                href={routes.SIGNIN}
                className="text-blue-500 hover:text-blue-600 font-semibold transition-colors"
              >
                Back to sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
