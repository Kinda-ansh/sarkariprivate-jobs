import React from "react";
import Banner from "../../Assets/Banner.png"
const BannerHP = () => {
  return (
    <div>
      {" "}
      <div className=" sm:w-[60%] w-[80%] m-auto mt-10px sm:mt-10">
        <img
          src={Banner}
          alt="About Image"
          className="sm:w-full rounded-lg w-[600px] h-[200px] object-center sm:h-[500px]"
        />
      </div>
    </div>
  );
};

export default BannerHP;
