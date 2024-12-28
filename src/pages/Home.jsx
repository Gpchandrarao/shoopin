import React, { useContext } from "react";
import band from "../assets/images/band.jpeg";
import dial from "../assets/images/dial.png";
import { Link } from "react-router-dom";
import { Shoppin } from "../context/ShoppinContext";

const Home = () => {
  const { headerTrue, setHeaderTrue } = useContext(Shoppin);
  return (
    <div className="flex justify-center absolute top-[17%] left-[28%]">
      <div className="flex  flex-col gap-0">
        <h6 className="text-[#1d1d1f] font-[San Francisco Pro] text-[21px] pb-2">
          Apple Watch Studio
        </h6>
        <h1 className="text-[#1d1d1f] font-[San Francisco Pro] md:text-[64px] flex flex-col font-extrabold leading-[1.06]">
          <span>Choose a case.</span>
          <span>Pick a band.</span>
          <span>Create your own style.</span>
        </h1>
        <div className="mt-9 ">
          <Link to={"/apple-watch"} onClick={() => setHeaderTrue(true)}>
            <button className="bg-[#0171E3] text-white text-[17px] w-[140px] h-[45px] rounded-full font-light z-50">
              Get Started
            </button>
          </Link>
          <div className="relative md:right-[110px] md:-top-20 -z-50">
            <img src={band} alt="" className="w-full" />
            <img src={dial} alt="" className="absolute top-0 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
