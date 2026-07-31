import { useState } from "react";
import { NavLink } from "react-router";
import logo from "../../assets/Images/Logo.jpg"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Schools", href: "/schools" },
  { label: "Admissions", href: "/admissions" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 sm:px-6 lg:px-[82px] lg:py-[14px]">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img src={logo} alt="Remilekun Legacy Schools" className="h-14 w-auto lg:h-[72px]" />
        </a>

        {/* Desktop nav links + CTA */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href} className="flex flex-col items-center gap-1">
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    `font-lato text-xl transition-colors hover:text-[#4caf50] ${
                      isActive ? "text-[#4caf50]" : "text-[#3a3a3a]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && <span className="mt-1 block h-[2px] w-7 bg-[#4caf50]" />}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink
            to="/contact"
            className="rounded px-4 py-2 font-nunito text-lg text-white bg-[#4caf50] transition-colors hover:bg-[#419a45]"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-[#3a3a3a] transition-transform ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`h-0.5 w-6 bg-[#3a3a3a] transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-[#3a3a3a] transition-transform ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 border-t border-gray-100 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-lato text-lg ${isActive ? "text-[#4caf50]" : "text-[#3a3a3a]"}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-block rounded px-4 py-2 font-nunito text-white bg-[#4caf50]"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}