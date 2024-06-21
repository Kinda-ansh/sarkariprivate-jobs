import React from "react";
import Logo from "../../Assets/Logo3.jpg";
import Menu from "./navbarMenu";
import { Link } from "react-router-dom";
import Ad1 from "../../Assets/AdsHP1.jpg"
const navbar = () => {
  return (
    <div>
      <div className="mb-2">
        <div className=" mt-8 font-bold text-white  text-center text-xl m-auto">
          {" "}
           <img src={Ad1} className="w-full"/>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row inter bg-[#008080] p-4">
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="h-[87px] m-auto rounded-xl cursor-pointer"
            />
          </Link>
        </div>
        <div className=" w-full sm:w-[80%]  text-center m-auto ">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default navbar;
