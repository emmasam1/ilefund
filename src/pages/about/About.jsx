import React, { useState } from "react";
import about_img_1 from "../../assets/about_img_1.png";
import { Segmented, Tabs } from "antd";

const onChange = (key) => {
  console.log(key);
};

const items = [
  { key: "1", label: "Tab 1", children: "Content of Tab Pane 1" },
  { key: "2", label: "Tab 2", children: "Content of Tab Pane 2" },
  { key: "3", label: "Tab 3", children: "Content of Tab Pane 3" },
];

const About = () => {
  const [value, setValue] = useState('Map');

  return (
    <div>
      {/* Header */}
      <div className="bg-[url(src/assets/ilefund-land-nigeria-bg-2.png)] h-96 flex flex-col justify-center items-center gap-3">
        <h1 className="text-[#0047FF] font-bold text-3xl">About the Company</h1>
        <p className="text-center">
          At Ilefund, we are dedicated to creating innovative real estate
          investment solutions
          <br /> that empower individuals and businesses to own, grow, and
          manage property with
          <br /> confidence.
        </p>
      </div>

      {/* FIXED TABS */}
      <div className="my-10 flex flex-col items-center">
       <Segmented options={['Map', 'Transit', 'Satellite']} value={value} onChange={setValue} />;

      </div>

      {/* Rest of your sections unchanged */}

      {/* ✅ Section 1: Mission & Vision */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side (bigger, takes 2/3 width) */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <h2 className="font-bold mb-6 text-[#0047FF] text-4xl sm:text-5xl">
              Our Mission and Vision
            </h2>

            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Ilefund Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To simplify homeownership for Nigerians through flexible savings
              plans, digital accessibility, and verified property
              partnerships—empowering every Nigerian to own a home, whether they
              live in Nigeria or abroad.
            </p>

            <h2 className="text-2xl sm:text-3xl font-extrabold mt-8 mb-3">
              Ilefund Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To become Africa’s most trusted savings-first real estate
              platform, bridging the gap between income and homeownership
              through innovation, transparency, and community.
            </p>
          </div>

          {/* Right Side (smaller, takes 1/3 width) */}
          <div>
            <img
              src={about_img_1}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ✅ Section 2: Overlay with Background */}
      <section className="relative bg-[url('/src/assets/house.jpg')] bg-no-repeat bg-cover bg-center mt-10 h-[500px] sm:h-[600px]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-white font-extrabold text-2xl sm:text-4xl lg:text-6xl leading-tight max-w-4xl">
            ILEFUND And Its Purposes
          </h1>

          <p className="text-white mt-5 text-sm sm:text-base lg:text-lg max-w-3xl">
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

      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
          {/* Left (smaller, 1/3 width on desktop) */}
          <div className="">
            <h2 className="font-bold mb-6 text-[#0047FF] text-4xl sm:text-5xl text-right">
              Why Now ?
            </h2>
          </div>

          {/* Right (bigger, 2/3 width on desktop) */}
          <div className="md:col-span-2 bg-[url('/src/assets/bg-plane.png')] bg-no-repeat bg-contain sm:bg-cover lg:bg-contain h-[400px] sm:h-[700px] md:h-[700px]  flex items-center">
            <div className="max-w-130 ml-4 mx-auto">
              <p className="">
                For decades, owning a home in Nigeria has been a frustrating
                journey filled with:
              </p>

              <ul className="list-disc ml-10 mt-4 space-y-3">
                <li>Fake property agents</li>
                <li>Unregulated developers</li>
                <li>High one-time payment requirements</li>
                <li>Unclear legal documentation</li>
                <li>Lack of diaspora-friendly payment options</li>
              </ul>

              <p className="mt-15">
                At the same time, millions of Nigerians are saving
                informally—often without structure or accountability—while the
                housing gap continues to widen. We’re introducing structure,
                transparency, and accessibility to the real estate space by
                letting users save with purpose, see what their money is working
                toward, and deal directly with verified developers—no middlemen,
                no guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
