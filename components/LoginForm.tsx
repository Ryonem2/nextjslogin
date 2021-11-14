import React, { useState } from "react";
import Container from "../Layouts/components/Container";
import s from "../styles/login.module.css";
import axios from "axios";

function LoginForm() {
  type loginReturnType = {
    isTrue: boolean;
  };

  const [check, setCheck] = useState("");
  const [checkDone, setCheckDone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState(false);
  const inputStyle = `block w-full mb-4 border-2 border-gray-300 focus:border-gray-400 rounded-2xl ${s.forminputlogin}`;

  const checkAuth = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8080/loginUser", {
        username,
        password,
      });
      if (data) {
        setCheckDone("You are logged in");
        setUsername("");
        setPassword("");
      } else {
        setCheck("Your username or password is incorrect");
        setPassword("");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container style="flex justify-center items-center py-5">
      <div className="bg-white w-5/12 shadow-xl py-12 rounded">
        <h1 className="font-bold text-2xl text-gray-500 text-center mb-5">
          Login
        </h1>
        <div className="flex justify-center items-center">
          <form className="w-full px-12" onSubmit={checkAuth}>
            <label className="block" htmlFor="username">
              Username
            </label>
            <input
              className={inputStyle}
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
            />
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className={inputStyle}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <small className="block mt-0 mb-3 py-0 text-red-500 text-sm">
              {check}
            </small>
            <small className="block mt-0 mb-3 py-0 text-green-500 text-sm">
              {checkDone}
            </small>
            <input className={s.btnSubmit} type="submit" />
          </form>
        </div>
      </div>
    </Container>
  );
}

export default LoginForm;
