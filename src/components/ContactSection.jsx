import React from "react";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const email = "akhileshbisht2020@gmail.com";
  const phoneNumber = "+916399085419";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}`;

  return (
    <section id="contact" className="py-12 px-4 bg-gray-100 text-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <HiOutlineMail className="text-3xl text-blue-600" />
                <a
                  href={`mailto:${email}`}
                  className="text-blue-600 text-lg font-medium hover:underline"
                >
                  {email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <IoIosCall className="text-3xl text-green-600" />
                <p className="text-lg text-gray-600">{phoneNumber}</p>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-4">
                <FaWhatsapp className="text-3xl text-green-500" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-green-600 font-medium hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Send a Message
            </h3>

            <form
              action={`mailto:${email}`}
              method="POST"
              encType="multipart/form-data"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
