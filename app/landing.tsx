/* eslint-disable @next/next/no-img-element */
"use client";
import Navleading from "@/app/components/navbarlanding";
import React, { useEffect, useState } from "react";
import Button from "./components/button";
import LandingAPi from "@/api/landing.json";
import Images from "./components/image";
import Grid from "./components/gridlanding";
import FooterLanding from "./components/footerlanding";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import useDisclosure from "@/hook/useDisclosure";
const Landing = () => {
  const { disclosure, popup } = useDisclosure();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 10 });

    return animation.stop;
  }, []);

  return (
    <>
      <Navleading />
      <motion.div
        className="fixed z-50 top-0 left-0 right-0 h-1 bg-dark transform-none"
        style={{ scaleX }}
      />
      <main className="w-full scroll-smooth overflow-x-hidden">
        <section className=" transition-all duration-300 ease-in pt-[30vh] h-screen relative overflow-hidden">
          <span className="text-dark text-center">
            <AnimatePresence>
              {disclosure ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  key="content"
                >
                  <span className="w-[80%] md:w-[50%] h-[100px] gap-5 mx-auto flex justify-center items-center text-center flex-col">
                    <h1 className="text-6xl">Lopercourse</h1>
                    <p className="text-xl">
                      Website ini di buat sejak 2023. dikembangkan oleh tim
                      developer, dan website ini bertujuan untuk membuat course
                      developer di Indonesia.
                    </p>
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 10, x: 20 }}
                  exit={{ opacity: 0, x: 20 }}
                  key="content"
                >
                  <div className="md:w-[50%] gap-1 h-[100px] mx-auto flex justify-center items-center text-center flex-col">
                    <h1 className="text-4xl md:text-6xl">Raih Mimpi Kalian</h1>
                    <p className="text-4xl text-center">
                      Bersama Kami
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </span>
          <Grid />
          <div className="flex items-center h-screen absolute top-[35%] left-0 right-0 justify-center">
            <button
              onClick={popup}
              className=" animate-bounce duration-1000 flex justify-center items-center  bg-white border border-dark rounded-full w-[50px] z-40 h-[50px]"
            >
              <AnimatePresence>
                {disclosure ? (
                  <motion.div
                    initial={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 10, x: 0, rotate: 180 }}
                    exit={{ opacity: 0, x: 0, rotateX: 20 }}
                    key="content"
                  >
                    <p className="font-bold text-2xl pb-1">x</p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 10, rotate: 0 }}
                    exit={{ opacity: 0, rotateX: 180 }}
                    key="content"
                  >
                    <p className="font-bold text-2xl">i</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
          <div className="bgcolor z-30 absolute bottom-0 left-0 right-0"></div>
        </section>

        <section className="h-screen z-20   flex flex-col md:flex-row md:flex justify-around mx-auto max-w-7xl items-center relative top-0 ">
          <picture className="grid grid-cols-3 relative md:grid-cols-3 items-center gap-4">
            {LandingAPi.map((i, index) => (
              <img
                key={index}
                src={i.src}
                draggable="false"
                className={i.className}
                alt={i.alt}
              />
            ))}
          </picture>
          <div className="flex flex-col items-center gap-3">
            <h1 className="font-semibold text-center md:text-start text-3xl">
              Mengunakan Framework Terbaik
            </h1>
            <p className="font-medium w-[80%] text-center text-lg">
              kami gunakan framework terbaru agar lebih mudah di pahami
            </p>
            <Button title="Sign Up" custom="signup" />
          </div>
        </section>
        <section className="flex px-4 md:px-0 md:flex-row my-10 md:my-0 flex-col-reverse  items-center  mx-auto h-screen max-w-7xl text-dark">
          <div className="grid items-center gap-4">
            <h1 className="font-semibold text-3xl">Google With Us</h1>
            <p className="font-medium w-[80%] text-lg">
              Google sudah berkontribusi dengan kami agar mepermudahkan penguna
              lopercourse untuk menuju google developer
            </p>
            <Button title="Login" custom="login" />
          </div>
          <span className="flex gap-5 md:pb-0 pb-16">
            <aside className=" translate-y-8">
              <Images
                status="googleimg"
                src="https://images.unsplash.com/photo-1633632799503-c8cff57c17f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29vZ2xlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              />
            </aside>
            <Images
              status="googleimg"
              src="https://images.unsplash.com/photo-1600367163359-d51d40bcb5f8?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29vZ2xlfGVufDB8fDB8fHww&w=800"
            />
            <aside className=" -translate-y-8">
              <Images
                status="googleimg"
                src="https://images.unsplash.com/photo-1611503568137-dae5f2902cc1?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdvb2dsZXxlbnwwfHwwfHx8MA%3D%3D&w=800"
              />
            </aside>
          </span>
        </section>
        <FooterLanding />
      </main>
    </>
  );
};
export default Landing;
