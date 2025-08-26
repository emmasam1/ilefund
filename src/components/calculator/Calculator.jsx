import { useState } from "react";
import { Slider, Select, Typography } from "antd";
import styles from "./CustomSlider.module.css";

const { Option } = Select;
const { Title } = Typography;

const Calculator = ({
  initialAmount = 100000,
  initialCurrency = "₦",
  initialFrequency = "Monthly",
  initialDuration = 1,
  maxAmount = 10000000,
  rate = 0.1234,
  amountFontSize = "text-6xl sm:text-8xl", // ✅ configurable font size
  resultFontSize = "!text-5xl sm:!text-7xl", // ✅ configurable result font size
}) => {
  const [amount, setAmount] = useState(initialAmount);
  const [duration, setDuration] = useState(initialDuration);
  const [currency, setCurrency] = useState(initialCurrency);
  const [frequency, setFrequency] = useState(initialFrequency);

  const calculateReturn = () => {
    return (amount * duration * 12 * rate).toFixed(0);
  };

  return (
    <div>
      <div className="px-4 text-center max-w-5xl mx-auto">
        {/* Amount input */}
        <div className="flex justify-center items-center mb-4 max-w-full overflow-x-auto">
          <span className="text-4xl">{currency}</span>
          <input
            type="text"
            value={amount.toLocaleString()}
            onChange={(e) => {
              const raw = e.target.value.replace(/,/g, "");
              let num = parseInt(raw) || 0;
              if (num > maxAmount) num = maxAmount;
              setAmount(num);
            }}
            className={`bg-transparent outline-none text-center w-full max-w-[90%] appearance-none ${amountFontSize}`}
          />
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center mb-6">
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

        {/* Duration slider */}
        <div className="px-2">
          <Slider
            min={1}
            max={10}
            value={duration}
            onChange={setDuration}
            tooltip={{ formatter: (val) => `${val} year(s)` }}
          />
        </div>

        {/* Result */}
        <div className="mt-10">
          <p className="text-gray-500 text-xl sm:text-2xl font-semibold my-4">
            Today, you'd have
          </p>
          <div className="flex justify-center items-center gap-2">
            <span className="text-2xl text-gray-400 relative -top-1">
              {currency}
            </span>
            <Title level={2} className={`${resultFontSize} !text-gray-400`}>
              {parseInt(calculateReturn()).toLocaleString()}
            </Title>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
