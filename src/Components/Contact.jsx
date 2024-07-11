import React from 'react';
import { CONTACT } from '../constants/index';
import { motion } from 'framer-motion';
import pdf from '../assets/Resume2.pdf';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="text-center tracking-tighter">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="my-4"
            >
              {CONTACT.address}
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="my-4"
            >
              {CONTACT.phoneNo}
            </motion.p>
            <div className="flex flex-col">
              <motion.a
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                href={pdf}
                download
                className="mt-4 mx-24 lg:mx-44 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
              >
                Download CV
              </motion.a>
              <motion.a
                href="#"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="mt-4"
              >
                {CONTACT.email}
              </motion.a>
            </div>
          </div>
        </div>
        <div className="p-4 m-2 w-full lg:w-1/2 lg:p-8 lg:m-0">
          <motion.form
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="block w-full px-4 py-2 rounded-lg border border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-800 bg-gray-800"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="block w-full px-4 py-2 rounded-lg border border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-800 bg-gray-800"
            />
            <textarea
              name="Message"
              rows="6"
              placeholder="Your Message"
              className="block w-full px-4 py-2 rounded-lg border border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-800 bg-gray-800"
            ></textarea>
            <button
              type="submit"
              className="block  bg-neutral-900 text-purple-900 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
