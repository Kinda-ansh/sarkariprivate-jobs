import React from "react";
import Logo from "../../Assets/Logo3.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="inter bg-gray-700 py-4 text-center sm:text-left">
      <div className="flex flex-col text-white bg-gray-700 m-auto sm:flex-row justify-between sm:w-[80%] sm:m-auto">
        <div className="text-xl w-[100%] sm:mb-0 mb-4 sm:w-[30%]">
         <Link to={"/"}> <img src={Logo} className="rounded-xl ml-6 h-[50px]"/></Link>
        </div>

        <div className="flex m-auto w-[80%] justify-between sm:justify-evenly sm:w-[100%]">
          <div className="sm:ml-10">
            <h1 className="text-lg font-bold mb-2"> About </h1>
            <div className="text-sm text-gray-300">
              <h1 className="mb-2">Companies</h1>
              <h1 className="mb-2">Pricing</h1>
              <h1 className="mb-2">Terms</h1>
              <h1 className="mb-2">Advice</h1>
              <Link to="/privacy-policy">
              {" "}
              <h1 className="mb-2">Privacy Policy</h1>
              </Link>
            </div>
          </div>
          <div className=" sm:mt-0">
            <h1 className="text-lg font-bold mb-2"> Resource </h1>
            <div className="text-sm text-gray-300">
              <h1 className="mb-2">Help Center</h1>
              <h1 className="mb-2">Guide</h1>
              <h1 className="mb-2">Updates</h1>
              <Link to="/privacy-policy">
                {" "}
                <h1 className="mb-2">Contact Us</h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4 sm:mt-0">
          <h1 className="text-lg font-bold"> Get job notifications</h1>
          <h1 className="text-gray-300 mt-2">
            The latest job news, articles, sent to your inbox weekly.
          </h1>
          <div className="flex mt-4 sm:mt-10">
            <div className="flex items-center m-auto">
              <input
                type="text"
                placeholder="Email Address"
                className="text-black placeholder-poppins bg-gray-200 mt-2 sm:text-md  text-xs px-4 py-2 border border-gray-300 rounded-l"
              />
              <div className="text-white mt-2 sm:text-md text-xs bg-teal-700 px-4 py-2 hover:cursor-pointer ml-4">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row sm:w-[80%] sm:m-auto flex-col-reverse sm:mt-[40px]">
        <div className="text-sm w-full ml-6 sm:w-[50%] p-2 text-white">
          2024 @ SarkariPrivateJobs. All rights reserved.
        </div>

        <div className=" text-center w-full sm:w-[50%] m-auto">
          <div className="p-2 ml-[150px] flex gap-4 justify-center items-center">
            <div>
              <p className="text-md text-white  ">Follow us:</p>
            </div>
            <div className="text-lg sm:text-2xl rounded-full text-teal-900 bg-gray-300 p-2">
              <FaTwitter className="" />
            </div>
            <div className=" rounded-full text-lg sm:text-2xl text-teal-900 bg-gray-300 p-2">
              <FaFacebook className="" />
            </div>
            <div className=" rounded-full text-lg sm:text-2xl text-teal-900 bg-gray-300 p-2">
              <FaLinkedin className="" />
            </div>
            <div className=" rounded-full text-lg sm:text-2xl  text-teal-900 bg-gray-300 p-2">
              <FaInstagram className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
