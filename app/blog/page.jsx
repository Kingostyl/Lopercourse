/* eslint-disable @next/next/no-img-element */
"use client";
import Navbar from "..//components/navbar";
import Footer from "../components/footer";
import { useEffect } from "react";
// import homepage from "../../img/homepage-hero-ae-2x-d1a19c.webp";

const Blog = () => {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <>
    <Navbar/>
  <div className="bg-slate-50  h-auto mb-40 mt-24 py-16 w-full px-10 md:px-32   flex-col md:flex items-center justify-center">
    <div className="flex-col flex items-center md:items-start  justify-center md:gap-0 gap-9">
      <div className="md:flex md:flex-row flex items-center md:gap-0 gap-3 flex-col">
        <div className="flex flex-col md:items-start items-center gap-3">
          <h1 className="font-bold text-center md:text-start text-xl md:text-3xl md:w-[70%]">
            Kami membimbing murid kami untuk membangun karirnya.{" "}
          </h1>
          <a
            href="#blog"
            className=" py-0  flex justify-center items-center  bg-dark w-32 h-9 text-white rounded-md font-semibold"
          >
            Lihat Blog
          </a>
        </div>
        <div className="mt-6 md:mt-0">
          {/* <Image
            src={homepage}
            alt=""
            className="md:w-[800px]"
          /> */}
        </div>
      </div>
    </div>
  </div>
  <main className="my-32 md:px-20 px-10  bg-white">
    <span className="font-bold text-3xl" id="blog">
      Lastest Blog
    </span>
    <div className="mt-20">
      <div className="flex-wrap flex gap-10 justify-center">
        <div className="w-96 gap-3 flex flex-col ">
          <img
            src="https://uploads-ssl.webflow.com/62fb5342f9c8ec6f21844b32/646469657594894b572625b6_mengenal-lebih-dalam-tentang-framework-javascript.jpg"
            alt=""
            className="rounded-lg w-96 h-[192px]"
          />
          <span className="font-semibold text-xl hover:underline transition-all ease-in-out cursor-pointer duration-300">
            <a href="/dist/bloger/Mengenal-Framework-JavaScript.html">
              Mengenal Framework JavaScript
            </a>
          </span>
          <p className="text-base font-medium cursor-pointer hover:no-underline">
            Bagi para programmer, tentu tidak asing dengan istilah framework
            JavaScript...
          </p>
        </div>
        <div className="w-96 gap-3 flex flex-col ">
          <img
            src="https://images.unsplash.com/photo-1631031509251-62a73758f9d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1439&q=80"
            alt=""
            className="rounded-lg w-96 h-[192px] object-cover"
          />
          <span className="font-semibold text-xl hover:underline transition-all ease-in-out cursor-pointer duration-300">
            <a href="/dist/bloger/Mengungkap Insight-yang-Tersembunyi.html">
              Mengungkap Insight yang Tersembunyi
            </a>
          </span>
          <p className="text-base font-medium cursor-pointer hover:no-underline">
            Perkembangan teknologi di masa-masa modern membuat berbagai bisnis
            melibatkan....
          </p>
        </div>
        <div className="w-96 gap-3 flex flex-col ">
          <img
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt=""
            className="rounded-lg w-96 h-[192px] object-cover"
          />
          <span className="font-semibold text-xl hover:underline transition-all ease-in-out cursor-pointer duration-300">
            <a href="/dist/bloger/Definisi-Teknik-dan-Aplikasi.html">
              Definisi, Teknik, dan Aplikasi
            </a>
          </span>
          <p className="text-base font-medium cursor-pointer hover:no-underline">
            Perkembangan dan tren Artificial Intelligence atau kecerdasan buatan
            mampu memberikan ....
          </p>
        </div>
        <div className="w-96 gap-3 flex flex-col ">
          <img
            src="https://uploads-ssl.webflow.com/62fb5342f9c8ec6f21844b32/6458ab5d28a7f33d06232688_memahami-dasar-dasar-react-js-untuk-web-development-p-500.jpg"
            alt=""
            className="rounded-lg w-96 h-[192px] object-cover"
          />
          <span className="font-semibold text-xl hover:underline transition-all ease-in-out cursor-pointer duration-300">
            <a href="/dist/bloger/Memahami-Dasar-dasar-React-JS.html">
              Memahami Dasar-dasar React JS
            </a>
          </span>
          <p className="text-base font-medium cursor-pointer hover:no-underline">
            Saat mempelajari proses pengembangan website, tentu ada beberapa
            bahasa pemrograman...
          </p>
        </div>
        <div className="w-96 gap-3 flex flex-col ">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="rounded-lg w-96 h-[192px] object-cover"
          />
          <span className="font-semibold text-xl hover:underline transition-all ease-in-out cursor-pointer duration-300">
            <a href="/dist/bloger/Perbedaan-Front-End-dengan-Back-End.html">
              Perbedaan Front-End dengan Back-End
            </a>
          </span>
          <p className="text-base font-medium cursor-pointer hover:no-underline">
            Web development adalah proses membangun dan memelihara website. Ada
            banyak peran dan...
          </p>
        </div>
        <div className="w-96 gap-3 flex flex-col ">
          <img
            src="https://uploads-ssl.webflow.com/62fb5342f9c8ec6f21844b32/643eee5b6a8c3f69e8309d87_tren-dan-prediksi-masa-depan-artificial-intelligence.jpg"
            alt=""
            className="rounded-lg w-96 h-[192px] object-cover"
          />
          <span className="font-semibold text-xl hover:underline transition-all ease-in-out cursor-pointer duration-300">
            <a href="/dist/bloger/tren-prediksiAi.html">
              Tren dan Prediksi Masa Depan A.I
            </a>
          </span>
          <p className="text-base font-medium cursor-pointer hover:no-underline">
            Teknologi yang berkembang pesat membuat banyak temuan baru yang...
          </p>
        </div>
        <div className="w-96 gap-3 flex flex-col ">
          <img
            src="https://uploads-ssl.webflow.com/62fb5342f9c8ec6f21844b32/62fb5342f9c8ec6add844b4f_woman.jpg"
            alt=""
            className="rounded-lg w-96 h-[192px] object-cover"
          />
          <span className="font-semibold text-xl hover:underline transition-all ease-in-out cursor-pointer duration-300">
            <a href="/dist/bloger/mengapa-harus.html">
              Mengapa Kamu Harus Belajar Web Development
            </a>
          </span>
          <p className="text-base font-medium cursor-pointer hover:no-underline">
            Jika kamu bekerja di industri teknologi, seorang pengusaha, atau
            hanya seorang penggemar...
          </p>
        </div>
        <div className="w-96 gap-3 flex flex-col ">
          <img
            src="https://uploads-ssl.webflow.com/62fb5342f9c8ec6f21844b32/6449439310cb496fe0f1af4b_mengenal-pemrograman-r-untuk-analisis-statistik-p-500.jpg"
            alt=""
            className="rounded-lg w-96 h-[192px] object-cover"
          />
          <span className="font-semibold text-xl hover:underline transition-all ease-in-out cursor-pointer duration-300">
            <a href="/dist/bloger/mengenal-pemrograman.html">
              Mengenal Pemrograman R untuk Analisis Statistik
            </a>
          </span>
          <p className="text-base font-medium cursor-pointer hover:no-underline">
            Tantangan bisnis di era teknologi yang mulai berkembang sangat cepat
            membuat beberapa...
          </p>
        </div>
        <div className="w-96 gap-3 flex flex-col ">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="rounded-lg w-96 h-[192px] object-cover"
          />
          <span className="font-semibold text-xl hover:underline transition-all ease-in-out cursor-pointer duration-300">
            <a href="/dist/bloger/5-pekerjaan-IT.html">
              5 Pekerjaan IT Dengan Prospek Cerah di Masa Depan
            </a>
          </span>
          <p className="text-base font-medium cursor-pointer hover:no-underline">
            Pada era digital seperti sekarang, pekerjaan di bidang IT semakin
            diminati oleh banyak orang...
          </p>
        </div>
      </div>
    </div>
  </main>
  <Footer/>
</>

  )}


export default Blog;