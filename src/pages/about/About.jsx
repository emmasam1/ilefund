import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import about_img_1 from '../../assets/about_img_1.png'
import team_1 from './../../../public/images/ilefund-land-nigeria-team-1.png'
import team_2 from './../../../public/images/ilefund-land-nigeria-team-2.png'
import team_3 from './../../../public/images/ilefund-land-nigeria-team-3.png'
import { Segmented, Button, Divider } from 'antd'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import blueline from '../../assets/blueline.png'
import star from '../../assets/star.png'

const About = () => {
  const [value, setValue] = useState('Mision')
  const [index, setIndex] = useState(0)

  const prevSlide = () => {
    setIndex(prev => (prev === 0 ? teamMembers.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setIndex(prev => (prev === teamMembers.length - 1 ? 0 : prev + 1))
  }

  const boardprevSlide = () => {
    setIndex(prev => (prev === 0 ? boardMembers.length - 1 : prev - 1))
  }

  const boardnextSlide = () => {
    setIndex(prev => (prev === boardMembers.length - 1 ? 0 : prev + 1))
  }

  const teamMembers = [
    {
      name: 'Young Batimehin',
      role: 'Founder & Team Leader',
      image: team_1
    },
    {
      name: 'Victor',
      role: 'UI/UX Designer',
      image: team_2
    },
    {
      name: 'Rachael',
      role: 'UI/UX Designer',
      image: team_3
    }
  ]

  const boardMembers = [
    {
      name: 'Young Batimehin',
      role: 'Founder & Team Leader',
      image: team_1
    },
    {
      name: 'Victor',
      role: 'UI/UX Designer',
      image: team_2
    },
    {
      name: 'Rachael',
      role: 'UI/UX Designer',
      image: team_3
    }
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true
  }

  const content = {
    Mision:
      'Our mission is to democratize access to housing through innovative financing models, transparent technology-driven platforms, and trusted partnerships. We empower low and middle-income Nigerians to own quality homes with flexible, affordable payment options, bridging the gap between dreams and reality in the housing sector.',
    Vision:
      'To make home ownership a reality for every Nigerian, from low-income earners, market traders to civil servants by creating inclusive, affordable, and accessible pathways to housing.',
    Goal: 'Our goal is to become Africa’s most trusted housing-finance and property access platform for low and middle-income earners. We are achieving this by partnering only with verified developers, ensuring every property listed is properly documented and transparent. Through flexible savings and payment plans, we allow everyday Africans to own land and homes without financial pressure or hidden conditions. Our technology is built to protect users, track every transaction, and provide clear proof of ownership at every stage. Above all, we are committed to rebuilding trust in real estate by putting honesty, accountability, and people first.'
  }

  return (
    <div>
      {/* Header */}
     <div
  className="
    bg-cover bg-center
    min-h-[30rem]
    sm:min-h-[37.5rem]
    md:min-h-[42.5rem]
    lg:min-h-[46.875rem]
    overflow-hidden
    w-full
  "
>
  {/* TOP CONTENT */}
  <div
    className="
      flex flex-col justify-center items-center
      gap-[0.75rem]
      px-[5%]
      text-center
      h-[18rem]
      sm:h-[20rem]
      md:h-[24rem]
      max-w-[75rem]
      mx-auto
    "
  >
    <h1
      className="
        text-[#0047FF]
        font-bold
        text-[1.5rem]
        sm:text-[1.875rem]
        md:text-[2rem]
        lg:text-[2.25rem]
      "
    >
      About ileFund
    </h1>

    <p
      className="
        text-[0.875rem]
        sm:text-[1rem]
        md:text-[1.125rem]
        leading-relaxed
        max-w-[48rem]
      "
    >
      Owning a home shouldn’t feel impossible. ileFund helps you save,
      plan, and buy property the smart way. With trusted developers and
      clear processes, we remove fear from real estate.
      <br />
      One goal, One step, One home at a time.
    </p>
  </div>

  {/* VALUES SECTION */}
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      gap-[1.5rem]
      mt-[3rem]
      sm:mt-[5rem]
      px-[5%]
      max-w-[75rem]
      mx-auto
      items-start
    "
  >
    {/* LEFT IMAGE */}
    <div className="flex justify-center sm:justify-start">
      <img
        src="https://res.cloudinary.com/da1mxvbx2/image/upload/v1768217011/ilefund/values_xqowse.svg"
        alt="ileFund values"
        className="
          w-[100%]
          h-auto
          aspect-auto
        "
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="w-full">
      <div
        className="
          bg-[#DFE8FF]
          px-[0.75rem]
          py-[0.25rem]
          rounded-[0.5rem]
          text-[#0047FF]
          w-max
          text-[0.875rem]
          font-medium
        "
      >
        Our Values
      </div>

      <div className="mt-[1rem]">
        <Segmented
          options={['Mision', 'Vision', 'Goal']}
          value={value}
          onChange={setValue}
          className="custom-segment h-[3rem]"
        />
      </div>

      {/* DYNAMIC CONTENT */}
      <div
        className="
          mt-[1rem]
          p-[1rem]
          text-[0.875rem]
          sm:text-[1rem]
          leading-relaxed
          max-w-[40rem]
        "
      >
        {content[value]}
      </div>
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
      <section className="relative bg-[url('https://res.cloudinary.com/da1mxvbx2/image/upload/v1767944811/ilefund/house_mrjder.jpg')] bg-no-repeat bg-cover bg-center mt-10 h-[400px] sm:h-[500px] md:h-[600px]">
        <div className='absolute inset-0 bg-black/70 flex flex-col justify-center items-center px-4 text-center '>
          <h1 className='text-white font-extrabold text-xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight max-w-4xl'>
            Our Purpose
          </h1>

          <p className='text-white mt-4 sm:mt-5 text-xs sm:text-sm md:text-base lg:text-lg max-w-4xl leading-relaxed text-start'>
            Our purpose is to help low and middle-income Nigerians achieve their
            dream of owning a home. using a technology-driven housing platform
            that makes property ownership affordable, transparent, and within
            reach. <br />
            Unlike traditional real estate systems that are built for only the
            wealthy, we create flexible ways for everyday Nigerians to buy land
            and home. <br /> Through verified properties, clear payment plans,
            and smart savings options, we help people own property with
            confidence and build long-term wealth—step by step.
          </p>
        </div>
      </section>

      {/* Section 3: Why Now */}
<section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

    {/* Section Title */}
    <div className="md:sticky md:top-24">
      <h2 className="font-bold text-[#0047FF] text-3xl sm:text-4xl md:text-5xl text-center md:text-right">
        Core Values
      </h2>
    </div>

    {/* Content Area */}
    <div
      className="
        md:col-span-2
        bg-no-repeat
        bg-contain
        md:bg-cover
        p-4 sm:p-6 md:p-10
      "
      // style={{ backgroundImage: "url('/src/assets/bg-plane.png')" }}
    >
      <div className="max-w-2xl mx-auto">
        <ul className="list-disc pl-5 space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">

          <li>
            <strong className="text-gray-900">Accessibility:</strong>  
            We believe owning a home should not be only for the rich. Whether you
            earn monthly, weekly, or run a small business, you deserve a chance
            to own land or a house. ILEFUND is built to make saving and paying for
            property simple, flexible, and realistic for everyday Nigerians—at
            home and abroad.
          </li>

          <li>
            <strong className="text-gray-900">Transparency:</strong>  
            Trust is everything in real estate. That’s why we make sure every
            property, payment, document, and transaction is clear and easy to
            understand. No hidden charges. No confusing terms. No stories
            tomorrow. What you see is what you get, and every step is properly
            verified.
          </li>

          <li>
            <strong className="text-gray-900">Innovation:</strong>  
            We use technology to solve real Nigerian problems. From digital
            savings plans to flexible payment options and verified developers,
            we are changing how people access land and homes. Instead of waiting
            decades on a mortgage, we help you plan, save, and own at your own
            pace—using smart, modern tools.
          </li>

          <li>
            <strong className="text-gray-900">Empowerment:</strong>  
            We don’t just help you pay for property—we help you understand it.
            ILEFUND gives you the knowledge, tools, and confidence to make smart
            decisions about land and home ownership. From document verification
            to savings tracking, control stays in your hands.
          </li>

          <li>
            <strong className="text-gray-900">Integrity:</strong>  
            We stand by our word. We operate with honesty, fairness, and
            responsibility in everything we do. Our relationships with users,
            developers, and partners are built on trust. We do the right thing,
            even when no one is watching.
          </li>

          <li>
            <strong className="text-gray-900">Community Impact:</strong>  
            We are not just selling land or houses—we are building futures. By
            making home ownership more inclusive, we help families settle,
            businesses grow, and communities thrive. Every home owned through
            ILEFUND strengthens neighborhoods and contributes to national
            development.
          </li>

        </ul>
      </div>
    </div>

  </div>
</section>


      {/* <div className="w-[95%] mx-auto">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl">
          Pilot Launch → Expansion Plan
        </h1>
        <p className="text-center mt-5">
          Our MVP pilot is launching in Abuja, with verified
          <br /> developers onboarded and users already joining
          <br /> the waitlist. From there, we’ll scale to:
        </p>

        <div className="py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="">
              <div className="bg-[url('/public/images/ilefund-land-nigeria-home-1.png')] bg-no-repeat bg-cover bg-center h-68 mb-4 rounded-4xl"></div>
              <div className="h-13">
                <p className="text-gray-600">Q3 & Q4 2025</p>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Lagos, Port Harcourt, Ibadan
              </h3>
            </div>
            <div className="">
              <div className="bg-[url('/public/images/ilefund-land-nigeria-home-2.png')] bg-no-repeat bg-cover bg-center h-68 mb-4 rounded-4xl"></div>
              <div className="h-13">
                <p className="text-gray-600">2026 (Pan-African rollout)</p>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Accra, Nairobi, Johannesburg
              </h3>
            </div>
            <div className="">
              <div className="bg-[url('/public/images/ilefund-land-nigeria-home-3.png')] bg-no-repeat bg-cover bg-center h-68 mb-4 rounded-4xl"></div>
              <div className="h-13">
                <p className="text-gray-600">
                  2026–2027 (for Nigerian and African diaspora in the Middle
                  East)
                </p>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Accra, Nairobi, Johannesburg
              </h3>
            </div>
          </div>
        </div>
      </div> */}

    {/* ================= TEAM SECTION ================= */}
<section className="bg-white py-[4rem] overflow-hidden">
  <div
    className="
      w-full
      max-w-[75rem]
      mx-auto
      px-[5%]
      grid
      grid-cols-1
      lg:grid-cols-[1fr_1.4fr]
      gap-[3rem]
      items-center
    "
  >
    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2
        className="
          text-[1.875rem]
          md:text-[2.25rem]
          font-bold
          mb-[1rem]
        "
      >
        Meet the Team
      </h2>

      <p
        className="
          text-gray-600
          max-w-[28rem]
          mb-[1.5rem]
          text-[1rem]
          leading-relaxed
        "
      >
        LIEFUND is powered by a passionate, execution-driven team with a
        deep understanding of design, development, finance, and the
        African real estate landscape.
      </p>

      {/* SLIDER CONTROLS */}
      <div className="flex gap-[0.75rem]">
        <button
          onClick={prevSlide}
          className="
            w-[2.75rem]
            h-[2.75rem]
            flex
            items-center
            justify-center
            border
            rounded-full
            hover:bg-gray-100
            transition
          "
        >
          <LeftOutlined />
        </button>

        <button
          onClick={nextSlide}
          className="
            w-[2.75rem]
            h-[2.75rem]
            flex
            items-center
            justify-center
            border
            rounded-full
            hover:bg-gray-100
            transition
          "
        >
          <RightOutlined />
        </button>
      </div>
    </motion.div>

    {/* RIGHT SLIDER */}
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-[2rem]
          "
        >
          {teamMembers
            .slice(index, index + 3)
            .concat(
              teamMembers.slice(
                0,
                Math.max(0, index + 3 - teamMembers.length)
              )
            )
            .map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="w-full aspect-[4/3] overflow-hidden rounded-[0.75rem] mb-[1.25rem]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="font-semibold text-[1.125rem]">
                  {member.name}
                </h4>

                <p className="text-[0.875rem] text-gray-500">
                  {member.role}
                </p>
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</section>

{/* ================= BOARD SECTION ================= */}
<section className="bg-white py-[4rem] overflow-hidden">
  <div
    className="
      w-full
      max-w-[75rem]
      mx-auto
      px-[5%]
      grid
      grid-cols-1
      lg:grid-cols-[1fr_1.4fr]
      gap-[3rem]
      items-center
    "
  >
    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2
        className="
          text-[1.875rem]
          md:text-[2.25rem]
          font-bold
          mb-[1rem]
        "
      >
        Meet the Board Of Trustees
      </h2>

      <p
        className="
          text-gray-600
          max-w-[28rem]
          mb-[1.5rem]
          text-[1rem]
          leading-relaxed
        "
      >
        LIEFUND is powered by a passionate, execution-driven team with a
        deep understanding of design, development, finance, and the
        African real estate landscape.
      </p>

      {/* SLIDER CONTROLS */}
      <div className="flex gap-[0.75rem]">
        <button
          onClick={boardprevSlide}
          className="
            w-[2.75rem]
            h-[2.75rem]
            flex
            items-center
            justify-center
            border
            rounded-full
            hover:bg-gray-100
            transition
          "
        >
          <LeftOutlined />
        </button>

        <button
          onClick={boardnextSlide}
          className="
            w-[2.75rem]
            h-[2.75rem]
            flex
            items-center
            justify-center
            border
            rounded-full
            hover:bg-gray-100
            transition
          "
        >
          <RightOutlined />
        </button>
      </div>
    </motion.div>

    {/* RIGHT SLIDER */}
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-[2rem]
          "
        >
          {boardMembers
            .slice(index, index + 3)
            .concat(
              boardMembers.slice(
                0,
                Math.max(0, index + 3 - boardMembers.length)
              )
            )
            .map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="w-full aspect-[4/3] overflow-hidden rounded-[0.75rem] mb-[1.25rem]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="font-semibold text-[1.125rem]">
                  {member.name}
                </h4>

                <p className="text-[0.875rem] text-gray-500">
                  {member.role}
                </p>
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
