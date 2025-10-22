import React, { useState } from "react";
import emailjs from "emailjs-com";
import ContactImg from "../assets/projectImg/wmremove-transformed.jpeg"; // 🔹 replace with your image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_e58mybn", // 🔹 replace with your EmailJS service ID
        "template_r0xbplg", // 🔹 replace with your EmailJS template ID
        formData,
        "LMAP_a4_nD0UFDuqV" // 🔹 replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("✅ Thank you! Your message has been sent.");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (err) => {
          console.log("FAILED...", err);
          setStatus("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left side - Image */}
        <div className="relative group">
          <img
            src={ContactImg}
            alt="Contact"
            className="w-full h-[500px] object-cover rounded-3xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent rounded-3xl"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-3xl font-bold mb-2">Let’s Work Together</h3>
            <p className="text-gray-300 max-w-xs">
              Have a project in mind? I’d love to help bring it to life.
            </p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none text-gray-100"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none text-gray-100"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none text-gray-100"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none text-gray-100 resize-none"
              />
            </div>

            {/* Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          {status && (
            <p className="text-cyan-400 text-center mt-6 font-medium">{status}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
