import React from "react";
import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";

export default function login() {
  return (
    <div className="bg-sky-600 w-screen h-screen">
      <Navbar />
      <RegisterForm />
    </div>
  );
}
