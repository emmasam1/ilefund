import { useState } from "react";
import propertyImg1 from "../../assets/property_img_1.png";
import propertyImg3 from "../../assets/property_img_3.png";
import SliderComponent from "../../components/slider/SliderComponent";
import "./dotStyle.css";
import { motion, AnimatePresence } from "framer-motion"; // ✅ import AnimatePresence
import { Button, Divider } from "antd";
import About from "../../components/About";
import Details from "../../components/Details";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const PropertyDetails = () => {
  const images = [propertyImg1, propertyImg3];
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { key: 1, label: "About", content: <About /> },
    { key: 2, label: "Details", content: <Details /> },
    { key: 3, label: "Documents", content: "Attached documents go here." },
    { key: 4, label: "Location", content: "Map and location details here." },
  ];

  var setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const settings = {
    appendDots: (dots) => (
      <div className="property-slider">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-white/60 rounded-full hover:bg-blue-500 transition"></div>
    ),
  };

  // ✅ Find active tab content
  const activeContent = tabs.find((tab) => tab.key === activeTab)?.content;

  return (
    <div className="relative ">
      {/* Slider */}
      <SliderComponent images={images} height="h-[500px]" settings={settings} />

      <div className="max-w-6xl mx-auto p-5">
        <h1 className="font-extrabold text-3xl mb-4">
          4 Semi detached-duplex with 2 room BQ
        </h1>

        {/* Tabs */}
        <div className="flex space-x-10 rounded-full w-fit mt-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <motion.div
                key={tab.key}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button
                  onClick={() => setActiveTab(tab.key)}
                  type="text"
                  className={`px-6 py-2 !rounded-full font-medium transition-colors duration-300
                    ${isActive ? "!text-white" : "text-white/60"}`}
                  style={{
                    backgroundColor: isActive ? "#14003C" : "transparent",
                  }}
                >
                  {tab.label}
                </Button>

                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: "#14003C", zIndex: -1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                      mass: 1.2,
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ✅ Animated Tab Content */}
        <div className="mt-6 min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeContent}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

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
            <Slider {...setting}>
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

export default PropertyDetails;
