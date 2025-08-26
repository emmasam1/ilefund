import { useState } from "react";
import { Button, Card, Avatar, Tooltip, Divider } from "antd";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import home_progress from "../../assets/home_progress.png";
import home_img from "../../assets/home_img.png";
import propertyImg2 from "../../assets/property_img_2.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import pin from "../../assets/pin.png";
import btn from "../../assets/btn.png";
import Calculator from "../../components/calculator/Calculator";
import { AiOutlinePlus } from "react-icons/ai";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

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
      {/* ✅ Hero Section with fixed ratio + consistent padding */}
      <section className="w-11/12 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          <div className="md:col-span-1 flex flex-col justify-center">
            <h1 className="font-extrabold text-4xl">
              Get a <span className="font-extralight">little</span> richer each
              day
            </h1>
            <p className="mt-5 font-semibold">
              One small step today, a giant leap for tomorrow.
            </p>
            <Button
              className="!bg-blue-600 !text-white py-3 !rounded-full w-60 hover:bg-blue-700 transition !border-0 mt-5"
              htmlType="submit"
            >
              Start Building Wealth <MdOutlineArrowRightAlt />
            </Button>
          </div>
          <div className="md:col-span-2 flex flex-col justify-center">
            <img src={home_progress} alt="" className="h-full object-contain" />
          </div>
        </div>
      </section>

      {/* ✅ Steps Section */}
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
              className="!bg-blue-600 !text-white py-3 !rounded-full w-60 hover:bg-blue-700 transition !border-0 mt-5"
              htmlType="submit"
            >
              Get Started <MdOutlineArrowRightAlt />
            </Button>
          </div>
          <div className="md:col-span-2 flex flex-col justify-center">
            <img src={home_img} alt="" className="h-full object-contain" />
          </div>
        </div>
      </section>

      {/* ✅ Calculator + Properties Section */}
      <section className="w-11/12 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="lg:h-full !h-[650px] md:col-span-1 flex flex-col justify-center bg-[url('/src/assets/phone.png')] bg-no-repeat bg-cover bg-center p-9 sm:p-12">
            <Calculator
              amountFontSize="text-xl sm:text-2xl md:text-3xl"
              resultFontSize="!text-xl sm:!text-2xl md:!text-3xl"
            />
          </div>

          <div className="md:col-span-2 flex flex-col justify-center">
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
                      {property.title?.slice(0, 25)}...
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

      {/* ✅ Final Banner Section */}
      <section>
        <div className="h-[750px] bg-[url('/src/assets/home_img_2.png')] bg-no-repeat bg-cover bg-center"></div>
        <div className="bg-[#EAEAEA]">
          <div className="h-64 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-300 text-center">
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
          </div>
        </div>
      </section>

      <section className="bg-[url('/src/assets/blue_bg.png')] bg-no-repeat bg-contain h-[500px] my-20"></section>

      <section className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="h-[500px] rounded-md bg-[url('/src/assets/land_img_5.png')] bg-no-repeat bg-cover bg-top relative">
            <div className="rounded-md bg-[#12033a] flex justify-center items-center flex-col p-10 w-60 absolute top-75 -right-2.5">
              <h1 className="text-white font-bold">100+ Client</h1>
              <h1 className="text-white font-bold">5.0 (250 Reviews)</h1>
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

      <section className="bg-[#12033a] py-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10">
          <div className="flex flex-col justify-center">
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
    </>
  );
};

export default HomePage;
