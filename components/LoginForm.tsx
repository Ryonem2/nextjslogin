import React from "react";
import Container from "../Layouts/components/Container";

function LoginForm() {
  return (
    <Container style="flex justify-center items-center py-5">
      <div className="bg-white w-5/12 shadow-xl py-12 rounded">
        <h1 className="font-bold text-2xl text-gray-500 text-center mb-5">
          Login
        </h1>
        <div className="flex justify-center items-center">
          <form className="w-full px-12">
            <label className="block" htmlFor="username">
              Username
            </label>
            <input
              className="block w-full mb-4 border-2 border-gray-300 focus:border-gray-400 rounded-xl"
              type="text"
              placeholder="Username"
            />
            <label className="block" htmlFor="password">
              Password
            </label>
            <input className="block" type="password" placeholder="Password" />
            <small className="py-1 text-red-500 text-sm">
              Username or password is incorrect
            </small>
            <input className="block" type="submit" />
          </form>
        </div>
      </div>
    </Container>
  );
}

export default LoginForm;
