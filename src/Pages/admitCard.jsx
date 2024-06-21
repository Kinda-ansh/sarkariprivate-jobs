import React, { useState, useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { HiMiniBriefcase } from "react-icons/hi2";
import Ad1 from "../Assets/horizontalBanner.png";
import Ad2 from "../Assets/SquareBanner.png";
import Ad3 from "../Assets/verticalBanner.png";
import api from "../axiosInstance";
import Error_image from "../Assets/Oops...... Something Went Wrong.png";

const AdmitCard = () => {
  const [admitCards, setAdmitCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdmitCards = async () => {
      try {
        const response = await api.get("/gov/admitcrd");
        setAdmitCards(response.data.data.GovAdmitcards);
        setLoading(false);
      } catch (error) {
        
        setError(error);
        setLoading(false);
      }
    };
    fetchAdmitCards();
  }, []);

  return (
    <div>
      <h1 className="inter p-6 text-xl sm:text-4xl text-center font-semibold">
        Admit <span className="text-teal-700">Cards</span>
      </h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div>
          <img src={Error_image}/>
          {/* <p>Failed to fetch admit cards. Please try again later.</p> */}
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="w-full sm:w-[70%] mx-auto">
            {admitCards.map((card, index) => (
              <div
                key={index}
                className="my-8 border flex justify-between rounded-lg p-6"
              >
                <div className="flex items-center">
                  <HiMiniBriefcase className="text-gray-900 mr-4 text-4xl" />
                  <div>
                    <h2 className="text-lg font-semibold">{card.jobtitle}</h2>
                    <div className="mt-4 text-sm sm:text-sm ml-9 sm:ml-0">
                      <a
                        href={card.joburl}
                        className="text-white p-2 bg-teal-900 rounded-md hover:text-teal-900 hover:border hover:border-teal-900 hover:bg-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Job Details{" "}
                        <FaArrowCircleRight className="inline ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

export default AdmitCard;
