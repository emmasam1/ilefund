import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Avatar,
  Tooltip,
  Divider,
  Input,
  Skeleton,
  Form,
  message,
} from "antd";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import  { Link } from 'react-router';

import home_progress from "../../assets/home_progress.png";
import home_img_2 from "../../assets/ilefund-register.svg";
import home_img_3 from "../../assets/ilefund-save.svg";
import home_img_4 from "../../assets/ilefund-homes.svg";
import iphone from "../../assets/iPhone-ilefund.png";
import google from "../../assets/google.svg";
import Rectangle43 from "../../assets/Rectangle43.png";
import propertyImg2 from "../../assets/property_img_2.png";
import home_img_1 from "../../assets/ilefund-home_img_1.png";
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
import axios from "axios";

import { useNavigate } from "react-router";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const HomePage = () => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState(null);
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const getListing = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://wallet-v2-aeqw.onrender.com/api/estate/prototypes`
      );
      console.log(res);
      const cleanedData = (res.data.data || []).map((item) => ({
        banner: item.banner?.url,
        estate: item.estate?.name,
        price: item.price,
        sizeValue: item.sizeValue,
        title: item.title,
      }));

      setListing(cleanedData);

      // console.log("........", cleanedData)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //  const onFinish = async (values) => {
  //   setLoading(true);
  //   try {
  //     // Optional delay for smoother UX
  //     await new Promise((resolve) => setTimeout(resolve, 1500));

  //     // Send registration request
  //     const response = await axios.post(
  //       "https://wallet-v2-aeqw.onrender.com/api/v1/register",
  //       { email: values.email }
  //     );

  //     if (!response.data) throw new Error("No response data from server");

  //     const { token, message, otpVerified, isPassword } = response.data;
  //     console.log("🔹 Server Response:", response.data);

  //     // Normalize booleans
  //     const otpVerifiedBool =
  //       otpVerified === true || otpVerified === "true" || otpVerified === 1;
  //     const isPasswordBool =
  //       isPassword === true || isPassword === "true" || isPassword === 1;

  //     // Save token securely
  //     if (token) {
  //       sessionStorage.setItem("token", token);
  //       console.log("✅ Token saved to sessionStorage");
  //     }

  //     // Save email always
  //     localStorage.setItem("email", values.email);
  //     console.log("📩 Email saved to localStorage:", values.email);

  //     // Close any AntD modals
  //     if (window.Modal) window.Modal.destroyAll?.();

  //     // External redirect logic
  //     if (otpVerifiedBool && !isPasswordBool) {
  //       // Email verified but password not set
  //       messageApi.info("Email verified. Continue your registration.");
  //       console.log("➡️ Redirecting to personal-information");
  //       window.location.href = "https://app.ilefund.com/personal-information";
  //     } else if (!otpVerifiedBool && !isPasswordBool) {
  //       // Email exists but not verified
  //       messageApi.success(message || "Verification email sent. Check your inbox.");
  //       console.log("➡️ Redirecting to enter-confirmation-pin");
  //       window.location.href = "https://app.ilefund.com/enter-confirmation-pin";
  //     } else if (!otpVerifiedBool && isPasswordBool) {
  //       // User already registered but OTP pending
  //       messageApi.warning("Please verify your email before continuing.");
  //       console.log("➡️ Redirecting to enter-confirmation-pin");
  //       window.location.href = "https://app.ilefund.com/enter-confirmation-pin";
  //     } else {
  //       // Registration complete
  //       messageApi.success(message || "Registration complete!");
  //       console.log("➡️ Redirecting to personal-information");
  //       window.location.href = "https://app.ilefund.com/personal-information";
  //     }
  //   } catch (error) {
  //     console.error(
  //       "❌ Registration error:",
  //       error.response?.data || error.message
  //     );
  //     const errorMsg =
  //       error.response?.data?.message ||
  //       "Registration failed. Please try again.";
  //     messageApi.error(errorMsg);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const onFinish = async (values) => {
    const userEmail = values.email;

    console.log("User Email:", userEmail);

    // ✅ Start loading
    setLoading(true);

    // ⏳ Optional delay (3 seconds)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // ✅ Redirect to the external website
    window.location.href = `https://app.ilefund.com/register?email=${userEmail}`;
    // window.location.href = `http://localhost:5174/register?email=${userEmail}`;

    // (No need to stop loading because page will change)
  };

  const moveToPage = () => {
    window.location.href = "https://app.ilefund.com";
  };

  useEffect(() => {
    getListing();
  }, []);

  // const properties = [
  //   {
  //     id: 1,
  //     title: "4 Semi detached-duplex with 2 room BQ",
  //     location: "Big land city Apo hilltop",
  //     price: "₦13,000,000",
  //     size: "500 SQM",
  //     deposit: "₦1,500,000",
  //     duration: "6 Months",
  //     image: propertyImg2,
  //   },
  //   {
  //     id: 2,
  //     title: "Luxury 3 Bedroom Flat",
  //     location: "Maitama District, Abuja",
  //     price: "₦25,000,000",
  //     size: "750 SQM",
  //     deposit: "₦2,000,000",
  //     duration: "12 Months",
  //     image: propertyImg2,
  //   },
  //   {
  //     id: 3,
  //     title: "Modern Bungalow with Garden",
  //     location: "Gwarinpa, Abuja",
  //     price: "₦8,500,000",
  //     size: "400 SQM",
  //     deposit: "₦800,000",
  //     duration: "8 Months",
  //     image: propertyImg2,
  //   },
  //   {
  //     id: 4,
  //     title: "Luxury Villa with Pool",
  //     location: "Asokoro, Abuja",
  //     price: "₦45,000,000",
  //     size: "1000 SQM",
  //     deposit: "₦3,500,000",
  //     duration: "18 Months",
  //     image: propertyImg2,
  //   },
  //   {
  //     id: 5,
  //     title: "2 Bedroom Mini Flat",
  //     location: "Lugbe, Abuja",
  //     price: "₦5,500,000",
  //     size: "300 SQM",
  //     deposit: "₦600,000",
  //     duration: "10 Months",
  //     image: propertyImg2,
  //   },
  //   {
  //     id: 6,
  //     title: "5 Bedroom Fully Detached Duplex",
  //     location: "Jabi, Abuja",
  //     price: "₦60,000,000",
  //     size: "1200 SQM",
  //     deposit: "₦5,000,000",
  //     duration: "24 Months",
  //     image: propertyImg2,
  //   },
  //   {
  //     id: 7,
  //     title: "Penthouse Apartment",
  //     location: "Wuse II, Abuja",
  //     price: "₦35,000,000",
  //     size: "850 SQM",
  //     deposit: "₦2,800,000",
  //     duration: "15 Months",
  //     image: propertyImg2,
  //   },
  //   {
  //     id: 8,
  //     title: "Townhouse with Rooftop Terrace",
  //     location: "Katampe Extension, Abuja",
  //     price: "₦20,000,000",
  //     size: "600 SQM",
  //     deposit: "₦1,800,000",
  //     duration: "9 Months",
  //     image: propertyImg2,
  //   },
  // ];

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
      {contextHolder}
      {/* ✅ Hero Section */}
      <div
        className="
    bg-[url(src/assets/ilefund-land-nigeria-bg-2.png)]
    bg-cover bg-center
    min-h-[480px]
    sm:min-h-[600px]
    md:min-h-[680px]
    lg:min-h-[750px]
    xl:min-h-[820px]
    overflow-hidden
  "
      >
        <section className="w-11/12 max-w-7xl mx-auto flex items-center py-8 sm:py-14 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h1
                className="
            font-extrabold
            text-2xl
            sm:text-4xl
            md:text-[2.8rem]
            lg:text-5xl
            leading-tight
          "
              >
                Start With A <br /> Plan, Save & Own.
              </h1>

              <div className="flex items-center gap-3 flex-wrap">
                <img
                  src={Rectangle43}
                  alt=""
                  className="w-7 sm:w-8 md:w-auto"
                />
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold">
                  From Savings to Home Ownership.
                </p>
              </div>

              {/* FORM */}
              <Form onFinish={onFinish}>
                <div className="flex flex-col sm:flex-row gap-3 max-w-[540px] w-full">
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Email is required" },
                      { type: "email", message: "Enter a valid email" },
                    ]}
                    className="flex-1 mb-0"
                  >
                    <Input
                      placeholder="Start Your Email address ....."
                      className="
                  !bg-[#f2f3fa]
                  !border-none
                  !h-11 sm:!h-12
                  text-sm sm:text-base
                "
                    />
                  </Form.Item>

                  <Button
                    htmlType="submit"
                    loading={loading}
                    className="
                !bg-blue-600 !text-white
                !rounded-full
                w-full sm:w-56
                !h-11 sm:!h-12
                flex items-center justify-center gap-2
                text-sm sm:text-base
              "
                  >
                    Let’s start <MdOutlineArrowRightAlt size={20} />
                  </Button>
                </div>
              </Form>

              {/* AVATARS + TEXT */}
              <div className="flex items-center sm:flex-row gap-4 sm:gap-1 sm:items-center">
                <p className="text-xs sm:text-sm md:text-base leading-snug">
                  Building a Dream, One{" "}
                  <span className="font-bold">Home Owner</span> at a Time.
                </p>

                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1594564190328-0bed16a89837?w=200&auto=format&fit=crop&q=60"
                    alt="ilefund-user-1"
                    className="
      w-8 h-8
      sm:w-9 sm:h-9
      md:w-10 md:h-10
      rounded-full
      object-cover
      border-2 border-white
    "
                  />

                  <img
                    src="https://images.unsplash.com/photo-1643008504049-1f4957523024?w=200&auto=format&fit=crop&q=60"
                    alt="ilefund-user-2"
                    className="
      w-8 h-8
      sm:w-9 sm:h-9
      md:w-10 md:h-10
      rounded-full
      object-cover
      border-2 border-white
    "
                  />

                  <img
                    src="https://images.unsplash.com/photo-1533108344127-a586d2b02479?w=200&auto=format&fit=crop&q=60"
                    alt="ilefund-user-3"
                    className="
      w-8 h-8
      sm:w-9 sm:h-9
      md:w-10 md:h-10
      rounded-full
      object-cover
      border-2 border-white
    "
                  />

                  <img
                    src="https://images.unsplash.com/photo-1602342323893-b11f757957c9?w=200&auto=format&fit=crop&q=60"
                    alt="ilefund-user-4"
                    className="
      w-8 h-8
      sm:w-9 sm:h-9
      md:w-10 md:h-10
      rounded-full
      object-cover
      border-2 border-white
    "
                  />
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center md:justify-end">
              <img
                src={home_img_1}
                alt="Hero"
                className="
            w-full
            max-w-[320px]
            sm:max-w-[420px]
            md:max-w-[500px]
            lg:max-w-[560px]
            xl:max-w-[620px]
            h-auto
          "
              />
            </div>
          </div>
        </section>
      </div>

      <div className="flex justify-center flex-col items-center pt-10 gap-4 w-11/12 mx-auto">
        <div className="bg-[#DFE8FF] px-2 rounded-lg py-1 text-[#0047FF]">
          How it Works
        </div>

        <h1 className="font-bold text-3xl text-center">
          Three Steps to Own Your First Property
        </h1>

        <p className="text-center">
          Find out how you can become a property owner <br /> in just few days.
        </p>

        {/* ✅ FULLY RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-full">
          {/* Item 1 */}
          <div className="p-6 flex flex-col items-center text-center">
            <img
              src={home_img_2}
              alt="ilefund-Register"
              className="w-34 h-34 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Sign Up and Verify Your Account
            </h3>
            <p className="text-gray-600 text-sm leading-6 text-justify">
              Create a secure account and complete your KYC (NIN, BVN, Address)
              to access all features. The more verified you are, the more
              benefits you unlock.
            </p>
          </div>

          {/* Item 2 */}
          <div className="p-6 flex flex-col items-center text-center">
            <img
              src={home_img_3}
              alt="ilefund-Save"
              className="w-34 h-34 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Start Saving with a Plan
            </h3>
            <p className="text-gray-600 text-sm leading-6 text-justify">
              Set your saving frequency (daily, weekly, monthly), and we’ll
              guide you with reminders and progress tracking. You can save
              manually or automate with card/bank.
            </p>
          </div>

          {/* Item 3 */}
          <div className="p-6 flex flex-col items-center text-center">
            <img
              src={home_img_4}
              alt="ilefund-Get-Home"
              className="w-34 h-34 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Own Your Property</h3>
            <p className="text-gray-600 text-sm leading-6 text-justify">
              Choose to pay outright or continue your payment plan over a
              pre-defined period. We’ll keep track of everything with the
              savings tracker, and the developer shares documentation with you
              wherever you are when you are done.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Calculator + Properties Section */}
      <section className="w-11/12 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LEFT: Calculator */}
          <div
            className="
        md:col-span-1 
        flex flex-col justify-center 
        bg-[url('/src/assets/phone.png')] 
        bg-no-repeat bg-contain bg-center 
        p-4 sm:p-6 md:p-10
        h-[500px] sm:h-[600px] md:h-[650px] lg:h-full
        transform scale-[0.8] sm:scale-90 md:scale-100 origin-top
      "
          >
            <Calculator
              amountFontSize="text-base sm:text-lg md:text-xl"
              resultFontSize="!text-base sm:!text-lg md:!text-xl"
            />
          </div>

          {/* RIGHT: Properties */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <h1 className="text-center font-bold mb-5 text-lg sm:text-xl">
              Vetted Properties
            </h1>

            {/* GRID WRAPPER */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {/* ⭐ SKELETON LOADER */}
              {loading &&
                Array.from({ length: 8 }).map((_, i) => (
                  <Card key={i} className="!p-2 w-full">
                    <Skeleton.Image
                      style={{
                        width: "100%",
                        height: "5rem",
                        borderRadius: "6px",
                      }}
                      active
                    />
                    <Skeleton active title={false} paragraph={{ rows: 3 }} />
                  </Card>
                ))}

              {/* ⭐ REAL LISTING */}
              {!loading &&
                listing.map((property, index) => (
                  <Link key={index} to={`/property/${property._id}`}>
                  
                  <Card
                    
                    // onClick={moveToPage}
                    hoverable
                    className="w-full overflow-hidden !p-2"
                    cover={
                      <div className="relative">
                        <img
                          alt="property"
                          src={property.banner}
                          className="h-24 sm:h-28 md:h-32 w-full object-cover"
                        />
                      </div>
                    }
                  >
                    <span className="font-bold text-sm sm:text-base">
                      {property.title?.slice(0, 13)}...
                    </span>

                    <div className="flex items-center mt-2 gap-2">
                      <img src={pin} alt="pin" className="w-3 sm:w-4" />
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {property.estate?.slice(0, 12)}...
                      </p>
                    </div>

                    <div className="flex gap-4 mt-1 items-center">
                      <h1 className="font-bold text-sm sm:text-base">
                        ₦{Number(property.price).toLocaleString("en-NG")}
                      </h1>
                      <h1 className="font-bold text-[0.5rem] sm:text-[0.6rem]">
                        {property.sizeValue} sqm
                      </h1>
                    </div>
                  </Card>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        {/* HERO IMAGE */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[650px] lg:h-[750px] w-full bg-[url('/src/assets/home_img_2.png')] bg-cover bg-center bg-no-repeat">
          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-[#00000085]"></div>

          {/* YouTube Play Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-red-600 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 2.5a2.5 2.5 0 0 0-2.5 2.5v14a2.5 2.5 0 0 0 2.5 2.5h16a2.5 2.5 0 0 0 2.5-2.5v-14a2.5 2.5 0 0 0-2.5-2.5H4zm6.5 12.5v-7l6 3.5-6 3.5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        {/* <div className="bg-[#EAEAEA] py-10">
         
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats?.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center px-4"
              >
                <div className="text-4xl sm:text-5xl font-bold text-gray-700">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-lg font-semibold text-[#1E1245]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </section>

      <section className="w-11/12 mx-auto mt-20">
        <div className="flex flex-col md:flex-row justify-between mb-10 gap-5 md:gap-0">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight">
            Your most frequently asked <br /> question answered
          </h1>
          <Button
            className="!bg-blue-600 !h-10 !text-white py-3 !rounded-full w-full sm:w-60 hover:bg-blue-700 transition !border-0 mt-3 md:mt-0 flex items-center justify-center gap-2"
            htmlType="submit"
          >
            View All FAQS <MdOutlineArrowRightAlt />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* LEFT: Image with Stats */}
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-md bg-[url('/src/assets/land_img_5.png')] bg-no-repeat bg-cover bg-top">
            <div className="rounded-md bg-[#F2F3FA] flex flex-col justify-center items-center p-6 sm:p-10 w-56 sm:w-60 absolute top-3/4 md:top-3/4 right-2 sm:right-5 lg:right-10 transform -translate-y-1/2">
              <h1 className="font-bold text-center sm:text-lg">100+ Client</h1>
              <h1 className="font-bold text-center sm:text-lg">
                5.0 (250 Reviews)
              </h1>
              <Avatar.Group className="mt-2 sm:mt-4">
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

          {/* RIGHT: Accordion */}
          <div className="w-full">
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
                      className={`w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 focus:outline-none transition-colors duration-300 ${
                        isActive ? "bg-[#F2F3FA]" : "bg-white text-gray-900"
                      }`}
                    >
                      <span className="text-base sm:text-lg font-semibold">
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
                        className={`p-4 sm:p-6 border-t border-gray-200 ${
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
      <div className="w-full py-16 flex justify-center mt-28">
        <div
          className="
      bg-[url('/src/assets/ilefund-land-nigeria-bg-1.png')]
      bg-no-repeat bg-center 
      bg-[length:100%_100%]
      h-[500px] sm:h-[550px] md:h-[420px] w-full px-4 sm:pl-10
    "
        >
          <div className="w-full max-w-7xl grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT: PHONE MOCKUPS */}
            <div className="relative flex justify-center md:justify-start">
              <img
                src={phone1}
                alt="mockup-1"
                className="w-40 sm:w-52 md:w-72 drop-shadow-2xl rotate-[-5deg] z-20 -mt-10 sm:-mt-15"
              />

              <img
                src={phone2}
                alt="mockup-2"
                className="
            w-40 sm:w-52 md:w-72 drop-shadow-xl rotate-[5deg]
            absolute left-16 sm:left-28 md:left-48 -top-16 sm:-top-20
            z-10
          "
              />
            </div>

            {/* RIGHT: TEXT + FORM */}
            <div className="text-white p-6 sm:p-10 md:p-16 mt-6 md:mt-0">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug md:leading-tight">
                Already a Potential <br /> Stake Holder
              </h1>

              <p className="text-xs sm:text-sm md:text-base mt-4 opacity-90">
                Download ILE FUND for free and get all the latest updates, find
                your home, and contact support.
              </p>

              <Form>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Input
                    placeholder="Email"
                    name="email"
                    size="large"
                    className="rounded-xl flex-1"
                  />

                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    size="large"
                    className="bg-white text-[#005DFF] font-semibold rounded-xl px-8 flex-shrink-0"
                  >
                    Get Started
                  </Button>
                </div>
              </Form>
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
