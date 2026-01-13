import { Card, Button, Divider, Form, Collapse, Input, Skeleton  } from 'antd'
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router'

import axios from 'axios'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import house from '../../assets/house.jpg'
import pin from '../../assets/pin.png'
import btn from '../../assets/btn.png'
import propertyImg1 from '../../assets/property_img_1.png'
import propertyImg2 from '../../assets/property_img_2.png'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'
import Calculator from '../../components/calculator/Calculator'

 

const Properties = () => {
  const [property, setProperty] = useState([])
  const [loading, setLoading] = useState(false)
  const [emailSubmitLoading, setEmailSubmitLoading] = useState(false)

  const navigate = useNavigate()

  const handleClick = id => {
    navigate(`/property/${id}`)
  }

  const onFinish = async values => {
    const userEmail = values.email

    setEmailSubmitLoading(true)

    await new Promise(resolve => setTimeout(resolve, 3000))

    window.location.href = `https://app.ilefund.com/register?email=${userEmail}`
  }

    const getListing = async () => {
    try {
      setLoading(true)
      const res = await axios.get(
        `https://ilefund.onrender.com/api/estate/prototypes?limit=8`
      )
      // console.log(res);
      const cleanedData = (res.data.data || []).map(item => ({
        id: item._id,
        banner: item.banner?.url,
        estate: item.estate?.name,
        price: item.price,
        sizeValue: item.sizeValue,
        title: item.title
      }))
      setProperty(cleanedData)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getListing()
  }, [])

  return (
    <>
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
      <section className='grid grid-cols-1 sm:grid-cols-2 gap-8 items-center px-15 py-16 bg-cover bg-center '>
        <div className='space-y-6'>
          <div className='bg-[#DFE8FF] px-3 sm:px-4 py-1 rounded-lg text-[#0047FF] w-max'>
           Vetted Properties
          </div>
          <h1 className='font-extrabold text-4xl sm:text-4xl lg:text-4xl leading-tight'>
            A diversified property portfolio,
            <br />
             built for steady growth
            
          </h1>
          <p className='text-gray-600 max-w-md'>
           Explore ILEFUND’s real estate strategies designed to capture long-term demand drivers such as urban housing growth, rental demand, and logistics expansion across Nigeria and Africa.
          </p>

          {/* FORM */}
          <Form onFinish={onFinish}>
            <Form.Item
              name='email'
              rules={[
                { required: true, message: 'Email is required' },
                { type: 'email', message: 'Enter a valid email' }
              ]}
              className='max-w-[460px] w-full mb-0'
            >
              <div className='flex items-center bg-white rounded-full p-1 shadow-lg'>
                <Input
                  placeholder='Start with your Email address .....'
                  className='
          flex-1
          !border-none
          !shadow-none
          !bg-transparent
          !h-12
          px-5
          text-base
          focus:!ring-0
        '
                />

                <Button
                  htmlType='submit'
                  loading={emailSubmitLoading}
                  className='
          !h-12
          px-6
          !rounded-full
          !bg-blue-600
          !text-white
          flex items-center gap-2
          text-base
          font-medium
        '
                >
                  Get Started <MdOutlineArrowRightAlt size={20} />
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>

        <div className='flex justify-center'>
          <img
            src='https://res.cloudinary.com/da1mxvbx2/image/upload/v1767943399/ilefund/realestatebanner_u9h1tf.svg'
            alt='Illustration of land planning'
            className='w-full max-w-md object-contain'
          />
        </div>
      </section>

      {/* <section>
        <div className='max-w-6xl mx-auto py-15'>
          <h1 className='text-center font-extrabold'>
            Stay the course, reap the rewards
          </h1>
          <p className='!text-center text-bold mt-7 text-gray-300'>
            If you Invested
          </p>
        </div>

        <Calculator />
      </section> */}

       <div className='p-10 mt-10'>
        <h1 className='text-2xl font-bold text-center'>
          Vetted Properties
        </h1>
        <p className='text-center'>
          Here are the real estate properties that are powering currently available for purchase.
        </p>

       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
  {/* ⭐ SKELETON LOADER */}
  {loading &&
    Array.from({ length: 8 }).map((_, i) => (
      <Card
        key={i}
        className="w-full overflow-hidden rounded-xl !p-2"
      >
        <Skeleton.Image
          active
          style={{
            width: '100%',
            height: '8rem',
            borderRadius: '10px'
          }}
        />

        <div className="mt-2">
          <Skeleton active title={false} paragraph={{ rows: 2 }} />
        </div>
      </Card>
    ))}

  {/* ⭐ REAL LISTINGS */}
  {!loading &&
    property.map((item) => (
      <Link key={item.id} to={`/property/${item.id}`}>
        <Card
          hoverable
          className="w-full overflow-hidden rounded-xl !p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          cover={
            <div className="relative">
              <img
                alt="property"
                src={item.banner}
                className="h-28 sm:h-36 w-full object-cover rounded-lg"
              />

              {/* Price Badge */}
              <div className="absolute bottom-2 left-2 bg-black/80 text-white px-3 py-1 rounded-md text-xs sm:text-sm font-semibold">
                ₦{Number(item.price).toLocaleString('en-NG')}
              </div>

              {/* Size Badge */}
              <div className="absolute top-2 right-2 bg-white/90 text-gray-900 px-2 py-1 rounded-md text-[0.6rem] sm:text-xs font-semibold">
                {item.sizeValue} sqm
              </div>
            </div>
          }
        >
          {/* Title */}
          <h3 className="font-semibold text-sm sm:text-base leading-snug mt-1 truncate">
            {item.title}
          </h3>

          {/* Location */}
          <div className="flex items-center mt-1 gap-1">
            <img src={pin} alt="pin" className="w-3 sm:w-4" />
            <p className="text-gray-500 text-xs sm:text-sm truncate">
              {item.estate}
            </p>
          </div>

           
        </Card>
      </Link>
    ))}
</div>

      </div>

      </div>

      

      
    </>
  )
}

export default Properties
