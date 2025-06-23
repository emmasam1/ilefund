import React from "react";
import { Link } from "react-router";
import { Button } from "antd";
import dot from '../../assets/dot.png'


const Footer = () => {
  return (
    <div className="py-35">
      <div className="m-auto w-11/12 grid gap-2 mt-20 pb-5
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
      </div>
    </div>
  );
};

export default Footer;
