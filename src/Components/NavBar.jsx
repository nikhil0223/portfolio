import React from 'react';
import logo from '../assets/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp } from 'react-icons/io';
import { PHONE_NO } from '../constants';

const NavBar = () => {
  return (
    <nav className="mb-18 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <Link to="https://www.linkedin.com/in/nikhil-sharma-18b764201">
          <FaLinkedin />
        </Link>
        <Link to="https://github.com/nikhil0223">
          <FaGithub />
        </Link>
        <Link>
          <FaSquareXTwitter />
        </Link>
        <Link to={`https://wa.me/${PHONE_NO}`} target="_blank">
          <IoLogoWhatsapp />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
