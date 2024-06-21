import React from "react";
import All_jobs from "../homepageApi";
const Jobs = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex justify-between w-[100%] sm:w-[90%] m-auto mb-[10px] sm:mb-10 mt-[10px] sm:mt-10">
        <All_jobs/>
      </div>
      <div>
        <div className="mt-[10px] p-10 bg-gray-400 w-[200px] sm:w-[400px] m-auto h-[500px] mb-4 sm:h-[800px] inter font-semibold text-xl text-center ">
          {" "}
          Ads Section
        </div>
      </div>
    </div>
  );
};

export default Jobs;
