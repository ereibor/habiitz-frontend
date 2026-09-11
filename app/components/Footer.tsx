import { routes } from "@/routes";
import { CalendarCheckIcon } from "lucide-react";
import Link from "next/link";

const footerItems = [
  {
    name: "Features",
    href: routes.FEATURES,
  },
  { name: "Preview", href: routes.PREVIEW },
  { name: "Privacy", href: routes.PREVIEW },
  { name: "Terms", href: routes.PREVIEW },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <CalendarCheckIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-base font-bold text-white">Habiitz</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            {footerItems.map((item) => (
              <Link href={item.href} key={item.name}>
                {item.name}
              </Link>
            ))}
          </div>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Habiitz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
