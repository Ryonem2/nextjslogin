import React from "react";
import Navbar from "../models/Navbar/components/Navbar";
import RegisterForm from "../models/Register/components/RegisterForm";

export default function login() {
  return (
    <div className="bg-sky-600 w-screen h-screen">
      <Navbar />
      <RegisterForm />
    </div>
  );
}
