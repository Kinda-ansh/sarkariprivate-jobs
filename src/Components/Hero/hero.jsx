import React from "react";
import HeroBg from "../Assets/herobg.jpg";

const Hero = () => {
  return (
    <div className="relative mt-10">
    
      {/* Content */}
      <div
        className="relative h-[500px] bg-opacity-0 flex justify-center items-center text-white"
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div/>
        <div className="inter backdrop-opacity-10 w-full h-full align-middle">
          <h1 className="text-xl sm:text-6xl text-black text-center font-semibold">
            Connecting Your <span className="text-teal-500">Talent</span> with{" "}
            <br /> Opportunities
          </h1>
          <div className="text-xs sm:text-2xl text-black text-center my-10">
            Connecting You to the Best Government and Private Opportunities
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
