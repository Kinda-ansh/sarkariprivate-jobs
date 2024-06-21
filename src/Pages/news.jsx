import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Banner from "../Assets/Newsbanner2.png";
import NewsImage from "../Assets/newspic.png";
import Ad1 from "../Assets/horizontalBanner.png";
import Ad2 from "../Assets/SquareBanner.png";
import Ad3 from "../Assets/verticalBanner.png";
import api from "../axiosInstance";
import Error_image from "../Assets/Oops...... Something Went Wrong.png";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get("/news");
        setNewsData(response.data.data.TotalNews || []);  
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="p-4 mt-[100px] sm:mt-[0px]">
      {/* banner */}
      <div>
        <img src={Banner} alt="Banner" />
      </div>
      

      {/* News Cards */}
      <div className="flex flex-col sm:flex-row">
        <div className="flex p-6 flex-col mt-20 w-full sm:w-[60%]">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : error ? (
            <div>
              <img src={Error_image}/>
              {/* <p>Failed to fetch admit cards. Please try again later.</p> */}
            </div>
          )  : (
            newsData.map((news, index) => (
              <div key={index}>
                <div className="flex flex-row gap-10 justify-between border-black mb-4">
                  <div className="w-[600px]">
                    <h1 className="text-md font-bold text-teal-700 sm:text-xl">
                      {news.title}
                    </h1>
                    <p className="text-sm sm:text-md">
                      {expanded[index] || news.description.split(' ').length <= 20
                        ? news.description
                        : news.description.split(' ').slice(0, 20).join(' ') + '...'}
                      {news.description.split(' ').length > 20 && (
                        <button
                          onClick={() => toggleExpand(index)}
                          className="text-blue-500 ml-2"
                        >
                          {expanded[index] ? 'Show Less' : 'Show More'}
                        </button>
                      )}
                    </p>
                    <p className="text-xs sm:text-md">Author: {news.writtenby}</p>
                    <p className="text-xs font-semibold sm:text-md">
                      {new Date(news.postdate).toLocaleDateString()} | {news.readtime}
                    </p>
                  </div>
                  <div>
                    <img
                      src={news.image && news.image[0] ? news.image[0] : NewsImage}
                      className="h-[150px] w-[200px] sm:h-[170px]"
                      alt="News"
                    ></img>
                  </div>
                </div>
                <div className="border p-10 inter font-semibold text-xl mb-10 h-[100px] bg-gray-300">
                  Ads Section
                </div>
              </div>
            ))
          )}
        </div>
        {/* ads */}
        <div className="w-[90%] m-auto sm:w-[40%]">
          <div className="p-2 text-center mt-[105px] w-[300px] m-auto bg-gray-100">
            <p className="text-md font-semibold">Follow us:</p>
            <div className="p-2 flex gap-4 justify-center items-center">
              <div className="text-2xl rounded-full text-teal-900 bg-gray-300 p-2">
                <FaTwitter className="" />
              </div>
              <div className="rounded-full text-2xl text-teal-900 bg-gray-300 p-2">
                <FaFacebook className="" />
              </div>
              <div className="rounded-full text-2xl text-teal-900 bg-gray-300 p-2">
                <FaLinkedin className="" />
              </div>
              <div className="rounded-full text-2xl text-teal-900 bg-gray-300 p-2">
                <FaInstagram className="" />
              </div>
            </div>
          </div>
          <div className="mt-[10px] p-10 bg-gray-400 w-[90%] m-auto h-[1000px] inter font-semibold text-xl text-center">
            Ads Section
          </div>
          <div className="hidden sm:block mt-[10px] p-10 bg-gray-400 w-[90%] m-auto h-[1000px] inter font-semibold text-xl text-center">
            Ads Section
          </div>
        </div>
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

export default News;
