import React, { useState } from "react";
import Container from "../../../Layouts/components/Container";
import s from "../styles/login.module.css";
import axios from "axios";

function RegisterForm() {
  const inputStyle = `block w-full mb-4 border-2 border-gray-300 focus:border-gray-400 rounded-xl ${s.forminputlogin}`;
  const [checkPassword, setCheckPassword] = useState("");
  const [checkPassword2, setCheckPassword2] = useState("");
  const [name, setName] = useState("");
  const [sername, setSername] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const register = async (e: any) => {
    e.preventDefault();
    try {
      if (password !== password2) {
        setCheckPassword("Your Password not match");
        return;
      }

      const { data } = await axios.post("http://localhost:8080/registerUser", {
        name,
        sername,
        username,
        password,
      });
      if (data) {
        setName("");
        setSername("");
        setUsername("");
        setPassword("");
        setPassword2("");
        setCheckPassword("");
        setCheckPassword2("You have registered");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container style="flex justify-center items-center py-5">
      <div className="bg-white w-5/12 shadow-xl py-12 rounded">
        <h1 className="font-bold text-2xl text-gray-500 text-center mb-5">
          Register
        </h1>
        <div className="flex justify-center items-center">
          <form className="w-full px-12" onSubmit={register}>
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              className={inputStyle}
              type="text"
              placeholder="Name"
              onChange={(e: any) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <label className="block" htmlFor="sername">
              Sername
            </label>
            <input
              className={inputStyle}
              type="text"
              placeholder="Sername"
              onChange={(e: any) => {
                setSername(e.target.value);
              }}
              value={sername}
            />
            <label className="block" htmlFor="username">
              Username
            </label>
            <input
              className={inputStyle}
              type="text"
              placeholder="Username"
              onChange={(e: any) => {
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
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <label className="block" htmlFor="Cpassword">
              Confirm Password
            </label>
            <input
              className={inputStyle}
              type="password"
              placeholder="Confirm Password"
              onChange={(e: any) => {
                setPassword2(e.target.value);
              }}
              value={password2}
            />
            <small className="block pb-1 pt-0 text-red-500 text-sm">
              {checkPassword}
            </small>
            <small className="block pb-1 pt-0 text-green-500 text-sm">
              {checkPassword2}
            </small>
            <input
              className="mx-auto h-9 w-20 transition-all text-blue-400 border-2 border-blue-400 hover:text-white hover:bg-blue-500 rounded-xl"
              type="submit"
            />
          </form>
        </div>
      </div>
    </Container>
  );
}

export default RegisterForm;
