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
    <div className='bg-white'>
      <div
        className='
    bg-[url(https://res.cloudinary.com/da1mxvbx2/image/upload/v1767944328/ilefund/ilefund-land-nigeria-bg-2_fymozq.png)]
    bg-cover bg-center
    min-h-[480px]
    sm:min-h-[600px]
    md:min-h-[680px]
    lg:min-h-[750px]
    xl:min-h-[820px]
    overflow-hidden
  '
      >
        <section class='max-w-6xl mx-auto px-6 py-20 '>
          <h2 class='text-3xl font-semibold text-[#0047FF] mb-16 text-center'>
            How it All Works
          </h2>

          <div class='relative grid grid-cols-1 md:grid-cols-2 gap-20'>
            <div class='hidden md:block absolute left-1/2 top-0 h-full w-px bg-[#0047FF]'></div>

            <div class='md:text-right'>
              <div class='inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0047FF] text-white font-semibold mb-4'>
                1
              </div>
              <h3 class='font-semibold text-lg mb-2'>Save at Your Own Pace</h3>
              <p class='text-gray-600 max-w-md md:ml-auto'>
                ILEFUND starts with saving—because we believe ownership should
                be planned, not rushed. Users can save money gradually based on
                their income, Daily, weekly, or monthly contributions. <br />
                You don’t need a large lump sum to begin. Every contribution
                moves you closer to owning a real asset, and your dashboard
                shows your progress clearly at all times.
              </p>
            </div>

            <div class='flex items-center justify-start'>
              <img
                src='https://res.cloudinary.com/da1mxvbx2/image/upload/v1768237412/ilefund/ilefund-save_rg8nio.svg'
                alt='ilefund-save'
                className=' sm:w-auto md:w-60'
              />
            </div>

            <div class='flex items-center justify-end'>
              <img
                src='https://res.cloudinary.com/da1mxvbx2/image/upload/v1768237415/ilefund/ilefund-homes_lufmk7.svg'
                alt='ilefund-homes'
                className=' sm:w-auto md:w-70'
              />
            </div>

            <div>
              <div class='inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0047FF] text-white font-semibold mb-4'>
                2
              </div>
              <h3 class='font-semibold text-lg mb-2'>
                Property Listing <i>(Verified & Transparent)</i>{' '}
              </h3>
              <p class='text-gray-600 max-w-md'>
                ILEFUND lists only verified properties from trusted developers
                and landowners.{' '}
              </p>
              <ul className='text-gray-600'>
                <li>
                  {' '}
                  <b>1.</b> Location and property type
                </li>
                <li>
                  {' '}
                  <b>2.</b> Total cost and payment milestones
                </li>
                <li>
                  {' '}
                  <b>3.</b> Available documents (C of O, Governor’s Consent,
                  Survey, etc.)
                </li>
                <li>
                  {' '}
                  <b>4.</b> Developer information and credibility
                </li>
              </ul>
              <p class='text-gray-600 max-w-md mt-2'>
                This means users are not guessing or relying on promises. Every
                listing is reviewed to reduce risk and eliminate “land stories.”
              </p>
            </div>

            <div class='md:text-right'>
              <div class='inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0047FF] text-white font-semibold mb-4'>
                3
              </div>
              <h3 class='font-semibold text-lg mb-2'>Reach Your Target.</h3>
              <p class='text-gray-600 max-w-md md:ml-auto'>
                As you save, your balance grows toward a clearly defined target
                ,Full purchase amount or Minimum threshold required to lock a
                property Once the target is reached, The property price is
                secured, Your spot is reserved and You move from “saving” to
                “ownership in progress”, No hidden fees. No sudden changes.
                Everything is clear before you proceed.
              </p>
            </div>

            <div class='flex items-center justify-start'>
              <img
                src='https://res.cloudinary.com/da1mxvbx2/image/upload/v1768279344/ilefund/target_zxrron.svg'
                alt='ilefund-homes'
                className=' sm:w-auto md:w-80'
              />
            </div>

            <div class='flex items-center justify-end'>
              <img
                src='https://res.cloudinary.com/da1mxvbx2/image/upload/v1768280646/ilefund/cuate_d204cd.svg'
                alt='ilefund-homes'
                className=' sm:w-auto md:w-70'
              />
            </div>

            <div>
              <div class='inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0047FF] text-white font-semibold mb-4'>
                4
              </div>
              <h3 class='font-semibold text-lg mb-2'>Get Allocation </h3>
              <p class='text-gray-600 max-w-md'>
                After completing the required payment, Land is officially
                allocated or A housing unit is assigned to you. ileFund
                coordinates directly with the developer to ensure proper
                documentation, clear allocation records and transparent handover
                process. This is the stage where your savings turn into a real,
                identifiable property.{' '}
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className='max-w-6xl mx-auto'>
        <div className='text-center mt-10 px-5'>
          <h1 className='font-bold text-2xl mb-4'>Our Focus Areas</h1>
          <p className='text-gray-600'>
            ileFund focuses in property segments that address real demand in
            Nigeria and Africa, while delivering sustainable income and
            long-term value. Our strategy focuses on assets with strong
            fundamentals, growing demand, and resilience across economic cycles.
          </p>
        </div>
      </div>

      <div className='p-20'>
        <h2 className='text-xl font-semibold mb-2'>
          Build-for-Rent (Single-Family & Purpose-Built Rental Housing)
        </h2>
        <p className='text-gray-600'>
          Across Nigeria and many African cities, rapid urbanization, population
          growth, and rising property prices have made outright home ownership
          difficult for a large portion of the population. As a result, demand
          for quality, flexible rental housing continues to grow. In addition to
          working professionals and families, student populations play a major
          role in driving rental demand. Cities and towns with universities,
          polytechnics, colleges of education, and private institutions
          experience consistent housing shortages, pushing students to seek
          safe, affordable, and well-located accommodation. Our build-for-rent
          strategy focuses on developing single-family homes and purpose-built
          rental properties in,{' '}
          <b>
            High-growth urban and suburban locations, Areas with strong student
            activity and education hubs, Communities close to campuses,
            transport routes, and commercial centers.
          </b>
          This approach allows us to address Nigeria’s growing housing demand.{' '}
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15'>
          <div className=''>
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-4.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
          <div className=''>
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-5.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
          <div className=''>
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-6.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
        </div>
      </div>
      <div className='p-20 bg-[#DFE8FF]'>
         <div className=''>
            <h2 className='text-xl font-semibold mb-2'>
              Multifamily apartments
            </h2>
            <p>
             The rise of remote work, growing urban populations, and the expansion of business-friendly cities across Nigeria and Africa have increased demand for affordable, well-located apartment housing, particularly in suburban and emerging urban areas.
We focus on multifamily apartment developments that offer, Competitive rental pricing, Strong occupancy potentialAccess to employment hubs and transport corridors. These properties are typically acquired or developed at values that are attractive relative to their rental earnings. This creates the opportunity for:
Stable and predictable income in the near term Long-term capital appreciation as demand continues to grow . Multifamily apartments remain a core part of our strategy due to their resilience and ability to serve a broad segment of the population.
            </p>
          </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15'>
          <div className=''>
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-7.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
          <div className=''>
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-8.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
          <div className=''>
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-9.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
        </div>
      </div>
      <div className='p-20'>
       <div className=''>
            <h2 className='text-xl font-semibold mb-2'>
              Industrial properties
            </h2>
            <p>
             The rapid growth of e-commerce, manufacturing, and regional trade across Africa has increased demand for modern industrial and logistics facilities. In Nigeria especially, businesses require efficient warehousing, distribution hubs, and last-mile delivery centers close to major population centers.
Our industrial property strategy targets  <b>Warehouses and logistics facilities, Light industrial parks Distribution centers in high-demand, supply-constrained locations
</b>. These assets are leased to commercial tenants, generating consistent rental income, while also positioning us to benefit from long-term value appreciation as infrastructure improves and demand for logistics space continues to rise.
            </p>
          </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15'>
          <div className=''>
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-10.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
          <div className=''>
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-11.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
          <div className=''>
            <div className="bg-[url('/public/images/ilefund-land-nigeria-home-12.png')] bg-no-repeat bg-cover bg-center h-80"></div>
          </div>
        </div>
      </div>

      {/* Normal content continues */}
     
    </div>
  )
}

export default HowItWorks
