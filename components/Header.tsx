import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import UserDropDown from "./UserDropDown";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">

        {/* Logo only */}
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Trado Logo"
            width={140}
            height={32}
            className="h-8"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        {/* User menu */}
        <UserDropDown />

      </div>
    </header>
  );
};

export default Header;