import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ActiveLink from "../../../Layouts/components/ActiveLink";

function NavbarLoginAndRegist() {
  const isLoging = useSelector((state: any) => {
    return state.navbar.isLogginging;
  });
  const [checkLogin, setCheckLogin] = useState("register");
  const [checkLogin2, setCheckLogin2] = useState("Login?");

  useEffect(() => {
    if (isLoging) {
      setCheckLogin("");
      setCheckLogin2("Logout");
    } else {
      setCheckLogin("register");
      setCheckLogin2("Login?");
    }
  }, [isLoging]);

  return (
    <>
      <div>
        <ActiveLink
          style="inline-block text-sm px-3 underline text-center text-gray-300"
          href="/register"
        >
          {checkLogin}
        </ActiveLink>
      </div>
      <div>
        <ActiveLink
          href="/login"
          style="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-400 border-gray-400 hover:border-transparent hover:text-white hover:bg-gray-500 lg:mt-0"
        >
          {checkLogin2}
        </ActiveLink>
      </div>
    </>
  );
}

export default NavbarLoginAndRegist;
