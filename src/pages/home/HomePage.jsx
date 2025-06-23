import { useState } from "react";
import { Slider, Select, Typography, Steps, Button } from "antd";
import ellipse19 from "../../assets/Ellipse19.png";
import ellipse20 from "../../assets/Ellipse20.png";
import ellipse21 from "../../assets/Ellipse21.png";
import Rectangle from "../../assets/Rectangle43.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";

const { Option } = Select;
const { Title } = Typography;

const HomePage = () => {
  const [amount, setAmount] = useState(100000);
  const [duration, setDuration] = useState(1);
  const [currency, setCurrency] = useState("₦");
  const [frequency, setFrequency] = useState("Monthly");

  const calculateReturn = () => {
    return (amount * duration * 12 * 0.1234).toFixed(0);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="mx-auto w-11/12 grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        <div className="bg-white p-4">
             <h1 className="font-bold text-4xl md:text-6xl !line-height-1.5">
            Start With A <br/>Plan, Save & Own.
          </h1>
          <div className="flex flex-wrap gap-2 items-center">
            <img src={Rectangle} alt="rectangle" className="w-10 mt-1" />
            <h1 className="font-bold text-3xl md:text-3xl">
              From Savings to Home Ownership.
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <h1>Building a Dream, One <b>Home Owner</b>  at a Time.</h1>
            <div className="flex items-center">
              <img src={ellipse19} alt="ellipse19" className="w-9 z-10" />
              <img src={ellipse20} alt="ellipse20" className="w-9 -ml-3 z-0" />
              <img src={ellipse21} alt="ellipse21" className="w-9 -ml-3" />
            </div>
          </div>
         
        </div>
        <div className="bg-white space-y-4">
       

          <div className="relative mt-8">
            <div className="absolute border border-b-gray-200 h-44 right-0 top-0 w-60 rounded-4xl hidden md:block"></div>
            <img src={image1} alt="hero" className="w-full rounded-xl" />
          </div>
        </div>

      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto w-11/12 mt-12">
        <div className="flex justify-center">
          <img
            src={image2}
            alt="steps illustration"
            className="w-full max-w-md"
          />
        </div>
        <div className="p-4">
          <h1 className="mb-20 font-bold text-6xl">It takes 5 minutes</h1>
          <Steps
            direction="vertical"
            current={1}
            className="
    [&_.ant-steps-item-tail]:!h-36 
    [&_.ant-steps-item-tail]:!top-5
    [&_.ant-steps-item]:mb-30
  "
            items={[
              {
                title: (
                  <h2 className="text-2xl font-bold">Create an account</h2>
                ),
                description: (
                  <p className="text-base text-gray-500">
                    Sign up for an account with your name, email and phone
                    number.
                  </p>
                ),
              },
              {
                title: (
                  <h2 className="text-2xl font-bold">Add a payment method</h2>
                ),
                description: (
                  <p className="text-base text-gray-500">
                    Using your debit card or a bank transfer, setup your first
                    plan.
                  </p>
                ),
              },
              {
                title: (
                  <h2 className="text-2xl font-bold">Watch your money grow</h2>
                ),
                description: (
                  <p className="text-base text-gray-500">
                    Sit back, relax & let your money work for you all day,
                    everyday.
                  </p>
                ),
              },
            ]}
          />

          <Button>Sign Up Now</Button>
        </div>
      </div>

      {/* Investment Calculator Section */}
      <div className="mt-20 px-4 text-center max-w-5xl mx-auto">
        <h1 className="font-bold text-4xl sm:text-5xl mb-4">
          Stay the course, reap the rewards
        </h1>
        <p className="text-gray-500 text-xl sm:text-2xl font-semibold my-6">
          If you invested
        </p>

        <div className="flex justify-center items-center flex-wrap mb-4 max-w-full overflow-x-auto">
          <span className="text-4xl">{currency}</span>
          <input
            type="text"
            value={amount.toLocaleString()}
            onChange={(e) => {
              const raw = e.target.value.replace(/,/g, "");
              let num = parseInt(raw) || 0;
              if (num > 10000000) num = 10000000;
              setAmount(num);
            }}
            className="bg-transparent outline-none text-center text-6xl sm:text-8xl w-full max-w-[90%] appearance-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 mb-6">
          <Select
            value={currency}
            onChange={setCurrency}
            className="w-full sm:w-28 !border-0"
            bordered={false}
          >
            <Option value="₦">Naira</Option>
            <Option value="$">USD</Option>
          </Select>

          <Select
            value={frequency}
            onChange={setFrequency}
            className="w-full sm:w-32 !border-0"
            bordered={false}
          >
            <Option value="Monthly">Monthly</Option>
            <Option value="Yearly">Yearly</Option>
          </Select>

          <Select
            value={duration}
            onChange={setDuration}
            className="w-full sm:w-32 !border-0"
            bordered={false}
          >
            {[...Array(11)].map((_, i) => (
              <Option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? "year" : "years"}
              </Option>
            ))}
          </Select>
        </div>

        <div className="px-2">
          <Slider
            min={1}
            max={10}
            value={duration}
            onChange={setDuration}
            tooltip={{ formatter: (val) => `${val} year(s)` }}
          />
        </div>

        <div className="mt-10">
          <p className="text-gray-500 text-xl sm:text-2xl font-semibold my-4">
            Today, you'd have
          </p>
          <div className="flex justify-center items-center gap-2">
            <span className="text-2xl text-gray-400 relative -top-5">{currency}</span>
            <Title level={2} className="!text-5xl sm:!text-7xl !text-gray-400">
              {parseInt(calculateReturn()).toLocaleString()}
            </Title>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
