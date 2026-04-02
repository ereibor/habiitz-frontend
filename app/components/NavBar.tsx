import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";
import { routes } from "@/routes";

const navItems = [
  { name: "Feature", href: routes.features },
  { name: "Preview", href: routes.preview },
  { name: "Sign In", href: routes.signin },
];

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}
          <Button label="Sign Up" type="submit" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
