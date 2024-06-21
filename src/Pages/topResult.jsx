import React, { useState, useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { HiMiniBriefcase } from "react-icons/hi2";
import Ad1 from "../Assets/horizontalBanner.png";
import Ad2 from "../Assets/SquareBanner.png";
import Ad3 from "../Assets/verticalBanner.png";
import api from "../axiosInstance";
import Error_image from "../Assets/Oops...... Something Went Wrong.png";

const TopResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await api.get("/gov/result");
        setResults(response.data.data.TotalResults);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchResults();
  }, []);

 
  return (
    <div>
      <h1 className="inter p-6 text-xl sm:text-4xl text-center font-semibold">
        Top <span className="text-teal-700">Results</span>
      </h1>
      {error ? (
        <div>
          <img src={Error_image}/>
          {/* <p>Failed to fetch admit cards. Please try again later.</p> */}
        </div>
      ) :(
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="w-full sm:w-[70%]">
          <div className="mt-10 ml-0 sm:ml-20">
            {results.map((result, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between gap-2"
              >
                <div className="py-2 sm:mt-8 flex">
                  <div className="text-md sm:text-5xl mr-4 text-gray-900">
                    <HiMiniBriefcase className="bg-gray-300 text-4xl rounded-full border-2 sm:border-8" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-xl inter font-semibold mb-1 text-md">
                      {result.jobtitle}
                    </h2>
                    <p className="text-gray-600 inter text-xs sm:text-sm">
                      Job URL: <a href={result.joburl}>{result.joburl}</a>
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:mt-8">
                  <button
                    className="text-sm sm:text-base ml-12 sm:ml-0 bg-teal-500 hover:bg-teal-800 text-white font-bold py-1 sm:py-2 px-1 sm:px-4"
                    onClick={() => (window.location.href = result.joburl)}
                  >
                    View Result
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="w-[20%] mr-10"
          style={{
            backgroundImage: `url(${Ad3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>)}
      <div className="flex justify-between mb-[30px] mt-10 h-[350px]">
        <div
          className="w-[50%] ml-40 mr-10"
          style={{
            backgroundImage: `url(${Ad2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div
          className="w-[20%] mr-10"
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

export default TopResults;
