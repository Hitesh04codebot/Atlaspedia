import React from "react";
import Swal from "sweetalert2";

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
        <h1 className="text-white font-semibold text-4xl text-center">
          Contact Us
        </h1>
        <label
          htmlFor="name"
          className="text-white font-semibold text-xl mt-10"
        >
          Name:
        </label>
        <input
          type="text"
          name="Name"
          id="name"
          placeholder="Enter your name"
          className="mt-2 p-2 placeholder-white rounded-lg border  border-white w-full text-white"
          autoComplete="off"
        />
        <br />
        <label
          htmlFor="email"
          className="text-white font-semibold text-xl mt-4"
        >
          Email:
        </label>
        <input
          type="email"
          name="Email"
          id="email"
          placeholder="Enter your email"
          className=" mt-2 p-2 placeholder-white rounded-lg border  border-white w-full text-white"
          autoComplete="off"
        />
        <br />
        <label
          htmlFor="message"
          className="text-white font-semibold text-xl mt-4"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="Message"
          rows="4"
          placeholder="Enter your message"
          className="mt-2 p-2 placeholder-white rounded-lg border border-white w-full text-white"
          autoComplete="off"
        ></textarea>
        <br />
        <button type="submit" className="bg-blue-800 text-white w-full font-semibold text-xl mt-4 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Contact;
