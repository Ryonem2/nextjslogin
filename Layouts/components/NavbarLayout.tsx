import React from "react";
type children = {
  children: any;
};

function NavbarLayout({ children }: children) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-md">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auhref">
        {children}
      </div>
    </nav>
  );
}

export default NavbarLayout;
