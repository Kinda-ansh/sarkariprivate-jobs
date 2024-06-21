import React from "react";
// import { FaArrowRight } from "react-icons/fa6";
import useDataFetching from "../../Helper/useDataFetching";
import Error_image from "../../Assets/Oops...... Something Went Wrong.png";
const TopResults = () => {
  // Dummy data for top results

  const { data, loading, error } = useDataFetching('/home/web');
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data || !data.GovernmentjobsMarque) {
    return <div><img src={Error_image} alt="Error occurred" /></div>;
  }


  return (
    <div className="bg-gray-700 rounded-xl mb-8 p-6">
      <div>
        <h1 className="inter text-xl sm:text-4xl text-white text-center font-semibold">
          Top <span className="text-teal-700">Result</span>
        </h1>
      </div>
      <h1 className="text-xs text-white sm:text-xl inter w-[80%] m-auto sm:w-[80%]  mt-5 text-center font-semibold">
        Here are the latest top results, sourced from the Sarkari Result website
      </h1>
      <div className="flex overflow-hidden group space-x-16">
        <div className="flex justify-center mt-8 space-x-16 group-hover:paused  animate-loop-scroll">
          {data.GovernmentjobsMarque.map((result, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 mb-10 inter bg-white rounded-lg shadow-md p-4 transform transition-transform duration-500"
            >
              <h2 className="text-md font-semibold">{result.jobtitle}</h2>
              <p className="text-gray-600 text-xs">
                {result.lastdate}
              </p>
              <a href={result.joburl} className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-1 px-2 rounded-full shadow-lg">
                Apply
              </a>
            </div>
          ))}
        </div>
        <div
          className="flex justify-center mt-8 space-x-16 group-hover:paused hover:cursor-pointer animate-loop-scroll"
          aria-hidden="true"
        >
          {data.GovernmentjobsMarque.map((result, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 mb-10 inter bg-white rounded-lg hover:cursor-pointer shadow-md p-4 transform transition-transform duration-500"
            >
              <h2 className="text-md font-semibold">{result.jobtitle}</h2>
              <p className="text-gray-600 text-xs">
                {result.lastdate}
              </p>
              <a href={result.joburl} className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-1 px-2 rounded-full shadow-lg">
                Apply
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <h1 className="inter text-xs text-blue-700 hover:cursor-pointer font-semibold">
          View all result
        </h1>
      </div>
    </div>
  );
};

export default TopResults;
