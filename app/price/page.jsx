"use client";
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <>
      <Navbar/>
      <div className="w-full  h-auto my-32 md:my-72 flex-col-reverse text-dark md:flex md:flex-row gap-5 flex md:gap-4 items-center px-10 md:px-32 ">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold md:w-[90%]">
            Lebih Paham dengan lopercourse, Murah dan Terpercaya
          </h1>
          <p className="font-medium text-base md:w-[80%]">
            Bebas lakukan apa saja bersama lopercourse course terbaik di
            Indonesia. Lebih fleksibel, lebih cepat, dan lebih punya power.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="#daftar"
              className="flex items-center justify-center md:w-52 h-12 md:h-10 bg-slate-800  transition-all duration-300 ease-out rounded-md text-white shadow-lg font-semibold"
            >
              Pilih Sekarang
            </a>
            <span className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 24"
                aria-label="check"
                role="presentation"
                className="h-icon-success"
                style={{ width: 12, height: 24 }}
                data-v-0be99a4e=""
              >
                <g>
                  <path
                    d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                    data-v-165629f9=""
                  />
                </g>
              </svg>
              <p className="text-sm font-medium">
                Jaminan 30 hari uang kembali
              </p>
            </span>
          </div>
        </div>
        <div className="flex md:w-[800px] md:h-[300px] items-center">
          <img
            src="https://www.themeum.com/wp-content/uploads/tutor-landing/institutions-2x.png"
            alt=""
          />
        </div>
      </div>
      <span
        id="daftar"
        className="px-10 mt-10 text-4xl  text-dark font-bold text-center flex justify-center items-center"
      >
        Daftar Harga lopercourse
      </span>
      <div className="mt-32 px-10 md:px-32">
        <div className="flex  gap-5 mb-10 lg:flex-row  flex-col items-center justify-center  text-dark">
          <div className="rounded-md lg:w-[264px] w-full lg:h-[500px] border border-dark/10 ">
            <div className="flex flex-col mx-5 my-7 gap-5">
              <span className="font-semibold text-2xl">Back-end dev</span>
              <div className="flex flex-col gap-3">
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  6 modul
                </div>
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  Sertifikat
                </div>
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  Forum Diskusi
                </div>
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  Code Review
                </div>
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  Ujian
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-base text-gray-400 line-through">
                  Rp500.000
                </span>
                <button className="flex items-center justify-center bg-dark/80 text-white w-32 h-10 rounded-3xl font-bold">
                  Diskon 50%
                </button>
              </div>
              <h1 className="flex items-center font-normal">
                Rp<p className="text-3xl font-bold">250.000</p>/bln
              </h1>
              <button
                className="w-full h-12 bg-dark  text-white text-xl font-semibold rounded-md"
                onclick="back()"
              >
                Beli Sekarang
              </button>
            </div>
          </div>
          <div className="rounded-md lg:w-[264px] relative w-full lg:h-[500px] border border-dark/10">
            <button className=" bg-dark font-semibold left-0 right-0 mx-auto -top-4 text-white rounded-full cursor-default h-10 w-56 absolute">
              Rekomendasi
            </button>
            <div className="flex flex-col mx-5 my-7 gap-5">
              <span className="font-semibold text-2xl">Front-end dev</span>
              <div className="flex flex-col gap-3">
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  6 modul
                </div>
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  Sertifikat
                </div>
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  Forum Diskusi
                </div>
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  Code Review
                </div>
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  Ujian
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-base text-gray-400 line-through">
                  Rp289.000
                </span>
                <button className="flex items-center justify-center bg-dark/80  text-white w-32 h-10 rounded-3xl font-bold">
                  Diskon 55%
                </button>
              </div>
              <h1 className="flex items-center font-normal">
                Rp<p className="text-3xl font-bold">129.000</p>/bln
              </h1>
              <button
                onclick="back1()"
                className="w-full h-12 bg-dark text-white text-xl font-semibold rounded-md"
              >
                Beli Sekarang
              </button>
            </div>
          </div>
          <div className="rounded-md lg:w-[264px] w-full lg:h-[500px] border border-dark/10 ">
            <div className="flex flex-col mx-5 my-7 gap-5">
              <span className="font-semibold text-2xl">Android dev</span>
              <div className="flex flex-col gap-3">
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  6 modul
                </div>
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  Sertifikat
                </div>
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  Forum Diskusi
                </div>
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  Code Review
                </div>
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  Ujian
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-base text-gray-400 line-through">
                  Rp579.000
                </span>
                <button className="flex items-center justify-center bg-dark/80  text-white w-32 h-10 rounded-3xl font-bold">
                  Diskon 68%
                </button>
              </div>
              <h1 className="flex items-center font-normal">
                Rp<p className="text-3xl font-bold">187.900</p>/bln
              </h1>
              <button
                onclick="back2()"
                className="w-full h-12 bg-dark text-white  text-xl font-semibold rounded-md"
              >
                Beli Sekarang
              </button>
            </div>
          </div>
          <div className="rounded-md lg:w-[264px] w-full  lg:h-[500px] border border-dark/10 ">
            <div className="flex flex-col mx-5 my-7 gap-5">
              <span className="font-semibold text-2xl">MultiPlatform dev</span>
              <div className="flex flex-col gap-3">
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  6 modul
                </div>
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  Sertifikat
                </div>
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  Forum Diskusi
                </div>
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  Code Review
                </div>
                <div className="font-medium gap-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    className="h-icon-success"
                    style={{ width: 12, height: 24 }}
                    data-v-0be99a4e=""
                  >
                    <g>
                      <path
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                        data-v-165629f9=""
                      />
                    </g>
                  </svg>
                  Ujian
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-base text-gray-400 line-through">
                  Rp723.000
                </span>
                <button className="flex items-center justify-center bg-dark/80 text-white w-32 h-10 rounded-3xl font-bold">
                  Diskon 68%
                </button>
              </div>
              <h1 className="flex items-center font-normal">
                Rp<p className="text-3xl font-bold">231.900</p>/bln
              </h1>
              <button
                onclick="back3()"
                className="w-full h-12 bg-dark text-white text-xl  font-semibold rounded-md"
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className="w-full px-10  bg-dark text-white py-32 flex items-center justify-center">
        <div className="flex gap-1 flex-wrap md:flex-nowrap">
          <div className="w-full md:w-[900px]">
            <img
              src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-hero.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-9 mt-10 md:mt-0 md:px-32">
            <div className="flex flex-col gap-5">
              <span className="font-bold text-3xl ">
                Mau kelas Paling Murah? Ya, Pilih Front-end dev!
              </span>
              <span className="font-medium text-base md:w-[60%]">
                Tampil beda dengan Front-End. Selalu tersedia kapan pun Anda
                ingin berlangganan.
              </span>
            </div>
            <div className="flex flex-col gap-5 ">
              <span className="font-semibold text-2xl ">
                Beda dari yang lain
              </span>
              <span className="font-medium text-base md:w-[80%]">
                dengan Front-End bikin website atau Freelancer online Anda makin
                unik, menonjol, dan terlihat berbeda dari yang lain, karna anda
                belajar di lopercourse.
              </span>
            </div>
            <div className="flex flex-col gap-5 ">
              <span className="font-semibold text-2xl ">
                Harga yang bersahabat
              </span>
              <span className="font-medium text-base md:w-[80%]">
                Peluang ketersediaan Front-End masih tinggi dan bisa jadi
                alternatif murah dari daripada lain. buat website anda sendiri.
              </span>
            </div>
          </div>
        </div>
      </main>
     <Footer/>
      {/* Pop Up Pricing*/}
      <div className="max-w-2xl mx-auto">
        <div
          id="popup"
          className="hidden  overflow-x-hidden backdrop-blur-md w-full bg-black/30 overflow-y-auto fixed md:h-full top-0 bottom-0 left-0 right-0 z-50  flex-col justify-center items-center"
        >
          <div className="relative w-screen md:w-max px-4 flex gap-6 flex-col overflow-hidden h-screen md:mt-0 mt-[10vh] md:h-auto">
            <span
              className="fixed md:right-10 right-3 cursor-pointer top-3 md:top-10"
              onclick="cancel()"
            >
              <svg
                aria-label="Close"
                className="x1lliihq x1n2onr6"
                color="rgb(255, 255, 255)"
                fill="rgb(255, 255, 255)"
                height={24}
                role="img"
                viewBox="0 0 24 24"
                width={24}
              >
                <title>Close</title>
                <polyline
                  fill="none"
                  points="20.643 3.357 12 12 3.353 20.647"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                />
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  x1="20.649"
                  x2="3.354"
                  y1="20.649"
                  y2="3.354"
                />
              </svg>
            </span>
            <div className="w-auto md:w-[500px] rounded-lg h-auto md:h-[400px]  bg-white">
              <div>
                <img
                  src="../assets/img/back-end-devloper.jpg"
                  alt=""
                  className=" h-[200px] w-screen object-cover bg-cover bg-center rounded-t-lg"
                />
              </div>
              <div className="flex gap-6 flex-col px-2 pb-4 md:pb-0">
                <div className="flex justify-between mt-3 md:mt-9 items-center px-2">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Back-end devloper
                  </h1>
                  <p className="text-xl font-semibold text-gray-900">250.000</p>
                </div>
                <p className="text-base font-medium text-gray-800 px-2">
                  Kurikulum disusun oleh Lopercourse bersama Google Kurikulum
                  disusun oleh lopercourse bersama AWS beserta pelaku industri
                  Back-End Development.
                </p>
              </div>
            </div>
            <div
              id="master"
              className=" w-auto md:w-[500px] rounded-lg h-auto py-3 flex flex-col gap-3 px-3 bg-white"
            >
              <span className="text-xl font-semibold text-gray-900">
                {" "}
                Pilih Metode pembayaran
              </span>
              <div className="flex justify-center sm:justify-between px-0 sm:px-10 sm:gap-0 gap-7 py-3 font-semibold">
                <span
                  onclick="lanjutBeli()"
                  className="cursor-pointer flex flex-col justify-center items-center gap-1 w-[50px] "
                >
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <p>DANA</p>
                </span>
                <span
                  onclick="lanjutBeli()"
                  className="cursor-pointer flex flex-col justify-center items-center gap-1 w-[50px] "
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174861.png?w=740&t=st=1685084425~exp=1685085025~hmac=181d6317deb94ea7767798a5a125638eff84ef0f28ff131927d6642282b36d9b"
                    alt=""
                  />
                  <p>PAYPAL</p>
                </span>
                <span
                  onclick="lanjutBeli()"
                  className="cursor-pointer flex flex-col justify-center items-center gap-1 w-[50px]"
                >
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <p>GOPAY</p>
                </span>
                <span
                  onclick="lanjutBeli()"
                  className=" flex flex-col justify-center items-center gap-1 rounded-full cursor-pointer w-[50px]"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8KNi3q3GQX2xVqPvqKUcFl7L_ku9gxmcaKQ&usqp=CAU"
                    alt=""
                  />
                  <p>OVO</p>
                </span>
              </div>
            </div>
            <div id="lanjutkan" className="hidden ">
              <div className="w-auto md:w-[500px] py-3 px-3 flex flex-col gap-4 rounded-lg h-auto  bg-white">
                <p className="text-lg font-medium text-gray-700">
                  Masukan Pin Anda
                </p>
                <div>
                  <div className="flex border border-dark rounded-lg">
                    <input
                      type="password"
                      id="password"
                      className="w-full rounded-lg text-sm  p-3 focus:outline-none"
                      placeholder="Masukan Pin Anda"
                    />
                  </div>
                  <p
                    className="text-pink-600 font-medium text-sm"
                    id="pin-alert"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    onclick="downloadback()"
                    className="bg-dark h-10 w-32 flex items-center justify-center text-sm font-semibold rounded-md text-white"
                  >
                    Pay Rp250.000
                  </button>
                  <button
                    onclick="cancel()"
                    className="bg-white border-4 border-dark h-10 w-32 flex items-center justify-center text-sm font-semibold rounded-md text-dark"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div
          id="popup2"
          className="hidden overflow-x-hidden backdrop-blur-md w-full bg-black/30 overflow-y-auto fixed md:h-full top-0 bottom-0 left-0 right-0 z-50  flex-col justify-center items-center"
        >
          <div className="relative w-screen md:w-max px-4 flex gap-6 flex-col overflow-hidden h-screen md:mt-0 mt-[10vh] md:h-auto">
            <span
              className="fixed md:right-10 right-3 cursor-pointer top-3 md:top-10"
              onclick="cancel()"
            >
              <svg
                aria-label="Close"
                className="x1lliihq x1n2onr6"
                color="rgb(255, 255, 255)"
                fill="rgb(255, 255, 255)"
                height={24}
                role="img"
                viewBox="0 0 24 24"
                width={24}
              >
                <title>Close</title>
                <polyline
                  fill="none"
                  points="20.643 3.357 12 12 3.353 20.647"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                />
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  x1="20.649"
                  x2="3.354"
                  y1="20.649"
                  y2="3.354"
                />
              </svg>
            </span>
            <div className="w-auto md:w-[500px] rounded-lg h-auto md:h-[400px]  bg-white">
              <div>
                <img
                  src="../assets/img/front-end-devloper.jpg"
                  alt=""
                  className=" h-[200px] w-screen object-cover bg-cover bg-center rounded-t-lg"
                />
              </div>
              <div className="flex gap-6 flex-col px-2 pb-4 md:pb-0">
                <div className="flex justify-between mt-3 md:mt-9 items-center px-2">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Front-end devloper
                  </h1>
                  <p className="text-xl font-semibold text-gray-900">129.000</p>
                </div>
                <p className="text-base font-medium text-gray-800 px-2">
                  Kurikulum disusun oleh Lopercourse bersama Google Kurikulum
                  disusun oleh lopercourse bersama AWS beserta pelaku industri
                  Front-End Development.
                </p>
              </div>
            </div>
            <div
              id="master2"
              className=" w-auto md:w-[500px] rounded-lg h-auto py-3 flex flex-col gap-3 px-3 bg-white"
            >
              <span className="text-xl font-semibold text-gray-900">
                {" "}
                Pilih Metode pembayaran
              </span>
              <div className="flex justify-center sm:justify-between px-0 sm:px-10 sm:gap-0 gap-7 py-3 font-semibold">
                <span
                  onclick="lanjutBeli()"
                  className="cursor-pointer flex flex-col justify-center items-center gap-1 w-[50px] "
                >
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <p>DANA</p>
                </span>
                <span
                  onclick="lanjutBeli()"
                  className="cursor-pointer flex flex-col justify-center items-center gap-1 w-[50px] "
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174861.png?w=740&t=st=1685084425~exp=1685085025~hmac=181d6317deb94ea7767798a5a125638eff84ef0f28ff131927d6642282b36d9b"
                    alt=""
                  />
                  <p>PAYPAL</p>
                </span>
                <span
                  onclick="lanjutBeli()"
                  className="cursor-pointer flex flex-col justify-center items-center gap-1 w-[50px]"
                >
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <p>GOPAY</p>
                </span>
                <span
                  onclick="lanjutBeli()"
                  className=" flex flex-col justify-center items-center gap-1 rounded-full cursor-pointer w-[50px]"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8KNi3q3GQX2xVqPvqKUcFl7L_ku9gxmcaKQ&usqp=CAU"
                    alt=""
                  />
                  <p>OVO</p>
                </span>
              </div>
            </div>
            <div id="lanjutkan2" className="hidden ">
              <div className="w-auto md:w-[500px] py-3 px-3 flex flex-col gap-4 rounded-lg h-auto  bg-white">
                <p className="text-lg font-medium text-gray-700">
                  Masukan Pin Anda
                </p>
                <div>
                  <div className="flex border border-dark rounded-lg">
                    <input
                      type="password"
                      id="password2"
                      className="w-full rounded-lg text-sm  p-3 focus:outline-none"
                      placeholder="Masukan Pin Anda"
                    />
                  </div>
                  <p
                    className="text-pink-600 font-medium text-sm"
                    id="pin-alert2"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    onclick="downloadfront()"
                    className="bg-dark h-10 w-32 flex items-center justify-center text-sm font-semibold rounded-md text-white"
                  >
                    Pay Rp250.000
                  </button>
                  <button
                    onclick="cancel()"
                    className="bg-white border-4 border-dark h-10 w-32 flex items-center justify-center text-sm font-semibold rounded-md text-dark"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div
          id="popup3"
          className="hidden overflow-x-hidden backdrop-blur-md w-full bg-black/30 overflow-y-auto fixed md:h-full top-0 bottom-0 left-0 right-0 z-50  flex-col justify-center items-center"
        >
          <div className="relative w-screen md:w-max px-4 flex gap-6 flex-col overflow-hidden h-screen md:mt-0 mt-[10vh] md:h-auto">
            <span
              className="fixed md:right-10 right-3 cursor-pointer top-3 md:top-10"
              onclick="cancel()"
            >
              <svg
                aria-label="Close"
                className="x1lliihq x1n2onr6"
                color="rgb(255, 255, 255)"
                fill="rgb(255, 255, 255)"
                height={24}
                role="img"
                viewBox="0 0 24 24"
                width={24}
              >
                <title>Close</title>
                <polyline
                  fill="none"
                  points="20.643 3.357 12 12 3.353 20.647"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                />
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  x1="20.649"
                  x2="3.354"
                  y1="20.649"
                  y2="3.354"
                />
              </svg>
            </span>
            <div className="w-auto md:w-[500px] rounded-lg h-auto md:h-[400px]  bg-white">
              <div>
                <img
                  src="../assets/img/mobile-devloper.jpg"
                  alt=""
                  className=" h-[200px] w-screen object-cover bg-cover bg-center rounded-t-lg"
                />
              </div>
              <div className="flex gap-6 flex-col px-2 pb-4 md:pb-0">
                <div className="flex justify-between mt-3 md:mt-9 items-center px-2">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Android devloper
                  </h1>
                  <p className="text-xl font-semibold text-gray-900">187.000</p>
                </div>
                <p className="text-base font-medium text-gray-800 px-2">
                  Kurikulum didesain dengan persetujuan dari Tim Google Android
                  untuk mempersiapkan developer Android standar Global.
                </p>
              </div>
            </div>
            <div
              id="master3"
              className=" w-auto md:w-[500px] rounded-lg h-auto py-3 flex flex-col gap-3 px-3 bg-white"
            >
              <span className="text-xl font-semibold text-gray-900">
                {" "}
                Pilih Metode pembayaran
              </span>
              <div className="flex justify-center sm:justify-between px-0 sm:px-10 sm:gap-0 gap-7 py-3 font-semibold">
                <span
                  onclick="lanjutBeli()"
                  className="cursor-pointer flex flex-col justify-center items-center gap-1 w-[50px] "
                >
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <p>DANA</p>
                </span>
                <span
                  onclick="lanjutBeli()"
                  className="cursor-pointer flex flex-col justify-center items-center gap-1 w-[50px] "
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174861.png?w=740&t=st=1685084425~exp=1685085025~hmac=181d6317deb94ea7767798a5a125638eff84ef0f28ff131927d6642282b36d9b"
                    alt=""
                  />
                  <p>PAYPAL</p>
                </span>
                <span
                  onclick="lanjutBeli()"
                  className="cursor-pointer flex flex-col justify-center items-center gap-1 w-[50px]"
                >
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <p>GOPAY</p>
                </span>
                <span
                  onclick="lanjutBeli()"
                  className=" flex flex-col justify-center items-center gap-1 rounded-full cursor-pointer w-[50px]"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8KNi3q3GQX2xVqPvqKUcFl7L_ku9gxmcaKQ&usqp=CAU"
                    alt=""
                  />
                  <p>OVO</p>
                </span>
              </div>
            </div>
            <div id="lanjutkan3" className="hidden ">
              <div className="w-auto md:w-[500px] py-3 px-3 flex flex-col gap-4 rounded-lg h-auto  bg-white">
                <p className="text-lg font-medium text-gray-700">
                  Masukan Pin Anda
                </p>
                <div>
                  <div className="flex border border-dark rounded-lg">
                    <input
                      type="password"
                      id="password3"
                      className="w-full rounded-lg text-sm  p-3 focus:outline-none"
                      placeholder="Masukan Pin Anda"
                    />
                  </div>
                  <p
                    className="text-pink-600 font-medium text-sm"
                    id="pin-alert3"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    onclick="downloadandroid()"
                    className="bg-dark h-10 w-32 flex items-center justify-center text-sm font-semibold rounded-md text-white"
                  >
                    Pay Rp250.000
                  </button>
                  <button
                    onclick="cancel()"
                    className="bg-white border-4 border-dark h-10 w-32 flex items-center justify-center text-sm font-semibold rounded-md text-dark"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div
          id="popup4"
          className="hidden overflow-x-hidden backdrop-blur-md w-full bg-black/30 overflow-y-auto fixed md:h-full top-0 bottom-0 left-0 right-0 z-50  flex-col justify-center items-center"
        >
          <div className="relative w-screen md:w-max px-4 flex gap-6 flex-col overflow-hidden h-screen md:mt-0 mt-[10vh] md:h-auto">
            <span
              className="fixed md:right-10 right-3 cursor-pointer top-3 md:top-10"
              onclick="cancel()"
            >
              <svg
                aria-label="Close"
                className="x1lliihq x1n2onr6"
                color="rgb(255, 255, 255)"
                fill="rgb(255, 255, 255)"
                height={24}
                role="img"
                viewBox="0 0 24 24"
                width={24}
              >
                <title>Close</title>
                <polyline
                  fill="none"
                  points="20.643 3.357 12 12 3.353 20.647"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                />
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  x1="20.649"
                  x2="3.354"
                  y1="20.649"
                  y2="3.354"
                />
              </svg>
            </span>
            <div className="w-auto md:w-[500px] rounded-lg h-auto md:h-[400px]  bg-white">
              <div>
                <img
                  src="../assets/img/desktop-devloper.jpg"
                  alt=""
                  className=" h-[200px] w-screen object-cover bg-cover bg-center rounded-t-lg"
                />
              </div>
              <div className="flex gap-6 flex-col px-2 pb-4 md:pb-0">
                <div className="flex justify-between mt-3 md:mt-9 items-center px-2">
                  <h1 className="text-2xl font-bold text-gray-900">
                    MultiPlatform devloper
                  </h1>
                  <p className="text-xl font-semibold text-gray-900">231.000</p>
                </div>
                <p className="text-base font-medium text-gray-800 px-2">
                  Kurikulum disusun oleh Lopercourse bersama Google beserta
                  pelaku industri Multi-Platform App Development.
                </p>
              </div>
            </div>
            <div
              id="master4"
              className=" w-auto md:w-[500px] rounded-lg h-auto py-3 flex flex-col gap-3 px-3 bg-white"
            >
              <span className="text-xl font-semibold text-gray-900">
                {" "}
                Pilih Metode pembayaran
              </span>
              <div className="flex justify-center sm:justify-between px-0 sm:px-10 sm:gap-0 gap-7 py-3 font-semibold">
                <span
                  onclick="lanjutBeli()"
                  className="cursor-pointer flex flex-col justify-center items-center gap-1 w-[50px] "
                >
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <p>DANA</p>
                </span>
                <span
                  onclick="lanjutBeli()"
                  className="cursor-pointer flex flex-col justify-center items-center gap-1 w-[50px] "
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174861.png?w=740&t=st=1685084425~exp=1685085025~hmac=181d6317deb94ea7767798a5a125638eff84ef0f28ff131927d6642282b36d9b"
                    alt=""
                  />
                  <p>PAYPAL</p>
                </span>
                <span
                  onclick="lanjutBeli()"
                  className="cursor-pointer flex flex-col justify-center items-center gap-1 w-[50px]"
                >
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <p>GOPAY</p>
                </span>
                <span
                  onclick="lanjutBeli()"
                  className=" flex flex-col justify-center items-center gap-1 rounded-full cursor-pointer w-[50px]"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8KNi3q3GQX2xVqPvqKUcFl7L_ku9gxmcaKQ&usqp=CAU"
                    alt=""
                  />
                  <p>OVO</p>
                </span>
              </div>
            </div>
            <div id="lanjutkan4" className="hidden ">
              <div className="w-auto md:w-[500px] py-3 px-3 flex flex-col gap-4 rounded-lg h-auto  bg-white">
                <p className="text-lg font-medium text-gray-700">
                  Masukan Pin Anda
                </p>
                <div>
                  <div className="flex border border-dark rounded-lg">
                    <input
                      type="password"
                      id="password4"
                      className="w-full rounded-lg text-sm  p-3 focus:outline-none"
                      placeholder="Masukan Pin Anda"
                    />
                  </div>
                  <p
                    className="text-pink-600 font-medium text-sm"
                    id="pin-alert4"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    onclick="downloadmulti()"
                    className="bg-dark h-10 w-32 flex items-center justify-center text-sm font-semibold rounded-md text-white"
                  >
                    Pay Rp250.000
                  </button>
                  <button
                    onclick="cancel()"
                    className="bg-white border-4 border-dark h-10 w-32 flex items-center justify-center text-sm font-semibold rounded-md text-dark"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
