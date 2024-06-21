import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowCircleRight } from "react-icons/fa";
import { HiMiniBriefcase } from "react-icons/hi2";
import Ad1 from "../Assets/horizontalBanner.png";
import Ad2 from "../Assets/SquareBanner.png";
import Ad3 from "../Assets/verticalBanner.png";
import api from "../axiosInstance"
import Error_image from "../Assets/Oops...... Something Went Wrong.png";

const SarkariJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showViewMore, setShowViewMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;

 const fetchJobs = async () => {
      try {
        const response = await api.get(`/gov/job?page=${currentPage}&limit=${limit}`);
        setJobs((prevJobs) => [...prevJobs, ...response.data.data.GovJobs]);
        setLoading(false);
        setShowViewMore(response.data.data.GovJobs.length === limit);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

  useEffect(() => {
   
    fetchJobs();
  }, [currentPage, limit]);


 


  const handleViewMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const renderJobs = () => {
    return jobs.map((job) => (
      <div className="flex">
        <div
          key={job.id}
          className="my-8 border w-full flex justify-between flex-col sm:flex-row rounded-lg p-6"
        >
          <div className="flex items-center">
            <HiMiniBriefcase className="text-gray-900 mr-4 text-4xl" />
            <div>
              <h2 className="text-lg font-semibold">{job.jobtitle}</h2>
              <p className="text-sm text-gray-600">Last Date: {job.lastdate}</p>
            </div>
          </div>
          <div className="mt-4 text-sm sm:text-sm ml-9 sm:ml-0">
            <a
              href={job.joburl}
              className="text-white p-2 bg-teal-900 rounded-md hover:text-teal-900 hover:border hover:border-teal-900 hover:bg-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Job Details <FaArrowCircleRight className="inline ml-1" />
            </a>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h1 className="inter p-6 text-xl sm:text-4xl text-center font-semibold">
        Sarkari <span className="text-teal-700">Jobs</span>
      </h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ): error ? (
        <div>
          <img src={Error_image}/>
          {/* <p>Failed to fetch admit cards. Please try again later.</p> */}
        </div>
      ) : (
        <div className="flex">
          <div className="w-full sm:w-[100%] ">
            {renderJobs()}
            {showViewMore && (
              <div className="text-center my-8">
                <button
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleViewMore}
                >
                  View More
                </button>
              </div>
            )}
          </div>

          <div className="text-center hidden sm:w-[30%] sm:block">
            <img src={Ad3} className="h-[600px] hidden sm:block" alt="Advert" />
          </div>
        </div>
      )}
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

export default SarkariJobs;
