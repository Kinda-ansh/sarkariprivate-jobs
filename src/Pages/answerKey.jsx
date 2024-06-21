import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowCircleRight } from "react-icons/fa";
import { HiMiniBriefcase } from "react-icons/hi2";
import Ad1 from "../Assets/horizontalBanner.png";
import Ad2 from "../Assets/SquareBanner.png";
import Ad3 from "../Assets/verticalBanner.png";
import api from "../axiosInstance"
import Error_image from "../Assets/Oops...... Something Went Wrong.png";



const AnswerKey = () => {
  const [answerKeys, setAnswerKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnswerKeys = async () => {
      try {
        const response = await api.get(
          "/gov/answerkey?page=3&limit=15"
        );
        setAnswerKeys(response.data.data.GovAnswerKeys);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchAnswerKeys();
  }, []);

  const handleApply = (job) => {
  
  };

  return (
    <div>
      <h1 className="inter p-6 text-xl sm:text-4xl text-center font-semibold">
        Answer <span className="text-teal-700">Key</span>
      </h1>
      
      <div className=" flex justify-between">
        <div className="w-full sm:w-[70%]">
          {loading ? (
            <div className="text-center">Loading...</div>
          ): error ? (
            <div>
              <img src={Error_image}/>
              {/* <p>Failed to fetch admit cards. Please try again later.</p> */}
            </div>
          )  : 
          (
            <div className="mt-10 ml-0 sm:ml-20">
              {answerKeys.map((key, index) => (
                <div key={index} className="flex justify-between">
                  <div className="py-2 mt-8 flex">
                    <div className="text-md sm:text-5xl mr-4 text-gray-900 ">
                      <HiMiniBriefcase className="bg-gray-300 rounded-full border-8" />
                    </div>
                    <div>
                      <h2 className="text-xs sm:text-xl inter font-semibold mb-1 text-md">
                        {key.jobtitle}
                      </h2>
                      <p className="text-gray-600 inter text-xs sm:text-sm">
                        Job URL:{" "}
                        <a href={key.joburl} target="_blank" rel="noopener noreferrer">
                          {key.joburl}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button
                      className="text-xs sm:text-base bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4"
                      onClick={() => handleApply(key)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          className="w-[50%] sm:w-[20%] hidden sm:block sm:mr-10 mr-0"
          style={{
            backgroundImage: `url(${Ad3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="gap-8 flex justify-between mb-[30px] mt-10 h-[350px]">
        <div
          className="sm:w-[50%] w-full ml-0 sm:ml-40 mr-0 sm:mr-10"
          style={{
            backgroundImage: `url(${Ad2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div
          className="w-full sm:w-[20%] mr-0 sm:mr-10"
          style={{
            backgroundImage: `url(${Ad1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AnswerKey;
