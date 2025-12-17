import React, { useState, useEffect } from "react";
import { Button, Card, Collapse, Divider, Input, Skeleton } from "antd";
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
import img1 from "../../assets/ilefund-land-nigeria-wealth.png";
import img2 from "../../assets/ilefund-land-nigeria-income.png";
import img3 from "../../assets/ilefund-land-nigeria-future.png";
import img4 from "../../assets/ilefund-land-nigeria-diversification.png";

import icon_1 from "./../../../public/images/ilefund-land-nigeria-icon-1.png";
import icon_2 from "./../../../public/images/ilefund-land-nigeria-icon-2.png";
import icon_3 from "./../../../public/images/ilefund-land-nigeria-icon-3.png";

import { Link } from "react-router";
import axios from "axios";
import pin from "../../assets/pin.png";
import star from "../../assets/star.png";
import blueline from "../../assets/blueline.png";

const { Panel } = Collapse;

const RealEstate = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [property, setProperty] = useState([]);
  const [loading, setLoading] = useState(false);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const getListing = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://wallet-v2-aeqw.onrender.com/api/estate/prototypes?limit=8`
      );
      // console.log(res);
      const cleanedData = (res.data.data || []).map((item) => ({
        id: item._id,
        banner: item.banner?.url,
        estate: item.estate?.name,
        price: item.price,
        sizeValue: item.sizeValue,
        title: item.title,
      }));

      setProperty(cleanedData);

      // console.log("........", cleanedData)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getListing();
  }, []);
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
    {
      id: 1,
      title: "Wealth preservationand growth",
      content:
        "Alternative assets like private real estate have historically offered a unique combination of lower volatility than stocks and higher potential returns than bonds. This mixture can anchor your portfolio, smoothing out the wild ups and downs of the public markets.",
      icon: img1,
    },
    {
      id: 2,
      title: "Income generation",
      content:
        "For many investors, the ability to create consistent income—via equity ownership in apartment buildings or single-family rentals that earn income through rental payments, for instance—is one of the most attractive aspects of real estate investing.",
      icon: img2,
    },
    {
      id: 3,
      title: "Superior diversification",
      content:
        "Private market assets are less likely to be affected by market fluctuations, helping reduce risk and improving your long-term financial stability—even during sustained periods of economic uncertainty.",
      icon: img4,
    },
    {
      id: 4,
      title: "Built for the future",
      content:
        "Our portfolio aims to harness the most powerful long-term macroeconomic drivers of the U.S. economy. Trends like increased demand for well-located residential assets across the sunbelt to the explosion of eCommerce-driven industrial spaces.",
      icon: img3,
    },
  ];

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 mt-10 bg-[#F2F3FA] py-20">
        {/* LEFT — FIXED */}
        <div className="md:sticky md:top-10 h-max">
          <div className="">
            <h2 className="text-3xl font-bold">Why private real estate</h2>
            <p className="mt-3 text-sm">
              Historically, private market real estate has featured a
              combination of traits not found in other asset classes: long-term
              earning potential and effective diversification beyond the stock
              market.
            </p>
          </div>
        </div>

        {/* RIGHT — SCROLLABLE */}
        <div className="overflow-y-scroll scrollbar-hide pr-4">
          {/* Long Content Here */}
          <div className="space-y-4">
            {content.map((e) => {
              return (
                <Card className="!bg-white [&_.ant-card-body]:!bg-white rounded-md !p-5 !mb-5">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-2xl">{e.title}</h1>
                    <img src={e.icon} alt="" className="w-25" />
                  </div>

                  <p className="text-sm">{e.content}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-[#12033A] p-7">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="!text-white">Featured fund</p>

            <h1 className="!text-white text-3xl font-bold my-4">
              Flagship Fund
            </h1>

            <p className="!text-white my-3">
              Our Flagship Real Estate Fund is designed to deliver long-term
              appreciation from a diversified portfolio of our most favored real
              estate investment strategies: build-for-rent housing communities
              and multifamily and industrial assets in the Sunbelt.
            </p>

            <div className="max-w-7xl mx-auto px-4 py-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#DFE8FF] p-5">
                  <h1 className="font-bold text-2xl">4.2%</h1>
                  <p>Annualized return since inception</p>
                </div>
                <div className="bg-[#DFE8FF] p-5">
                  <h1 className="font-bold text-2xl">$1.2B</h1>
                  <p>Net asset value (NAV)</p>
                </div>
                <div className="bg-[#DFE8FF] p-5">
                  <h1 className="font-bold text-2xl">0.21%</h1>
                  <p>Annualized distribution rate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10">
            <p className="font-bold mb-4 !text-white">ASSET TYPES</p>
            <div className="flex gap-2 items-center mb-4">
              <img src={icon_1} alt="" className="w-6" />
              <p className="text-white">Build for rent</p>
            </div>
            <div className="flex gap-2 items-center mb-4">
              <img src={icon_2} alt="" className="w-6" />
              <p className="text-white">Multifamily apartment</p>
            </div>
            <div className="flex gap-2 items-center mb-4">
              <img src={icon_3} alt="" className="w-6" />
              <p className="text-white">Industrial properties</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-start">
          {/* LEFT – BIGGER */}
          <div className="">
            <h2 className="text-xl font-semibold mb-2">Build-for-rent</h2>
            <p>
              A variety of trends have now led to a good share of the population
              in need of more living space which they can rent for some time.
              Currently, this demand for single-family rentals (SFRs) has helped
              drive a level of asset price appreciation uncommon in the world of
              real estate. By purchasing these homes in volume directly from
              homebuilders and leasing them up ourselves as stabilized
              communities, we believe we can get better prices—and returns—than
              buying the “finished product.”
            </p>
          </div>

          {/* RIGHT – SMALLER */}
          <div className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-xl font-bold">3,471</h2>
            <p className="font-semibold">Single-family homes</p>
            <h2 className="text-xl font-bold">30</h2>
            <p className="font-semibold">U.S. Market</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
          <div className="">
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-4.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
          <div className="">
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-5.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
          <div className="">
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-6.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
        </div>
      </div>
      <div className="p-10 bg-[#DFE8FF]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-start">
          {/* LEFT – BIGGER */}
          <div className="">
            <h2 className="text-xl font-semibold mb-2">
              Multifamily apartments
            </h2>
            <p>
              With a boom in remote work and business-friendly local governments
              courting employers, more affordably-priced suburban apartment
              communities have generally experienced stable or growing demand.
              We’ve paid a lower price for these investments relative to their
              earnings, and expect a higher income yield in the near term, as
              well as the potential for greater appreciation over the long term
              to the extent that demand increases in the future.
            </p>
          </div>

          {/* RIGHT – SMALLER */}
          <div className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-xl font-bold">8,962</h2>
            <p className="font-semibold">Residential units</p>
            <h2 className="text-xl font-bold">10</h2>
            <p className="font-semibold">U.S. Market</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
          <div className="">
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-7.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
          <div className="">
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-8.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
          <div className="">
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-9.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-start">
          {/* LEFT – BIGGER */}
          <div className="">
            <h2 className="text-xl font-semibold mb-2">
              Industrial properties
            </h2>
            <p>
              Propelled by the popularity of e-Commerce, a growing need for
              logistical facilities and last-mile distribution centers near
              largely populated areas has made industrial space an attractive
              long-term investment. Our goal with these investments is to
              generate a consistent income from commercial tenants, and position
              ourselves to capture any appreciation in the value of these
              properties in supply-constrained areas.
            </p>
          </div>

          {/* RIGHT – SMALLER */}
          <div className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-xl font-bold">2,310,800</h2>
            <p className="font-semibold">Square footage for lease</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
          <div className="">
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-10.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
          <div className="">
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-11.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
          <div className="">
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-12.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
        </div>
      </div>

      {/* Normal content continues */}
      <div className="p-10 mt-10">
        <h1 className="text-2xl font-bold text-center">
          Explore all projects in our portfolio
        </h1>
        <p className="text-center">
          Here are the real estate investments that are powering our investors’
          returns.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
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
            property.map((property, index) => (
              <Link key={property.id} to={`/property/${property.id}`}>
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
    </div>
  );
};

export default RealEstate;
