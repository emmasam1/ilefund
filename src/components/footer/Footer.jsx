import React from "react";
import { Link } from "react-router";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import googlePlay from "../../assets/googleplaygetnow.svg";
import appStore from "../../assets/comingsoonappstore.svg";
import logo from "../../assets/logo-white.svg";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#050B2E] to-[#040822] text-white px-6 md:px-20 pt-20 pb-10">
      
      {/* CTA */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold leading-snug">
          Start Saving Today. <br /> Own Property Tomorrow.
        </h2>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <img src={googlePlay} alt="Google Play" className="h-12 cursor-pointer" />
          <img src={appStore} alt="App Store" className="h-12 cursor-pointer" />
        </div>
      </div>

      {/* LINKS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14 text-sm">
        <div>
          <p className="font-semibold mb-4 uppercase text-gray-300">Navigation</p>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/faqs">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4 uppercase text-gray-300">What We Do</p>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/real-estate">Real Estate</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/how-to-save">How To Save</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4 uppercase text-gray-300">Legal</p>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4 uppercase text-gray-300">Talk To Us</p>
          <ul className="space-y-2 text-gray-400">
            <li>support@ilefund.com</li>
            <li>+234 0703 631 2434</li>
            <Link to="/contact">Contact Us</Link>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 mb-6"></div>

      {/* BOTTOM BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-50 h-30 rounded-lg flex items-center justify-center font-bold">
            
           <img src={logo} className="" />
          </div>
          {/* <span className="text-white font-semibold text-lg">ileFund</span> */}
        </div>

        <p>© 2026 ilefund. All Rights Reserved.</p>

        {/* Socials */}
        <div className="flex gap-4">
          <img src={facebook} className="w-5 h-5 opacity-80 hover:opacity-100" />
          <img src={twitter} className="w-5 h-5 opacity-80 hover:opacity-100" />
          <img src={linkedin} className="w-5 h-5 opacity-80 hover:opacity-100" />
          <img src={instagram} className="w-5 h-5 opacity-80 hover:opacity-100" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
