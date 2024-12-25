import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./Button";


const Navbar = () => {
  return (
    <nav
      className="border-2 border-red-500 flexBetween max-container 
    padding-container relative z-30 py-5"
    >
      <Link href="/">
        A* {/* A* add image for A* logo */}
        {/* add image tag here time: 19:30*/}
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 
                          flexCenter cursor-pointer pb-1.5 transition-all
                          hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
          </ul>
          <div className="lg:flexCenter hidden">
              <Button
                  type="button"
                  title="Sign In"
                  icon="/user.svg"
                  variant="btn_dark_green"
              />
          </div>

          <Image
              src="/menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer lg:hidden"
          >
          </Image>

          {/* TODO implement the logic to expand this hamburger menu to display the actual menu */}
    </nav>
  );
}

export default Navbar