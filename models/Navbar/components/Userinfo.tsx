import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

function Userinfo() {
  //   type Userinfo = {
  //     IsLogginging: boolean;
  //     id: number;
  //     name: string;
  //     sername: string;
  //   };
  //   const name = useRef("");
  //   const sername = useRef("");

  const name = useSelector((state: any) => {
    return state.navbar.name;
  });
  const sername = useSelector((state: any) => {
    return state.navbar.sername;
  });

  return (
    <div className="flex justify-center items-center cursor-pointer">
      <p className="inline text-gray-600 text-sm mr-2">{`Hi! ${name} ${sername} `}</p>
      <div className="inline-flex justify-center items-center">
        <Image
          className="inline"
          alt="profile"
          width="32"
          height="32"
          src="https://img.icons8.com/small/32/000000/user-male-circle.png"
        />
      </div>
    </div>
  );
}
export default Userinfo;
