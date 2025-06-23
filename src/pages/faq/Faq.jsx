import { useState } from "react";
import { Input } from "antd";
import { FaPlus, FaMinus } from "react-icons/fa";

// Grouped questions
const groupedItems = [
  {
    heading: "General",
    items: [
      {
        key: "1",
        label: "What is Pie Assets?",
        content: "Pie Assets helps you build wealth through asset-backed investments.",
      },
      {
        key: "2",
        label: "How do I get started?",
        content: "Sign up for an account and start exploring investment opportunities.",
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
        content: "All investments are backed by physical assets and go through due diligence.",
      },
      {
        key: "5",
        label: "Is my information secure?",
        content: "We use bank-level encryption to protect your data.",
      },
      {
        key: "6",
        label: "Is Pie Assets regulated?",
        content: "Yes, Pie Assets adheres to all financial regulations in its operating region.",
      },
    ],
  },
];

// Accordion item with animated icon and content
const AccordionItem = ({ item, isOpen, onToggle }) => (
  <div className="border-b border-gray-200 py-3">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center text-left text-blue-600 font-medium text-lg transition-all duration-300"
    >
      <span className="text-1xl">{item.label}</span>
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
        isOpen ? "max-h-40 opacity-100 mt-2 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
      }`}
    >
      <p className="text-gray-600 text-sm">{item.content}</p>
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
    <div className="m-auto w-11/12 max-w-4xl">
      <div className="flex justify-center items-center flex-col min-h-[22rem]">
        <h1 className="font-bold text-5xl text-center">Frequently Asked Questions</h1>
        <div className="mt-7 w-3/4">
          <Input
            placeholder="Search for a question..."
            className="w-full !py-5 placeholder:text-2xl !text-1xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="!w-full mt-5 space-y-10">
        {groupedItems.map((group) => {
          const filtered = group.items.filter((item) =>
            item.label.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (filtered.length === 0) return null;

          return (
            <div key={group.heading}>
              <h2 className="text-3xl font-bold mb-3 text-gray-800">{group.heading}</h2>
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
  );
};

export default Faq;
