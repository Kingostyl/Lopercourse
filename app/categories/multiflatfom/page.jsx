/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <>
    <Navbar/>
      <main className=" text-dark  py-28 bg-cover w-full">
        <img
          src="data:image/png;base64,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"
          alt=""
          className="absolute"
        />
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="font-bold md:text-4xl text-2xl text-center ">
            Multi-Platform App Developer
          </h1>
          <p className="text-center font-medium md:text-xl text-sm px-5 md:w-[50%]">
            Kurikulum disusun oleh Lopercourse bersama Google beserta pelaku
            industri Multi-Platform App Development. Siswa dipersiapkan untuk
            menjadi Multi-Platform App Developer sesuai standar kebutuhan
            industri.
          </p>
        </div>
      </main>
      <main className="mt-32 px-3 md:px-20 w-full">
        <div className="flex-col md:flex  justify-between w-full items-center">
          <div className=" px-6 md:w-[370px] sm:h-[164px] flex items-center hover:shadow-lg mx-auto h-auto py-2 border rounded-md border-gray-600">
            <div className="gap-2 md:gap-3 flex flex-col">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  width={16}
                  height={16}
                  className="mr-2"
                >
                  <path fill="#fff" d="M0 0h16v16H0z" />
                  <path
                    stroke="#3F3F46"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13.5 13.5h-11V9h3V5.5h4V2h4v11.5z"
                  />
                </svg>
                <h1 className="font-bold text-xs">Langkah 1</h1>
              </div>
              <span className="font-bold text-base">
                Belajar Membuat Aplikasi Flutter untuk Pemula
              </span>
              <div className="flex gap-9">
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-green-400"
                    width={16}
                    height={16}
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 14.667A6.667 6.667 0 1 0 8 1.334a6.667 6.667 0 0 0 0 13.333Zm.667-10a.667.667 0 0 0-1.333 0v3.334c0 .176.07.346.195.471l2.334 2.333a.667.667 0 0 0 .942-.942L8.667 7.725V4.667Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-semibold text-xs">20 jam</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="course-card__icon text-yellow-400"
                  >
                    <path
                      d="M8 0L10.2899 4.84829L15.6085 5.52786L11.7051 9.20385L12.7023 14.4721L8 11.8957L3.29772 14.4721L4.29494 9.20385L0.391548 5.52786L5.71015 4.84829L8 0Z"
                      fill=""
                    />
                  </svg>
                  <p className="font-semibold text-xs">4,55</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="course-card__icon text-gray-400"
                    width={16}
                    height={16}
                  >
                    <rect
                      width="2.667"
                      height="4.667"
                      x="2.667"
                      y={8}
                      rx={1}
                      className="text-blue-400"
                      fill="currentColor"
                    />
                    <rect
                      width="2.667"
                      height="6.667"
                      x="6.667"
                      y={6}
                      rx={1}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                    <rect
                      width="2.667"
                      height="9.333"
                      x="10.667"
                      y="3.333"
                      rx={1}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="font-semibold text-xs">Dasar</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-3">
                  <svg
                    width={16}
                    height={16}
                    className="course-card__icon text-gray-500"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.33334 2.66666C1.33334 1.93028 1.9303 1.33333 2.66668 1.33333H10C10.7364 1.33333 11.3333 1.93028 11.3333 2.66666V3.33333H13.3333C14.0697 3.33333 14.6667 3.93028 14.6667 4.66666V13.3333C14.6667 14.0697 14.0697 14.6667 13.3333 14.6667H2.66668C1.9303 14.6667 1.33334 14.0697 1.33334 13.3333V2.66666ZM10 2.66666V3.33333H2.66668V2.66666H10ZM2.66668 13.3333V4.66666H4.66668V13.3333H2.66668ZM6.00001 13.3333H13.3333V4.66666H6.00001V13.3333Z"
                    ></path>
                  </svg>
                  <p className="font-normal text-xs">51,modul</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="course-card__icon text-gray-500"
                    width={16}
                    height={16}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 2.667a2.333 2.333 0 100 4.666 2.333 2.333 0 000-4.666zM4 5a1 1 0 112 0 1 1 0 01-2 0zM11 2.667a2.333 2.333 0 100 4.666 2.333 2.333 0 000-4.666zM10 5a1 1 0 112 0 1 1 0 01-2 0zM8 9.558a3.667 3.667 0 00-6.667 2.109V14c0 .368.299.667.667.667h12a.667.667 0 00.667-.667v-2.333A3.667 3.667 0 008 9.558zm-.667 3.775v-1.668a2.333 2.333 0 00-4.666.002v1.666h4.666zm1.334-1.668v1.668h4.666v-1.666a2.333 2.333 0 00-4.666-.002z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-normal text-xs">25.313 Siswa terdaftar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-auto md:gap-10 gap-1 flex-col">
            <div className="h-10 md:h-32 bg-dark w-[2px] md:mt-0 mt-2  mx-auto flex" />
            <span className="font-bold flex justify-center ">1</span>
            {/* <span class="font-bold items-center text-orange-500 hidden md:flex">2</span> */}
          </div>
          <span className="flex text-center  md:mt-0 mt-10 flex-col gap-4">
            <h1 className="font-bold text-xl">Langkah Pertama</h1>
            <div className="flex justify-center">
              <p className="font-medium text-center md:w-[60%]">
                Langkah pertama untuk menjadi seorang Flutter Developer dengan
                mempelajari bahasa Dart yang digunakan untuk mengembangkan
                aplikasi dengan Flutter.
              </p>
            </div>
          </span>
        </div>
        <div className="flex-col md:flex mt-8 justify-between w-full items-center">
          <div className=" px-6 md:w-[370px] sm:h-[164px] flex items-center hover:shadow-lg mx-auto h-auto py-2 border rounded-md border-gray-600">
            <div className="gap-2 md:gap-3 flex flex-col">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  width={16}
                  height={16}
                  className="mr-2"
                >
                  <path fill="#fff" d="M0 0h16v16H0z" />
                  <path
                    stroke="#3F3F46"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13.5 13.5h-11V9h3V5.5h4V2h4v11.5z"
                  />
                </svg>
                <h1 className="font-bold text-xs">Langkah 2</h1>
              </div>
              <span className="font-bold text-base">
                Belajar Membuat Aplikasi Flutter untuk Pemula
              </span>
              <div className="flex gap-9">
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-green-400"
                    width={16}
                    height={16}
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 14.667A6.667 6.667 0 1 0 8 1.334a6.667 6.667 0 0 0 0 13.333Zm.667-10a.667.667 0 0 0-1.333 0v3.334c0 .176.07.346.195.471l2.334 2.333a.667.667 0 0 0 .942-.942L8.667 7.725V4.667Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-semibold text-xs">40 jam</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="course-card__icon text-yellow-400"
                  >
                    <path
                      d="M8 0L10.2899 4.84829L15.6085 5.52786L11.7051 9.20385L12.7023 14.4721L8 11.8957L3.29772 14.4721L4.29494 9.20385L0.391548 5.52786L5.71015 4.84829L8 0Z"
                      fill=""
                    />
                  </svg>
                  <p className="font-semibold text-xs">4,88</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="course-card__icon text-gray-400"
                    width={16}
                    height={16}
                  >
                    <rect
                      width="2.667"
                      height="4.667"
                      x="2.667"
                      y={8}
                      rx={1}
                      className="text-blue-400"
                      fill="currentColor"
                    />
                    <rect
                      width="2.667"
                      height="6.667"
                      x="6.667"
                      y={6}
                      rx={1}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                    <rect
                      width="2.667"
                      height="9.333"
                      x="10.667"
                      y="3.333"
                      rx={1}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="font-semibold text-xs">Pemula</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-3">
                  <svg
                    width={16}
                    height={16}
                    className="course-card__icon text-gray-500"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.33334 2.66666C1.33334 1.93028 1.9303 1.33333 2.66668 1.33333H10C10.7364 1.33333 11.3333 1.93028 11.3333 2.66666V3.33333H13.3333C14.0697 3.33333 14.6667 3.93028 14.6667 4.66666V13.3333C14.6667 14.0697 14.0697 14.6667 13.3333 14.6667H2.66668C1.9303 14.6667 1.33334 14.0697 1.33334 13.3333V2.66666ZM10 2.66666V3.33333H2.66668V2.66666H10ZM2.66668 13.3333V4.66666H4.66668V13.3333H2.66668ZM6.00001 13.3333H13.3333V4.66666H6.00001V13.3333Z"
                    ></path>
                  </svg>
                  <p className="font-normal text-xs">51,modul</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="course-card__icon text-gray-500"
                    width={16}
                    height={16}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 2.667a2.333 2.333 0 100 4.666 2.333 2.333 0 000-4.666zM4 5a1 1 0 112 0 1 1 0 01-2 0zM11 2.667a2.333 2.333 0 100 4.666 2.333 2.333 0 000-4.666zM10 5a1 1 0 112 0 1 1 0 01-2 0zM8 9.558a3.667 3.667 0 00-6.667 2.109V14c0 .368.299.667.667.667h12a.667.667 0 00.667-.667v-2.333A3.667 3.667 0 008 9.558zm-.667 3.775v-1.668a2.333 2.333 0 00-4.666.002v1.666h4.666zm1.334-1.668v1.668h4.666v-1.666a2.333 2.333 0 00-4.666-.002z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-normal text-xs">25.313 Siswa terdaftar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-auto md:gap-10  gap-1 flex-col">
            <div className="h-10 md:h-32 bg-dark w-[2px] md:mt-0 mt-2  mx-auto flex" />
            <span className="font-bold flex justify-center">2</span>
          </div>
          <span className="flex text-center md:mt-0 mt-10 flex-col gap-4 ">
            <h1 className="font-bold text-xl">
              Membuat Aplikasi Flutter Pertama
            </h1>
            <div className="flex justify-center">
              <p className="font-medium md:w-[70%]">
                Buat aplikasi pertamamu dengan mengenal Flutter dan memahami
                dasar-dasar membangun tampilan Flutter dengan widget.
              </p>
            </div>
          </span>
        </div>
        <div className="flex-col md:flex mt-8 justify-between w-full items-center">
          <div className=" px-6 md:w-[370px] sm:h-[164px] flex items-center hover:shadow-lg mx-auto h-auto py-2 border rounded-md border-gray-600">
            <div className="gap-2 md:gap-4 flex flex-col">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  width={16}
                  height={16}
                  className="mr-2"
                >
                  <path fill="#fff" d="M0 0h16v16H0z" />
                  <path
                    stroke="#3F3F46"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13.5 13.5h-11V9h3V5.5h4V2h4v11.5z"
                  />
                </svg>
                <h1 className="font-bold text-xs">Langkah 3</h1>
              </div>
              <span className="font-bold text-base">
                Belajar Fundamental Aplikasi Flutter
              </span>
              <div className="flex gap-9">
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-green-400"
                    width={16}
                    height={16}
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 14.667A6.667 6.667 0 1 0 8 1.334a6.667 6.667 0 0 0 0 13.333Zm.667-10a.667.667 0 0 0-1.333 0v3.334c0 .176.07.346.195.471l2.334 2.333a.667.667 0 0 0 .942-.942L8.667 7.725V4.667Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-semibold text-xs">70 jam</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="course-card__icon text-yellow-400"
                  >
                    <path
                      d="M8 0L10.2899 4.84829L15.6085 5.52786L11.7051 9.20385L12.7023 14.4721L8 11.8957L3.29772 14.4721L4.29494 9.20385L0.391548 5.52786L5.71015 4.84829L8 0Z"
                      fill=""
                    />
                  </svg>
                  <p className="font-semibold text-xs">4,87</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="course-card__icon text-gray-400"
                    width={16}
                    height={16}
                  >
                    <rect
                      width="2.667"
                      height="4.667"
                      x="2.667"
                      y={8}
                      rx={1}
                      className="text-blue-400"
                      fill="currentColor"
                    />
                    <rect
                      width="2.667"
                      height="6.667"
                      x="6.667"
                      y={6}
                      rx={1}
                      className="text-blue-400"
                      fill="currentColor"
                    />
                    <rect
                      width="2.667"
                      height="9.333"
                      x="10.667"
                      y="3.333"
                      rx={1}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="font-semibold text-xs">Menegah</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-3">
                  <svg
                    width={16}
                    height={16}
                    className="course-card__icon text-gray-500"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.33334 2.66666C1.33334 1.93028 1.9303 1.33333 2.66668 1.33333H10C10.7364 1.33333 11.3333 1.93028 11.3333 2.66666V3.33333H13.3333C14.0697 3.33333 14.6667 3.93028 14.6667 4.66666V13.3333C14.6667 14.0697 14.0697 14.6667 13.3333 14.6667H2.66668C1.9303 14.6667 1.33334 14.0697 1.33334 13.3333V2.66666ZM10 2.66666V3.33333H2.66668V2.66666H10ZM2.66668 13.3333V4.66666H4.66668V13.3333H2.66668ZM6.00001 13.3333H13.3333V4.66666H6.00001V13.3333Z"
                    ></path>
                  </svg>
                  <p className="font-normal text-xs">82,modul</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="course-card__icon text-gray-500"
                    width={16}
                    height={16}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 2.667a2.333 2.333 0 100 4.666 2.333 2.333 0 000-4.666zM4 5a1 1 0 112 0 1 1 0 01-2 0zM11 2.667a2.333 2.333 0 100 4.666 2.333 2.333 0 000-4.666zM10 5a1 1 0 112 0 1 1 0 01-2 0zM8 9.558a3.667 3.667 0 00-6.667 2.109V14c0 .368.299.667.667.667h12a.667.667 0 00.667-.667v-2.333A3.667 3.667 0 008 9.558zm-.667 3.775v-1.668a2.333 2.333 0 00-4.666.002v1.666h4.666zm1.334-1.668v1.668h4.666v-1.666a2.333 2.333 0 00-4.666-.002z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-normal text-xs">5.322 Siswa terdaftar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-auto  md:gap-10  gap-1 flex-col">
            <div className="h-10 md:h-32 bg-dark w-[2px] md:mt-0 mt-2  mx-auto flex" />
            <span className="font-bold flex justify-center ">3</span>
          </div>
          <span className="flex text-center  md:mt-0 mt-10 flex-col gap-4 ">
            <h1 className="font-bold text-xl">Membangun Fundamental</h1>
            <div className="flex justify-center">
              <p className="font-medium md:w-[70%]">
                Perdalam keahlianmu dalam mengembangkan aplikasi menggunakan
                Flutter dengan mempelajari cara membuat aplikasi yang dapat
                mengambil data dari server dan menyimpannya ke dalam database.
              </p>
            </div>
          </span>
        </div>
        <div className="flex-col md:flex mt-8 justify-between w-full items-center">
          <div className=" px-6 md:w-[370px] sm:h-[164px] flex items-center hover:shadow-lg mx-auto h-auto py-2 border rounded-md border-gray-600">
            <div className="gap-3 flex flex-col">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  width={16}
                  height={16}
                  className="mr-2"
                >
                  <path fill="#fff" d="M0 0h16v16H0z" />
                  <path
                    stroke="#3F3F46"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13.5 13.5h-11V9h3V5.5h4V2h4v11.5z"
                  />
                </svg>
                <h1 className="font-bold text-xs">Langkah 4</h1>
              </div>
              <span className="font-bold text-base">
                Belajar Pengembangan Aplikasi Flutter Intermediate
              </span>
              <div className="flex gap-9">
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-green-400"
                    width={16}
                    height={16}
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 14.667A6.667 6.667 0 1 0 8 1.334a6.667 6.667 0 0 0 0 13.333Zm.667-10a.667.667 0 0 0-1.333 0v3.334c0 .176.07.346.195.471l2.334 2.333a.667.667 0 0 0 .942-.942L8.667 7.725V4.667Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-semibold text-xs">80 jam</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="course-card__icon text-yellow-400"
                  >
                    <path
                      d="M8 0L10.2899 4.84829L15.6085 5.52786L11.7051 9.20385L12.7023 14.4721L8 11.8957L3.29772 14.4721L4.29494 9.20385L0.391548 5.52786L5.71015 4.84829L8 0Z"
                      fill=""
                    />
                  </svg>
                  <p className="font-semibold text-xs">4,94</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="course-card__icon text-gray-400"
                    width={16}
                    height={16}
                  >
                    <rect
                      width="2.667"
                      height="4.667"
                      x="2.667"
                      y={8}
                      rx={1}
                      className="text-blue-400"
                      fill="currentColor"
                    />
                    <rect
                      width="2.667"
                      height="6.667"
                      x="6.667"
                      y={6}
                      rx={1}
                      className="text-blue-400"
                      fill="currentColor"
                    />
                    <rect
                      width="2.667"
                      height="9.333"
                      x="10.667"
                      y="3.333"
                      rx={1}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="font-semibold text-xs">Mahir</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-3">
                  <svg
                    width={16}
                    height={16}
                    className="course-card__icon text-gray-500"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.33334 2.66666C1.33334 1.93028 1.9303 1.33333 2.66668 1.33333H10C10.7364 1.33333 11.3333 1.93028 11.3333 2.66666V3.33333H13.3333C14.0697 3.33333 14.6667 3.93028 14.6667 4.66666V13.3333C14.6667 14.0697 14.0697 14.6667 13.3333 14.6667H2.66668C1.9303 14.6667 1.33334 14.0697 1.33334 13.3333V2.66666ZM10 2.66666V3.33333H2.66668V2.66666H10ZM2.66668 13.3333V4.66666H4.66668V13.3333H2.66668ZM6.00001 13.3333H13.3333V4.66666H6.00001V13.3333Z"
                    ></path>
                  </svg>
                  <p className="font-normal text-xs">93,modul</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="course-card__icon text-gray-500"
                    width={16}
                    height={16}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 2.667a2.333 2.333 0 100 4.666 2.333 2.333 0 000-4.666zM4 5a1 1 0 112 0 1 1 0 01-2 0zM11 2.667a2.333 2.333 0 100 4.666 2.333 2.333 0 000-4.666zM10 5a1 1 0 112 0 1 1 0 01-2 0zM8 9.558a3.667 3.667 0 00-6.667 2.109V14c0 .368.299.667.667.667h12a.667.667 0 00.667-.667v-2.333A3.667 3.667 0 008 9.558zm-.667 3.775v-1.668a2.333 2.333 0 00-4.666.002v1.666h4.666zm1.334-1.668v1.668h4.666v-1.666a2.333 2.333 0 00-4.666-.002z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-normal text-xs">4.395 Siswa terdaftar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-auto md:gap-10  gap-1 flex-col">
            <div className="h-10 md:h-32 bg-dark w-[2px] md:mt-0 mt-2  mx-auto flex" />
            <span className="font-bold flex justify-center">4</span>
          </div>
          <span className="flex text-center md:mt-0 mt-10 flex-col gap-4">
            <h1 className="font-bold text-xl">Perdalam Keahlian</h1>
            <div className="flex justify-center">
              <p className="font-medium md:w-[70%]">
                Memperkaya widget dan fungsionalitas Flutter untuk menunjang
                aplikasi yang lebih fleksibel.{" "}
              </p>
            </div>
          </span>
        </div>
        <div className="flex-col md:flex mt-8 justify-between w-full items-center">
          <div className=" px-6 md:w-[370px] sm:h-[164px] flex items-center hover:shadow-lg mx-auto h-auto py-2 border rounded-md border-gray-600">
            <div className="gap-2 md:gap-4 flex flex-col">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  width={16}
                  height={16}
                  className="mr-2"
                >
                  <path fill="#fff" d="M0 0h16v16H0z" />
                  <path
                    stroke="#3F3F46"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13.5 13.5h-11V9h3V5.5h4V2h4v11.5z"
                  />
                </svg>
                <h1 className="font-bold text-xs">Langkah 5</h1>
              </div>
              <span className="font-bold text-base">
                Belajar Prinsip Pemrograman SOLID
              </span>
              <div className="flex gap-9">
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-green-400"
                    width={16}
                    height={16}
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 14.667A6.667 6.667 0 1 0 8 1.334a6.667 6.667 0 0 0 0 13.333Zm.667-10a.667.667 0 0 0-1.333 0v3.334c0 .176.07.346.195.471l2.334 2.333a.667.667 0 0 0 .942-.942L8.667 7.725V4.667Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-semibold text-xs">14 jam</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="course-card__icon text-yellow-400"
                  >
                    <path
                      d="M8 0L10.2899 4.84829L15.6085 5.52786L11.7051 9.20385L12.7023 14.4721L8 11.8957L3.29772 14.4721L4.29494 9.20385L0.391548 5.52786L5.71015 4.84829L8 0Z"
                      fill=""
                    />
                  </svg>
                  <p className="font-semibold text-xs">4,79</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="course-card__icon text-gray-400"
                    width={16}
                    height={16}
                  >
                    <rect
                      width="2.667"
                      height="4.667"
                      x="2.667"
                      y={8}
                      rx={1}
                      className="text-blue-400"
                      fill="currentColor"
                    />
                    <rect
                      width="2.667"
                      height="6.667"
                      x="6.667"
                      y={6}
                      rx={1}
                      className="text-blue-400"
                      fill="currentColor"
                    />
                    <rect
                      width="2.667"
                      height="9.333"
                      x="10.667"
                      y="3.333"
                      rx={1}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="font-semibold text-xs">Menegah</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-3">
                  <svg
                    width={16}
                    height={16}
                    className="course-card__icon text-gray-500"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.33334 2.66666C1.33334 1.93028 1.9303 1.33333 2.66668 1.33333H10C10.7364 1.33333 11.3333 1.93028 11.3333 2.66666V3.33333H13.3333C14.0697 3.33333 14.6667 3.93028 14.6667 4.66666V13.3333C14.6667 14.0697 14.0697 14.6667 13.3333 14.6667H2.66668C1.9303 14.6667 1.33334 14.0697 1.33334 13.3333V2.66666ZM10 2.66666V3.33333H2.66668V2.66666H10ZM2.66668 13.3333V4.66666H4.66668V13.3333H2.66668ZM6.00001 13.3333H13.3333V4.66666H6.00001V13.3333Z"
                    ></path>
                  </svg>
                  <p className="font-normal text-xs">42,modul</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="course-card__icon text-gray-500"
                    width={16}
                    height={16}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 2.667a2.333 2.333 0 100 4.666 2.333 2.333 0 000-4.666zM4 5a1 1 0 112 0 1 1 0 01-2 0zM11 2.667a2.333 2.333 0 100 4.666 2.333 2.333 0 000-4.666zM10 5a1 1 0 112 0 1 1 0 01-2 0zM8 9.558a3.667 3.667 0 00-6.667 2.109V14c0 .368.299.667.667.667h12a.667.667 0 00.667-.667v-2.333A3.667 3.667 0 008 9.558zm-.667 3.775v-1.668a2.333 2.333 0 00-4.666.002v1.666h4.666zm1.334-1.668v1.668h4.666v-1.666a2.333 2.333 0 00-4.666-.002z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-normal text-xs">10.202 Siswa terdaftar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-auto md:gap-10  gap-1 flex-col">
            <div className="h-10 md:h-32 bg-dark w-[2px] md:mt-0 mt-2  mx-auto flex" />
            <span className="font-bold flex justify-center ">5</span>
          </div>
          <span className="flex text-center  md:mt-0 mt-10 flex-col gap-4 ">
            <h1 className="font-bold text-xl">Memperkuat Prinsip Dasar</h1>
            <div className="flex justify-center">
              <p className="font-medium md:w-[70%]">
                Mendalami Object-Oriented Programming (OOP) dengan belajar
                prinsip dasar SOLID.
              </p>
            </div>
          </span>
        </div>
        <div className="flex-col md:flex mt-8  w-full items-center">
          <div className="px-6 md:w-[370px] sm:h-[164px] flex items-center hover:shadow-lg mx-auto h-auto py-2 border rounded-md border-gray-600">
            <div className="gap-4 flex flex-col">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  width={16}
                  height={16}
                  className="mr-2"
                >
                  <path fill="#fff" d="M0 0h16v16H0z" />
                  <path
                    stroke="#3F3F46"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13.5 13.5h-11V9h3V5.5h4V2h4v11.5z"
                  />
                </svg>
                <h1 className="font-bold text-xs">Langkah 6</h1>
              </div>
              <span className="font-bold text-base">
                Menjadi Flutter Developer Expert
              </span>
              <div className="flex gap-9">
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-green-400"
                    width={16}
                    height={16}
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 14.667A6.667 6.667 0 1 0 8 1.334a6.667 6.667 0 0 0 0 13.333Zm.667-10a.667.667 0 0 0-1.333 0v3.334c0 .176.07.346.195.471l2.334 2.333a.667.667 0 0 0 .942-.942L8.667 7.725V4.667Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-semibold text-xs">85 jam</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="course-card__icon text-yellow-400"
                  >
                    <path
                      d="M8 0L10.2899 4.84829L15.6085 5.52786L11.7051 9.20385L12.7023 14.4721L8 11.8957L3.29772 14.4721L4.29494 9.20385L0.391548 5.52786L5.71015 4.84829L8 0Z"
                      fill=""
                    />
                  </svg>
                  <p className="font-semibold text-xs">4,85</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="course-card__icon text-gray-400"
                    width={16}
                    height={16}
                  >
                    <rect
                      width="2.667"
                      height="4.667"
                      x="2.667"
                      y={8}
                      rx={1}
                      className="text-blue-400"
                      fill="currentColor"
                    />
                    <rect
                      width="2.667"
                      height="6.667"
                      x="6.667"
                      y={6}
                      rx={1}
                      className="text-blue-400"
                      fill="currentColor"
                    />
                    <rect
                      width="2.667"
                      height="9.333"
                      x="10.667"
                      y="3.333"
                      rx={1}
                      className="text-blue-400"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="font-semibold text-xs">Profesional</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-3">
                  <svg
                    width={16}
                    height={16}
                    className="course-card__icon text-gray-500"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.33334 2.66666C1.33334 1.93028 1.9303 1.33333 2.66668 1.33333H10C10.7364 1.33333 11.3333 1.93028 11.3333 2.66666V3.33333H13.3333C14.0697 3.33333 14.6667 3.93028 14.6667 4.66666V13.3333C14.6667 14.0697 14.0697 14.6667 13.3333 14.6667H2.66668C1.9303 14.6667 1.33334 14.0697 1.33334 13.3333V2.66666ZM10 2.66666V3.33333H2.66668V2.66666H10ZM2.66668 13.3333V4.66666H4.66668V13.3333H2.66668ZM6.00001 13.3333H13.3333V4.66666H6.00001V13.3333Z"
                    ></path>
                  </svg>
                  <p className="font-normal text-xs">93,modul</p>
                </div>
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="course-card__icon text-gray-500"
                    width={16}
                    height={16}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 2.667a2.333 2.333 0 100 4.666 2.333 2.333 0 000-4.666zM4 5a1 1 0 112 0 1 1 0 01-2 0zM11 2.667a2.333 2.333 0 100 4.666 2.333 2.333 0 000-4.666zM10 5a1 1 0 112 0 1 1 0 01-2 0zM8 9.558a3.667 3.667 0 00-6.667 2.109V14c0 .368.299.667.667.667h12a.667.667 0 00.667-.667v-2.333A3.667 3.667 0 008 9.558zm-.667 3.775v-1.668a2.333 2.333 0 00-4.666.002v1.666h4.666zm1.334-1.668v1.668h4.666v-1.666a2.333 2.333 0 00-4.666-.002z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-normal text-xs">20.193 Siswa terdaftar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-auto  md:gap-10  gap-1 flex-col">
            <div className="h-10 md:h-32 bg-dark w-[2px] md:mt-0 mt-2  mx-auto flex" />
            <span className="font-bold flex justify-center ">6</span>
          </div>
          <span className="flex text-center  md:mt-0 mt-10 flex-col gap-4">
            <h1 className="font-bold text-xl">Saatnya Menjadi Expert</h1>
            <div className="flex justify-center">
              <p className="font-medium md:w-[70%]">
                Pelajari best practice seperti clean architecture, TDD,
                modularisasi, continuous integration, performance, dan security
                dalam mengembangkan aplikasi Flutter.
              </p>
            </div>
          </span>
        </div>
      </main>
      <div className="mt-32  flex flex-col justify-center gap-10 items-center">
        <span className="text-center font-bold text-3xl flex justify-center items-center">
          Jadilah bagian dari Multi-Platform App Developer
        </span>
        <button className=" w-[200px] flex items-center justify-center py-3 text-white font-semibold rounded-3xl scroll-smooth bg-dark">
          <a href="#" onclick="goBuy()">
            Beli Sekarang
          </a>
        </button>
      </div>
      <main className="mt-32 w-full h-auto py-9 px-10 md:px-32 bg-gray-50">
        <div className="flex flex-col gap-7 items-center justify-center">
          <span className="font-bold text-3xl text-center flex justify-center">
            Apa kata lulusan lopercourse
          </span>
          <div className="flex gap-10 flex-wrap justify-center items-center">
            <div className="border md:w-[500px] rounded-md w-full h-[300px] border-gray-500">
              <div className="flex top-0 left-0 ml-3 mt-4 mb-3">
                <img
                  src="https://d17ivq9b7rppb3.cloudfront.net/small/avatar/20200625125550797544622b9e75deeca97aad8ed008a5.png"
                  className="rounded-full w-10 h-10 border-2 border-dark  p-[1px]"
                />
                <div className="ml-3">
                  <div className="text-sm text-gray-700">
                    Rifki
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-xs flex text-gray-400 mt-1">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 text-gray-700"
                      >
                        <path
                          d="M7.33325 5.33203H4.66659V3.9987H7.33325V5.33203Z"
                          fill="#3F3F46"
                        ></path>
                        <path
                          d="M4.66659 7.9987H7.33325V6.66537H4.66659V7.9987Z"
                          fill="#3F3F46"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.99992 1.9987C1.99992 1.63051 2.2984 1.33203 2.66659 1.33203H9.33325C9.70144 1.33203 9.99992 1.63051 9.99992 1.9987V11.9987H12.6666V6.66537H11.3333V5.33203H13.3333C13.7014 5.33203 13.9999 5.63051 13.9999 5.9987V11.9987H14.6666V13.332H1.33325V11.9987H1.99992V1.9987ZM3.33325 11.9987H8.66659V2.66536H3.33325V11.9987Z"
                          fill="#3F3F46"
                        />
                      </svg>
                      PT. Mega Finance
                    </div>
                    <div className="text-xs flex text-gray-400 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="mr-1 text-gray-700"
                        width={16}
                        height={16}
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.514 2.126a1 1 0 0 1 .972 0l9 5a1 1 0 0 1 0 1.748L20 9.7V16a1 1 0 0 1-.725.962l-2.275.65V21a1 1 0 1 1-2 0v-2.817l-2.725.779a1 1 0 0 1-.55 0l-7-2A1 1 0 0 1 4 16V9.7l-1.486-.826a1 1 0 0 1 0-1.748l9-5ZM17 15.53l1-.285V10.81l-1 .555v4.165Zm-2-3.054v3.626l-3 .857-6-1.714V10.81l5.514 3.063a1 1 0 0 0 .972 0L15 12.477Zm1.03-2.86-2.323-2.324a1 1 0 1 0-1.414 1.414l1.92 1.92L12 11.856 5.06 8 12 4.144 18.94 8l-2.91 1.617Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Menjadi Flutter Developer Expert
                    </div>
                    <div className="text-gray-400 flex">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-yellow-400"
                      >
                        <path
                          d="M8 0L10.2899 4.84829L15.6085 5.52786L11.7051 9.20385L12.7023 14.4721L8 11.8957L3.29772 14.4721L4.29494 9.20385L0.391548 5.52786L5.71015 4.84829L8 0Z"
                          fill=""
                        />
                      </svg>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-yellow-400"
                      >
                        <path
                          d="M8 0L10.2899 4.84829L15.6085 5.52786L11.7051 9.20385L12.7023 14.4721L8 11.8957L3.29772 14.4721L4.29494 9.20385L0.391548 5.52786L5.71015 4.84829L8 0Z"
                          fill=""
                        />
                      </svg>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-yellow-400"
                      >
                        <path
                          d="M8 0L10.2899 4.84829L15.6085 5.52786L11.7051 9.20385L12.7023 14.4721L8 11.8957L3.29772 14.4721L4.29494 9.20385L0.391548 5.52786L5.71015 4.84829L8 0Z"
                          fill=""
                        />
                      </svg>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-yellow-400"
                      >
                        <path
                          d="M8 0L10.2899 4.84829L15.6085 5.52786L11.7051 9.20385L12.7023 14.4721L8 11.8957L3.29772 14.4721L4.29494 9.20385L0.391548 5.52786L5.71015 4.84829L8 0Z"
                          fill=""
                        />
                      </svg>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-yellow-400"
                      >
                        <path
                          d="M8 0L10.2899 4.84829L15.6085 5.52786L11.7051 9.20385L12.7023 14.4721L8 11.8957L3.29772 14.4721L4.29494 9.20385L0.391548 5.52786L5.71015 4.84829L8 0Z"
                          fill=""
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-gray-700 mx-3 font-medium">
                Berkat kelas ini, saya jadi paham Flutter Clean Architecture
                sehingga akan sangat berguna untuk membuat project yang lebih
                baik lagi
              </div>
            </div>
            <div className="border md:w-[500px] rounded-md w-full sm:h-[300px] h-auto pb-6 border-gray-500">
              <div className="flex top-0 left-0 ml-3 mt-4 mb-3">
                <img
                  src="https://d17ivq9b7rppb3.cloudfront.net/small/avatar/202011091226000e301d7e9c1db767e47deb045385be55.png"
                  className="w-10 h-10 rounded-full p-[1px] border-2 border-dark dark:border-white"
                />
                <div className="ml-3">
                  <div className="text-sm text-gray-700">
                    Jason Pratama Sunarji, S. Kom
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-xs text-gray-400 mt-1 flex">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 text-gray-700"
                      >
                        <path
                          d="M7.33325 5.33203H4.66659V3.9987H7.33325V5.33203Z"
                          fill="#3F3F46"
                        ></path>
                        <path
                          d="M4.66659 7.9987H7.33325V6.66537H4.66659V7.9987Z"
                          fill="#3F3F46"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.99992 1.9987C1.99992 1.63051 2.2984 1.33203 2.66659 1.33203H9.33325C9.70144 1.33203 9.99992 1.63051 9.99992 1.9987V11.9987H12.6666V6.66537H11.3333V5.33203H13.3333C13.7014 5.33203 13.9999 5.63051 13.9999 5.9987V11.9987H14.6666V13.332H1.33325V11.9987H1.99992V1.9987ZM3.33325 11.9987H8.66659V2.66536H3.33325V11.9987Z"
                          fill="#3F3F46"
                        />
                      </svg>
                      PT. Flash Informatika Cemerlang
                    </div>
                    <div className="text-xs text-gray-400 mt-1 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="mr-1 text-gray-700"
                        width={16}
                        height={16}
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.514 2.126a1 1 0 0 1 .972 0l9 5a1 1 0 0 1 0 1.748L20 9.7V16a1 1 0 0 1-.725.962l-2.275.65V21a1 1 0 1 1-2 0v-2.817l-2.725.779a1 1 0 0 1-.55 0l-7-2A1 1 0 0 1 4 16V9.7l-1.486-.826a1 1 0 0 1 0-1.748l9-5ZM17 15.53l1-.285V10.81l-1 .555v4.165Zm-2-3.054v3.626l-3 .857-6-1.714V10.81l5.514 3.063a1 1 0 0 0 .972 0L15 12.477Zm1.03-2.86-2.323-2.324a1 1 0 1 0-1.414 1.414l1.92 1.92L12 11.856 5.06 8 12 4.144 18.94 8l-2.91 1.617Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Belajar Fundamental Aplikasi Flutter
                    </div>
                    <div className="text-gray-400 flex">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-yellow-400"
                      >
                        <path
                          d="M8 0L10.2899 4.84829L15.6085 5.52786L11.7051 9.20385L12.7023 14.4721L8 11.8957L3.29772 14.4721L4.29494 9.20385L0.391548 5.52786L5.71015 4.84829L8 0Z"
                          fill=""
                        />
                      </svg>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-yellow-400"
                      >
                        <path
                          d="M8 0L10.2899 4.84829L15.6085 5.52786L11.7051 9.20385L12.7023 14.4721L8 11.8957L3.29772 14.4721L4.29494 9.20385L0.391548 5.52786L5.71015 4.84829L8 0Z"
                          fill=""
                        />
                      </svg>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-yellow-400"
                      >
                        <path
                          d="M8 0L10.2899 4.84829L15.6085 5.52786L11.7051 9.20385L12.7023 14.4721L8 11.8957L3.29772 14.4721L4.29494 9.20385L0.391548 5.52786L5.71015 4.84829L8 0Z"
                          fill=""
                        />
                      </svg>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-yellow-400"
                      >
                        <path
                          d="M8 0L10.2899 4.84829L15.6085 5.52786L11.7051 9.20385L12.7023 14.4721L8 11.8957L3.29772 14.4721L4.29494 9.20385L0.391548 5.52786L5.71015 4.84829L8 0Z"
                          fill=""
                        />
                      </svg>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-yellow-400"
                      >
                        <path
                          d="M8 0L10.2899 4.84829L15.6085 5.52786L11.7051 9.20385L12.7023 14.4721L8 11.8957L3.29772 14.4721L4.29494 9.20385L0.391548 5.52786L5.71015 4.84829L8 0Z"
                          fill=""
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-gray-700 mx-3 font-medium">
                Rekomendasi banget nih kelas nya buat yang ingin belajar membuat
                aplikasi multi platform, karena dikelas ini dikumpas tuntas
                tentang pembuata aplikasi di sisi android dan sisi dari iphone
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
