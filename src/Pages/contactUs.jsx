import React, { useState } from "react";
import ContactUsImg from "../Assets/contactUs.jpg"; // Assuming the image path is correct
import api from "../axiosInstance"; // Assuming this is a pre-configured Axios instance
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Navigate } from "react-router-dom";
const ContactUs = () => {
  // State for form data
  const [formData, setFormData] = useState({
    fullname: "",
    subject: "",
    email: "",
    message: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/contact/create", formData);
     

      // Reset form after successful submission
      setFormData({
        fullname: "",
        subject: "",
        email: "",
        message: "",
      });

      // Display success toast
      toast.success('Sent Successfully!');
      
    } catch (error) {
      console.error("Error:", error);
      // Display error toast
      toast.error('Failed to send. Try Again');
    }
  };

  return (
    <div className="bg-gradient-to-b p-5 from-[#008080] via-white to-white">
      <p className="text-4xl font-semibold text-center p-10 text-white inter">
        Contact Us
      </p>
      <div className="flex inter flex-col sm:flex-row justify-center">
        <div className="w-full sm:w-[40%] bg-[#62B192]">
          {/* Contact Us Form */}
          <form onSubmit={handleSubmit}>
            <div className="p-5">
              <div className="p-4">
                <input
                  onChange={handleChange}
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  className="py-3 px-4 block w-full rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="p-4">
                <input
                  onChange={handleChange}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your Subject"
                />
              </div>
              <div className="p-4">
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={formData.email}
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="p-4">
                <textarea
                  onChange={handleChange}
                  name="message"
                  value={formData.message}
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="p-4">
                <button
                  type="submit"
                  className="bg-[#008080] text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full sm:w-[40%]">
          <img src={ContactUsImg} alt="Contact Us" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
