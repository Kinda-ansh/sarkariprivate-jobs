import React from "react";
import Image from "../Assets/aboutimage.png";

const About = () => {
  return (
    <div className="mt-10 ">
      <div>
        <h1 className="inter text-xl sm:text-4xl text-center font-semibold">
          About <span className="text-teal-700">Sarkari Private Jobs</span>
        </h1>
        <div className="flex flex-col sm:flex-row p-10 inter w-[100%] sm:w-[100%]  m-auto ">
          <div className="text-sm text-semibold pr-5">
            <p className=" text-justify sm:text-center inter">
              Discovering a fulfilling career path is a journey that often
              requires guidance and support. Sarkari Private Jobs is a
              revolutionary platform designed to empower job seekers with the
              tools and resources they need to navigate the ever-changing
              landscape of employment opportunities.
              <br/>
              <br/>
               Whether you're a seasoned
              professional looking to advance your career or a recent graduate
              eager to embark on your first job search, our platform offers a
              comprehensive array of services tailored to meet your unique
              needs. Our mission is simple: to connect passionate individuals
              with innovative startups and dynamic companies seeking top talent.
              With our user-friendly interface and intuitive search features,
              finding your dream job has never been easier. 
              <br/>
              <br/>
              From entry-level
              positions to executive roles, we provide access to a diverse range
              of opportunities across various industries and sectors. Join our
              community of motivated job seekers and gain access to exclusive
              job listings, career advice, and networking opportunities. With
              Sarkari Private Jobs by your side, you can take the next step
              towards achieving your professional goals with confidence and
              clarity. Start your journey today and unlock a world of endless
              possibilities.
              <br/>
              <br/>
            </p>
          </div>
          {/* <div>
            <img
              src={Image}
              alt="About Image"
              className="w-full sm:w-[900px] object-center h-[00px]"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
