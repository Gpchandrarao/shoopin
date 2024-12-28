import React, { useContext } from "react";
import band from "../assets/images/band.jpeg";
import dial from "../assets/images/dial.png";
import { Shoppin } from "../context/ShoppinContext";
import SideImag from "../assets/images/sideFullImage.jpeg";

const AppleWatch = () => {
  const { mainSideImage, setMainSideImage } = useContext(Shoppin);

  return (
    <div className=" flex  justify-center items-center ">
      <div className="image-open">
        <div className="relative max-w-[550px]  -z-50">
          {mainSideImage ? (
            <>
              <img src={SideImag} alt="" className="side-image-ani" />
            </>
          ) : (
            <>
              <img src={dial} alt="" className="absolute top-0 w-full" />
              <img src={band} alt="" className="w-full" />
            </>
          )}
        </div>
        <p
          className="text-center text-blue-400 underline cursor-pointer"
          onClick={() => setMainSideImage(!mainSideImage)}
        >
          {mainSideImage ? "Front view" : "side view"}
        </p>
        <p className="text-center text-[#77777C] text-[12px] py-[5px]">
          APPLE WATCH SERIES 10
        </p>
        <p className="text-center">
          46mm Jet Black Aluminum Case with Black Solo Loop
        </p>
        <p className="text-center text-[14px] font-extralight">From $429</p>
        <div className="flex items-center justify-center gap-5 mt-12">
          <button className="bg-[#E8E8ED] w-24 text-center h-10 rounded-full flex items-center justify-center">
            <svg
              height="25"
              viewBox="0 0 19 25"
              width="19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m0 0h19v25h-19z" fill="none"></path>
              <path
                d="m18.25 9.038v1.7427c0 .2972-.0833.5382-.25.7227-.1665.1847-.385.277-.6553.277h-.3447v5.1904c0 2.2253-1.804 4.0293-4.0293 4.0293h-2.3643c.3291-.2865.6082-.6216.8301-1h1.5342c1.6704 0 3.0293-1.3589 3.0293-3.0293v-8.9414c0-1.6704-1.3589-3.0293-3.0293-3.0293h-6.9414c-1.3074 0-2.4136.8372-2.8372 2h-.1748c-.3113 0-.6113.0437-.9026.1111.417-1.781 2.0063-3.1111 3.9146-3.1111h6.9414c2.2253 0 4.0293 1.804 4.0293 4.0293v.0225h.3447c.2703 0 .4888.0902.6553.2703.1667.1803.25.4187.25.7159zm-7.25 8.9447c0 1.6664-1.3508 3.0173-3.0173 3.0173h-4.9654c-1.6665 0-3.0173-1.351-3.0173-3.0173v-6.9653c0-1.6664 1.3508-3.0173 3.0173-3.0173h4.9653c1.6665 0 3.0173 1.351 3.0173 3.0173v.1215h.3076c.2068 0 .3738.069.5012.2067.1274.1379.1912.3202.1912.5475v1.3326c0 .2273-.0637.4116-.1912.5526-.1274.1412-.2944.2118-.5012.2118h-.3076v3.9927zm-1-6.9653c0-1.1123-.905-2.0173-2.0173-2.0173h-4.9654c-.0059 0-.0115.0017-.0173.0017-.366.0032-.7048.1096-1 .2837-.5952.3511-1 .9922-1 1.7319v6.9653c0 1.1123.905 2.0173 2.0173 2.0173h4.9653c1.1123 0 2.0173-.905 2.0173-2.0173v-6.9653z"
                fill="#1d1d1f"
              ></path>
            </svg>
            Size
          </button>
          <button className="bg-[#E8E8ED] w-24 text-center h-10 rounded-full flex items-center justify-center">
            Case
          </button>
          <button className="bg-[#E8E8ED] w-24 text-center h-10 rounded-full flex items-center justify-center">
            Band
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppleWatch;
