import React from "react";
import { Link } from "react-router";
import {Button,Divider,} from 'antd'
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import googlePlay from "../../assets/googleplaygetnow.svg";
import appStore from "../../assets/comingsoonappstore.svg";
import logo from "../../assets/logo-white.svg";
import star from '../../assets/star.png';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import blueline from '../../assets/blueline.png'

const Footer = () => {
  var settings = {
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
}
  return (
    <>
      <section className=' py-10 mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-10'>
          <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-4xl mt-1'>1,250+ Nigerians already
 saving with</h1>
            <h1 className='font-bold text-3xl text-[#0047FF]'>
              ileFund
            </h1>
            <p className='text-sm mt-2'>
              We’re not just a platform — we’re a partner in your property journey. From first-time buyers to seasoned investors, ileFund is trusted for its transparency, flexibility, and reliability.
            </p>

            <Button
              type='primary'
              size='medium'
              className='!rounded-full !px-6 flex items-center gap-2 w-fit mt-2 !py-4 !h-10 !bg-[#0047FF]'
            >
              Start Your Journey Now <LiaLongArrowAltRightSolid size={20} />
            </Button>
          </div>

          <div className='bg-[#DAE2FB] p-6 rounded-lg'>
            <Slider {...settings}>
              <div>
                <h2 className='text-2xl font-bold '>Testimonials</h2>
                <p className='mt-2 text-sm'>
                 I’ve always wanted to own property but the lump-sum payment scared me. Ilefund changed everything for me. The savings plan is clear, 
                 the properties are real, and the process is very straightforward. For the first time, I feel confident that I’m working toward something tangible
                </p>
                <div className='mt-3 flex items-center gap-5'>
                   <img
                          
                          src="https://images.unsplash.com/photo-1594564190328-0bed16a89837?w=200&auto=format&fit=crop&q=60"
                          alt='star'
                          className='w-14 h-14  rounded-md object-cover'/>
                  <h1 className='font-bold text-lg'>
                    Adebayo Obafemi./{' '}
                    <span className='!font-light'>Ondo</span>
                  </h1>
                </div>
                <Divider />
                <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2'>
                  <div className='flex flex-col p-2 relative'>
                    <img
                      src={blueline}
                      alt=''
                      className='w-30 absolute right-0'
                    />
                    
                    <div className='flex items-center mt-1'>
                      {/* Map star 5 times */}
                      <h1 className='text-[17px] mr-2 mt-1'>5.0</h1>
                      {[...Array(5)].map((_, index) => (
                        <img
                          key={index}
                          src={star}
                          alt='star'
                          className='w-4 h-4 '
                        />
                      ))}
                    </div>
                    <span className='text-xs mt-1'>Google Rating</span>
                  </div>
                  <div className='flex flex-col p-2 relative'>
                    <img
                      src={blueline}
                      alt=''
                      className='w-30 absolute right-0'
                    />
                    <div className='flex mt-1 flex-col'>
                      {/* Map star 5 times */}
                      <div className='flex items-center'>
                        <span className='text-[17px] mr-2 mt-1'>5.0</span>
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            src={star}
                            alt='star'
                            className='w-4 h-4'
                          />
                        ))}
                      </div>
                      <div className='flex items-center'>
                        <h1 className='mr-2 mt-1 text-xs'> Trustpilot</h1>
                        <h1 className='mr-2 mt-1 text-xs'>Rated</h1>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col p-2 relative'>
                    <img
                      src={blueline}
                      alt=''
                      className='w-30 absolute right-0'
                    />
                    <div className='flex mt-1 flex-col'>
                      {/* Map star 5 times */}
                      <div className='flex items-center'>
                        <span className='text-[17px] mr-2 mt-1'>5.0</span>
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            src={star}
                            alt='star'
                            className='w-4 h-4'
                          />
                        ))}
                      </div>
                      <div className='flex items-center'>
                        <h1 className='mr-2 mt-1 text-xs'>App</h1>
                        <h1 className='mr-2 mt-1 text-xs'>Rated</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             

              <div>
                <h2 className='text-2xl font-bold'>Testimonials</h2>
                <p className='mt-2 text-sm'>
                 What I love most about Ilefund is the transparency. Every step is explained, from savings to allocation.
                I started with a small amount and watched my progress grow. It feels good knowing my money is actually going somewhere meaningful.
                </p>
                <div className='mt-3 flex items-center gap-5'>
                 
                   <img
                          
                          src="https://images.unsplash.com/photo-1602342323893-b11f757957c9?w=200&auto=format&fit=crop&q=60"
                          alt='star'
                          className='w-14 h-14  rounded-md object-cover'/>
                  <h1 className='font-bold text-lg '>
                    Chioma Nefo./{' '}
                    <span className='!font-light'>Abuja</span>
                  </h1>
                </div>
                <Divider />
                <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2'>
                  <div className='flex flex-col p-2 relative'>
                    <img
                      src={blueline}
                      alt=''
                      className='w-30 absolute right-0'
                    />
                    
                    <div className='flex items-center mt-1'>
                      {/* Map star 5 times */}
                      <h1 className='text-[17px] mr-2 mt-1'>5.0</h1>
                      {[...Array(5)].map((_, index) => (
                        <img
                          key={index}
                          src={star}
                          alt='star'
                          className='w-4 h-4 '
                        />
                      ))}
                    </div>
                    <span className='text-xs mt-1'>Google Rating</span>
                  </div>
                  <div className='flex flex-col p-2 relative'>
                    <img
                      src={blueline}
                      alt=''
                      className='w-30 absolute right-0'
                    />
                    <div className='flex mt-1 flex-col'>
                      {/* Map star 5 times */}
                      <div className='flex items-center'>
                        <span className='text-[17px] mr-2 mt-1'>5.0</span>
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            src={star}
                            alt='star'
                            className='w-4 h-4'
                          />
                        ))}
                      </div>
                      <div className='flex items-center'>
                        <h1 className='mr-2 mt-1 text-xs'>Trustpilot</h1>
                        <h1 className='mr-2 mt-1 text-xs'>Rated</h1>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col p-2 relative'>
                    <img
                      src={blueline}
                      alt=''
                      className='w-30 absolute right-0'
                    />
                    <div className='flex mt-1 flex-col'>
                      {/* Map star 5 times */}
                      <div className='flex items-center'>
                        <span className='text-[17px] mr-2 mt-1'>5.0</span>
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            src={star}
                            alt='star'
                            className='w-4 h-4'
                          />
                        ))}
                      </div>
                      <div className='flex items-center'>
                        <h1 className='mr-2 mt-1 text-xs'>App</h1>
                        <h1 className='mr-2 mt-1 text-xs'>Rated</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    <footer className="bg-gradient-to-b from-[#050B2E] to-[#040822] text-white px-6 md:px-20 pt-20 pb-10">
      
      {/* CTA */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold leading-snug">
          Start Saving Today. <br /> Own Property Tomorrow.
        </h2 >
        <p className="mt-2"> <i>You don’t need millions to own property.
You just need a plan.</i></p>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <a href="https://play.google.com/store/apps/details?id=com.ilefund" target="_blank"> <img src={googlePlay} alt="Google Play" className="h-12 cursor-pointer" /></a>
          <img src={appStore} alt="App Store" className="h-12 cursor-pointer" />
        </div>
      </div>

      {/* LINKS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14 text-sm">
        <div>
          <p className="font-semibold mb-4 uppercase text-gray-300">Quick Link</p>
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
           <li><Link to="/how-to-save">How To Save</Link></li>
            <li><Link to="/blog">Blog</Link></li>
           
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
    </>
  );
};

export default Footer;
