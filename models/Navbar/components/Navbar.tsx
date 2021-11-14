import React, { useEffect, useRef } from "react";
import NavbarItem from "./NavbarItem";
import NavbarLoginAndRegist from "./NavbarLoginAndRegist";
import NavbarLayout from "../../../Layouts/components/NavbarLayout";
import Userinfo from "./Userinfo";

function Navbar() {
  return (
    <NavbarLayout>
      <NavbarItem />
      <Userinfo />
      <NavbarLoginAndRegist />
    </NavbarLayout>
  );
}

export default Navbar;
