import { useState } from "react";
import { Button, Card, Avatar, Tooltip, Divider, Input } from "antd";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import home_progress from "../../assets/home_progress.png";
import home_img_2 from "../../assets/twemoji_house-with-garden.svg";
import home_img_3 from "../../assets/game-icons_tower-bridge.svg";
import home_img_4 from "../../assets/Group.svg";
import iphone from "../../assets/iPhone-ilefund.png";
import google from "../../assets/google.svg";
import Rectangle43 from "../../assets/Rectangle43.png";
import propertyImg2 from "../../assets/property_img_2.png";
import home_img_1 from "../../assets/home_img_1.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import pin from "../../assets/pin.png";
import btn from "../../assets/btn.png";
import Calculator from "../../components/calculator/Calculator";
import { AiOutlinePlus } from "react-icons/ai";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import star from "../../assets/star.png";
import blueline from "../../assets/blueline.png";
import phone1 from "../../assets/ilefund-land-nigeria-iphone-1.png";
import phone2 from "../../assets/ilefund-land-nigeria-iphone-2.png";
import bg from "../../assets/ilefund-land-nigeria-bg-1.png";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const HomePage = () => {
  const [activeKey, setActiveKey] = useState(null);

  const properties = [
    {
      id: 1,
      title: "4 Semi detached-duplex with 2 room BQ",
      location: "Big land city Apo hilltop",
      price: "₦13,000,000",
      size: "500 SQM",
      deposit: "₦1,500,000",
      duration: "6 Months",
      image: propertyImg2,
    },
    {
      id: 2,
      title: "Luxury 3 Bedroom Flat",
      location: "Maitama District, Abuja",
      price: "₦25,000,000",
      size: "750 SQM",
      deposit: "₦2,000,000",
      duration: "12 Months",
      image: propertyImg2,
    },
    {
      id: 3,
      title: "Modern Bungalow with Garden",
      location: "Gwarinpa, Abuja",
      price: "₦8,500,000",
      size: "400 SQM",
      deposit: "₦800,000",
      duration: "8 Months",
      image: propertyImg2,
    },
    {
      id: 4,
      title: "Luxury Villa with Pool",
      location: "Asokoro, Abuja",
      price: "₦45,000,000",
      size: "1000 SQM",
      deposit: "₦3,500,000",
      duration: "18 Months",
      image: propertyImg2,
    },
    {
      id: 5,
      title: "2 Bedroom Mini Flat",
      location: "Lugbe, Abuja",
      price: "₦5,500,000",
      size: "300 SQM",
      deposit: "₦600,000",
      duration: "10 Months",
      image: propertyImg2,
    },
    {
      id: 6,
      title: "5 Bedroom Fully Detached Duplex",
      location: "Jabi, Abuja",
      price: "₦60,000,000",
      size: "1200 SQM",
      deposit: "₦5,000,000",
      duration: "24 Months",
      image: propertyImg2,
    },
    {
      id: 7,
      title: "Penthouse Apartment",
      location: "Wuse II, Abuja",
      price: "₦35,000,000",
      size: "850 SQM",
      deposit: "₦2,800,000",
      duration: "15 Months",
      image: propertyImg2,
    },
    {
      id: 8,
      title: "Townhouse with Rooftop Terrace",
      location: "Katampe Extension, Abuja",
      price: "₦20,000,000",
      size: "600 SQM",
      deposit: "₦1,800,000",
      duration: "9 Months",
      image: propertyImg2,
    },
  ];

  const stats = [
    { value: "98", label: "Projects" },
    { value: "65", label: "People" },
    { value: "10", label: "Years" },
    { value: "15", label: "Offices" },
  ];

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

  return (
    <>
      {/* ✅ Hero Section */}
      <div className="bg-[url(src/assets/ilefund-land-nigeria-bg-2.png)] w-full h-[700px] bg-cover bg-center relative">
        <section className="w-11/12 mx-auto h-full flex items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
            <div className="flex flex-col gap-6">
              <h1 className="font-extrabold text-5xl/19">
                Start With A <br />
                Plan, Save & Own.
              </h1>
              <div className="flex gap-3 items-center">
                <img src={Rectangle43} alt="" />
                <p className="text-2xl font-semibold">
                  From Savings to Home Ownership.
                </p>
              </div>

              <div className="flex gap-2 my-4 max-w-[529px]">
                <Input
                  placeholder="Start Your Email address ....."
                  className="!bg-[#f2f3fa] !border-none placeholder:!text-black"
                />
                <Button
                  className="!bg-blue-600 !text-white !py-4 !rounded-full w-60 !h-10 hover:bg-blue-700 transition !border-0"
                  htmlType="submit"
                >
                  Let’s start <MdOutlineArrowRightAlt />
                </Button>
              </div>

              <div className="flex gap-16 items-center -mt-6">
                <p className="text-sm">
                  Building a Dream, One{" "}
                  <span className="!font-bold">Home Owner</span> at a Time.
                </p>
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="inline-block w-8 h-8 rounded-full"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="inline-block w-8 h-8 rounded-full"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                    className="inline-block w-8 h-8 rounded-full"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="inline-block w-8 h-8 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div>
              <img src={home_img_1} alt="" className="w-full h-auto" />
            </div>
          </div>
        </section>
      </div>

      <div className="flex justify-center flex-col items-center pt-10 gap-4 w-11/12 mx-auto">
        <div className="bg-[#DFE8FF] px-2 rounded-lg py-1 text-[#0047FF]">
          How it Works
        </div>

        <h1 className="font-bold text-3xl text-center">
          Three Steps to Home Ownership
        </h1>

        <p className="text-center">
          Find out how you can own a Home and be <br /> a Landlord in just few
          days
        </p>

        {/* ✅ FULLY RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-full">
          {/* Item 1 */}
          <div className="p-6 flex flex-col items-center text-center">
            <img src={home_img_2} alt="Register" className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Register</h3>
            <p className="text-gray-600 leading-6">
              Protect your wealth by managing
              <br />
              risk, seeking advice and making
              <br />
              smart financial decisions.
            </p>
          </div>

          {/* Item 2 */}
          <div className="p-6 flex flex-col items-center text-center">
            <img src={home_img_3} alt="Save" className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Save</h3>
            <p className="text-gray-600 leading-6">
              Protect your wealth by managing
              <br />
              risk, seeking advice and making
              <br />
              smart financial decisions.
            </p>
          </div>

          {/* Item 3 */}
          <div className="p-6 flex flex-col items-center text-center">
            <img src={home_img_4} alt="Get Home" className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Get Home</h3>
            <p className="text-gray-600 leading-6">
              Protect your wealth by managing
              <br />
              risk, seeking advice and making
              <br />
              smart financial decisions.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Calculator + Properties Section */}
      <section className="w-11/12 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LEFT: Calculator */}
          <div
            className="
        lg:h-full 
        !h-[650px] 
        md:col-span-1 
        flex 
        flex-col 
        justify-center 
        bg-[url('/src/assets/phone.png')] 
        bg-no-repeat 
        bg-cover 
        bg-center 
        p-6 
        sm:p-10

        /* ⭐ Make calculator smaller on mobile */
        scale-[0.85] 
        sm:scale-95 
        md:scale-100 
        origin-top
      "
          >
            <Calculator
              amountFontSize="text-lg sm:text-xl md:text-2xl"
              resultFontSize="!text-lg sm:!text-xl md:!text-2xl"
            />
          </div>

          {/* RIGHT: Properties */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <h1 className="text-center font-bold mb-5 text-lg">
              Vetted Properties
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {properties.map((property) => (
                <div key={property.id}>
                  <Card
                    hoverable
                    className="w-full overflow-hidden !p-2"
                    cover={
                      <div className="relative">
                        <img
                          alt="property"
                          src={property.image}
                          className="h-20 w-full object-contain"
                        />
                      </div>
                    }
                  >
                    <span className="font-bold">
                      {property.title?.slice(0, 13)}...
                    </span>

                    <div className="flex items-center mt-3 gap-2">
                      <img src={pin} alt="pin" className="w-3" />
                      <p className="text-gray-400">
                        {property.location?.slice(0, 12)}...
                      </p>
                    </div>

                    <div className="flex gap-4 mt-1 items-center">
                      <h1 className="font-bold">{property.price}</h1>
                      <h1 className="font-bold text-[.5rem]">
                        {property.size}
                      </h1>
                    </div>

                    <div className="flex justify-between mt-2">
                      <div>
                        <h1 className="font-bold text-[.6rem]">
                          {property.deposit}
                        </h1>
                        <p className="text-gray-400 text-[.6rem]">
                          Weekly deposit
                        </p>
                      </div>
                      <div>
                        <h1 className="font-bold text-[.6rem]">
                          {property.duration}
                        </h1>
                        <p className="text-gray-400 text-[.5rem]">Duration</p>
                      </div>
                    </div>

                    <div className="flex justify-center mt-3">
                      <img src={btn} alt="button" className="w-22" />
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="h-[750px] bg-[url('/src/assets/home_img_2.png')] bg-no-repeat bg-cover bg-center"></div>
        <div className="bg-[#EAEAEA]">
          {/* <div className="h-64 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-300 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center px-6"
              >
                <div className="text-[100px] font-bold text-gray-300 leading-none relative">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-[#1E1245] absolute">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      <section className="w-11/12 mx-auto mt-20">
        <div className="flex justify-between mb-10">
          <h1 className="font-bold text-4xl/13">
            Your most frequently asked <br /> question answered
          </h1>
          <Button
            className="!bg-blue-600 !h-10 !text-white py-3 !rounded-full w-60 hover:bg-blue-700 transition !border-0 mt-5"
            htmlType="submit"
          >
            View All FAQS <MdOutlineArrowRightAlt />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="h-[500px] rounded-md bg-[url('/src/assets/land_img_5.png')] bg-no-repeat bg-cover bg-top relative">
            <div className="rounded-md bg-[#F2F3FA] flex justify-center items-center flex-col p-10 w-60 absolute top-75 -right-2.5">
              <h1 className="font-bold">100+ Client</h1>
              <h1 className="font-bold">5.0 (250 Reviews)</h1>
              <Avatar.Group>
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                <a href="https://ant.design">
                  <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                </a>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: "#1677ff" }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>
            </div>
          </div>

          <div className="w-full">
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
                        isActive ? "bg-[#F2F3FA]" : "bg-white text-gray-900"
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
                            isActive ? "text-black" : "text-gray-500"
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
                          isActive ? "bg-[#F2F3FA]" : "bg-white text-gray-700"
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
      {/* // bg-[url('/src/assets/ilefund-land-nigeria-bg-1.png')]  */}
      <div className="w-full py-16 flex justify-center mt-28 ">
  <div
    className="
      bg-[url('/src/assets/ilefund-land-nigeria-bg-1.png')]
      bg-no-repeat bg-center 
      bg-[length:100%_100%]
      h-[420px] w-full pl-10
    "
  >
    <div className="w-full max-w-7xl grid md:grid-cols-2 gap-10 items-center">
      
      {/* LEFT: PHONE MOCKUPS */}
      <div className="relative flex justify-center md:justify-start">
        <img
          src={phone1}
          alt="mockup-1"
          className="w-52 md:w-72 drop-shadow-2xl rotate-[-5deg] z-20 -mt-15"
        />

        <img
          src={phone2}
          alt="mockup-2"
          className="w-52 md:w-72 drop-shadow-xl rotate-[5deg] 
          absolute left-28 -top-20 md:left-48 z-10"
        />
      </div>

      {/* RIGHT: TEXT + FORM */}
      <div className="text-white p-10 md:p-16 -mt-20">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Already a Potential <br /> Stake Holder
        </h1>

        <p className="text-sm md:text-base mt-4 opacity-90">
          Download ILE FUND for free and get all the latest updates, 
          find your home, and contact support.
        </p>

        <div className="mt-6">
          <Input placeholder="Email" size="large" className="rounded-xl" />

          <Button
            type="primary"
            size="large"
            className="mt-4 bg-white text-[#005DFF] font-semibold rounded-xl px-8"
          >
            Get Started
          </Button>
        </div>
      </div>

    </div>
  </div>
</div>

      <section className="bg-[#F2F3FA] py-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10">
          <div className="flex flex-col justify-center">
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
              className="!rounded-full !px-6 flex items-center gap-2 w-fit mt-2 !py-4 !h-10 !bg-[#0047FF]"
            >
              Contact Now <LiaLongArrowAltRightSolid size={20} />
            </Button>
          </div>

          <div className="bg-[#DAE2FB] p-6 rounded-lg">
            <Slider {...settings}>
              <div>
                <h2 className="text-2xl font-bold ">Logoipsum</h2>
                <p className="mt-2 text-sm">
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
                  <div className="flex flex-col p-2 relative">
                    <img
                      src={blueline}
                      alt=""
                      className="w-30 absolute right-0"
                    />
                    <span className="text-xs mt-1">Google Rating</span>
                    <div className="flex items-center mt-1">
                      {/* Map star 5 times */}
                      <h1 className="text-[17px] mr-2 mt-1">5.0</h1>
                      {[...Array(5)].map((_, index) => (
                        <img
                          key={index}
                          src={star}
                          alt="star"
                          className="w-4 h-4 "
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col p-2 relative">
                    <img
                      src={blueline}
                      alt=""
                      className="w-30 absolute right-0"
                    />
                    <div className="flex mt-1 flex-col">
                      {/* Map star 5 times */}
                      <div className="flex items-center">
                        <span className="text-[17px] mr-2 mt-1">5.0</span>
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            src={star}
                            alt="star"
                            className="w-4 h-4"
                          />
                        ))}
                      </div>
                      <div className="flex items-center">
                        <h1 className="mr-2 mt-1 text-xs">Rated</h1>
                        <h1 className="mr-2 mt-1 text-xs">Trustpilot</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 relative">
                    <img
                      src={blueline}
                      alt=""
                      className="w-30 absolute right-0"
                    />
                    <div className="flex mt-1 flex-col">
                      {/* Map star 5 times */}
                      <div className="flex items-center">
                        <span className="text-[17px] mr-2 mt-1">5.0</span>
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            src={star}
                            alt="star"
                            className="w-4 h-4"
                          />
                        ))}
                      </div>
                      <div className="flex items-center">
                        <h1 className="mr-2 mt-1 text-xs">Rated</h1>
                        <h1 className="mr-2 mt-1 text-xs">Trustpilot</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold">Logoipsum</h2>
                <p className="mt-2 text-sm">
                  The guidance we received has transformed oyr financial
                  outlook. our consultant was patient, knowledgeable, and
                  crafted s plan that aligned with our goals. Thanks to their
                  strategic advice, optimistic about our future.
                </p>
                <div className="mt-3 flex items-center gap-5">
                  <div className="bg-indigo-600 h-14 w-14 rounded-md"></div>
                  <h1 className="font-bold text-lg ">
                    Rachael T./{" "}
                    <span className="!font-light">Entrepreneur</span>
                  </h1>
                </div>
                <Divider />
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
                  <div className="flex flex-col p-2 relative">
                    <img
                      src={blueline}
                      alt=""
                      className="w-30 absolute right-0"
                    />
                    <span className="text-xs mt-1">Google Rating</span>
                    <div className="flex items-center mt-1">
                      {/* Map star 5 times */}
                      <h1 className="text-[17px] mr-2 mt-1">5.0</h1>
                      {[...Array(5)].map((_, index) => (
                        <img
                          key={index}
                          src={star}
                          alt="star"
                          className="w-4 h-4 "
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col p-2 relative">
                    <img
                      src={blueline}
                      alt=""
                      className="w-30 absolute right-0"
                    />
                    <div className="flex mt-1 flex-col">
                      {/* Map star 5 times */}
                      <div className="flex items-center">
                        <span className="text-[17px] mr-2 mt-1">5.0</span>
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            src={star}
                            alt="star"
                            className="w-4 h-4"
                          />
                        ))}
                      </div>
                      <div className="flex items-center">
                        <h1 className="mr-2 mt-1 text-xs">Rated</h1>
                        <h1 className="mr-2 mt-1 text-xs">Trustpilot</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 relative">
                    <img
                      src={blueline}
                      alt=""
                      className="w-30 absolute right-0"
                    />
                    <div className="flex mt-1 flex-col">
                      {/* Map star 5 times */}
                      <div className="flex items-center">
                        <span className="text-[17px] mr-2 mt-1">5.0</span>
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            src={star}
                            alt="star"
                            className="w-4 h-4"
                          />
                        ))}
                      </div>
                      <div className="flex items-center">
                        <h1 className="mr-2 mt-1 text-xs">Rated</h1>
                        <h1 className="mr-2 mt-1 text-xs">Trustpilot</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* ✅ You can continue the rest of your sections exactly as before */}
      {/* ...Steps Section, Calculator, Properties, FAQ, Testimonial, etc. */}
    </>
  );
};

export default HomePage;
