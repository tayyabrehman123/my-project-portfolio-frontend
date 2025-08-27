import React from "react";
//import Spline from "@splinetool/react-spline";
import { useState } from "react";
//import { TbMassage } from "react-icons/tb";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from '@mui/material/Modal';


const Contact = () => {
  
  const API_URL = import.meta.env.VITE_BACKEND_URL;
  
  const [open, setOpen] = useState(false);
  
  const [loading, setLoading ] = useState(false);
  
  const [formdata, setFormdata ] = useState({
    name:"",
    email:"",
    message:"",
  });
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "name") 
      {
      setFormdata((prev) => ({ ...prev, name: value }));
    }
    else if (name === "email")
      {
      setFormdata((prev) => ({ ...prev, email: value }));
    } 
    else if (name === "message")
      {
      setFormdata((prev) => ({ ...prev, message: value }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    console.log(formdata);
    
  try{
      const res = await fetch(`${API_URL}/contact` , { method: "POST", headers:{ "Content-Type" : "application/json", }, body: JSON.stringify(formdata)});
      if(res.ok){
        setFormdata({name:"",email:"",message:""});
        setLoading(false);
        setOpen(true);
      }
    }
    catch(error){
      alert("Something went wrong. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  
  
  
  return (
    <div id="contacts" className="relative w-full min-h-[90vh] flex items-center justify-center bg-gray-100 overflow-hidden ">
      <img className="absolute top-0 left-0 object-cover w-full h-full z-0" src="https://www.crankbrothers.com/cdn/shop/files/Product_Help_Image_1944x.webp?v=1656023684" alt="" />
      
      {/* Spline Animation Background */}
      {/* <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
        <Spline scene="https://prod.spline.design/KDl1WYdVaM6xRuO9/scene.splinecode" />
      </div> */}
      {/* Contact Card */}
      <div className="relative z-10 bg-neutral-900 bg-opacity-90 p-8 rounded-2xl shadow-lg max-w-md w-full text-center my-40">
        <h2 className="mb-2 text-3xl font-bold text-white">Contact Me</h2>
        <p className="mb-6 text-white">Feel free to reach out by filling the form below!</p>
        <form className="flex flex-col gap-4 mb-4" onSubmit={handleSubmit} >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            onChange={handleChange}
            value={formdata.name}
            className="px-4 py-3 border border-gray-300 rounded-lg text-white bg-neutral-800 focus:outline-none focus:border-purple-700 transition"
          />
          <input
            type="email"
            placeholder="Enter your email "
            name="email"
            required
            onChange={handleChange}
            value={formdata.email}
            className="px-4 py-3 border border-gray-300 rounded-lg text-white bg-neutral-800  focus:outline-none focus:border-purple-700 transition"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            rows={5}
            required
            onChange={handleChange}
            value={formdata.message}
            className="px-4 py-3 border border-gray-300 rounded-lg text-white bg-neutral-800  focus:outline-none focus:border-purple-700 transition resize-none"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-3 bg-purple-700 text-white rounded-lg text-base font-semibold hover:bg-purple-900 transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-2 text-gray-500 text-sm">
          {/* Add your social links here */}
          <span>Or connect with me on social media!</span>
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      
      {/* Success Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="success-modal-title"
        aria-describedby="success-modal-description"
      >
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 text-center shadow-xl">
            <h2 id="success-modal-title" className="text-xl font-semibold text-gray-900 mb-2">
              Message Sent Successfully!
            </h2>
            <p id="success-modal-description" className="text-gray-600 mb-4">
              Thank you for reaching out. I'll get back to you soon!
            </p>
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-900 transition"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;