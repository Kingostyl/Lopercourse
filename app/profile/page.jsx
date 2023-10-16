"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import Dexie from 'dexie'; 

export default function Profile() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    import("preline");
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const dataURL = event.target.result;
  
        // Membuat dan menginisialisasi database
        const db = new Dexie('myDatabase');
        db.version(1).stores({ images: '++id, image' });
  
        // Mengecek koneksi database dan menambahkan gambar
        db.open().then(() => {
          db.images.add({ image: dataURL }).then(() => {
            setSelectedImage(dataURL);
          }).catch((error) => {
            console.error('Gagal menambahkan gambar ke database:', error);
          });
        });
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap lg:flex-nowrap px-4 mt-28 md:px-20 gap-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full md:w-[1000px] h-auto rounded-lg bg-white">
            <div className="h-[250px] relative rounded-t-lg bg-[url('https://wallpapershome.com/images/pages/pic_h/24640.jpg')] px-3  bg-center bg-cover bg-no-repeat flex items-center justify-center md:justify-start">
              <label htmlFor="input-file" className="absolute top-[70%]">
                {/* <img
                  id="profile-pic"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt=""
                  className="w-[150px] border-[5px] h-[150px] rounded-full border-white"
                /> */}
                <input
                  type="file" 
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                {selectedImage && <img src={selectedImage} alt="Uploaded"   className="w-[150px] border-[5px] h-[150px] rounded-full border-white object-cover" />}
              </label>
            </div>
            <div className="mt-28 px-3 flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Jhon Miles</h1>
              <div className="flex gap-3">
                <p>🇺🇸</p>
                <p className="font-medium tax-lg text-gray-500">
                  Los angles, United Sates
                </p>
              </div>
              <div className="flex-col md:flex-row md:flex gap-2">
                <h1 className="font-medium">@milles</h1>
                <h1 className="font-bold text-gray-600">.</h1>
                <h1 className="font-medium">New Junior Devloper</h1>
                <h1 className="font-bold text-gray-600">.</h1>
                <h1 className="font-medium">Just Holiday</h1>
              </div>
              <button className="flex mb-3 items-center justify-center bg-dark text-white w-36 gap-2 h-12 rounded-lg">
                <i className="fa-solid fa-share" style={{ color: "#ffffff" }} />
                Kirim Tautan
              </button>
            </div>
          </div>
          <div className="w-full md:w-[1000px] px-5 h-auto py-3 flex gap-3 flex-col rounded-lg bg-white">
            <h1 className="font-bold text-2xl">Skils</h1>
            <div className="flex-wrap flex gap-4 md:w-[60%] items-center ">
              <button className="px-3 h-10 border-2 border-gray-200 rounded-lg font-medium">
                Front-End
              </button>
              <button className="px-3 h-10 border-2 border-gray-200 rounded-lg font-medium">
                back-end
              </button>
              <button className="px-3 h-10 border-2 border-gray-200 rounded-lg font-medium">
                Figma
              </button>
              <button className="px-3 h-10 border-2 border-gray-200 rounded-lg font-medium">
                Git
              </button>
              <button className="px-3 h-10 border-2 border-gray-200 rounded-lg font-medium">
                Github
              </button>
              <button className="px-3 h-10 border-2 border-gray-200 rounded-lg font-medium">
                Laravel
              </button>
              <button className="px-3 h-10 border-2 border-gray-200 rounded-lg font-medium">
                React js
              </button>
              <button className="px-3 h-10 border-2 border-gray-200 rounded-lg font-medium">
                angular js
              </button>
              <button className="px-3 h-10 border-2 border-gray-200 rounded-lg font-medium">
                vue js
              </button>
              <button className="px-3 h-10 border-2 border-gray-200 rounded-lg font-medium">
                Tailwind
              </button>
            </div>
          </div>
          <div className="w-full md:w-[1000px] px-5 h-auto py-3 flex gap-3 flex-col rounded-lg bg-white">
            <h1 className="font-bold text-2xl">History Pembelian</h1>
            <div className="flex-wrap flex gap-4 md:w-[60%] items-center ">
              <button className="w-72 h-20 border-2 border-gray-200 rounded-lg font-medium hover:border-dark transition-all duration-300">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[500px] px-5 h-[380px] py-3 flex gap-3 flex-col rounded-lg bg-white">
          <h1 className="font-bold text-xl">Apresiasi</h1>
          <div className="border-b flex-col flex gap-3 border-gray-300">
            <div className="flex">
              <span className="border-[3px] border-white rounded-full relative z-10 m-mauto inline-block ">
                <img
                  src={selectedImage} 
                  id="profile-pic"
                  alt=""
                  className="w-[42px] object-cover h-[42px] rounded-full"
                />
              </span>
              <span className="border-[3px] bg-gray-100 border-white rounded-full relative z-10 m-mauto  inline-block ">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
                  alt=""
                  className="w-[42px] h-[42px] rounded-full"
                />
              </span>
            </div>
            <span className="font-semibold text-sm">Thank you For Jhon</span>
          </div>
          <div className="border-b flex-col flex gap-3 border-gray-300">
            <div className="flex">
              <span className="border-[3px] border-white rounded-full relative z-10 m-mauto inline-block ">
                <img
                  src={selectedImage} 
                  id="profile-pic"
                  alt=""
                  className="w-[42px] object-cover h-[42px] rounded-full"
                />
              </span>
              <span className="border-[3px] bg-gray-100 border-white rounded-full relative z-10 m-mauto  inline-block ">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-1024.png"
                  alt=""
                  className="w-[42px] h-[42px] rounded-full"
                />
              </span>
            </div>
            <span className="font-semibold text-sm">Conratulation Jhon</span>
          </div>
          <div className="border-b flex-col flex gap-3 border-gray-300">
            <div className="flex">
              <span className="border-[3px] border-white rounded-full relative z-10 m-mauto inline-block ">
                <img
                  src={selectedImage} 
                  alt=""
                  id="profile-pic"
                  className="w-[42px] h-[42px] object-cover rounded-full"
                />
              </span>
              <span className="border-[3px] bg-white border-white rounded-full relative z-10 m-mauto  inline-block ">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-1024.png"
                  alt=""
                  className="w-[42px] h-[42px] rounded-full"
                />
              </span>
            </div>
            <span className="font-semibold text-sm">Awards Jhon</span>
          </div>
          <button className="font-semibold">See All</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
