import React from 'react';
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-400 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4 '>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>TripNThrill</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className='text-right lg:flex'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Destinations</Link></li>
            <li><Link to="/">Travel</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/terms">Terms and Conditions</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
