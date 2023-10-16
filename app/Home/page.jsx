/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import "swiper/css";
import Navbar from "@/app/components/navbar";
import "swiper/css/scrollbar";
import Footer from "../components/footer";
import { useEffect } from "react";
import Link from "next/link";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Images from "../components/image";

export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <>
      <Navbar />
      <main className="mt-32  bg-opacity-25 bg-center ">
        <section className="flex justify-center flex-col-reverse lg:flex-row-reverse items-center">
          <Player
            autoplay
            loop
            src="https://lottie.host/0843947b-fc8b-4df3-9fec-7c1a7b533cb4/n1btpxWIvy.json"
            style={{ height: "100%", width: "500px" }}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
          <div>
            <div className="flex items-end justify-center relative">
              <span className="lg:w-[600px] flex gap-5  items-start flex-col">
                <h1 className="font-bold lg:ml-0 ml-4 text-start text-3xl lg:text-5xl">
                  Memulai Skill Baru Dengan Lopercourse
                </h1>
                <p className="font-medium text-sm lg:ml-0 ml-4 w-[300px]">
                  1K+ programmer memilih kami untuk mendapatkan pelajaran code
                  bersama kami
                </p>
                <button className="bg-dark rounded-lg w-32 self-start  text-white mx-3 lg:mx-0 h-10">
                  <Link href='../price'>
                  Beli Sekarang
                  </Link>
                </button>
              </span>
              <div className="absolute right-5 lg:right-32">
                <div className="flex -space-x-2">
                  <Images
                    src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                    height={46}
                    width={46}
                    status="bulet-user"
                  />
                  <Images
                    src="https://images.unsplash.com/photo-1615125946484-86dd0a2cdb18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGh1bWFufGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=600&q=60"
                    height={46}
                    width={46}
                    status="bulet-user"
                  />
                  <Images
                    src="https://images.unsplash.com/photo-1558730234-d8b2281b0d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGh1bWFufGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=600&q=60"
                    height={46}
                    width={46}
                    status="bulet-user"
                  />
                  <Images
                    src="https://images.unsplash.com/photo-1569124589354-615739ae007b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW58ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=600&q=60"
                    height={46}
                    width={46}
                    status="bulet-user"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3 pt-14 items-center">
              <div className="" data-aos="zoom-out-right">
                <div className="rounded-[1px] px-4">
                  <picture>
                    <img
                      src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-google.png"
                      alt="Google"
                      className="dicoding-partners__logo dicoding-partners__logo--small"
                      width={95}
                      height={40}
                    />
                  </picture>
                </div>
              </div>
              <div data-aos="zoom-in-up" className="">
                <div className="rounded-[1px] px-4">
                  <picture>
                    <img
                      src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-microsoft.png"
                      alt="Microsoft"
                      className="dicoding-partners__logo dicoding-partners__logo--small"
                      width={95}
                      height={40}
                    />
                  </picture>
                </div>
              </div>
              <div data-aos="zoom-in-up" className="">
                <div className="rounded-[1px] px-4">
                  <picture>
                    <img
                      src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-aws.png"
                      alt="Amazon Web Services"
                      className="dicoding-partners__logo dicoding-partners__logo--small"
                      width={95}
                      height={40}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white px-3 mt-32 md:px-32">
          <section className="flex-col w-full flex lg:flex-row lg:flex gap-4 justify-center">
            <div className="border border-b-gray-100 px-3 flex flex-col gap-4 rounded-md py-5">
              <span>
                <h1 className="font-semibold">Back-End Progress</h1>
              </span>
              <div>
                <div className="flex w-[300px] lg:w-[400px] h-4 bg-gray-200 rounded-full overflow-hidden ">
                  <div
                    className="flex flex-col justify-center overflow-hidden bg-blue-500 text-xs text-white text-center"
                    role="progressbar"
                    style={{ width: "57%" }}
                    aria-valuenow={57}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    57%
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-b-gray-100 px-3 flex flex-col gap-4 rounded-md py-5">
              <span>
                <h1 className="font-semibold">Front-End Progress</h1>
              </span>
              <div>
                <div className="flex w-[300px] lg:w-[400px] h-4 bg-gray-200 rounded-full overflow-hidden ">
                  <div
                    className="flex flex-col justify-center overflow-hidden bg-blue-500 text-xs text-white text-center"
                    role="progressbar"
                    style={{ width: "78%" }}
                    aria-valuenow={78}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    78%
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-b-gray-100 px-3 flex flex-col gap-4 rounded-md py-5">
              <span>
                <h1 className="font-semibold">Multi-Platform Progress</h1>
              </span>
              <div>
                <div className="flex w-[300px] lg:w-[400px] h-4 bg-gray-200 rounded-full overflow-hidden ">
                  <div
                    className="flex flex-col justify-center overflow-hidden bg-blue-500 text-xs text-white text-center"
                    role="progressbar"
                    style={{ width: "32%" }}
                    aria-valuenow={32}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    32%
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="my-10">
          
          </section>
          <section className="my-16 px-8 md:px-32 text-dark " id="roadmap">
            <div className="flex justify-center items-center flex-col gap-3 text-center">
              <h1 className="font-bold text-3xl">Road Map</h1>
              <p className="lg:w-[50%] font-medium text-base">
                Road Map akan membantu Anda dalam belajar di Academy dengan
                kurikulum yang dibangun bersama pelaku industri ternama.
              </p>
            </div>
          </section>
          <div className="grid grid-cols-12 gap-4 xl:gap-6">
            <div className="col-span-12 md:col-span-6 md:order-2 lg:col-span-4 grid gap-4 xl:gap-6">
              <a
                className="md:order-1 relative before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition before:hover:border-2 before:hover:border-slate-900  "
                href="#"
              >
                <div className="relative overflow-hidden w-full h-full rounded-xl">
                  <div className="p-6 flex flex-col justify-center items-center md:min-h-[150px] text-center rounded-xl ">
                    <picture>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg"
                        alt=""
                        className="w-20 pt-10 pb-5"
                      />
                    </picture>
                    <p className="text-xl font-semibold uppercase">Nest Js</p>
                    <p className="mt-2 text-gray-500">
                      Nestjs akan di bahas pada bagian Back-End developer untuk
                      menyambungkan data ke server.
                    </p>
                    <p className="mt-6 inline-flex justify-center items-center gap-x-3 text-center bg-slate-900 hover:bg-slate-800 border border-transparent text-white text-sm font-medium rounded-lg py-3 px-4">
                      Lihat Selangkapnya
                      <svg
                        className="w-2.5 h-2.5"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="md:order-1 relative p-6 flex flex-col justify-center items-center md:min-h-[230px] text-center rounded-xl before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition before:hover:border-2 before:hover:border-slate-900"
                href="#"
              >
                <picture>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg"
                    alt=""
                    className="h-16 pb-5"
                  />
                </picture>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 ">
                  Flutter
                </h3>
                <p className="mt-2 text-gray-500">
                  Materi Flutter akan di jalakan pada multifraltom app begitu
                  juga dart.
                </p>
                <p className="mt-6 inline-flex justify-center items-center gap-x-3 text-center bg-slate-900 hover:bg-slate-800 border border-transparent text-white text-sm font-medium rounded-lg py-3 px-4">
                  Lihat Selangkapnya
                  <svg
                    className="w-2.5 h-2.5"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </p>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 md:order-2 lg:col-span-4 grid gap-4 xl:gap-6">
              <a
                className="md:order-1 relative before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition before:hover:border-2 before:hover:border-slate-900  "
                href="#"
              >
                <div className="relative overflow-hidden w-full h-full rounded-xl">
                  <div className="p-6 flex flex-col justify-center items-center md:min-h-[480px] text-center rounded-xl ">
                    <picture>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                        alt=""
                        className="h-28 pb-5"
                      />
                    </picture>
                    <p className="text-xl font-semibold uppercase">
                      React FrameWrok
                    </p>
                    <p className="mt-2 text-gray-500">
                      React akan dipelajari di front-end lanjutan bagai mana
                      website bisa berinteraksi degan mudah.
                    </p>
                    <p className="mt-6 inline-flex justify-center items-center gap-x-3 text-center bg-slate-900 hover:bg-slate-800 border border-transparent text-white text-sm font-medium rounded-lg py-3 px-4">
                      Lihat Selangkapnya
                      <svg
                        className="w-2.5 h-2.5"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="md:order-1 relative p-6 flex flex-col justify-center items-center md:min-h-[230px] text-center rounded-xl before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition before:hover:border-2 before:hover:border-slate-900"
                href="#"
              >
                <picture>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg"
                    alt=""
                    className="w-32 p-5"
                  />
                </picture>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 ">
                  TypeScript
                </h3>
                <p className="mt-2 text-gray-500">
                  TypeScript untuk memudahkan agar menemuakn error ketika
                  debugging di bandingkan JavaScript
                </p>
                <p className="mt-6 inline-flex justify-center items-center gap-x-3 text-center bg-slate-900 hover:bg-slate-800 border border-transparent text-white text-sm font-medium rounded-lg py-3 px-4">
                  Lihat Selangkapnya
                  <svg
                    className="w-2.5 h-2.5"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </p>
              </a>
            </div>

            <div className="col-span-12 lg:col-span-4 md:order-3 grid md:grid-cols-2 lg:grid-cols-1 gap-4 xl:gap-6">
              <a
                className="md:order-1 relative p-6 flex flex-col justify-center items-center md:min-h-[150px] text-center rounded-xl before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition before:hover:border-2 before:hover:border-slate-900  "
                href="#"
              >
                <picture>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg"
                    alt=""
                    className="h-32 pb-4"
                  />
                </picture>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 ">
                  Kotlin Language
                </h3>
                <p className="mt-2 text-gray-500">
                  android developer mengunakan kotlin dan java untuk membuat
                  aplikasi android.
                </p>
                <p className="mt-6 inline-flex justify-center items-center gap-x-3 text-center bg-slate-900 hover:bg-slate-800 border border-transparent text-white text-sm font-medium rounded-lg py-3 px-4">
                  Lihat Selangkapnya
                  <svg
                    className="w-2.5 h-2.5"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </p>
              </a>
              <a
                className="md:order-2 relative p-6 flex flex-col justify-center items-center md:min-h-[230px] text-center rounded-xl before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition before:hover:border-2 before:hover:border-slate-900  "
                href="#"
              >
                <picture>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    className="h-20 p-5"
                  />
                </picture>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 ">
                  Tailwind CSS Framework
                </h3>
                <p className="mt-2 text-gray-500">
                  Untuk Front-End kita menunakna framework tailwind css agar
                  memudahkan project
                </p>
                <p className="mt-6 inline-flex justify-center items-center gap-x-3 text-center bg-slate-900 hover:bg-slate-800 border border-transparent text-white text-sm font-medium rounded-lg py-3 px-4">
                  Lihat Selangkapnya
                  <svg
                    className="w-2.5 h-2.5"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </p>
              </a>
            </div>
          </div>

          <section className="my-32 flex justify-center">
            <div className="flex flex-wrap">
              <div className="border-r border-gray-200 ">
                <nav
                  className="flex flex-col space-y-2"
                  aria-label="Tabs"
                  role="tablist"
                  data-hs-tabs-vertical="true"
                >
                  <button
                    type="button"
                    className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 active"
                    id="vertical-tab-with-border-item-1"
                    data-hs-tab="#vertical-tab-with-border-1"
                    aria-controls="vertical-tab-with-border-1"
                    role="tab"
                  >
                    WPU
                  </button>
                  <button
                    type="button"
                    className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300"
                    id="vertical-tab-with-border-item-2"
                    data-hs-tab="#vertical-tab-with-border-2"
                    aria-controls="vertical-tab-with-border-2"
                    role="tab"
                  >
                    Dea
                  </button>
                  <button
                    type="button"
                    className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300"
                    id="vertical-tab-with-border-item-3"
                    data-hs-tab="#vertical-tab-with-border-3"
                    aria-controls="vertical-tab-with-border-3"
                    role="tab"
                  >
                    DKT
                  </button>
                </nav>
              </div>
              <div className="ml-3">
                <div
                  id="vertical-tab-with-border-1"
                  role="tabpanel"
                  aria-labelledby="vertical-tab-with-border-item-1"
                >
                  <div className="hover:scale-105 text-white hover:shadow-lg transition duration-300 rounded-lg bg-[url('https://i.ytimg.com/vi/JMH-5j_AIvU/maxresdefault.jpg')] bg-blend-multiply bg-slate-900/70 bg-cover bg-center bg-no-repeat w-full lg:w-[1018px] h-[400px] md:h-[481px] flex px-5 py-10">
                    <div className="flex flex-col w-80 gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 48 49"
                        height={48}
                        width={48}
                        className=""
                      >
                        <path
                          fill="#fff"
                          d="M6 6.936h36a2 2 0 012 2v32a2 2 0 01-2 2H6a2 2 0 01-2-2v-32a2 2 0 012-2zm26.928 25.072L40 24.934l-7.072-7.072-2.828 2.832 4.244 4.24-4.244 4.242 2.828 2.83zm-19.272-7.073l4.244-4.241-2.828-2.83L8 24.935l7.072 7.072 2.828-2.833-4.244-4.24zm8.832 10l7.28-20h-4.256l-7.28 20h4.256z"
                        ></path>
                      </svg>
                      <h2 className="text-2xl mb-3 font-bold">
                        MOTIVASI Belajar CODING!!
                      </h2>
                      <p className="text-base font-medium">
                        Kenapa sih kamu harus belajar pemrograman? Kamu mau
                        belajar tapi engga punya motivasi dan bingung bagaimana
                        cara memulainya?
                      </p>
                      <a target="_blank">
                        <div className="flex items-start font-bold cursor-pointer mt-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 48 49"
                            width={24}
                            height={24}
                            className="mr-2 cursor-pointer"
                          >
                            <path
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M24 44.935c11.046 0 20-8.954 20-20 0-11.045-8.954-20-20-20s-20 8.955-20 20c0 11.046 8.954 20 20 20z"
                            ></path>
                            <path fill="#fff" d="M20 16.936l12 8-12 8v-16z" />
                          </svg>
                          Tonton video
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  id="vertical-tab-with-border-2"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="vertical-tab-with-border-item-2"
                >
                  <div className="hover:scale-105 text-white hover:shadow-lg transition duration-300 rounded-lg bg-[url('https://i.ytimg.com/vi/mwTraleFAMk/maxresdefault.jpg')] bg-blend-multiply bg-slate-900/70  bg-cover bg-center bg-no-repeat w-full lg:w-[1018px] h-[400px] md:h-[481px] flex px-5 py-10">
                    <div className="flex flex-col w-80 gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 48 49"
                        height={48}
                        width={48}
                        className=""
                      >
                        <path
                          fill="#fff"
                          d="M6 6.936h36a2 2 0 012 2v32a2 2 0 01-2 2H6a2 2 0 01-2-2v-32a2 2 0 012-2zm26.928 25.072L40 24.934l-7.072-7.072-2.828 2.832 4.244 4.24-4.244 4.242 2.828 2.83zm-19.272-7.073l4.244-4.241-2.828-2.83L8 24.935l7.072 7.072 2.828-2.833-4.244-4.24zm8.832 10l7.28-20h-4.256l-7.28 20h4.256z"
                        ></path>
                      </svg>
                      <h2 className="text-2xl mb-3 font-bold">
                        Program Pertama Yang MENGUBAH HIDUP Gue! (MOTIVASI)
                      </h2>
                      <p className="text-base font-medium">
                        Motivasi buat kalian yang lagi belajar coding, yang lagi
                        gak mood ngoding, lagi males programming.
                      </p>
                      <a
                        href={
                          "https://www.youtube.com/watch?v=mwTraleFAMk&ab_channel=DeaAfrizal"
                        }
                        target="_blank"
                      >
                        <div className="flex items-start font-bold cursor-pointer mt-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 48 49"
                            width={24}
                            height={24}
                            className="mr-2 cursor-pointer"
                          >
                            <path
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M24 44.935c11.046 0 20-8.954 20-20 0-11.045-8.954-20-20-20s-20 8.955-20 20c0 11.046 8.954 20 20 20z"
                            ></path>
                            <path fill="#fff" d="M20 16.936l12 8-12 8v-16z" />
                          </svg>
                          Tonton video
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  id="vertical-tab-with-border-3"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="vertical-tab-with-border-item-3"
                >
                  <div className="hover:scale-105 text-white hover:shadow-lg transition duration-300 rounded-lg bg-[url('https://i.ytimg.com/vi/BA3s2rMSq7g/maxresdefault.jpg')] bg-blend-multiply bg-slate-900/70 bg-cover bg-center bg-no-repeat w-full lg:w-[1018px] h-[400px] md:h-[481px] flex px-5 py-10">
                    <div className="flex flex-col w-80 gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 48 49"
                        height={48}
                        width={48}
                        className=""
                      >
                        <path
                          fill="#fff"
                          d="M6 6.936h36a2 2 0 012 2v32a2 2 0 01-2 2H6a2 2 0 01-2-2v-32a2 2 0 012-2zm26.928 25.072L40 24.934l-7.072-7.072-2.828 2.832 4.244 4.24-4.244 4.242 2.828 2.83zm-19.272-7.073l4.244-4.241-2.828-2.83L8 24.935l7.072 7.072 2.828-2.833-4.244-4.24zm8.832 10l7.28-20h-4.256l-7.28 20h4.256z"
                        ></path>
                      </svg>
                      <h2 className="text-2xl mb-3 font-bold">
                        #01 - motivasi belajar, AI Team Work
                      </h2>
                      <p className="text-base font-medium">
                        Kita akan mulai segmen baru yaitu segmen diskusi di
                        kelas terbuka. siapkan pertanyaan kalian untuk bahan
                        diskusi kita di kelas terbuka ya, kita isi konten di
                        youtube ini dengan hal-hal yang positive ya. Mari
                        Cuy!!!!!
                      </p>
                      <a
                        href={
                          "https://www.youtube.com/watch?v=BA3s2rMSq7g&ab_channel=KelasTerbuka"
                        }
                        target="_blank"
                      >
                        <div className="flex items-start font-bold cursor-pointer mt-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 48 49"
                            width={24}
                            height={24}
                            className="mr-2 cursor-pointer"
                          >
                            <path
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M24 44.935c11.046 0 20-8.954 20-20 0-11.045-8.954-20-20-20s-20 8.955-20 20c0 11.046 8.954 20 20 20z"
                            ></path>
                            <path fill="#fff" d="M20 16.936l12 8-12 8v-16z" />
                          </svg>
                          Tonton video
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="my-32 bg-fixed bg-center bg-cover text-white bgcustom">
          <div className="flex flex-col gap-9 py-10 md:py-32 items-center justify-center ">
            <h1 className="text-center font-medium text-2xl ">
              Sumber Terbuka Global Masyarakat
            </h1>
            <p className="text-center font-semibold text-5xl lg:w-[50%]">
              Didukung oleh Google, buka untuk semua orang
            </p>
            <p className="text-center font-medium text-base lg:w-[50%] ">
              Berkolaborasi pada kerangka kerja sumber terbuka, berkontribusi
              pada ekosistem paket di lopercourse, dan temukan bantuan saat Anda
              membutuhkannya.
            </p>
          </div>
        </section>
      </main>

      {/*  <!-- Halaman footer -->  */}
      <Footer />
    </>
  );
}
