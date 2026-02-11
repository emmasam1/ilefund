import { Card, Button, Divider, Form, Collapse, Input, Skeleton } from 'antd'
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

  const moveToPage = () => {
    window.location.href = 'https://app.ilefund.com'
  }

  const onFinish = async values => {
    const userEmail = values.email

    setEmailSubmitLoading(true)

    await new Promise(resolve => setTimeout(resolve, 3000))

    window.location.href = `https://app.ilefund.com/register?email=${userEmail}`
  }

  const loadAPIBaseURL = () => {
    axios
      .get(import.meta.env.VITE_BASE_URL)
      .then(response => {
        const { web_api_url, estate_api } = response.data.data

        getListing(web_api_url)
        axios.get(estate_api)
      })
      .catch(error => {
        console.error('Axios error:', error)
      })
  }

  const getListing = async web_api_url => {
    try {
      console.log(`${web_api_url}/api/estate/prototypes?limit=8`)

      setLoading(true)
      const res = await axios.get(
        `${web_api_url}/api/estate/prototypes?limit=8`
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
    loadAPIBaseURL()
  }, [])

  return (
    <>
     <div
  className="
    w-full
    overflow-hidden
    min-h-[30rem]
  "
>
  {/* ================= HERO SECTION ================= */}
  <section
    className="
      w-full
      max-w-[75rem]
      mx-auto
      px-[5%]
      py-[4rem]
      grid
      grid-cols-1
      sm:grid-cols-2
      gap-[3rem]
      items-center
      bg-cover
      bg-center
    "
  >
    {/* LEFT CONTENT */}
    <div className="space-y-[1.5rem]">
      <div
        className="
          bg-[#DFE8FF]
          px-[0.75rem]
          py-[0.25rem]
          rounded-[0.5rem]
          text-[#0047FF]
          text-[0.875rem]
          w-max
        "
      >
        Vetted Properties
      </div>

      <h1
        className="
          font-extrabold
          text-[2rem]
          md:text-[2.25rem]
          leading-tight
        "
      >
        A diversified property portfolio,
        <br />
        built for steady growth
      </h1>

      <p
        className="
          text-gray-600
          max-w-[28rem]
          text-[1rem]
          leading-relaxed
        "
      >
        Explore ILEFUND’s real estate strategies designed to capture
        long-term demand drivers such as urban housing growth, rental
        demand, and logistics expansion across Nigeria and Africa.
      </p>

      {/* FORM */}
      <Form onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Email is required' },
            { type: 'email', message: 'Enter a valid email' }
          ]}
          className="w-full max-w-[28.75rem] mb-0"
        >
          <div
            className="
              flex
              items-center
              bg-white
              rounded-full
              p-[0.25rem]
              shadow-lg
            "
          >
            <Input
              placeholder="Start with your Email address ....."
              className="
                flex-1
                !border-none
                !shadow-none
                !bg-transparent
                h-[3rem]
                px-[1.25rem]
                text-[1rem]
                focus:!ring-0
              "
            />

            <Button
              htmlType="submit"
              loading={emailSubmitLoading}
              className="
                h-[3rem]
                px-[1.5rem]
                !rounded-full
                !bg-blue-600
                !text-white
                flex
                items-center
                gap-[0.5rem]
                text-[1rem]
                font-medium
              "
            >
              Get Started <MdOutlineArrowRightAlt size={20} />
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">
      <div className="w-full max-w-[24rem] aspect-[4/3]">
        <img
          src="https://res.cloudinary.com/da1mxvbx2/image/upload/v1767943399/ilefund/realestatebanner_u9h1tf.svg"
          alt="Illustration of land planning"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </section>

  {/* ================= PROPERTY GRID ================= */}
  <section
    className="
      w-full
      max-w-[75rem]
      mx-auto
      px-[5%]
      py-[3rem]
    "
  >
    <h1
      className="
        text-[1.5rem]
        font-bold
        text-center
        mb-[0.5rem]
      "
    >
      Vetted Properties
    </h1>

    <p
      className="
        text-center
        text-[1rem]
        text-gray-600
        max-w-[36rem]
        mx-auto
      "
    >
      Here are the real estate properties that are currently available for
      purchase.
    </p>

    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-[1rem]
        mt-[2rem]
      "
    >
      {/* ⭐ SKELETON LOADER */}
      {loading &&
        Array.from({ length: 8 }).map((_, i) => (
          <Card
            key={i}
            className="w-full overflow-hidden rounded-[0.75rem] !p-[0.5rem]"
          >
            <Skeleton.Image
              active
              style={{
                width: '100%',
                height: '8rem',
                borderRadius: '0.625rem'
              }}
            />

            <div className="mt-[0.5rem]">
              <Skeleton active title={false} paragraph={{ rows: 2 }} />
            </div>
          </Card>
        ))}

      {/* ⭐ REAL LISTINGS */}
      {!loading &&
        property.map(item => (
          <Link key={item.id} onClick={moveToPage}>
            <Card
              hoverable
              className="
                w-full
                overflow-hidden
                rounded-[0.75rem]
                !p-[0.5rem]
                transition-all
                duration-300
                hover:-translate-y-[0.25rem]
                hover:shadow-lg
              "
              cover={
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[0.5rem]">
                  <img
                    alt="property"
                    src={item.banner}
                    className="w-full h-full object-cover"
                  />

                  {/* Price Badge */}
                  <div
                    className="
                      absolute
                      bottom-[0.5rem]
                      left-[0.5rem]
                      bg-black/80
                      text-white
                      px-[0.75rem]
                      py-[0.25rem]
                      rounded-[0.375rem]
                      text-[0.75rem]
                      font-semibold
                    "
                  >
                    ₦{Number(item.price).toLocaleString('en-NG')}
                  </div>

                  {/* Size Badge */}
                  <div
                    className="
                      absolute
                      top-[0.5rem]
                      right-[0.5rem]
                      bg-white/90
                      text-gray-900
                      px-[0.5rem]
                      py-[0.25rem]
                      rounded-[0.375rem]
                      text-[0.625rem]
                      font-semibold
                    "
                  >
                    {item.sizeValue} sqm
                  </div>
                </div>
              }
            >
              <h3
                className="
                  font-semibold
                  text-[0.875rem]
                  leading-snug
                  mt-[0.5rem]
                  truncate
                "
              >
                {item.title}
              </h3>

              <div className="flex items-center gap-[0.25rem] mt-[0.25rem]">
                <img src={pin} alt="pin" className="w-[0.875rem]" />
                <p className="text-gray-500 text-[0.75rem] truncate">
                  {item.estate}
                </p>
              </div>
            </Card>
          </Link>
        ))}
    </div>
  </section>
</div>

    </>
  )
}

export default Properties
