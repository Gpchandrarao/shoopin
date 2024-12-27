import React from "react";
import band from "../assets/images/band.jpeg";
import dial from "../assets/images/dial.png";

const Home = () => {
  return (
    <div className="flex justify-center absolute top-[17%] left-[28%]">
      <div className="flex  flex-col gap-0">
        <h6 className="text-[#1d1d1f] font-[San Francisco Pro] text-[21px] pb-2">
          Apple Watch Studio
        </h6>
        <h1 className="text-[#1d1d1f] font-[San Francisco Pro] text-[64px] flex flex-col font-extrabold leading-[1.06]">
          <span>Choose a case.</span>
          <span>Pick a band.</span>
          <span>Create your own style.</span>
        </h1>
        <div className="mt-9 flex ">
          <button className="bg-[#0171E3] text-white text-[17px] w-[140px] h-[45px] rounded-full font-light z-50">
            Get Started
          </button>
          <div className="relative right-[260px] -top-7 -z-999">
            <img src={band} alt="" className="w-full" />
            <img src={dial} alt="" className="absolute top-0 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// color: #1d1d1f;
// font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
// font-size: 21px;
// font-weight: 400;
// letter-spacing: .011em;
// line-height: 1.381002381;
// padding-bottom: 10px;
