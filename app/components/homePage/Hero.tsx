import Link from "next/link";
import { routes } from "@/routes";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon,
  TrendingUpIcon,
  ZapIcon,
} from "lucide-react";
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
                className="px-7 py-3.5 rounded-xl border border-gray-200 text-gray-600 font-medium text-sm hover:border-gray-300 hover:bg-gray-50 transition-all"
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

          {/* Right Copy */}

          <div className="flex-1 relative w-full max-w-md lg:max-w-lg">
            <div className="relative aspect-square">
              {/* Background blobs */}
              <div className="absolute inset-0">
                <div className="absolute top-[10%] left-[15%] w-32 h-32 rounded-full bg-orange-300/40 blur-sm" />
                <div className="absolute top-[5%] right-[10%] w-40 h-40 rounded-full bg-violet-400/30 blur-sm" />
                <div className="absolute bottom-[20%] left-[10%] w-36 h-36 rounded-full bg-cyan-400/35 blur-sm" />
                <div className="absolute bottom-[10%] right-[15%] w-28 h-28 rounded-full bg-blue-400/30 blur-sm" />
                <div className="absolute top-[40%] left-[40%] w-24 h-24 rounded-full bg-green-300/35 blur-sm" />
              </div>

              {/* Floating habit cards */}
              <div className="absolute top-[12%] left-[8%] bg-white rounded-xl shadow-lg shadow-gray-200/60 p-3 px-4 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-400 flex items-center justify-center">
                  <CheckCircleIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">Read</p>
                  <p className="text-[10px] text-gray-400">Completed ✓ </p>
                </div>
              </div>

              <div className="absolute top-[35%] right-[5%] bg-white rounded-xl shadow-lg shadow-gray-200/60 p-3 px-4 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-violet-500 flex items-center justify-center">
                  <ZapIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">Workout</p>
                  <p className="text-[10px] text-gray-400">5 day streak</p>
                </div>
              </div>

              <div className="absolute bottom-[25%] left-[5%] bg-white rounded-xl shadow-lg shadow-gray-200/60 p-3 px-4 flex items-center gap-2.5 ">
                <div className="w-8 h-8 rounded-lg bg-cyan-400 flex items-center justify-center">
                  <SparklesIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">Meditate</p>
                  <p className="text-[10px] text-gray-400">7/7 this week</p>
                </div>
              </div>

              {/* Central stat card */}
              <div className="absolute top-[45%] left-[28%] -translate-y-1/2 bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-5 w-48">
                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                  This Week
                </p>
                <p className="text-3xl font-extrabold text-gray-900">87%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUpIcon className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-xs text-green-600 font-medium">
                    +12% from last week
                  </span>
                </div>
                <div className="mt-3 w-full h-2 bg-gray-100 rounded-full overflow-hidden ">
                  <div className="h-full w-[87%] bg-linear-to-r from-blue-500 to-sky-400 rounded-full " />
                </div>
              </div>

              {/* Sparkle decoration */}
              <SparklesIcon className="absolute top-[8%] right-[30%] w-2 h-2 text-cyan-300" />
              <SparklesIcon className="absolute top-[60%] right-[8%] w-2 h-2 text-amber-300" />
              <SparklesIcon className="absolute bottom-[12%] left-[35%] w-4 h-4 text-blue-300" />
              <SparklesIcon className="absolute top-[25%] left-[45%] w-3 h-3 text-violet-300" />
              <SparklesIcon className="absolute bottom-[35%] right-[30%] w-4 h-4 text-green-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
