import React from "react";
 
import TopResults from "../Components/Trending/topResults";
import About from "../About/about";
import Banner from "../Components/Banners/BannerHP";
import QuickLinks1 from "../Components/quickLinks";
import QuickLinks2 from "../Components/quickLinks2";
import Ad1 from "../Assets/AdsHP2.jpg";
// import Jobs from "../Components/Jobs/Jobs";
// import Jobs from "../Components/homepageApi";
import Jobs from "../Components/Jobs/Jobs";

const homepage = () => {
  
  return (
    <div>
     
      <QuickLinks1/>
      <div className="mt-8 font-bold text-white  text-center text-xl bg-gray-600">
        {" "}
        <img src={Ad1} className="w-full"/>
      </div>
      <div className="mt-[50px]">
      <QuickLinks2/> 
      </div>
      <div className="mt-[100px]">
      <Jobs/>
      </div>
      <TopResults />
      <Banner />
      <About />
    </div>
  );
};

export default homepage;
