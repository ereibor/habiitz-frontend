import FeatureCard from "./FeatureCard";
import { CalendarCheckIcon, BarChart3Icon, TargetIcon } from "lucide-react";

const FeatureCardData = [
  {
    icon: <CalendarCheckIcon className="w-5 h-5 text-blue-500" />,
    title: "Track Daily Habits",
    details:
      "Mark habits complete with a single tap. See your weekly grid fill up with color as you build consistency day by day.",
  },
  {
    icon: <BarChart3Icon className="w-5 h-5 text-violet-500" />,
    title: "Detailed Analytics",
    details:
      "Understand your patterns with weekly, monthly and yearly breakdowns. know exactly where you're improving.",
  },
  {
    icon: <TargetIcon className="w-5 h-5 text-amber-500" />,
    title: "Stay Motivated",
    details:
      "Streaks, completion rates, and progress bars keep you accountable. Break bad habits and build good ones. ",
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50/60">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Built for people who wants results
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Simple tools that help you stay consistent and see real progress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FeatureCardData.map((card) => (
            <FeatureCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              details={card.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
