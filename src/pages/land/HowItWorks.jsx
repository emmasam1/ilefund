import React, { useState, useEffect } from 'react'
import { Button, Card, Collapse, Divider, Input, Skeleton, Form } from 'antd'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'
import { AiOutlinePlus } from 'react-icons/ai'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

 

const { Panel } = Collapse

const HowItWorks = () => {
  const [activeKey, setActiveKey] = useState(null)
  const [property, setProperty] = useState([])
  const [loading, setLoading] = useState(false)
  const [emailSubmitLoading, setEmailSubmitLoading] = useState(false)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  const onFinish = async values => {
    const userEmail = values.email

    setEmailSubmitLoading(true)

    await new Promise(resolve => setTimeout(resolve, 3000))

    window.location.href = `https://app.ilefund.com/register?email=${userEmail}`
  }



 

  return (
<div className="bg-white w-full overflow-hidden">

  {/* ================= HOW IT WORKS ================= */}
  <section
    className="
      w-full
      min-h-[30rem]
      py-[4rem]
      px-[5%]
      bg-cover
      bg-center
    "
  >
    <div className="max-w-[75rem] mx-auto">
      <h2 className="text-[1.875rem] font-semibold text-[#0047FF] mb-[4rem] text-center">
        How it All Works
      </h2>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-[5rem]">
        {/* Center line for timeline */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-[#0047FF]" />

        {/* STEP 1 */}
        <div className="md:text-right">
          <div className="inline-flex w-[2.5rem] h-[2.5rem] items-center justify-center rounded-full bg-[#0047FF] text-white font-semibold mb-[1rem]">
            1
          </div>
          <h3 className="font-semibold text-[1.125rem] mb-[0.5rem]">
            Save at Your Own Pace
          </h3>
          <p className="text-gray-600 max-w-[28rem] md:ml-auto leading-relaxed text-[1rem]">
            ILEFUND starts with saving—because ownership should be planned, not rushed.
            Users can save daily, weekly, or monthly. Every contribution moves you
            closer to ownership, with clear progress tracking at all times.
          </p>
        </div>

        <div className="flex justify-start items-center">
          <div className="w-full max-w-[15rem] aspect-[4/3]">
            <img
              src="https://res.cloudinary.com/da1mxvbx2/image/upload/v1768237412/ilefund/ilefund-save_rg8nio.svg"
              alt="Save illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* STEP 2 */}
        <div className="flex justify-end items-center">
          <div className="w-full max-w-[17.5rem] aspect-[4/3]">
            <img
              src="https://res.cloudinary.com/da1mxvbx2/image/upload/v1768237415/ilefund/ilefund-homes_lufmk7.svg"
              alt="Homes illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div>
          <div className="inline-flex w-[2.5rem] h-[2.5rem] items-center justify-center rounded-full bg-[#0047FF] text-white font-semibold mb-[1rem]">
            2
          </div>
          <h3 className="font-semibold text-[1.125rem] mb-[0.5rem]">
            Property Listing <i>(Verified & Transparent)</i>
          </h3>
          <p className="text-gray-600 max-w-[28rem] mb-[0.75rem]">
            ILEFUND lists only verified properties from trusted developers.
          </p>
          <ul className="text-gray-600 text-[0.95rem] space-y-[0.25rem]">
            <li><b>1.</b> Location & property type</li>
            <li><b>2.</b> Total cost & milestones</li>
            <li><b>3.</b> Legal documents</li>
            <li><b>4.</b> Developer credibility</li>
          </ul>
          <p className="text-gray-600 max-w-[28rem] mt-[0.75rem]">
            Every listing is reviewed to eliminate risk and land disputes.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="md:text-right">
          <div className="inline-flex w-[2.5rem] h-[2.5rem] items-center justify-center rounded-full bg-[#0047FF] text-white font-semibold mb-[1rem]">
            3
          </div>
          <h3 className="font-semibold text-[1.125rem] mb-[0.5rem]">
            Reach Your Target
          </h3>
          <p className="text-gray-600 max-w-[28rem] md:ml-auto leading-relaxed">
            Once your target is reached, your property price is secured and your
            spot reserved. No hidden fees. No surprises.
          </p>
        </div>

        <div className="flex justify-start items-center">
          <div className="w-full max-w-[20rem] aspect-[4/3]">
            <img
              src="https://res.cloudinary.com/da1mxvbx2/image/upload/v1768279344/ilefund/target_zxrron.svg"
              alt="Target illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* STEP 4 */}
        <div className="flex justify-end items-center">
          <div className="w-full max-w-[18rem] aspect-[4/3]">
            <img
              src="https://res.cloudinary.com/da1mxvbx2/image/upload/v1768280646/ilefund/cuate_d204cd.svg"
              alt="Allocation illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div>
          <div className="inline-flex w-[2.5rem] h-[2.5rem] items-center justify-center rounded-full bg-[#0047FF] text-white font-semibold mb-[1rem]">
            4
          </div>
          <h3 className="font-semibold text-[1.125rem] mb-[0.5rem]">
            Get Allocation
          </h3>
          <p className="text-gray-600 max-w-[28rem] leading-relaxed">
            After completion, land or housing is officially allocated with full
            documentation and transparent handover.
          </p>
        </div>
      </div>
    </div>
  </section>

  
  {/* ================= MANUAL PROPERTY SECTIONS ================= */}
  {/* 1. Build-for-Rent */}
  <section className=" w-full
      max-w-[75rem]
      mx-auto px-[5%] py-[4rem]">
    <h1 className="font-bold text-[3.5rem] text-center ">
      Our Focus Areas
    </h1>
    <p className="text-gray-600 text-center max-w-[42rem] mx-auto">
      ileFund invests in property segments with strong demand, resilience, and
      long-term growth potential.
    </p>
    <br />
    <br />
    <h2 className="text-[1.25rem] font-semibold mb-[0.5rem]">
      Build-for-Rent (Single-Family & Purpose-Built Rental Housing)
    </h2>
    <p className="text-gray-600 mb-[2rem] leading-relaxed">
      Across Nigeria and many African cities, rapid urbanization, population
      growth, and rising property prices have made outright home ownership
      difficult. Demand for quality, flexible rental housing continues to grow.
      Our strategy focuses on developing single-family homes and purpose-built
      rental properties in <b>high-growth urban & suburban areas, near campuses
      and commercial centers</b>.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
      <div className="w-full aspect-[4/3] rounded-[0.75rem] bg-cover bg-center" style={{ backgroundImage: `url(/public/images/ilefund-land-nigeria-home-4.png)` }} />
      <div className="w-full aspect-[4/3] rounded-[0.75rem] bg-cover bg-center" style={{ backgroundImage: `url(/public/images/ilefund-land-nigeria-home-5.png)` }} />
      <div className="w-full aspect-[4/3] rounded-[0.75rem] bg-cover bg-center" style={{ backgroundImage: `url(/public/images/ilefund-land-nigeria-home-6.png)` }} />
    </div>
  </section>

  {/* 2. Multifamily Apartments */}
  <section className=" w-full
      max-w-[75rem]
      mx-auto px-[5%] py-[4rem] bg-[#DFE8FF]">
    <h2 className="text-[1.25rem] font-semibold mb-[0.5rem]">
      Multifamily Apartments
    </h2>
    <p className="text-gray-600 mb-[2rem] leading-relaxed">
      Remote work, urbanization, and growing cities drive demand for
      well-located apartment housing. We focus on multifamily apartment
      developments offering <b>competitive rental pricing, strong occupancy, and access to employment hubs</b>.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
      <div className="w-full aspect-[4/3] rounded-[0.75rem] bg-cover bg-center" style={{ backgroundImage: `url(/public/images/ilefund-land-nigeria-home-7.png)` }} />
      <div className="w-full aspect-[4/3] rounded-[0.75rem] bg-cover bg-center" style={{ backgroundImage: `url(/public/images/ilefund-land-nigeria-home-8.png)` }} />
      <div className="w-full aspect-[4/3] rounded-[0.75rem] bg-cover bg-center" style={{ backgroundImage: `url(/public/images/ilefund-land-nigeria-home-9.png)` }} />
    </div>
  </section>

  {/* 3. Industrial Properties */}
  <section className=" w-full
      max-w-[75rem]
      mx-auto px-[5%] py-[4rem]">
    <h2 className="text-[1.25rem] font-semibold mb-[0.5rem]">
      Industrial Properties
    </h2>
    <p className="text-gray-600 mb-[2rem] leading-relaxed">
      E-commerce, manufacturing, and regional trade increase demand for modern
      industrial facilities. Our strategy targets <b>warehouses, logistics hubs,
      and light industrial parks</b> leased to commercial tenants, generating
      stable income and long-term value appreciation.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
      <div className="w-full aspect-[4/3] rounded-[0.75rem] bg-cover bg-center" style={{ backgroundImage: `url(/public/images/ilefund-land-nigeria-home-10.png)` }} />
      <div className="w-full aspect-[4/3] rounded-[0.75rem] bg-cover bg-center" style={{ backgroundImage: `url(/public/images/ilefund-land-nigeria-home-11.png)` }} />
      <div className="w-full aspect-[4/3] rounded-[0.75rem] bg-cover bg-center" style={{ backgroundImage: `url(/public/images/ilefund-land-nigeria-home-12.png)` }} />
    </div>
  </section>

</div>

  )
}

export default HowItWorks
