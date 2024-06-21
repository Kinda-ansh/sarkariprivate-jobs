import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowCircleRight } from "react-icons/fa";
import { HiMiniBriefcase } from "react-icons/hi2";
import Ad1 from "../Assets/horizontalBanner.png";
import Ad2 from "../Assets/SquareBanner.png";
import Ad3 from "../Assets/verticalBanner.png";
import api from "../axiosInstance";
import Error_image from "../Assets/Oops...... Something Went Wrong.png";

const PrivateJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showViewMore, setShowViewMore] = useState(true);
  const [chunkIndex, setChunkIndex] = useState(1);
  const chunkSize = 10;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await api.get("/private/job");
        setJobs(response.data.data.PvtJobs);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const renderJobsChunk = () => {
    if (!jobs || !jobs.length) {
      return <div>No jobs available</div>;
    }

    const startIndex = (chunkIndex - 1) * chunkSize;
    const endIndex = Math.min(chunkIndex * chunkSize, jobs.length);
    return jobs.slice(startIndex, endIndex).map((job, index) => (
      <div
        key={startIndex + index}
        className="my-8 border w-full flex justify-between flex-col sm:flex-row rounded-lg p-6"
      >
        <div className="flex items-center">
          <HiMiniBriefcase className="text-gray-900 mr-4 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold">{job.jobtitle}</h2>
            <p className="text-sm text-gray-600">Location: {job.joblocation}</p>
            <p className="text-sm text-gray-600">Salary: {job.salary}</p>
            <p className="text-sm text-gray-600">Post Date: {job.postdate}</p>
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
    ));
  };

  const handleViewMore = () => {
    setChunkIndex(chunkIndex + 1);
    if (chunkIndex * chunkSize >= jobs.length) {
      setShowViewMore(false);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <h1 className="inter p-6 text-xl sm:text-4xl text-center font-semibold">
        Private <span className="text-teal-700">Jobs</span>
      </h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div>
          <img src={Error_image} />
          {/* <p>Failed to fetch admit cards. Please try again later.</p> */}
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="w-full sm:w-[70%]">
            {renderJobsChunk()}
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
          <div>
            {/* Placeholder for ad */}
            <img
              src={Ad3}
              className="h-[800px] hidden sm:block"
              alt="Advertisement"
            />
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

export default PrivateJobs;
