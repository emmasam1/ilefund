import { Card, Button, Divider } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import house from "../../assets/house.jpg";
import pin from "../../assets/pin.png";
import btn from "../../assets/btn.png";
import propertyImg1 from "../../assets/property_img_1.png";
import propertyImg2 from "../../assets/property_img_2.png";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Calculator from "../../components/calculator/Calculator";

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

const Properties = () => {
  return (
    <>
      <div
        className="relative min-h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${propertyImg1})` }}
      >
        <div className="overlay h-full w-full absolute bg-[#00000063] flex items-center">
          <div className="pl-10">
            <h1 className="text-white font-extrabold text-5xl">
              Start With A <br /> Plan, Save & Own.
            </h1>
            <p className="text-white mt-4">From Savings to Home Ownership.</p>
            <Button
              type="primary"
              size="mideum"
              className="!rounded-full !px-6 flex items-center gap-2 w-fit mt-4"
            >
              Let’s start <LiaLongArrowAltRightSolid size={20} />
            </Button>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-6xl mx-auto py-15">
          <h1 className="text-center font-extrabold">
            Stay the course, reap the rewards
          </h1>
          <p className="!text-center text-bold mt-7 text-gray-300">
            If you Invested
          </p>
        </div>

        <Calculator />
      </section>

      <section className="px-5 mt-9">
        <h1 className="font-extrabold text-2xl mb-4">Vetted Properties</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="">
            <Card
              // hoverable
              className="w-full overflow-hidden !p-2"
              cover={
                <div className="relative">
                  <img
                    alt="img"
                    src={propertyImg2}
                    className="h-40 w-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-[#00000075]" ></div> */}
                </div>
              }
            >
              <span className="font-bold text-lg">
                4 Semi detached-duplex with 2 room BQ
              </span>

              <div className="flex items-center mt-3 gap-2">
                <img src={pin} alt="pin" />
                <p className="text-gray-400 text-lg">
                  Big land city Apo hilltop
                </p>
              </div>

              <div className="flex gap-4 mt-3 items-center">
                <h1 className="font-bold text-2xl">₦13,000,000</h1>
                <h1 className="font-bold text-sm mt-2">500 SQM</h1>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <h1 className="font-bold text-1xl">₦1,500,000 </h1>
                  <p className="text-gray-400 text-sm">Weekly deposit</p>
                </div>
                <div>
                  <h1 className="font-bold text-1xl">6 Months</h1>
                  <p className="text-gray-400 text-sm">Duration</p>
                </div>
                <div>
                  <img src={btn} alt="" className="w-22" />
                </div>
              </div>
            </Card>
          </div>
          <div className="">
            <Card
              // hoverable
              className="w-full overflow-hidden !p-2"
              cover={
                <div className="relative">
                  <img
                    alt="img"
                    src={propertyImg2}
                    className="h-40 w-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-[#00000075]" ></div> */}
                </div>
              }
            >
              <span className="font-bold text-lg">
                4 Semi detached-duplex with 2 room BQ
              </span>

              <div className="flex items-center mt-3 gap-2">
                <img src={pin} alt="pin" />
                <p className="text-gray-400 text-lg">
                  Big land city Apo hilltop
                </p>
              </div>

              <div className="flex gap-4 mt-3 items-center">
                <h1 className="font-bold text-2xl">₦13,000,000</h1>
                <h1 className="font-bold text-sm mt-2">500 SQM</h1>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <h1 className="font-bold text-1xl">₦1,500,000 </h1>
                  <p className="text-gray-400 text-sm">Weekly deposit</p>
                </div>
                <div>
                  <h1 className="font-bold text-1xl">6 Months</h1>
                  <p className="text-gray-400 text-sm">Duration</p>
                </div>
                <div>
                  <img src={btn} alt="" className="w-22" />
                </div>
              </div>
            </Card>
          </div>
          <div className="">
            <Card
              // hoverable
              className="w-full overflow-hidden !p-2"
              cover={
                <div className="relative">
                  <img
                    alt="img"
                    src={propertyImg2}
                    className="h-40 w-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-[#00000075]" ></div> */}
                </div>
              }
            >
              <span className="font-bold text-lg">
                4 Semi detached-duplex with 2 room BQ
              </span>

              <div className="flex items-center mt-3 gap-2">
                <img src={pin} alt="pin" />
                <p className="text-gray-400 text-lg">
                  Big land city Apo hilltop
                </p>
              </div>

              <div className="flex gap-4 mt-3 items-center">
                <h1 className="font-bold text-2xl">₦13,000,000</h1>
                <h1 className="font-bold text-sm mt-2">500 SQM</h1>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <h1 className="font-bold text-1xl">₦1,500,000 </h1>
                  <p className="text-gray-400 text-sm">Weekly deposit</p>
                </div>
                <div>
                  <h1 className="font-bold text-1xl">6 Months</h1>
                  <p className="text-gray-400 text-sm">Duration</p>
                </div>
                <div>
                  <img src={btn} alt="" className="w-22" />
                </div>
              </div>
            </Card>
          </div>
          <div className="">
            <Card
              // hoverable
              className="w-full overflow-hidden !p-2"
              cover={
                <div className="relative">
                  <img
                    alt="img"
                    src={propertyImg2}
                    className="h-40 w-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-[#00000075]" ></div> */}
                </div>
              }
            >
              <span className="font-bold text-lg">
                4 Semi detached-duplex with 2 room BQ
              </span>

              <div className="flex items-center mt-3 gap-2">
                <img src={pin} alt="pin" />
                <p className="text-gray-400 text-lg">
                  Big land city Apo hilltop
                </p>
              </div>

              <div className="flex gap-4 mt-3 items-center">
                <h1 className="font-bold text-2xl">₦13,000,000</h1>
                <h1 className="font-bold text-sm mt-2">500 SQM</h1>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <h1 className="font-bold text-1xl">₦1,500,000 </h1>
                  <p className="text-gray-400 text-sm">Weekly deposit</p>
                </div>
                <div>
                  <h1 className="font-bold text-1xl">6 Months</h1>
                  <p className="text-gray-400 text-sm">Duration</p>
                </div>
                <div>
                  <img src={btn} alt="" className="w-22" />
                </div>
              </div>
            </Card>
          </div>
          <div className="">
            <Card
              // hoverable
              className="w-full overflow-hidden !p-2"
              cover={
                <div className="relative">
                  <img
                    alt="img"
                    src={propertyImg2}
                    className="h-40 w-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-[#00000075]" ></div> */}
                </div>
              }
            >
              <span className="font-bold text-lg">
                4 Semi detached-duplex with 2 room BQ
              </span>

              <div className="flex items-center mt-3 gap-2">
                <img src={pin} alt="pin" />
                <p className="text-gray-400 text-lg">
                  Big land city Apo hilltop
                </p>
              </div>

              <div className="flex gap-4 mt-3 items-center">
                <h1 className="font-bold text-2xl">₦13,000,000</h1>
                <h1 className="font-bold text-sm mt-2">500 SQM</h1>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <h1 className="font-bold text-1xl">₦1,500,000 </h1>
                  <p className="text-gray-400 text-sm">Weekly deposit</p>
                </div>
                <div>
                  <h1 className="font-bold text-1xl">6 Months</h1>
                  <p className="text-gray-400 text-sm">Duration</p>
                </div>
                <div>
                  <img src={btn} alt="" className="w-22" />
                </div>
              </div>
            </Card>
          </div>
          <div className="">
            <Card
              // hoverable
              className="w-full overflow-hidden !p-2"
              cover={
                <div className="relative">
                  <img
                    alt="img"
                    src={propertyImg2}
                    className="h-40 w-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-[#00000075]" ></div> */}
                </div>
              }
            >
              <span className="font-bold text-lg">
                4 Semi detached-duplex with 2 room BQ
              </span>

              <div className="flex items-center mt-3 gap-2">
                <img src={pin} alt="pin" />
                <p className="text-gray-400 text-lg">
                  Big land city Apo hilltop
                </p>
              </div>

              <div className="flex gap-4 mt-3 items-center">
                <h1 className="font-bold text-2xl">₦13,000,000</h1>
                <h1 className="font-bold text-sm mt-2">500 SQM</h1>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <h1 className="font-bold text-1xl">₦1,500,000 </h1>
                  <p className="text-gray-400 text-sm">Weekly deposit</p>
                </div>
                <div>
                  <h1 className="font-bold text-1xl">6 Months</h1>
                  <p className="text-gray-400 text-sm">Duration</p>
                </div>
                <div>
                  <img src={btn} alt="" className="w-22" />
                </div>
              </div>
            </Card>
          </div>
          <div className="">
            <Card
              // hoverable
              className="w-full overflow-hidden !p-2"
              cover={
                <div className="relative">
                  <img
                    alt="img"
                    src={propertyImg2}
                    className="h-40 w-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-[#00000075]" ></div> */}
                </div>
              }
            >
              <span className="font-bold text-lg">
                4 Semi detached-duplex with 2 room BQ
              </span>

              <div className="flex items-center mt-3 gap-2">
                <img src={pin} alt="pin" />
                <p className="text-gray-400 text-lg">
                  Big land city Apo hilltop
                </p>
              </div>

              <div className="flex gap-4 mt-3 items-center">
                <h1 className="font-bold text-2xl">₦13,000,000</h1>
                <h1 className="font-bold text-sm mt-2">500 SQM</h1>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <h1 className="font-bold text-1xl">₦1,500,000 </h1>
                  <p className="text-gray-400 text-sm">Weekly deposit</p>
                </div>
                <div>
                  <h1 className="font-bold text-1xl">6 Months</h1>
                  <p className="text-gray-400 text-sm">Duration</p>
                </div>
                <div>
                  <img src={btn} alt="" className="w-22" />
                </div>
              </div>
            </Card>
          </div>
          <div className="">
            <Card
              // hoverable
              className="w-full overflow-hidden !p-2"
              cover={
                <div className="relative">
                  <img
                    alt="img"
                    src={propertyImg2}
                    className="h-40 w-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-[#00000075]" ></div> */}
                </div>
              }
            >
              <span className="font-bold text-lg">
                4 Semi detached-duplex with 2 room BQ
              </span>

              <div className="flex items-center mt-3 gap-2">
                <img src={pin} alt="pin" />
                <p className="text-gray-400 text-lg">
                  Big land city Apo hilltop
                </p>
              </div>

              <div className="flex gap-4 mt-3 items-center">
                <h1 className="font-bold text-2xl">₦13,000,000</h1>
                <h1 className="font-bold text-sm mt-2">500 SQM</h1>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <h1 className="font-bold text-1xl">₦1,500,000 </h1>
                  <p className="text-gray-400 text-sm">Weekly deposit</p>
                </div>
                <div>
                  <h1 className="font-bold text-1xl">6 Months</h1>
                  <p className="text-gray-400 text-sm">Duration</p>
                </div>
                <div>
                  <img src={btn} alt="" className="w-22" />
                </div>
              </div>
            </Card>
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
                    <span className="text-xs mt-1 text-white">Goggle Rating</span>
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
                    <span className="text-xs mt-1 text-white">Goggle Rating</span>
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
                    <span className="text-xs mt-1 text-white">Goggle Rating</span>
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

export default Properties;
