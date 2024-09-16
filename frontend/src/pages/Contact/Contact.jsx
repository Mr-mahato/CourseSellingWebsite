import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div className="w-full  pt-20 min-h-screen">
      <div className="flex w-[90%] mx-auto gap-10 py-10 ">
        <div className="flex-1 border px-10 py-5 rounded-lg">
          <h1 className="text-2xl font-bold">Our Contact Information</h1>
          <p className="text-neutral-700 ">
            Feel free to reach out to us directly
          </p>
          <div className="flex gap-2 pt-10">
            {/* phone */}
            <FontAwesomeIcon
              className="self-center"
              icon={faPhone}
              style={{ height: "1.2rem" }}
            />
            <p>+91 9262827242</p>
          </div>

          <div className="pt-4 gap-2 flex">
            {/* mail */}
            <FontAwesomeIcon
              className="self-center"
              icon={faEnvelope}
              style={{ height: "1.3rem" }}
            />
            <a href="mailto:cmhandan@gmail.com" className="block">
              info@educare.com
            </a>
          </div>
        </div>
        <div className="flex-1 border px-10 py-5 rounded-lg ">
          <h1 className="text-2xl font-bold">Send Us a message</h1>
          <p className="text-neutral-700 text-sm">
            We'll get back to you as soon as possible
          </p>

          {/* input form */}
          <form  className=" flex flex-col gap-4 mt-4">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">Name</label>
              <input className="contactInput" type="text" placeholder="Your name" />
            </div>
            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">Email</label>
              <input className="contactInput bg-white" type="text" placeholder="Your email" />
            </div>
            {/* phone number */}
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">Phone Number</label>
              <input className="contactInput" type="text" placeholder="Your phone number" />
            </div>
            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">Message</label>
              <textarea row={10} cols={3} className="contactInput" type="text" placeholder="Your message" />
            </div>

            <button className="bg-neutral-800 px-2 py-3 rounded-md text-white font-semibold">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
