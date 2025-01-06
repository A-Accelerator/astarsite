"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (key: string | null) => {
    setDropdownOpen(dropdownOpen === key ? null : key);
  };

  return (
    <nav
      className="border-2 flexBetween max-container 
      padding-container relative z-30 py-5"
    >
      <Link href="/">
        {/* <Image
          src="/image.png"
          alt="logo"
          width={10}
          height={10}
        /> */}
        <div>A*</div>
      </Link>
      <ul className="hidden h-full gap-8 lg:flex">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className="relative flexCenter cursor-pointer pb-1.5"
            onMouseEnter={() => toggleDropdown(link.key)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <div className="flex items-center">
              <Link
                href={link.href}
                className="regular-16 text-gray-50 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
              {link.children && (
                <span className="ml-2 text-sm text-gray-50">
                  ▼ {/* Arrow icon */}
                </span>
              )}
            </div>
            {link.children && (
              <div
                className={`absolute top-full left-0 mt-2 w-48 rounded-md bg-white p-2 shadow-lg ${
                  dropdownOpen === link.key ? "block" : "hidden"
                }`}
              >
                {link.children.map((child) => (
                  <Link
                    href={child.href}
                    key={child.key}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      {/* <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Sign In"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div> */}
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
      {/* TODO: Implement hamburger menu logic */}
    </nav>
  );
};

export default Navbar;