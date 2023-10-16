/* eslint-disable @next/next/no-img-element */
"use client";
import Navleading from "@/app/components/navbarlanding";
import React, { useEffect, useRef, useState } from "react";
import Button from "./components/button";
import LandingAPi from "@/api/landing.json";
import Images from "./components/image";
import FooterLanding from "./components/footerlanding";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

const Landing = () => {
  const [swiperHeight, setSwiperHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSwiperHeight(window.innerHeight);
    }

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setSwiperHeight(window.innerHeight);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <Navleading />
      <main className="w-full  scroll-smooth overflow-x-hidden">
        <Swiper
          direction={"vertical"}
          mousewheel={true}
          style={{ height: swiperHeight }}
          modules={[Mousewheel]}
          className="mySwiper"
          speed={1000}
        >
          <SwiperSlide>
            <section className="bg-slate-950 pt-[30vh] h-screen relative overflow-hidden">
              <span className="text-white text-center ">
                <p className=" text-6xl">Raih Mimpi Kalian </p>
                <p className="text-4xl text-center">Bersama Kami</p>
              </span>
              <div className="grid grid-cols-2 h-auto -mx-52 absolute bottom-0 gap-32 z-10 items-end overflow-hidden">
                <div className="grid grid-cols-3 items-end gap-5">
                  <Images
                    src="https://images.unsplash.com/photo-1633113087654-c49c686c2cdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
                    status="landing-grid"
                  />
                  <Images
                    src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvdXJzZSUyMGNvZGV8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=800&q=60"
                    status="landing-grid2"
                  />
                  <Images
                    src="https://images.unsplash.com/photo-1597239451147-f163967b8581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
                    status="landing-grid3"
                  />
                </div>
                <div className="grid grid-cols-3 items-end gap-5">
                  <Images
                    src="https://images.unsplash.com/photo-1538652116325-8f5fa30fefff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2dyYW1taW5nfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    status="landing-grid3"
                  />
                  <Images
                    src="https://images.unsplash.com/photo-1580894906475-403276d3942d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvdXJzZSUyMGNvZGV8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=800&q=60"
                    status="landing-grid2"
                  />
                  <Images
                    src="https://images.unsplash.com/photo-1658086351750-1ec43149a713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2865&q=80"
                    status="landing-grid"
                  />
                </div>
              </div>
              <div className="flex items-center h-screen absolute top-[35%] left-0 right-0 justify-center">
                <button className=" animate-bounce duration-1000 flex justify-center items-center  bg-white rounded-full w-[50px] z-40 h-[50px]">
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 24 24"
                    fill="#121212"
                  >
                    <path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path>
                  </svg>
                </button>
              </div>
              <div className="bgcolor z-30 absolute bottom-0 left-0 right-0"></div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="h-screen z-20   flex flex-col md:flex-row md:flex justify-around w-full items-center relative top-0 ">
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

              <div className="flex  flex-col items-center gap-3">
                <h1 className="font-semibold text-center md:text-start text-3xl">
                  Mengunakan Framework Terbaik
                </h1>
                <p className="font-medium w-[80%] text-center text-lg">
                  kami gunakan framework terbaru agar lebih mudah di pahami
                </p>
                <Button title="Sign Up" custom="signup" />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="-z-10 flex h-auto md:flex-row md:gap-0  gap-10 flex-col-reverse relative items-center bg-slate-950 text-white">
              <div className="flex flex-col items-center gap-3 mb-20 md:mb-0">
                <h1 className="font-semibold text-3xl">Google With Us</h1>
                <p className="font-medium text-center w-[80%] text-lg">
                  Google sudah berkontribusi dengan kami agar mepermudahkan
                  penguna lopercourse untuk menuju google developer
                </p>
                <Button title="Login" custom="login" />
              </div>
              <picture>
                <Images src="https://images.unsplash.com/photo-1633632799503-c8cff57c17f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29vZ2xlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" />
              </picture>

              <a
                href=""
                className="absolute top-5 md:left-[50%] flex justify-center items-center md:right-[50%] bg-white rounded-full w-[50px] z-10 h-[50px]"
              >
                <svg fill="#121212" height="20" width="20" viewBox="0 0 24 24">
                  <path d="M21.75 19.5c-.58 0-1.15-.22-1.59-.65L12 10.79l-8.16 8.06c-.88.87-2.3.87-3.18 0a2.21 2.21 0 0 1 0-3.15L12 4.5l11.34 11.2c.88.87.88 2.28 0 3.15-.44.43-1.01.65-1.59.65"></path>
                </svg>
              </a>
            
            </section>
          </SwiperSlide>
        </Swiper>
        <FooterLanding />
      </main>
    </>
  );
};
export default Landing;
