import React from "react";
import ActiveLink from "../../../Layouts/components/ActiveLink";

function NavbarItem() {
  return (
    <div className="text-sm lg:flex-grow">
      <ActiveLink
        href="/"
        style="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-600 mr-4"
      >
        Home
      </ActiveLink>
      <ActiveLink
        href="/"
        style="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-600 mr-4"
      >
        Nav1
      </ActiveLink>
      <ActiveLink
        href="/"
        style="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-600 mr-4"
      >
        Nav2
      </ActiveLink>
    </div>
  );
}

export default NavbarItem;
