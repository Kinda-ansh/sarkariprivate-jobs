import React, { useState, useEffect } from 'react';
// import api from "../axiosInstance"
import PrivateJobs from "../Components/Jobs/privateJobs"
import GovernmentJobs from "../Components/Jobs/govtJobs"
import useDataFetching from "../Helper/useDataFetching"
import Error_image from "../Assets/Oops...... Something Went Wrong.png";
// import { ClipLoader } from 'react-spinners';
// import Top_result from "./Trending/topResults"


const App = () => {
  const { data, loading, error } = useDataFetching('/home/web');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div><img src={Error_image} alt="Error occurred" /></div>;
  }

  return (
    <div>
      <div className="container mx-auto mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" p-4">
          <GovernmentJobs jobs={data.Governmentjobs.slice(0, 4)} />
          </div>
          <div className=" p-4">
          <PrivateJobs jobs={data.Privatejobs.slice(0,4)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
