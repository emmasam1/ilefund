import { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Avatar,
  Tooltip,
  Divider,
  Input,
  Skeleton,
  Form,
  message
} from 'antd'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import home_img_2 from '../../assets/ilefund-register.svg'
import home_img_3 from '../../assets/ilefund-save.svg'
import home_img_4 from '../../assets/ilefund-homes.svg'
import Rectangle43 from '../../assets/Rectangle43.png'

import { MdOutlineArrowRightAlt } from 'react-icons/md'
import pin from '../../assets/pin.png'
import btn from '../../assets/btn.png'
import Calculator from '../../components/calculator/Calculator'
import { AiOutlinePlus } from 'react-icons/ai'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'

import googlePlay from '../../assets/googleplaygetnow.svg'
import appStore from '../../assets/comingsoonappstore.svg'
import axios from 'axios'

import { useNavigate, Link } from 'react-router'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  pauseOnFocus: true
}

const HomePage = () => {
  const navigate = useNavigate()
  const [activeKey, setActiveKey] = useState(null)
  const [property, setProperty] = useState([])
  const [listingLoading, setListingLoading] = useState(false)
  const [emailSubmitLoading, setEmailSubmitLoading] = useState(false)
  const [downloadSubmitLoading, setDownloadSubmitLoading] = useState(false)

  const [playVideo, setPlayVideo] = useState(false)

  const [messageApi, contextHolder] = message.useMessage()

  const loadAPIBaseURL = () => {
    axios
      .get(import.meta.env.VITE_BASE_URL)
      .then(response => {
        const { web_api_url, estate_api } = response.data.data

        axios.get(estate_api)
        getListing(web_api_url)
      })
      .catch(error => {
        console.error('Axios error:', error)
      })
  }

  const getListing = async web_api_url => {
    try {
      setListingLoading(true)

      const res = await axios.get(
        `${web_api_url}/api/estate/prototypes?limit=8`
      )

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
      setListingLoading(false)
    }
  }

  const onFinish = async values => {
    const userEmail = values.email

    setEmailSubmitLoading(true)

    await new Promise(resolve => setTimeout(resolve, 3000))

    window.location.href = `https://app.ilefund.com/register?email=${userEmail}`
  }

  const moveToPage = () => {
    window.location.href = 'https://app.ilefund.com'
  }

  useEffect(() => {
    loadAPIBaseURL()
  }, [])

  const stats = [
    { value: '98', label: 'Projects' },
    { value: '65', label: 'People' },
    { value: '10', label: 'Years' },
    { value: '15', label: 'Offices' }
  ]

  const items = [
    {
      key: '1',
      label: 'How much do I need to start?',
      children: (
        <p>
          You can start with as little as <b> ₦50,000</b>, depending on the
          property or savings plan you choose. Ilefund is designed to allow
          gradual saving, so you don’t need a large lump sum to begin.
        </p>
      )
    },
    {
      key: '2',
      label: 'Can I save daily, weekly, or monthly?',
      children: (
        <p>
          Yes. You can choose a daily, weekly, or monthly savings schedule that
          fits your income and lifestyle. You can also make additional payments
          anytime.
        </p>
      )
    },
    {
      key: '3',
      label: 'Can I pay outright instead of saving gradually?',
      children: (
        <p>
          Yes. If you prefer to pay outright, you can do so. Ilefund supports
          both full payment and structured payment plans.
        </p>
      )
    },
    {
      key: '4',
      label: 'What happens if I miss a payment?',
      children: (
        <p>
          Missing a payment does not automatically cancel your plan. Your
          progress remains visible, and you can continue saving when you’re
          ready. Specific payment timelines depend on the property or plan you
          selected. Contact our support team for personalized assistance.
        </p>
      )
    },
    {
      key: '5',
      label: 'Are the properties listed on Ilefund verified?',
      children: (
        <p>
          Yes. Every property listed on Ilefund is fully verified before it is
          made available. We carry out due diligence on:
          <b>Ownership history,</b>
          <b>Title documents,</b>
          <b>Government approvals,</b>
          <b>Developer credibility,</b>
          Only properties that pass our verification process are listed.
        </p>
      )
    },
    {
      key: '6',
      label: 'How do I verify the property myself?',
      children: (
        <p>
          We encourage transparency. You will receive access to property{' '}
          <b>details</b>, <b>approvals</b>, and <b>documentation</b> summaries.
          Where required, you can also conduct independent verification through
          legal professionals or relevant government agencies.
        </p>
      )
    }
  ]

  return (
    <>
      {contextHolder}
      {/* ✅ Hero Section */}
      <div
   className="
     overflow-hidden
     min-h-[520px]
     3xl:min-h-[1100px]
     sm:min-h-[650px]
     md:min-h-[720px]
     lg:min-h-[780px]
     xl:min-h-[860px]
     2xl:min-h-[950px]
   "
 >
        <section
          className="
            flex
            w-11/12 max-w-[75rem]
            mx-auto py-10
            3xl:max-w-[130rem] items-center
            sm:py-16
            lg:py-24
            2xl:max-w-[110rem] 2xl:py-32
          "
        >
          <div
            className="
              grid grid-cols-1
              w-full
              gap-12 items-center
              md:grid-cols-2
              lg:gap-20
              2xl:gap-28
            "
          >
            {/* LEFT CONTENT */}
            <div
              className="
                flex flex-col
                gap-5
                sm:gap-6
                lg:gap-8
              "
            >
              <h1
                className="
                  max-w-[20ch]
                  font-bold text-2xl leading-tight
                  3xl:text-[5.5rem]
                  sm:text-3xl
                  md:text-[2.8rem]
                  lg:text-3xl
                  xl:text-6xl
                  2xl:text-[4.5rem]
                "
              >
                Start With A <br /> Plan, Save & Own.
              </h1>

              <div
                className="
                  flex flex-wrap
                  items-center gap-3
                "
              >
                <img
                  src={Rectangle43}
                  alt='ilefund-rectangle43'
                  className="
                    w-7
                    sm:w-8
                    md:w-auto
                  "
                />
                <p
                  className="
                    text-sm font-light
                    sm:text-lg
                    md:text-xl
                    lg:text-2xl
                    2xl:text-3xl
                  "
                >
                  From Savings to Home Ownership.
                </p>
              </div>

              {/* FORM */}
              <Form onFinish={onFinish}>
                <Form.Item
                  name='email'
                  rules={[
                    { required: true, message: 'Email is required' },
                    { type: 'email', message: 'Enter a valid email' }
                  ]}
                  className="
                    max-w-[520px] w-full
                    mb-0
                    2xl:max-w-[620px]
                  "
                >
                  <div
                    className="
                      flex
                      p-1
                      bg-white
                      rounded-full border-4px[#E0E0E0]
                      shadow-xl
                      items-center
                    "
                  >
                    <Input
                      placeholder='Start with your Email address .....'
                      className="
                        flex-1
                        px-6
                        text-base
                        !border-none !shadow-none !bg-transparent !h-14 focus:!ring-0
                        2xl:text-xl 2xl:!h-16
                      "
                    />

                    <Button
                      htmlType='submit'
                      loading={emailSubmitLoading}
                      className="
                        flex
                        px-6
                        text-base font-medium
                        !h-14 !rounded-full !bg-blue-600 !text-white items-center gap-2
                        2xl:px-10 2xl:text-xl 2xl:!h-16
                      "
                    >
                      Get Started <MdOutlineArrowRightAlt size={24} />
                    </Button>
                  </div>
                </Form.Item>
              </Form>

              {/* AVATARS + TEXT */}
              <div
                className="
                  flex flex-wrap
                  items-center gap-4
                "
              >
                <p
                  className="
                    text-xs leading-snug
                    sm:text-sm
                    md:text-base
                    lg:text-lg
                    2xl:text-xl
                  "
                >
                  Building a Dream, One{' '}
                  <span
                    className="
                      font-bold
                    "
                  >Home Owner</span> at a Time.
                </p>

                <div
                  className="
                    flex
                    -space-x-3
                  "
                >
                  <img
                    src='https://images.unsplash.com/photo-1594564190328-0bed16a89837?w=200&auto=format&fit=crop&q=60'
                    alt='ilefund-user-1'
                    className="
                      object-cover
                      w-9 h-9
                      rounded-full border-2 border-white
                      sm:w-10 sm:h-10
                      lg:w-11 lg:h-11
                      2xl:w-14 2xl:h-14
                    "
                    loading="lazy"
          decoding='async'
                  />

                  <img
                    src='https://images.unsplash.com/photo-1643008504049-1f4957523024?w=200&auto=format&fit=crop&q=60'
                    alt='ilefund-user-2'
                    className="
                      object-cover
                      w-9 h-9
                      rounded-full border-2 border-white
                      sm:w-10 sm:h-10
                      lg:w-11 lg:h-11
                      2xl:w-14 2xl:h-14
                    "
                    loading="lazy"
          decoding='async'
                  />

                  <img
                    src='https://images.unsplash.com/photo-1533108344127-a586d2b02479?w=200&auto=format&fit=crop&q=60'
                    alt='ilefund-user-3'
                    className="
                      object-cover
                      w-9 h-9
                      rounded-full border-2 border-white
                      sm:w-10 sm:h-10
                      lg:w-11 lg:h-11
                      2xl:w-14 2xl:h-14
                    "
                    loading="lazy"
          decoding='async'
                  />

                  <img
                    src='https://images.unsplash.com/photo-1602342323893-b11f757957c9?w=200&auto=format&fit=crop&q=60'
                    alt='ilefund-user-4'
                    className="
                      object-cover
                      w-9 h-9
                      rounded-full border-2 border-white
                      sm:w-10 sm:h-10
                      lg:w-11 lg:h-11
                      2xl:w-14 2xl:h-14
                    "
                    loading="lazy"
          decoding='async'
                  />
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="
                flex
                justify-center
                md:justify-end
              "
            >
              <img
                src='https://res.cloudinary.com/da1mxvbx2/image/upload/f_auto,q_auto/v1767943421/ilefund/ilefund-home_img_1_os6ziy.svg'
                alt='ilefund-home-banner'
                className="
                  w-full max-w-[320px] h-auto
                  3xl:max-w-[900px]
                  sm:max-w-[420px]
                  md:max-w-[520px]
                  lg:max-w-[600px]
                  xl:max-w-[680px]
                  2xl:max-w-[780px]
                "
                loading="lazy"
                decoding='async'
              />
            </div>
          </div>
        </section>
      </div>

      <div
        className='
    flex
    flex-col
    items-center
    pt-1
    sm:pt-1
    lg:pt-1
    2xl:pt-1
    gap-4
    sm:gap-6
    w-11/12
    max-w-[75rem]
    2xl:max-w-[110rem]
    3xl:max-w-[130rem]
    mx-auto
  '
      >
        <div
          className='
      bg-[#DFE8FF]
      px-3
      py-1
      rounded-lg
      text-[#0047FF]
      text-xs
      sm:text-sm
      lg:text-base
      2xl:text-lg
      font-medium
    '
        >
          How it Works
        </div>

        <h1
          className='
      font-bold
      text-2xl
      sm:text-3xl
      md:text-4xl
      lg:text-5xl
      2xl:text-[3.5rem]
      3xl:text-[4rem]
      text-center
      max-w-[24ch]
      leading-tight
    '
        >
          Three Steps to Own Your First Property
        </h1>

        <p
          className='
      text-center
      text-sm
      sm:text-base
      md:text-lg
      lg:text-xl
      2xl:text-2xl
      text-gray-600
      max-w-[40ch]
    '
        >
          Find out how you can become a property owner <br /> in just few days.
        </p>

        {/* ✅ FULLY RESPONSIVE GRID */}
        <div
          className='
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-8
      sm:gap-10
      lg:gap-14
      2xl:gap-20
      mt-10
      lg:mt-16
      2xl:mt-20
      w-full
    '
        >
          {/* Item 1 */}
          <div
            className='
        p-6
        sm:p-8
        lg:p-10
        2xl:p-12
        flex
        flex-col
        items-center
        text-center
        bg-white
        
      '
          >
            <img
              src={home_img_2}
              alt='ilefund-Register'
              className='
          w-24
          h-24
          sm:w-28
          sm:h-28
          lg:w-32
          lg:h-32
          2xl:w-36
          2xl:h-36
          mb-4
          lg:mb-6
        '
         loading="lazy"
          decoding='async'
            />
            <h3
              className='
          text-lg
          sm:text-xl
          lg:text-2xl
          2xl:text-3xl
          font-semibold
          mb-2
          lg:mb-4
        '
            >
              SignUp & Verify Your Account
            </h3>
            <p
              className='
          text-gray-600
          text-sm
          sm:text-base
          lg:text-lg
          2xl:text-xl
          leading-6
          lg:leading-7
          text-justify
        '
            >
              Create a secure account and complete your KYC (NIN, BVN, Address)
              to access all features. The more verified you are, the more
              benefits you unlock.
            </p>
          </div>

          {/* Item 2 */}
          <div
            className='
        p-6
        sm:p-8
        lg:p-10
        2xl:p-12
        flex
        flex-col
        items-center
        text-center
        bg-white
        
      '
          >
            <img
              src={home_img_3}
              alt='ilefund-Save'
              className='
          w-24
          h-24
          sm:w-28
          sm:h-28
          lg:w-32
          lg:h-32
          2xl:w-36
          2xl:h-36
          mb-4
          lg:mb-6
        '
         loading="lazy"
          decoding='async'
            />
            <h3
              className='
          text-lg
          sm:text-xl
          lg:text-2xl
          2xl:text-3xl
          font-semibold
          mb-2
          lg:mb-4
        '
            >
              Start Saving with a Plan
            </h3>
            <p
              className='
          text-gray-600
          text-sm
          sm:text-base
          lg:text-lg
          2xl:text-xl
          leading-6
          lg:leading-7
          text-justify
        '
            >
              Set your saving frequency (daily, weekly, monthly), and we’ll
              guide you with reminders and progress tracking. You can save
              manually or automate with card/bank.
            </p>
          </div>

          {/* Item 3 */}
          <div
            className='
        p-6
        sm:p-8
        lg:p-10
        2xl:p-12
        flex
        flex-col
        items-center
        text-center
        bg-white
      '
          >
            <img
              src={home_img_4}
              alt='ilefund-Get-Home'
              className='
          w-24
          h-24
          sm:w-28
          sm:h-28
          lg:w-32
          lg:h-32
          2xl:w-36
          2xl:h-36
          mb-4
          lg:mb-6
        '
         loading="lazy"
          decoding='async'
            />
            <h3 className=' text-lg sm:text-xl  lg:text-2xl  2xl:text-3xl font-semibold mb-2 lg:mb-4 '>
              Own Your Property
            </h3>
            <p
              className='
          text-gray-600
          text-sm
          sm:text-base
          lg:text-lg
          2xl:text-xl
          leading-6
          lg:leading-7
          text-justify
        '
            >
              Choose to pay outright or continue your payment plan over a
              pre-defined period. We’ll keep track of everything with the
              savings tracker, and the developer shares documentation with you
              wherever you are when you are done.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Calculator + Properties Section */}
<section className="w-11/12  2xl:max-w-[110rem]
    3xl:max-w-[130rem] max-w-[75rem]
       mx-auto py-16 sm:py-20 lg:py-24">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

    {/* LEFT: Calculator */}
    <div
      className="
        md:col-span-1
        flex flex-col justify-center

        bg-[url('/src/assets/phone.png')]
        bg-no-repeat
        bg-center
        bg-[length:auto_100%]
        sm:bg-[length:auto_105%]
        md:bg-[length:auto_100%]

        p-4 sm:p-6 md:p-8 lg:p-10

        h-[520px] sm:h-[580px] md:h-[620px] lg:h-[680px] 2xl:h-[720px]

        transform scale-100 origin-top
      "
    >
      <Calculator
        amountFontSize="text-base sm:text-lg md:text-xl lg:text-2xl"
        resultFontSize="!text-base sm:!text-lg md:!text-xl lg:!text-2xl"
      />
    </div>

    {/* RIGHT: Properties */}
    <div className="md:col-span-2 flex flex-col justify-center mt-10 md:mt-0">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-6 sm:mb-8 lg:mb-10">
        Feature Vetted Properties
      </h1>

      {/* GRID WRAPPER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* ⭐ SKELETON LOADER */}
        {listingLoading &&
          Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="!p-2 w-full">
              <Skeleton.Image
                style={{
                  width: "100%",
                  height: "5rem",
                  borderRadius: "6px",
                }}
                active
              />
              <Skeleton active title={false} paragraph={{ rows: 3 }} />
            </Card>
          ))}

        {/* ⭐ REAL LISTING */}
        {!listingLoading &&
          property.map((item) => (
            <Link key={item.id} onClick={moveToPage}>
              <Card
                hoverable
                className="
                  w-full
                  overflow-hidden
                  rounded-xl
                  !p-2
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
                cover={
                  <div className="relative">
                    <img
                      alt="ilefund-property"
                      src={item.banner}
                      className="h-28 sm:h-32 md:h-36 lg:h-40 w-full object-cover rounded-lg"
                    />

                    {/* Price Badge */}
                    <div className="absolute bottom-2 left-2 bg-black/80 text-white px-3 py-1 rounded-md text-xs sm:text-sm md:text-base font-semibold">
                      ₦{Number(item.price).toLocaleString("en-NG")}
                    </div>

                    {/* Size Badge */}
                    <div className="absolute top-2 right-2 bg-white/90 text-gray-900 px-2 py-1 rounded-md text-[0.6rem] sm:text-xs md:text-sm lg:text-sm font-semibold">
                      {item.sizeValue} sqm
                    </div>
                  </div>
                }
              >
                {/* Title */}
                <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-lg leading-snug mt-1 truncate">
                  {item.title}
                </h3>

                {/* Location */}
                <div className="flex items-center mt-1 gap-1">
                  <img src={pin} alt="ilefund-pins" className="w-3 sm:w-4 md:w-4"
                    loading="lazy"
          decoding='async'/>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base truncate">
                    {item.estate}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  </div>
</section>


<section className='relative'>
        {/* HERO IMAGE */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[650px] lg:h-[750px]  2xl:max-w-[110rem]
    3xl:max-w-[130rem] max-w-[75rem] mx-auto rounded-4xl
         bg-[url('/src/assets/home_img_2.png')] bg-cover bg-center bg-no-repeat">
          {/* DARK OVERLAY */}
          <div className='absolute inset-0 bg-[#00000085] rounded-4xl'></div>

          {/* VIDEO OR PLAY BUTTON */}
          <div className='absolute inset-0 flex items-center justify-center z-10'>
            {!playVideo ? (
              /* PLAY BUTTON */
              <button
                onClick={() => setPlayVideo(true)}
                className='flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-red-600 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-10 h-10 sm:w-12 sm:h-12 text-white ml-1'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M4 2.5a2.5 2.5 0 0 0-2.5 2.5v14a2.5 2.5 0 0 0 2.5 2.5h16a2.5 2.5 0 0 0 2.5-2.5v-14a2.5 2.5 0 0 0-2.5-2.5H4zm6.5 12.5v-7l6 3.5-6 3.5z' />
                </svg>
              </button>
            ) : (
              /* YOUTUBE IFRAME */
              <div className='w-full h-full flex items-center justify-center px-4'>
                <div className='relative w-full max-w-5xl aspect-video'>
                  <iframe
                    className='absolute inset-0 w-full h-full rounded-xl'
                    src='https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='autoplay; encrypted-media; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
</section>

<section className="w-11/12 2xl:max-w-[110rem]
    3xl:max-w-[130rem] max-w-[75rem] mx-auto mt-20 sm:mt-24 lg:mt-28">
  {/* FAQ Header */}
  <div className="flex flex-col md:flex-row justify-between mb-10 gap-5 md:gap-0">
    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
      Your most frequently asked <br /> question answered
    </h1>

    <Link
      to="/faqs"
      className="!bg-blue-600 !h-10 !text-white py-3 !rounded-full w-full sm:w-60 hover:bg-blue-700 transition !border-0 mt-3 md:mt-0 flex items-center justify-center gap-2"
    >
      View All FAQS <MdOutlineArrowRightAlt />
    </Link>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
    {/* LEFT: Image with Stats */}
    <div
      className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-md 
        bg-[url('https://res.cloudinary.com/da1mxvbx2/image/upload/v1767943940/ilefund/ilefund-questions_wauhee.png')] 
        bg-no-repeat bg-cover bg-top"
    >
      <div
        className="rounded-md bg-[#F2F3FA] flex flex-col justify-center items-center
          p-6 sm:p-10 w-56 sm:w-60 absolute top-3/4 md:top-3/4 right-2 sm:right-5 lg:right-10 transform -translate-y-1/2"
      >
        <h1 className="font-bold text-center sm:text-lg">100+ Clients</h1>
        <h1 className="font-bold text-center sm:text-lg">5.0 (250 Reviews)</h1>
        <Avatar.Group className="mt-2 sm:mt-4">
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          <a href="https://ant.design">
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
          </a>
          <Tooltip title="Ant User" placement="top">
            <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
          </Tooltip>
          <Avatar style={{ backgroundColor: "#1677ff" }} icon={<AntDesignOutlined />} />
        </Avatar.Group>
      </div>
    </div>

    {/* RIGHT: Accordion */}
    <div className="w-full">
      <div className="space-y-4">
        {items.map((item) => {
          const isActive = activeKey === item.key;

          return (
            <div key={item.key} className="border border-gray-300 rounded-lg overflow-hidden">
              {/* Header */}
              <button
                type="button"
                onClick={() => setActiveKey(isActive ? null : item.key)}
                aria-expanded={isActive}
                aria-controls={`panel-${item.key}`}
                className={`w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 focus:outline-none transition-colors duration-300 ${
                  isActive ? "bg-[#F2F3FA]" : "bg-white text-gray-900"
                }`}
              >
                <span className="text-base sm:text-lg font-semibold">{item.label}</span>
                <span
                  className={`ml-4 transition-transform duration-300 ${
                    isActive ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <AiOutlinePlus
                    size={20}
                    className={`${isActive ? "text-black" : "text-gray-500"}`}
                  />
                </span>
              </button>

              {/* Content */}
              <div
                id={`panel-${item.key}`}
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  isActive ? "max-h-60 sm:max-h-64" : "max-h-0"
                }`}
              >
                <div
                  className={`p-4 sm:p-6 border-t border-gray-200 ${
                    isActive ? "bg-[#F2F3FA]" : "bg-white text-gray-700"
                  }`}
                >
                  {item.children}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

{/* App Download Section */}
<div className="w-full py-16 flex justify-center mt-28">
  <div
    className="bg-[#0047ff] bg-no-repeat bg-center bg-[length:100%_100%]
      h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full px-4 sm:pl-10 flex justify-center"
  >
    <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-4 items-center">
      {/* LEFT: PHONE MOCKUPS */}
      <div className="relative flex justify-center md:justify-center">
        <img
          src="https://res.cloudinary.com/da1mxvbx2/image/upload/v1767944009/ilefund/ilefund-apps-group_f5xxzx.svg"
          alt="ilefund-mockup-1"
          className="w-40 sm:w-52 md:w-80 lg:w-96 drop-shadow-2xl z-20 -mt-10 sm:-mt-15"
          loading="lazy"
          decoding='async'
        />
      </div>

      {/* RIGHT: TEXT + FORM */}
      <div className="text-white p-6 sm:p-10 md:p-16 mt-4 md:mt-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight">
          Download <br />
          ileFund Now
        </h1>

        <p className="text-xs sm:text-sm md:text-base mt-4 opacity-90">
          You don’t need millions to own property. You just need a plan — and ileFund gives you one. Download ileFund now and start saving toward your property today.
        </p>

        <Form>
          <div className="flex justify-start gap-4 mt-6 flex-wrap">
            <a
              href="https://play.google.com/store/apps/details?id=com.ilefund"
              target="_blank"
              rel="noreferrer"
            >
              <img src={googlePlay} alt="Google Play" className="h-12 cursor-pointer" />
            </a>
            <img src={appStore} alt="App Store" className="h-12 cursor-pointer" />
          </div>
        </Form>
      </div>
    </div>
  </div>
</div>

      {/* ✅ You can continue the rest of your sections exactly as before */}
      {/* ...Steps Section, Calculator, Properties, FAQ, Testimonial, etc. */}
    </>
  )
}

export default HomePage
