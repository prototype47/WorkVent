import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import conf from "../assets/conf.jpg"
import Navbar from "../components/Navbar";

const MockInter = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <div className="relative h-screen ">
        {/* Image */}
        <div className="absolute flex w-full h-[100vh] overflow-hidden">
          <img src={conf} alt="Mock Interview" className="object-cover w-full" />
        </div>
        {/* Overlay */}
        <div className="absolute flex w-full h-full overflow-hidden bg-black/60"></div>
        {/* Hero Info */}
        <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
          {/* Main */}
          <div>
            <h1 className="text-[50px] md:text-[80px] font-comf text-white font-bold mt-[-1rem]">Test Candidates</h1>
          </div>
          <div className="mt-[-2rem]">
            <p className="text-white font-mo ml-[1rem] text-[100px]">With WorkVent</p>
          </div>

          {/* Enter Code */}
          <form onSubmit={submitCode} className="flex flex-col items-center justify-center text-white md:pt-12">
            <div className="flex flex-col items-center justify-center ">
              <label className="text-[30px] md:text-[40px] font-bold font-comf">Enter Interview Code</label>
              <input
                type="text"
                required
                placeholder="Enter Room Code"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="py-1.5 md:py-2 px-4 rounded-full max-w-[14rem] mt-2 text-black md:mt-6 outline-0"
              />
            </div>
            <button
              type="submit"
              className=" bg-blue-500 hover:bg-blue-400 duration-100 ease-out font-bold w-[5rem] md:w-[7rem] rounded-full py-[5px] md:py-[7px] mt-2 md:mt-4 "
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MockInter;
