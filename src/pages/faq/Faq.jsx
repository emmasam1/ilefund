import { useState } from "react";
import { Input, Divider, Button } from "antd";
import { FaPlus, FaMinus } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

// Grouped questions
const groupedItems = [
  {
    heading: "General",
    items: [
      {
        key: "1",
        label: "What is Pie Assets?",
        content:
          "Pie Assets helps you build wealth through asset-backed investments.",
      },
      {
        key: "2",
        label: "How do I get started?",
        content:
          "Sign up for an account and start exploring investment opportunities.",
      },
      {
        key: "3",
        label: "Who can invest?",
        content: "Anyone above 18 with a valid ID can invest.",
      },
    ],
  },
  {
    heading: "Safety & Security",
    items: [
      {
        key: "4",
        label: "Is my investment safe?",
        content:
          "All investments are backed by physical assets and go through due diligence.",
      },
      {
        key: "5",
        label: "Is my information secure?",
        content: "We use bank-level encryption to protect your data.",
      },
      {
        key: "6",
        label: "Is Pie Assets regulated?",
        content:
          "Yes, Pie Assets adheres to all financial regulations in its operating region.",
      },
    ],
  },
];

// Accordion item with animated icon and content
const AccordionItem = ({ item, isOpen, onToggle }) => (
  <div className="border border-gray-200 p-3 rounded-md">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center text-left font-medium text-base sm:text-lg transition-all duration-300"
    >
      <span className="text-base sm:text-lg">{item.label}</span>
      <span
        className={`transform transition-transform duration-300 ${
          isOpen ? "rotate-180 scale-110 text-red-500" : "rotate-0"
        }`}
      >
        {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
      </span>
    </button>

    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen
          ? "max-h-40 opacity-100 mt-2 translate-y-0"
          : "max-h-0 opacity-0 -translate-y-2"
      }`}
    >
      <p className="text-gray-600 text-sm sm:text-base">{item.content}</p>
    </div>
  </div>
);

const Faq = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (key) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };

  return (
    <>
    
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header + Search */}
      <div className="flex justify-center items-center flex-col min-h-[15rem] sm:min-h-[22rem] text-center">
        <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h1>
        <div className="mt-7 w-full sm:w-3/4 lg:w-2/3">
          <Input
            placeholder="Search for a question..."
            className="w-full !py-3 sm:!py-5 placeholder:text-base sm:placeholder:text-xl !text-base sm:!text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-6xl mx-auto mt-5 space-y-8 sm:space-y-10">
        {groupedItems.map((group) => {
          const filtered = group.items.filter((item) =>
            item.label.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (filtered.length === 0) return null;

          return (
            <div key={group.heading}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-gray-800">
                {group.heading}
              </h2>
              <div className="space-y-2">
                {filtered.map((item) => (
                  <AccordionItem
                    key={item.key}
                    item={item}
                    isOpen={activeKey === item.key}
                    onToggle={() => toggleItem(item.key)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      
    </div>

      <section className="bg-[#12033a] py-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10">
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-4xl mt-1 text-white">
              1250+ customer say
            </h1>
            <h1 className="font-bold text-3xl text-[#0047FF]">
              about our finance
            </h1>
            <p className="text-sm text-white">
              With over 1,250 established clients, our finance and consulting
              services have earned praise for reliability, personalized
              guidance, and impactful results.
            </p>

            <Button
              type="primary"
              size="medium"
              className="!rounded-full !px-6 flex items-center gap-2 w-fit mt-2"
            >
              Contact Now <LiaLongArrowAltRightSolid size={20} />
            </Button>
          </div>

          <div className="bg-[#2A1C4E] p-6 rounded-lg">
            <Slider {...settings}>
              <div>
                <h2 className="text-2xl font-bold text-white">Logoipsum</h2>
                <p className="mt-2 text-sm text-white">
                  The guidance we received has transformed oyr financial
                  outlook. our consultant was patient, knowledgeable, and
                  crafted s plan that aligned with our goals. Thanks to their
                  strategic advice, optimistic about our future.
                </p>
                <div className="mt-3 flex items-center gap-5">
                  <div className="bg-indigo-600 h-14 w-14 rounded-md"></div>
                  <h1 className="font-bold text-lg text-white">
                    Rachael T./{" "}
                    <span className="!font-light">Entrepreneur</span>
                  </h1>
                </div>
                <Divider />
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs mt-1 text-white">
                      Goggle Rating
                    </span>
                    <h1 className="font-bold text-white">5.0</h1>
                  </div>
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <h1 className="font-bold text-white">5.0</h1>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white">Rated</span>
                      <span className="text-xs text-white">Trustpilot</span>
                    </div>
                  </div>
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs text-center text-white">
                      Total rating <b>5.0</b> base on <b>1250+</b> Review
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Logoipsum</h2>
                <p className="mt-2 text-sm text-white">
                  The guidance we received has transformed oyr financial
                  outlook. our consultant was patient, knowledgeable, and
                  crafted s plan that aligned with our goals. Thanks to their
                  strategic advice, optimistic about our future.
                </p>
                <div className="mt-3 flex items-center gap-5">
                  <div className="bg-indigo-600 h-14 w-14 rounded-md"></div>
                  <h1 className="font-bold text-lg text-white">
                    Rachael T./{" "}
                    <span className="!font-light">Entrepreneur</span>
                  </h1>
                </div>
                <Divider />
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs mt-1 text-white">
                      Goggle Rating
                    </span>
                    <h1 className="font-bold text-white">5.0</h1>
                  </div>
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <h1 className="font-bold text-white">5.0</h1>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white">Rated</span>
                      <span className="text-xs text-white">Trustpilot</span>
                    </div>
                  </div>
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs text-center text-white">
                      Total rating <b>5.0</b> base on <b>1250+</b> Review
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Logoipsum</h2>
                <p className="mt-2 text-sm text-white">
                  The guidance we received has transformed oyr financial
                  outlook. our consultant was patient, knowledgeable, and
                  crafted s plan that aligned with our goals. Thanks to their
                  strategic advice, optimistic about our future.
                </p>
                <div className="mt-3 flex items-center gap-5">
                  <div className="bg-indigo-600 h-14 w-14 rounded-md"></div>
                  <h1 className="font-bold text-lg text-white">
                    Rachael T./{" "}
                    <span className="!font-light">Entrepreneur</span>
                  </h1>
                </div>
                <Divider />
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs mt-1 text-white">
                      Goggle Rating
                    </span>
                    <h1 className="font-bold text-white">5.0</h1>
                  </div>
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <h1 className="font-bold text-white">5.0</h1>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white">Rated</span>
                      <span className="text-xs text-white">Trustpilot</span>
                    </div>
                  </div>
                  <div class="border border-[#dddddd] rounded-lg flex justify-center flex-col items-center">
                    <span className="text-xs text-center text-white">
                      Total rating <b>5.0</b> base on <b>1250+</b> Review
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
