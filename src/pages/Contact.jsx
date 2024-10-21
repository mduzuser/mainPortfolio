import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  // State qo'shish
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_an6j2z8", "template_sizr33e", form.current, {
        publicKey: "QbsANs1LrwZ5toY8R",
      })
      .then(
        () => {
          console.log("SUCCESS!");

          setFormData({
            from_name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="align-elements  my-12 md:flex justify-center  gap-24">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5, duration: 4 }}
        className="mb-14 md:mb-0 lg:mb-0"
      >
        <p className="text-3xl font-bold mb-2 font-mono">Contact</p>
        <p className="font-mono">Looking forward to hearing from you</p>

        <p className="text-3xl font-bold mb-3 font-mono mt-10">Phone</p>
        <p className="font-mono">(+998)90 405-23-11</p>

        <p className="text-3xl font-bold mb-3 font-mono mt-10">Email</p>
        <p className="font-mono">mrmarcusedev@gmail.com</p>
      </motion.div>

      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5, duration: 4 }}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-96 lg:w-96 "
        >
          <label className="block mb-4">
            <p className="mb-2 font-mono font-thin">Name *</p>
            <input
              type="text"
              name="from_name"
              placeholder="Enter Your Name"
              required
              className="w-full h-12 border border-black p-4 "
              value={formData.from_name}
              onChange={handleChange}
            />
          </label>

          <label className="block mb-4">
            <p className="mb-2 font-mono font-thin">Email *</p>
            <input
              type="email"
              name="email"
              required
              className="w-full h-12 border border-black p-4 "
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label className="block mb-4">
            <p className="mb-2 font-mono font-thin">Message *</p>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full h-46 border border-slate-800 resize-none p-4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>

          <input
            type="submit"
            value="Send Me"
            className="w-full h-10 text-xl text-slate-800 font-mono font-semibold hover:opacity-75 bg-yellow-500 border border-black rounded-3xl"
          />
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
