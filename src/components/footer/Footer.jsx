import React from "react";
import { Link } from "react-router-dom";
import { Button, Divider } from "antd";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import googlePlay from "../../assets/googleplaygetnow.svg";
import appStore from "../../assets/comingsoonappstore.svg";
import logo from "../../assets/logo-white.svg";
import star from "../../assets/star.png";
import blueline from "../../assets/blueline.png";

const Footer = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  const renderRating = () => (
    <div className="flex items-center mt-[0.25rem]">
      <span className="text-[1rem] mr-[0.25rem]">5.0</span>
      {[...Array(5)].map((_, i) => (
        <img key={i} src={star} alt="star" className="w-[0.75rem] h-[0.75rem]" />
      ))}
    </div>
  );

  return (
    <>
      {/* Testimonials Section */}
      <section className="py-[2.5rem] mt-[2.5rem]  max-w-[75rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-[1.575rem] sm:text-[1.25rem] lg:text-[2rem] leading-tight">
              1,250+ Nigerians already saving with
            </h1>
            <h1 className="font-bold text-[1.575rem] sm:text-[1.25rem] lg:text-[2rem] text-[#0047FF] mt-[0.5rem]">
              ileFund
            </h1>
            <p className="text-[0.875rem] sm:text-[1rem] mt-[0.5rem] leading-relaxed">
              We’re not just a platform — we’re a partner in your property journey. From first-time buyers
              to seasoned investors, ileFund is trusted for its transparency, flexibility, and reliability.
            </p>
            <Button
              type="primary"
              size="large"
              className="!rounded-full !px-[1.5rem] flex items-center gap-[0.5rem] w-fit mt-[1rem] !py-[0.75rem] !bg-[#0047FF] hover:!bg-blue-700"
            >
              Start Your Journey Now <LiaLongArrowAltRightSolid size={20} />
            </Button>
          </div>

          {/* Right Column - Slider */}
          <div className="bg-[#DAE2FB] p-[1.5rem] rounded-[0.5rem]">
            <Slider {...sliderSettings}>
              {[1, 2].map((slide, idx) => (
                <div key={idx} className="px-[0.5rem] sm:px-[1rem]">
                  <h2 className="text-[1.25rem] font-bold">Testimonials</h2>
                  <p className="mt-[0.5rem] text-[0.875rem] leading-relaxed">
                    {slide === 1
                      ? "I’ve always wanted to own property but the lump-sum payment scared me. Ilefund changed everything for me. The savings plan is clear, the properties are real, and the process is very straightforward. For the first time, I feel confident that I’m working toward something tangible."
                      : "What I love most about Ilefund is the transparency. Every step is explained, from savings to allocation. I started with a small amount and watched my progress grow. It feels good knowing my money is actually going somewhere meaningful."}
                  </p>

                  <div className="mt-[0.75rem] flex items-center gap-[0.5rem] sm:gap-[1rem]">
                    <img
                      src={
                        slide === 1
                          ? "https://images.unsplash.com/photo-1594564190328-0bed16a89837?w=200&auto=format&fit=crop&q=60"
                          : "https://images.unsplash.com/photo-1602342323893-b11f757957c9?w=200&auto=format&fit=crop&q=60"
                      }
                      alt="user"
                      className="w-[3.5rem] h-[3.5rem] rounded-md object-cover"
                    />
                    <h1 className="font-bold text-[1.125rem]">
                      {slide === 1 ? "Adebayo Obafemi" : "Chioma Nefo"}./{" "}
                      <span className="!font-light text-[1rem]">{slide === 1 ? "Ondo" : "Abuja"}</span>
                    </h1>
                  </div>

                  <Divider />

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1rem] mb-[0.5rem]">
                    {["Google Rating", "Trustpilot Rated", "App Rated"].map((label, i) => (
                      <div key={i} className="flex flex-col p-[0.5rem] relative">
                        <img src={blueline} alt="" className="w-[7.5rem] absolute right-0" />
                        {renderRating()}
                        <span className="text-[0.75rem] mt-[0.25rem]">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-b from-[#050B2E] to-[#040822] text-white px-[5%] md:px-[5rem] pt-[5rem] pb-[2.5rem]">
        {/* CTA */}
        <div className="text-center mb-[4rem] max-w-[75rem] mx-auto">
          <h2 className="text-[1.5rem] md:text-[1.875rem] font-bold leading-snug">
            Start Saving Today. <br /> Own Property Tomorrow.
          </h2>
          <p className="mt-[0.5rem] italic text-[0.875rem] sm:text-[1rem]">
            You don’t need millions to own property. You just need a plan.
          </p>
          <div className="flex justify-center gap-[1rem] mt-[1.5rem] flex-wrap">
            <a
              href="https://play.google.com/store/apps/details?id=com.ilefund"
              target="_blank"
              rel="noreferrer"
            >
              <img src={googlePlay} alt="Google Play" className="h-[3rem] cursor-pointer" />
            </a>
            <img src={appStore} alt="App Store" className="h-[3rem] cursor-pointer" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2.5rem] mb-[3.5rem] text-[0.875rem] max-w-[75rem] mx-auto">
          <div>
            <p className="font-semibold mb-[0.75rem] uppercase text-gray-300">Quick Link</p>
            <ul className="space-y-[0.5rem] text-gray-400">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/faqs">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-[0.75rem] uppercase text-gray-300">What We Do</p>
            <ul className="space-y-[0.5rem] text-gray-400">
              <li><Link to="/real-estate">Real Estate</Link></li>
              <li><Link to="/how-to-save">How To Save</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-[0.75rem] uppercase text-gray-300">Legal</p>
            <ul className="space-y-[0.5rem] text-gray-400">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-[0.75rem] uppercase text-gray-300">Talk To Us</p>
            <ul className="space-y-[0.5rem] text-gray-400">
              <li>support@ilefund.com</li>
              <li>+234 0703 631 2434</li>
              <Link to="/contact">Contact Us</Link>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        <Divider className="border-white/10 mb-[1.5rem]" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-[1.5rem] text-[0.875rem] text-gray-400 max-w-[75rem] mx-auto">
          <div className="flex items-center gap-[0.75rem]">
            <div className="w-[12.5rem] h-[7.5rem] rounded-lg flex items-center justify-center">
              <img src={logo} alt="ileFund Logo" />
            </div>
          </div>
          <p>© 2026 ileFund. All Rights Reserved.</p>
          <div className="flex gap-[1rem]">
            {[facebook, twitter, linkedin, instagram].map((icon, idx) => (
              <img
                key={idx}
                src={icon}
                alt="social-icon"
                className="w-[1.25rem] h-[1.25rem] opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
