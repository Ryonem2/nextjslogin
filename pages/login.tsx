import React from "react";
import Navbar from "../models/Navbar/components/Navbar";
import LoginForm from "../models/Login/components/LoginForm";

export default function login() {
  return (
    <div className="bg-sky-600 w-screen h-screen">
      <Navbar />
      <LoginForm />
    </div>
  );
}
