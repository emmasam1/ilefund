import React, { useState } from "react";
import { Button, Card, Collapse, Divider, Input } from "antd";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { AiOutlinePlus } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";

import landImg1 from "../../assets/land_img_1.png";
import landImg2 from "../../assets/land_img_2.png";
import landImg3 from "../../assets/land_img_3.png";
import landImg4 from "../../assets/land_img_4.png";
import landImg5 from "../../assets/land_img_5.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import dollar_round from "../../assets/dollar_round.png";
import google from "../../assets/google.png";

import home_progress from "../../assets/home_progress.png";
import home_img_2 from "../../assets/twemoji_house-with-garden.svg";
import home_img_3 from "../../assets/game-icons_tower-bridge.svg";
import home_img_4 from "../../assets/Group.svg";

const { Panel } = Collapse;

const RealEstate = () => {
  const [activeKey, setActiveKey] = useState(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const items = [
    {
      key: "1",
      label: "How do I know if I need financial consultant",
      children: (
        <p>
          If you are uncertain about managing investment, planning for
          retirement, or structuring your finances, consulting a professional
          can help. Our team assists in clarifying your goals and optimizing
          your strategies.
        </p>
      ),
    },
    {
      key: "2",
      label: "Are the properties vetted?",
      children: (
        <p>
          Yes, all properties go through a thorough vetting process to meet our
          quality standards.
        </p>
      ),
    },
    {
      key: "3",
      label: "How do I get started?",
      children: (
        <p>
          You can sign up online, book a consultation, and we’ll help you start
          your journey to ownership.
        </p>
      ),
    },
  ];

  const slides = [
    {
      logo: "/images/logoipsum.png",
      text: `The guidance we received has transformed our financial outlook. Our consultant was patient, knowledgeable, and crafted a plan that aligned with our goals. Thanks to their strategic advice, we are optimistic about our future.`,
      name: "Rachael T.",
      role: "Entrepreneur",
      image: "/images/rachael.jpg",
    },
    {
      logo: "/images/logoipsum.png",
      text: `Working with this team has been an absolute game-changer for our business. They understood our vision and helped us achieve financial clarity.`,
      name: "David M.",
      role: "Small Business Owner",
      image: "/images/david.jpg",
    },
    {
      logo: "/images/logoipsum.png",
      text: `I’ve never felt more confident about my investments. Their step-by-step guidance was exactly what I needed.`,
      name: "Sophia L.",
      role: "Investor",
      image: "/images/sophia.jpg",
    },
    {
      logo: "/images/logoipsum.png",
      text: `Their expertise and patience helped us finally create a budget we can stick to. Highly recommend them!`,
      name: "Michael R.",
      role: "Freelancer",
      image: "/images/michael.jpg",
    },
  ];

  const content = [
    
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center px-15 py-16 bg-cover bg-center bg-[url(src/assets/ilefund-land-nigeria-bg-2.png)]">
        <div className="space-y-6">
          <p className="">REAL ESTATE</p>
          <h1 className="font-extrabold text-4xl sm:text-4xl lg:text-4xl leading-tight">
            An expansive portfolio,
            <br />
            calibrated for consistent
            <br />
            growth
          </h1>
          <p className="text-gray-600 max-w-md">
            Explore ilefund’s real estate strategies designed to harness
            long-term macroeconomic drivers such as Sunbelt housing and
            e-commerce logistics.
          </p>

          <div className="flex gap-5">
            <Input placeholder="Start with your Email address ....." />
            <Button
              type="primary"
              size="large"
              className="!rounded-full !px-6 flex items-center gap-2 w-fit"
            >
              Let’s start <LiaLongArrowAltRightSolid size={20} />
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={landImg1}
            alt="Illustration of land planning"
            className="w-full max-w-md object-contain"
          />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 mt-10">
        {/* LEFT — FIXED */}
        <div className="md:sticky md:top-10 h-max">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h2 className="text-xl font-bold">Left Side (Fixed)</h2>
            <p>
              This section stays fixed as long as you scroll the right side.
            </p>
          </div>
        </div>

        {/* RIGHT — SCROLLABLE */}
        <div className="h-[500px] overflow-y-scroll scrollbar-hide pr-4">
          {/* Long Content Here */}
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut...
            </p>
            <p>(Repeat your long content here)</p>
            <p>More long content...</p>
            <p>More long content...</p>
            <p>More long content...</p>
          </div>
        </div>
      </div>

      {/* Normal content continues */}
      <div className="p-10">
        <h1 className="text-2xl font-bold">Page continues normally below…</h1>
        <p className="mt-4">
          This part shows after the right content finishes scrolling.
        </p>
      </div>

      {/* Feature Cards Section */}
      <section className="bg-[#D9D9D9] py-16">
        <h2 className="text-center font-bold text-2xl mb-12">
          Get a little richer each day
        </h2>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hoverable className="rounded-xl shadow-md p-4">
              <div className="mb-4">
                <img src={icon1} alt="Savings icon" className="w-12 h-12" />
              </div>
              <h3 className="font-bold text-xl">Build your savings</h3>
              <p className="mt-2 text-gray-600">
                Consistently automate your savings while setting realistic
                goals.
              </p>
            </Card>

            <Card hoverable className="rounded-xl shadow-md p-4">
              <div className="mb-4">
                <img src={icon2} alt="Investment icon" className="w-12 h-12" />
              </div>
              <h3 className="font-bold text-xl">Invest deliberately</h3>
              <p className="mt-2 text-gray-600">
                Invest in our diverse range of assets that grow in value over
                time.
              </p>
            </Card>

            <Card hoverable className="rounded-xl shadow-md p-4">
              <div className="mb-4">
                <img
                  src={icon3}
                  alt="Wealth protection icon"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-bold text-xl">Stay rich</h3>
              <p className="mt-2 text-gray-600">
                Protect your wealth by managing risk, seeking advice, and making
                smart financial decisions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 flex flex-col justify-center">
            <h1 className="font-extrabold text-4xl">
              Three Steps to Home Ownership
            </h1>
            <p className="mt-5 font-semibold">
              Find out how you can own a Home and be a Landlord in just few days
            </p>
            <Button
              className="!bg-blue-600 !h-10 !text-white py-3 !rounded-full w-60 hover:bg-blue-700 transition !border-0 mt-5"
              htmlType="submit"
            >
              Get Started <MdOutlineArrowRightAlt />
            </Button>
          </div>
          <div className="h-[600px] md:col-span-2 bg-[url('/src/assets/house_bg.png')] bg-contain bg-no-repeat bg-center flex flex-col justify-end">
            {/* ✅ Green bar always stays at the bottom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  w-full p-4">
              <div className="h-35 w-30">
                <img src={home_img_4} alt="" className="w-full h-full " />
                <p className="text-center font-bold">Register</p>
              </div>
              <div className="h-35 w-30 justify-self-center">
                <img src={home_img_3} alt="" className="w-full h-full " />
                <p className="text-center font-bold">Save</p>
              </div>
              <div className="h-35 w-30 justify-self-end">
                <img src={home_img_2} alt="" className="w-full h-full " />
                <p className="text-center font-bold">Get Home</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#D9D9D9] py-12 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-4">
          {/* Text Section */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-7xl font-extrabold text-gray-900">
              Vetted Properties
            </h2>
            <p className="text-gray-700 max-w-md mx-auto md:mx-0">
              Explore thoroughly vetted properties that meet high standards for
              quality, location, and value—so you can invest with confidence.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={landImg4}
              alt="Vetted property showcase"
              className="w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
          <div className="">
            <img
              src={landImg5}
              alt="Vetted property showcase"
              className="w-full object-cover"
            />
          </div>

          <div className="p-4 w-full">
            {/* Accordion */}
            <div className="space-y-4">
              {items.map((item) => {
                const isActive = activeKey === item.key;

                return (
                  <div
                    key={item.key}
                    className="border border-gray-300 rounded-lg overflow-hidden"
                  >
                    {/* Header */}
                    <button
                      type="button"
                      onClick={() => setActiveKey(isActive ? null : item.key)}
                      aria-expanded={isActive}
                      aria-controls={`panel-${item.key}`}
                      className={`w-full flex items-center justify-between px-6 py-5 focus:outline-none transition-colors duration-300 ${
                        isActive
                          ? "bg-[#12033A] text-white"
                          : "bg-white text-gray-900"
                      }`}
                    >
                      <span className="text-lg font-semibold">
                        {item.label}
                      </span>

                      {/* Icon */}
                      <span
                        className={`ml-4 transition-transform duration-300 ${
                          isActive ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        <AiOutlinePlus
                          size={20}
                          className={`${
                            isActive ? "text-white" : "text-gray-500"
                          }`}
                        />
                      </span>
                    </button>

                    {/* Content */}
                    <div
                      id={`panel-${item.key}`}
                      className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                        isActive ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <div
                        className={`p-6 border-t border-gray-200 ${
                          isActive
                            ? "bg-[#12033A] text-white"
                            : "bg-white text-gray-700"
                        }`}
                      >
                        {item.children}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border border-gray-300 rounded-lg p-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 flex flex-col justify-center">
            <div className="flex items-center gap-1">
              <img src={dollar_round} alt="" className="w-5" />
              <h1 className="font-bold">OUR TESTIMONIAL</h1>
            </div>
            <h1 className="font-bold text-4xl mt-1">1250+ customer say</h1>
            <h1 className="font-bold text-3xl text-[#0047FF]">
              about our finance
            </h1>
            <p className="text-sm">
              With over 1,250 established clients, our finance and consulting
              services have earned praise for reliability, personalized
              guidance, and impactful results.
            </p>

            <Button
              type="primary"
              size="medium"
              className="!rounded-full !px-6 flex items-center gap-2 w-fit mt-2"
            >
              Contact Now <LiaLongArrowAltRightSolid size={20} />
            </Button>
          </div>

          <div className="bg-[#F3F2F5] p-6 rounded-lg">
            <Slider {...settings}>
              <div>
                <h2 className="text-2xl font-bold">Logoipsum</h2>
                <p className="mt-2 text-black text-sm">
                  The guidance we received has transformed oyr financial
                  outlook. our consultant was patient, knowledgeable, and
                  crafted s plan that aligned with our goals. Thanks to their
                  strategic advice, optimistic about our future.
                </p>
                <div className="mt-3 flex items-center gap-5">
                  <div className="bg-indigo-600 h-14 w-14 rounded-md"></div>
                  <h1 className="font-bold text-lg">
                    Rachael T./{" "}
                    <span className="!font-light">Entrepreneur</span>
                  </h1>
                </div>
                <Divider />
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
                  <div class="border border-[D9D9D9] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs mt-1">Goggle Rating</span>
                    <h1 className="font-bold">5.0</h1>
                  </div>
                  <div class="border border-[D9D9D9] rounded-lg flex justify-center flex-col items-center">
                    <h1 className="font-bold">5.0</h1>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Rated</span>
                      <span className="text-xs">Trustpilot</span>
                    </div>
                  </div>
                  <div class="border border-[D9D9D9] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs text-center">
                      Total rating <b>5.0</b> base on <b>1250+</b> Review
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Logoipsum</h2>
                <p className="mt-2 text-black text-sm">
                  The guidance we received has transformed oyr financial
                  outlook. our consultant was patient, knowledgeable, and
                  crafted s plan that aligned with our goals. Thanks to their
                  strategic advice, optimistic about our future.
                </p>
                <div className="mt-3 flex items-center gap-5">
                  <div className="bg-indigo-600 h-14 w-14 rounded-md"></div>
                  <h1 className="font-bold text-lg">
                    Rachael T./{" "}
                    <span className="!font-light">Entrepreneur</span>
                  </h1>
                </div>
                <Divider />
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
                  <div class="border border-[#D9D9D9] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs mt-1">Goggle Rating</span>
                    <h1 className="font-bold">5.0</h1>
                  </div>
                  <div class="border border-[#D9D9D9] rounded-lg flex justify-center flex-col items-center">
                    <h1 className="font-bold">5.0</h1>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Rated</span>
                      <span className="text-xs">Trustpilot</span>
                    </div>
                  </div>
                  <div class="border border-[#D9D9D9] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs text-center">
                      Total rating <b>5.0</b> base on <b>1250+</b> Review
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Logoipsum</h2>
                <p className="mt-2 text-black text-sm">
                  The guidance we received has transformed oyr financial
                  outlook. our consultant was patient, knowledgeable, and
                  crafted s plan that aligned with our goals. Thanks to their
                  strategic advice, optimistic about our future.
                </p>
                <div className="mt-3 flex items-center gap-5">
                  <div className="bg-indigo-600 h-14 w-14 rounded-md"></div>
                  <h1 className="font-bold text-lg">
                    Rachael T./{" "}
                    <span className="!font-light">Entrepreneur</span>
                  </h1>
                </div>
                <Divider />
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
                  <div class="border border-[D9D9D9] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs mt-1">Goggle Rating</span>
                    <h1 className="font-bold">5.0</h1>
                  </div>
                  <div class="border border-[D9D9D9] rounded-lg flex justify-center flex-col items-center">
                    <h1 className="font-bold">5.0</h1>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Rated</span>
                      <span className="text-xs">Trustpilot</span>
                    </div>
                  </div>
                  <div class="border border-[D9D9D9] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs text-center">
                      Total rating <b>5.0</b> base on <b>1250+</b> Review
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="bg-[#0047FF] my-20 py-20">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-6xl mx-auto">
          <div class="">
            <h1 className="font-bold text-white text-4xl">
              Already a Potential
              <br /> Stake Holder
            </h1>
            <p className="text-white text-sm mt-2">
              Download ILE FUND for free get all the latest updates find <br />{" "}
              your home and contact support
            </p>
            <img src={google} alt="" className="mt-2 w-35 cursor-pointer" />
          </div>
          <div class="flex items-center">
            <div className="flex bg-[#ffffff8c] rounded-md p-2 w-full">
              <Input
                placeholder="Your email..."
                className="!border-none !bg-transparent placeholder:!text-white !outline-none focus:!border-none focus:!shadow-none"
              />
              <Button className="bg-white text-black">Sign Up For Free</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#12033a] py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 flex flex-col justify-center">
            <h1 className="font-bold text-4xl mt-1 text-white">
              1250+ customer say
            </h1>
            <h1 className="font-bold text-3xl text-[#0047FF]">
              about our finance
            </h1>
            <p className="text-sm text-white">
              With over 1,250 established clients, our finance and consulting
              services have earned praise for reliability, personalized
              guidance, and impactful results.
            </p>

            <Button
              type="primary"
              size="medium"
              className="!rounded-full !px-6 flex items-center gap-2 w-fit mt-2"
            >
              Contact Now <LiaLongArrowAltRightSolid size={20} />
            </Button>
          </div>

          <div className="bg-[#2A1C4E] p-6 rounded-lg">
            <Slider {...settings}>
              <div>
                <h2 className="text-2xl font-bold text-white">Logoipsum</h2>
                <p className="mt-2 text-sm text-white">
                  The guidance we received has transformed oyr financial
                  outlook. our consultant was patient, knowledgeable, and
                  crafted s plan that aligned with our goals. Thanks to their
                  strategic advice, optimistic about our future.
                </p>
                <div className="mt-3 flex items-center gap-5">
                  <div className="bg-indigo-600 h-14 w-14 rounded-md"></div>
                  <h1 className="font-bold text-lg text-white">
                    Rachael T./{" "}
                    <span className="!font-light">Entrepreneur</span>
                  </h1>
                </div>
                <Divider />
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs mt-1 text-white">
                      Goggle Rating
                    </span>
                    <h1 className="font-bold text-white">5.0</h1>
                  </div>
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <h1 className="font-bold text-white">5.0</h1>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white">Rated</span>
                      <span className="text-xs text-white">Trustpilot</span>
                    </div>
                  </div>
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs text-center text-white">
                      Total rating <b>5.0</b> base on <b>1250+</b> Review
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Logoipsum</h2>
                <p className="mt-2 text-sm text-white">
                  The guidance we received has transformed oyr financial
                  outlook. our consultant was patient, knowledgeable, and
                  crafted s plan that aligned with our goals. Thanks to their
                  strategic advice, optimistic about our future.
                </p>
                <div className="mt-3 flex items-center gap-5">
                  <div className="bg-indigo-600 h-14 w-14 rounded-md"></div>
                  <h1 className="font-bold text-lg text-white">
                    Rachael T./{" "}
                    <span className="!font-light">Entrepreneur</span>
                  </h1>
                </div>
                <Divider />
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs mt-1 text-white">
                      Goggle Rating
                    </span>
                    <h1 className="font-bold text-white">5.0</h1>
                  </div>
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <h1 className="font-bold text-white">5.0</h1>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white">Rated</span>
                      <span className="text-xs text-white">Trustpilot</span>
                    </div>
                  </div>
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs text-center text-white">
                      Total rating <b>5.0</b> base on <b>1250+</b> Review
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Logoipsum</h2>
                <p className="mt-2 text-sm text-white">
                  The guidance we received has transformed oyr financial
                  outlook. our consultant was patient, knowledgeable, and
                  crafted s plan that aligned with our goals. Thanks to their
                  strategic advice, optimistic about our future.
                </p>
                <div className="mt-3 flex items-center gap-5">
                  <div className="bg-indigo-600 h-14 w-14 rounded-md"></div>
                  <h1 className="font-bold text-lg text-white">
                    Rachael T./{" "}
                    <span className="!font-light">Entrepreneur</span>
                  </h1>
                </div>
                <Divider />
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs mt-1 text-white">
                      Goggle Rating
                    </span>
                    <h1 className="font-bold text-white">5.0</h1>
                  </div>
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <h1 className="font-bold text-white">5.0</h1>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white">Rated</span>
                      <span className="text-xs text-white">Trustpilot</span>
                    </div>
                  </div>
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs text-center text-white">
                      Total rating <b>5.0</b> base on <b>1250+</b> Review
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;
