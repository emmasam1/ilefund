import React, { useState } from "react";
import about_img_1 from "../../assets/about_img_1.png";
import { Segmented } from "antd";

const About = () => {
  const [value, setValue] = useState("Mision");

  const content = {
    Mision:
      "We aim to simplify the complexities of real estate investment, enhance accessibility, and drive sustainable growth through our innovative property solutions. By providing trusted and transparent services, we empower our clients to confidently navigate the ever-changing world of land and estate investment.",
    Vision:
      "We aim to simplify the complexities of real estate investment, enhance accessibility, and drive sustainable growth through our innovative property solutions. By providing trusted and transparent services, we empower our clients to confidently navigate the ever-changing world of land and estate investment.",
    Value: "This is the value content...",
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-[url(src/assets/ilefund-land-nigeria-bg-2.png)] h-72 sm:h-80 md:h-96 flex flex-col justify-center items-center gap-3 px-4 text-center sm:px-6 md:px-20">
        <h1 className="text-[#0047FF] font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
          About the Company
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
          At Ilefund, we are dedicated to creating innovative real estate
          investment solutions
          <br /> that empower individuals and businesses to own, grow, and
          manage property with
          <br /> confidence.
        </p>
      </div>

      {/* FIXED GRID SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 sm:mt-20 px-4 sm:px-6 md:px-20">
        {/* LEFT SIDE */}
        <div className="mb-6 sm:mb-0">
          <div className="bg-[#DFE8FF] px-3 sm:px-4 py-1 rounded-lg text-[#0047FF] w-max">
            What we do
          </div>
          <p className="font-bold text-xl sm:text-2xl md:text-3xl mt-3 sm:mt-4">
            We help people grow wealth
            <br /> through smart property
            <br /> investments.
          </p>
        </div>

        {/* RIGHT SIDE - Segmented + Content */}
        <div>
          <Segmented
            options={["Mision", "Vision", "Value"]}
            value={value}
            onChange={setValue}
            className="custom-segment h-12"
          />

          {/* Content Renders Under the Selected Tab */}
          <div className="mt-4 p-4 text-sm sm:text-base md:text-base leading-relaxed">
            {content[value]}
          </div>
        </div>
      </div>

      {/* Segmented styles */}
      <style>
        {`
          .custom-segment .ant-segmented-item-selected {
            background-color: #2563eb !important;
            color: white !important;
            font-weight: 600;
          }

          .custom-segment .ant-segmented-item:hover {
            color: #2563eb !important;
          }
        `}
      </style>

      {/* Section 2: Overlay with Background */}
      <section className="relative bg-[url('/src/assets/house.jpg')] bg-no-repeat bg-cover bg-center mt-10 h-[400px] sm:h-[500px] md:h-[600px]">
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-white font-extrabold text-xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight max-w-4xl">
            ILEFUND And Its Purposes
          </h1>

          <p className="text-white mt-4 sm:mt-5 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
            ILEFUND is a property savings and verification platform that helps
            everyday Nigerians—both at home and in the diaspora—save for,
            verify, and purchase land or homes without falling victim to fraud
            or opaque processes. We provide a structured system that allows
            users to start small, build consistently, and own verified
            properties over time. Developers, in turn, can showcase their
            properties, offer inspection opportunities, and manage sales
            documentation seamlessly.
          </p>
        </div>
      </section>

      {/* Section 3: Why Now */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start md:items-center">
          <div>
            <h2 className="font-bold mb-6 text-[#0047FF] text-3xl sm:text-4xl md:text-5xl text-right">
              Why Now ?
            </h2>
          </div>

          <div className="md:col-span-2 bg-[url('/src/assets/bg-plane.png')] bg-no-repeat bg-contain sm:bg-cover lg:bg-contain h-[400px] sm:h-[500px] md:h-[700px] flex items-center p-4 sm:p-6 md:p-10">
            <div className="max-w-full sm:max-w-2xl mx-auto">
              <p className="text-sm sm:text-base md:text-base">
                For decades, owning a home in Nigeria has been a frustrating
                journey filled with:
              </p>

              <ul className="list-disc ml-5 sm:ml-10 mt-2 sm:mt-4 space-y-2 sm:space-y-3 text-sm sm:text-base md:text-base">
                <li>Fake property agents</li>
                <li>Unregulated developers</li>
                <li>High one-time payment requirements</li>
                <li>Unclear legal documentation</li>
                <li>Lack of diaspora-friendly payment options</li>
              </ul>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-base">
                At the same time, millions of Nigerians are saving
                informally—often without structure or accountability—while the
                housing gap continues to widen. We’re introducing structure,
                transparency, and accessibility to the real estate space by
                letting users save with purpose, see what their money is working
                toward, and deal directly with verified developers—no
                middlemen, no guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
