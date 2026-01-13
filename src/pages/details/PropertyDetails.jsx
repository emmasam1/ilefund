import { useEffect, useState } from "react";
import propertyImg1 from "../../assets/property_img_1.png";
import propertyImg3 from "../../assets/property_img_3.png";
import SliderComponent from "../../components/slider/SliderComponent";
import "./dotStyle.css";
import { motion, AnimatePresence } from "framer-motion"; // ✅ import AnimatePresence
import { Button, Divider } from "antd";
import About from "../../components/About";
import Details from "../../components/Details";
import { useParams } from "react-router";
import axios from "axios"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const PropertyDetails = () => {
  const images = [propertyImg1, propertyImg3];
  const [activeTab, setActiveTab] = useState(1);
  const [property, setProperty] = useState([])

  const { id } = useParams();
  // console.log("Property ID:", id);

  const getSingleProperty = async () => {
    try {
      const res = await axios.get(`https://wallet-v2-aeqw.onrender.com/api/estate/prototypes/${id}`);
      console.log(res.data);
      setProperty(res.data?.data || []);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSingleProperty();
  }, [])

  const tabs = [
    { key: 1, label: "About", content: <About property={property} /> },
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
      <SliderComponent images={images} height="h-[500px]" settings={settings} property={property} />

      <div className="max-w-6xl mx-auto p-5">
        <h1 className="font-extrabold text-3xl mb-4">
         {property?.data?.title}
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

     
    </div>
  );
};

export default PropertyDetails;
