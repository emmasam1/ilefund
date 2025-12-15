import React from "react";
import { Link } from "react-router";
import { Button } from "antd";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className="bg-[#333333] py-10 px-4 sm:px-6 lg:px-20">
      {/* TOP SECTION: Logo + Links */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
        <h1 className="font-extrabold text-white text-3xl">HOME</h1>

        <div className="flex flex-wrap gap-4 md:gap-6 items-start md:items-center">
          <p className="text-white font-semibold whitespace-nowrap">
            Drive with Us to PROPERTIES
          </p>
          <Link to="#" className="text-white font-semibold whitespace-nowrap">
            Careers
          </Link>
          <Link to="#" className="text-white font-semibold whitespace-nowrap">
            Goals
          </Link>
          <Link to="#" className="text-white font-semibold whitespace-nowrap">
            News
          </Link>
          <Link to="#" className="text-white font-semibold whitespace-nowrap">
            Real Estate
          </Link>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex flex-wrap gap-5 mt-6 md:mt-8">
        <img src={facebook} alt="Facebook" className="w-6 h-6" />
        <img src={twitter} alt="Twitter" className="w-6 h-6" />
        <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
        <img src={instagram} alt="Instagram" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Footer;
