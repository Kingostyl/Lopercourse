"use client";
import Link from "next/link";
import React, { useState } from "react";
import useLogin from "@/hook/useLogin";
import { useRouter } from "next/router";

const Login = () => {
  const { email, password, error, handleLogin, setEmail, setPassword, setError } =
    useLogin();

  return (
    <>
      <div className="flex flex-col">
        <div className="mt-11 px-16 flex gap-4 items-center">
          <picture>
            <img
              src="../assets/img/icon.png"
              alt=""
              className="rounded-full w-14"
            />
          </picture>
          <p className="text-black text-xl font-bold">Lopercourse</p>
        </div>
        <form className="space-y-4 md:space-y-6 mt-16 px-8 md:px-0 py-3 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              Hai apa kabar!
            </h1>
            <p className="text-gray-500 text-base md:text-xl text-center">
              Selamat datang di LoperCourse
            </p>
          </div>
          <div className=" items-center justify-center flex flex-col gap-7">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border-2 hover:shadow-md border-gray-500 focus:border-none outline-none focus:ring-2 focus:ring-dark text-gray-900 sm:text-sm rounded-xl block w-[45vh] md:w-[50vh] h-14 p-2.5"
                placeholder="name@company.com"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="bg-gray-50 border-2 md:shadow-md border-gray-500 focus:border-none outline-none focus:ring-2 focus:ring-dark text-gray-900 sm:text-sm rounded-xl block w-[45vh] md:w-[50vh] h-14 p-2.5"
              />
            </div>
            <div className="flex justify-end w-full px-4">
              <a
                href="./forgot-password.html"
                className="text-lg font-medium hover:underline"
              >
                Lupa password?
              </a>
            </div>
            {error && (
                <p className="text-pink-600 font-medium text-sm">{error}</p>
              )}
            <button
              type="submit"
              className="w-[40vh] h-14 bg-dark hover:bg hover:bg-white hover:ring-2 hover:ring-dark duration-150 transition focus:outline-none font-medium rounded-full text-lg px-5 py-2.5 text-center text-white hover:text hover:text-dark"
              onClick={handleLogin}
            >
              Sign in
            </button>
            <p className="text-base font-medium">
              Don’t have an account?
              <Link
                href="/from/signup"
                className="font-bold hover:underline text-dark"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
