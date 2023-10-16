"use client";
import Link from "next/link";
import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userError, setUserError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      setUserError("Username nya isi dulu");
    } else {
      setUserError("");
      localStorage.setItem("username", username);
    }
    if (!validateEmail(email)) {
      setEmailError("Alamat email tidak valid.");
    } else {
      setEmailError("");
      localStorage.setItem("email", email);
    }
    if (password.trim() === "") {
      setPasswordError("isi dulu Passwordnya");
    } else {
      setPasswordError("");
      localStorage.setItem("password", password);
    }

    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      return;
    } else {
      window.location.href = "/from/login";
    }
  };

  const validateEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="mt-11 md:mt-3 px-16 flex gap-6 items-center">
          <picture>
            <img src="/public/icon.png" alt="" className="rounded-full w-14" />
          </picture>
          <p className="text-black text-xl font-bold">Lopercourse</p>
        </div>
        <form className="space-y-4  px-10 md:px-0  md:space-y-6 mt-6 py-3 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-bold text-3xl">buat akunmu</h1>
            <p className="text-gray-500 text-xl text-center">
              ayo mulai berkolaburasi bersama kami
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                name="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="text"
                className="bg-gray-50 border-2 hover:shadow-md border-gray-500 focus:border-none  outline-none focus:ring-2 focus:ring-dark text-gray-900 sm:text-sm rounded-xl block w-[45vh] md:w-[50vh] h-14 p-2.5"
                placeholder="Enter Your Name"
              />
              {userError && (
                <p className="text-pink-600 font-medium text-sm">{userError}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="bg-gray-50 border-2 hover:shadow-md border-gray-500 focus:border-none  outline-none focus:ring-2 focus:ring-dark text-gray-900 sm:text-sm rounded-xl block w-[45vh] md:w-[50vh] h-14 p-2.5"
                placeholder="Enter Your Email"
              />
              {emailError && (
                <p className="text-pink-600 font-medium text-sm">
                  {emailError}
                </p>
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Enter Your Password"
                className="bg-gray-50 border-2 hover:shadow-md border-gray-500 focus:border-none outline-none focus:ring-2 focus:ring-dark text-gray-900 sm:text-sm rounded-xl block w-[45vh] md:w-[50vh] h-14 p-2.5"
              />
              {passwordError && (
                <p className="text-pink-600 font-medium text-sm">
                  {passwordError}
                </p>
              )}
            </div>
            <div className="flex gap-3 left-0 pl-3 justify-start w-full items-center">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="w-4 h-4 accent-dark text-white "
              />
              <label htmlFor="" className="font-medium text-gray-900 ">
                I accept the{" "}
                <a className="font-semibold text-black" href="#">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <button
              onClick={handleSignup}
              className="w-[40vh] md:w-[50vh] h-14 bg-dark hover:bg hover:bg-white hover:ring-2 hover:ring-dark duration-150 transition focus:outline-none font-medium rounded-full text-lg px-5 py-2.5 text-center text-white hover:text hover:text-dark"
            >
              Sign Up
            </button>

            <p className="text-base font-medium">
              Do have an account?
              <Link
                href="/from/login"
                className="font-bold hover:underline text-dark"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
