import React from "react";
import { Link } from "react-router";
import { Button } from "antd";
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import { Links } from "react-router";


const Footer = () => {
  return (
    <div className="p-5 bg-[#333333] py-10 pb-10">
      {/* <div className="m-auto w-11/12 grid gap-2 mt-20 pb-5
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
        
        <div>
          <h1 className="font-semibold mb-3">Pie Assets</h1>
          <div className="mt-14">
            <h1 className="font-bold text-3xl">Your Path To</h1>
            <h1 className="font-bold text-3xl text-gray-400">Financial Freedom!</h1>
          </div>
        </div>
        
        <div>
          <h1 className="font-semibold mb-3">Company</h1>
          <div className="flex flex-col gap-1.5">
            <Link>About</Link>
            <Link>Assets</Link>
            <Link>Investor Resources</Link>
            <Link>Blog</Link>
            <Link>Contact Us</Link>
          </div>
        </div>
        
        <div>
          <h1 className="font-semibold mb-3">Company</h1>
          <div className="flex flex-col gap-1.5">
            <Link>How it Works</Link>
            <Link>Our Services</Link>
            <Link>FAQ</Link>
          </div>
        </div>
        
        <div>
          <h1 className="font-semibold mb-3">Investment</h1>
          <div className="flex flex-col gap-1.5">
            <Link>Instagram</Link>
            <Link>Facebook</Link>
            <Link>Twitter</Link>
            <Link>Linked in</Link>
          </div>
        </div>
        
        <div>
          <h1 className="font-semibold mb-3">Have a Question?</h1>

          <div className="flex items-center">
            <Button className="!rounded-full !bg-black !text-white outline-0 !border-0 hover:!border-0 ">
                Contact Us
            </Button>
            <img src={dot} alt="" className="h-3 w-3 -ml-2 z-1"/>
          </div>
        </div>
      </div> */}
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold text-white text-3xl">HOME</h1>
        <div className="flex items-center gap-4">
          <p className="text-white font-semibold">Drive with Us to PROPERTIES</p>
          <Link to='#' className="text-white font-semibold">Careers</Link>
          <Link to='#' className="text-white font-semibold">Goals</Link>
          <Link to='#' className="text-white font-semibold">News</Link>
          <Link to='#' className="text-white font-semibold">Real Estate</Link>
        </div>
      </div>
      <div className="flex gap-5 mt-8">
        <img src={facebook} alt="" className="w-6"/>
        <img src={twitter} alt="" className="w-6"/>
        <img src={linkedin} alt="" className="w-6"/>
        <img src={instagram} alt="" className="w-6"/>
      </div>
    </div>
  );
};

export default Footer;
