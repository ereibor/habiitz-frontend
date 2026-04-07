import Link from "next/link";
import { routes } from "@/routes";
import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import HeroBenefits from "./HeroBenefits";

const heroBenefits = [
  {
    icon: <CheckCircleIcon className="w-4 h-4 text-green-400" />,
    title: "free forever plan",
  },
  {
    icon: <CheckCircleIcon className="w-4 h-4 text-green-400" />,
    title: "No setup required",
  },
  {
    icon: <CheckCircleIcon className="w-4 h-4 text-green-400" />,
    title: "Works on all devices",
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-gray-50/80 to white">
      <div className="max-w-6xl mx-auto px-5 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* left copy      */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-5">
              Small habits.{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
                Big results
              </span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-md">
              Stay consistent, break bad patterns, and watch your progress grow
              - all in one place
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Link
                href={routes.SIGNUP}
                className="px-7 py-3.5 rounded-xl bg-blue-500 text-white font-semibold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
              >
                Get Started
                <ArrowRightIcon />
              </Link>
              <Link
                href={routes.FEATURES}
                className="px-7 py-3.5 rounded-xl border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50 transition-all"
              >
                Learn More
              </Link>
            </div>
            <div className="flex items-center gap-5 text-sm text-gray-400">
              {heroBenefits.map((benefit) => (
                <HeroBenefits
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
