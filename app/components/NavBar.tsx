import Link from "next/link";
import Logo from "./Logo";
import { routes } from "@/routes";

const navItems = [
  { name: "Feature", href: routes.FEATURES },
  { name: "Preview", href: routes.PREVIEW },
  { name: "Sign In", href: routes.SIGNIN },
];

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" aria-label="Homepage">
            <Logo />
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href={routes.SIGNUP}
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-white text-sm font-medium bg-blue-500 hover:bg-blue-600"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
