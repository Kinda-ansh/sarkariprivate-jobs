import React from "react";
// import PropTypes from "prop-types";
import { FaArrowCircleRight } from "react-icons/fa";

const GovtJobs = ({ jobs }) => {
  if (!jobs || jobs.length === 0) {
    return <div>No jobs available</div>;
  }

  return (
    <div>
      <div>
        <h1 className="inter text-md sm:text-4xl text-center font-semibold">
          Sarkari <span className="text-teal-700">Jobs</span>
        </h1>
      </div>
      <div className="mt-6">
        {jobs.map((job) => (
          <div key={job.id} className="py-2 mt-8 flex">
            <div className="text-md sm:text-5xl mr-4 text-teal-700 ">
              <FaArrowCircleRight aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xs sm:text-xl inter font-semibold mb-1 text-md">
                {job.jobtitle}
              </h2>
              <p className="text-gray-600 inter text-xs sm:text-sm">
                {job.lastdate}
              </p>
              <div className="flex mt-2 ">
                <p className="text-[8px] sm:text-sm inter border text-green-700 bg-green-100 px-2 rounded-full">
                  {job.isActive ? "Active" : "Not Active"}
                  
                </p>
              </div>
              <div className="flex mt-2 ">
                <a
                  href={job.joburl}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-1 px-2 rounded-full shadow-lg"
                >
                  Apply
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default GovtJobs;
