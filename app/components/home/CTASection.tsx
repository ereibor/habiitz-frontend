import { routes } from "@/routes";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-5 text-center">
        <div className="bg-linear-to-br from-blue-50 to bg-cyan-50/50 rounded-3xl p-10 md:p-14 border border-blue-100/60">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Start building better habits today
          </h2>
          <p className="text-gray-500 text-base mb-8 max-w-md mx-auto">
            Join thousands of people who have transformed their daily routines
            with habiitz
          </p>
          <Link
            href={routes.SIGNUP}
            className="px-8 py-4 rounded-xl bg-blue-500 text-white font-semibold text-base hover:bg-blue-600 transition-all shadow-blue-200 inline-flex items-center gap-2"
          >
            Get started - It&apos;s free
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
