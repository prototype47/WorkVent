import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-black/90">
      <div className=" h-[5rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto">
        {/* Left */}
        <div className="flex items-center">
          <div className="flex w-[3rem] h-[3rem] mt-[-1rem] bg-white rounded-full">
            <img src={logo} alt="" className="object-cover " />
          </div>
          <div className="text-white font-jos font-bold flex mb-[-3.5rem] ml-[-6.7rem]">
            <p className="text-[21px] pl-2">Powered by WorkVent</p>
          </div>
        </div>

        {/* Right */}
        <div className="">
          <ul className="text-white font-bold flex items-center gap-4 cursor-pointer">
            <li className="list-none font-comf text-xl transition ease-in-out hover:scale-110">
              <a href="/" target="_blank" className="text-white no-underline">Home</a>
            </li>
            {/* <li>Product</li>
            <li>Blogs</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
