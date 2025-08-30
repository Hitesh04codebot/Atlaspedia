import React from "react";
import Swal from "sweetalert2";
import { motion } from "motion/react";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "822fa190-5223-4b78-a81e-dd9f0a4a85a8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Message sent successfully",
        text: "Thanks for contacting me. I will get back to you soon.",
        icon: "success",
      });
    }
  };
  return (
    <div className="grid place-items-center min-h-screen">
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-full sm:w-[500px] md:w-[600px] lg:w-[700px] justify-center align-center min-h-screen p-10"
      >
        <motion.h1 
          initial={{ y: -50, opacity: 0 }} // starts from left
          animate={{ y: 0, opacity: 1 }} // moves to normal position
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white font-semibold text-4xl text-center">
          Contact Us
        </motion.h1>
        <motion.label
          initial={{ x: -100, opacity: 0 }} // starts from left
          animate={{ x: 0, opacity: 1 }} // moves to normal position
          transition={{ duration: 0.8, ease: "easeOut" }}
          htmlFor="name"
          className="text-white font-semibold text-xl mt-10"
        >
          Name:
        </motion.label>
        <motion.input
          initial={{ x: -100, opacity: 0 }} // starts from left
          animate={{ x: 0, opacity: 1 }} // moves to normal position
          transition={{ duration: 1.7, ease: "easeOut" }}
          type="text"
          name="Name"
          id="name"
          placeholder="Enter your name"
          className="mt-2 p-2 placeholder-white rounded-lg border  border-white w-full text-white"
          autoComplete="off"
          required
        />
        <br />
        <motion.label
          initial={{ x: -100, opacity: 0 }} // starts from left
          animate={{ x: 0, opacity: 1 }} // moves to normal position
          transition={{ duration: 0.8, ease: "easeOut" }}
          htmlFor="email"
          className="text-white font-semibold text-xl mt-4"
        >
          Email:
        </motion.label>
        <motion.input
          initial={{ x: -100, opacity: 0 }} // starts from left
          animate={{ x: 0, opacity: 1 }} // moves to normal position
          transition={{ duration: 1.7, ease: "easeOut" }}
          type="email"
          name="Email"
          id="email"
          placeholder="Enter your email"
          className=" mt-2 p-2 placeholder-white rounded-lg border  border-white w-full text-white"
          autoComplete="off"
          required
        />
        <br />
        <motion.label
          initial={{ x: -100, opacity: 0 }} // starts from left
          animate={{ x: 0, opacity: 1 }} // moves to normal position
          transition={{ duration: 0.8, ease: "easeOut" }}
          htmlFor="message"
          className="text-white font-semibold text-xl mt-4"
        >
          Message:
        </motion.label>
        <motion.textarea
          initial={{ x: -100, opacity: 0 }} // starts from left
          animate={{ x: 0, opacity: 1 }} // moves to normal position
          transition={{ duration: 1.7, ease: "easeOut" }}
          id="message"
          name="Message"
          rows="4"
          placeholder="Enter your message"
          className="mt-2 p-2 placeholder-white rounded-lg border border-white w-full text-white"
          autoComplete="off"
          required
        ></motion.textarea>
        <br />
        <motion.button 
        initial={{ x: 0, opacity: 0 }} // starts from left
          animate={{ x: 0, opacity: 1 }} // moves to normal position
          transition={{ duration: 1.7, ease: "easeOut" }}
        type="submit" className="bg-blue-800 text-white w-full font-semibold text-xl mt-4 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Submit
        </motion.button>
      </form>
    </div>
  );
}
export default Contact;
