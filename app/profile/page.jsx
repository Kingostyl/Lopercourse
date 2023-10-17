"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import useProfile from "@/hook/useProfile";
import useUser from "@/hook/useUsername";
import countryFlagEmoji from "country-flag-emoji";

export default function Profile() {
  const [count, setCount] = useState(0);
  const [buttons, setButtons] = useState([]);
  const [customButtonText, setCustomButtonText] = useState("");

  const handleIncrement = (incrementValue) => {
    const currentValue = parseInt(sessionStorage.getItem("counter")) || 0;
    const updatedValue = currentValue + incrementValue;
    sessionStorage.setItem("counter", updatedValue);
    setCount(updatedValue);
  };

  useEffect(() => {
    const storedButtons = sessionStorage.getItem("customButtons");
    if (storedButtons) {
      setButtons(JSON.parse(storedButtons));
    }
  }, []);
  
  const handleAddCustomButton = () => {
    if (customButtonText.trim() !== "") {
      const newButtons = [...buttons, customButtonText];
      setButtons(newButtons);
      sessionStorage.setItem("customButtons", JSON.stringify(newButtons));
      setCustomButtonText("");
    }
  };

  const { selectedImage, handleImageUpload } = useProfile();
  const {
    name,
    users,
    location,
    activity,
    startEditing,
    updateActivity,
    updateLocation,
    updateUsers,
    updateName,
    saveChanges,
    isEditing,
  } = useUser();

  useEffect(() => {
    import("preline");
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap lg:flex-nowrap px-4 mt-28 md:px-20 gap-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full md:w-[1000px] h-auto rounded-lg bg-white">
            <div className="h-[250px] relative rounded-t-lg bg-[url('https://wallpapershome.com/images/pages/pic_h/24640.jpg')] px-3  bg-center bg-cover bg-no-repeat flex items-center justify-center md:justify-start">
              <label htmlFor="input-file" className="absolute top-[70%]">
                {selectedImage && (
                  <>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute  top-3 left-0 right-0 bottom-0 opacity-0"
                    />
                    <img
                      src={selectedImage}
                      alt="Uploaded"
                      className="w-[150px] border-[5px] h-[150px] rounded-full border-white object-cover"
                    />
                  </>
                )}
              </label>
            </div>
            <div className="flex justify-between items-start">
              <div className="mt-28 px-3 flex flex-col gap-2">
                <div>
                  <div>
                    {isEditing ? (
                      <div>
                        <input
                          type="text"
                          name="text"
                          value={name}
                          onChange={updateName}
                          placeholder="Enter your name"
                        />
                      </div>
                    ) : (
                      <h1 className="text-3xl font-bold">{name}</h1>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {isEditing ? (
                      <select
                        value={location}
                        onChange={updateLocation}
                        class=" block w-32 border-gray-200 rounded-md text-sm "
                      >
                        {countryFlagEmoji.list.map((e, index) => (
                          <option key={index}>
                            {e.emoji} {e.name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <p className="font-medium tax-lg text-gray-500">
                        {location}
                      </p>
                    )}
                  </div>

                  <div className="flex-col md:flex-row md:flex gap-2">
                    <div>
                      {isEditing ? (
                        <div>
                          <input
                            type="text"
                            name="text"
                            value={users}
                            onChange={updateUsers}
                            placeholder="Enter your username"
                          />
                        </div>
                      ) : (
                        <h1 className="font-medium">@{users}</h1>
                      )}
                    </div>
                    <h1 className="font-bold text-gray-600">.</h1>
                    <h1 className="font-medium">New Junior Developer</h1>
                    <h1 className="font-bold text-gray-600">.</h1>
                    {isEditing ? (
                      <input
                        type="text"
                        name="activity"
                        value={activity}
                        onChange={updateActivity}
                      />
                    ) : (
                      <h1 className="font-medium">{activity}</h1>
                    )}
                  </div>
                </div>
              </div>
              {isEditing ? (
                <button onClick={saveChanges} lassName="p-5">
                  Save
                </button>
              ) : (
                <button onClick={startEditing} className="p-5">
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="w-full md:w-[1000px] px-5 h-auto py-3 flex gap-3 flex-col rounded-lg bg-white">
            <h1 className="font-bold text-2xl">Skils</h1>
            <div className="flex-wrap flex md:w-[60%] items-center">
              <div >
                {buttons.map((buttonText, index) => (
                  <button
                    key={index}
                    className="px-3 h-10 border-2 border-gray-200 rounded-lg font-medium"
                    onClick={() => handleIncrement(1)}
                  >
                    {buttonText}
                  </button>
                ))}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Custom Skill Kamu"
                  value={customButtonText}
                  onChange={(e) => setCustomButtonText(e.target.value)}
                />
                <button onClick={handleAddCustomButton}>
                  Tambah
                </button>
              </div>
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
