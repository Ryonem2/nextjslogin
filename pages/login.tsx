import React from "react";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

export default function login() {
  return (
    <div className="bg-sky-600 w-screen h-screen">
      <Navbar />
      <LoginForm />
    </div>
  );
}
