import React from "react";
import Container from "../Layouts/components/Container";
import s from "../styles/login.module.css";

function RegisterForm() {
  const inputStyle = `block w-full mb-4 border-2 border-gray-300 focus:border-gray-400 rounded-xl ${s.forminputlogin}`;

  return (
    <Container style="flex justify-center items-center py-5">
      <div className="bg-white w-5/12 shadow-xl py-12 rounded">
        <h1 className="font-bold text-2xl text-gray-500 text-center mb-5">
          Register
        </h1>
        <div className="flex justify-center items-center">
          <form className="w-full px-12">
            <label className="block" htmlFor="username">
              Username
            </label>
            <input className={inputStyle} type="text" placeholder="Username" />
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className={inputStyle}
              type="password"
              placeholder="Password"
            />
            <label className="block" htmlFor="password">
              Confirm Password
            </label>
            <input
              className={inputStyle}
              type="password"
              placeholder="Password"
            />
            {/* <small className="py-1 text-red-500 text-sm">{check}</small> */}
            <input className={s.btnSubmit} type="submit" />
          </form>
        </div>
      </div>
    </Container>
  );
}

export default RegisterForm;
