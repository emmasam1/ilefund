import { useState } from "react";
import { Input, Divider, Button } from "antd";
import { FaPlus, FaMinus } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import star from "../../assets/star.png";
import blueline from "../../assets/blueline.png";

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
    heading: "Safety and Security",
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
   {
    heading: "SAVINGS & PAYMENTS",
    items: [
      {
        key: "7",
        label: "How much can I start saving with Ilefund? ",
        content:
          "You can start with as little as ₦50,000, depending on the property or savings plan you choose. Ilefund is designed to allow gradual saving, so you dont need a large lump sum to begin.",
      },
      {
        key: "8",
        label: "Can I save daily, weekly, or monthly? ",
        content: "Yes. You can choose a daily, weekly, or monthly savings schedule that fits your income and lifestyle. You can also make additional payments anytime. ",
      },
      {
        key: "9",
        label: "Can I automate my savings? ",
        content:
          "Yes. You can automate payments using your card or linked bank account, or make manual payments whenever you choose. ",
      },
       {
        key: "10",
        label: "What happens if I miss a payment? ",
        content:
          "Missing a payment does not automatically cancel your plan. Your progress remains visible, and you can continue saving when you’re ready. Specific payment timelines depend on the property or plan you selected. ",
      },
       {
        key: "11",
        label: "Can I pay outright instead of saving gradually?",
        content:
          "Yes. If you prefer to pay outright, you can do so. Ilefund supports both full payment and structured payment plans. ",
      },
    ],
  },
  {
    heading: "PROPERTY & VERIFICATION ",
    items: [
      {
  key: "12",
  label: "Are the properties listed on Ilefund verified?",
  content: {
    intro:
      "Yes. Every property listed on Ilefund is fully verified before it is made available. We carry out due diligence on:",
    points: [
      "Ownership history",
      "Title documents",
      "Government approvals",
      "Developer credibility"
    ],
    outro:
      "Only properties that pass our verification process are listed."
  }
},
      {
        key: "13",
        label: "How do I verify the property myself? ",
        content: "We use bank-level encryption to protect your data.",
      },
      {
        key: "14",
        label: "Is Pie Assets regulated?",
        content:
          "We encourage transparency. You will receive access to property details, approvals, and documentation summaries. Where required, you can also conduct independent verification through legal professionals or relevant government agencies. ",
      },
        {
  key: "15",
  label: "Who handles the verification process? ",
  content: {
    intro:
      "Ilefund handles all verification and due diligence before listing any property. This ensures you are not exposed to: ",
    points: [
      "Fake Titles",
      "Disputed land",
      "Unapproved layouts ",
      "Unreliable developers "
    ],
  }
},
  {
        key: "16",
        label: "Are the properties government approved? ",
        content:
          "Yes. Properties listed on Ilefund come with the necessary government approvals, such as FCDA or relevant state authority approvals, depending on location. ",
      },
       {
        key: "17",
        label: "Can I visit the property physically? ",
        content:
          "Yes. Physical inspections can be arranged for properties where available. For diaspora users, detailed media, documentation, and updates are provided digitally.",
      },
    ],
  },
  {
    heading:"OWNERSHIP, ALLOCATION & DOCUMENTS ",
    items:[
      {
        key:"18",
        label:"When do I get allocated my property? ",
        content:"Allocation is done after your payment obligations for the selected plan are completed, according to the agreed terms."
      },
       {
  key: "19",
  label: "What documents will I receive after allocation? ",
  content: {
    intro:
      "Depending on the property, you will receive:",
    points: [
      "Allocation letter ",
      "Contract of sale ",
      "Survey plan ",
      "Relevant title documentation (as applicable)  "
    ],
    outro:"All documents are issued in line with Nigerian real estate standards. "
  }
},
 {
        key:"20",
        label:"Will the property be in my name?",
        content:"Yes. Once allocation and documentation are completed, ownership is transferred to you according to the agreed terms and applicable laws"
      },
      {
          key:"21",
          label:"Can I buy land or property jointly with someone else?",
          content:"Yes. Ilefund supports joint ownership arrangements, depending on the property and agreement structure"
        },
    ]
  },
  {
    heading:"DIASPORA & REMOTE OWNERSHIP ",
    items:[
      {
        key:"22",
        label:"Can I use Ilefund if I live outside Nigeria? ",
        content:"Yes. Ilefund is built for Nigerians at home and abroad. You can save, track payments, receive updates, and complete ownership without being physically present. "
      },
        {
        key:"23",
        label:"How do I receive documents if I’m abroad?",
        content:"Documents are shared digitally, and physical copies can be arranged through secure channels when necessary."
      },
      {
        key:"24",
        label:"Do I need to travel to Nigeria to complete my purchase?",
        content:"No. Traveling is optional, not mandatory. The entire process can be completed remotely"
      }
    ]
  },
   {
    heading:"WITHDRAWALS & CHANGES ",
    items:[
      {
        key:"25",
        label:"Can I stop or change my savings plan? ",
        content:"Yes. You can adjust your savings frequency or pause contributions, depending on the terms of your plan. "
      },
        {
        key:"26",
        label:"Can I withdraw my money? ",
        content:"Withdrawal options and conditions depend on the plan you selected. Any applicable charges or conditions will be clearly communicated before withdrawa."
      },
      {
        key:"27",
        label:"What happens if I decide not to continue with a property? ",
        content:"Your savings status and available options will be reviewed based on the plan’s terms. Transparency is key — there are no hidden rules. "
      }
    ]
  },
   {
    heading:"SECURITY & ACCOUNT MANAGEMENT  ",
    items:[
      {
        key:"28",
        label:"How is my money handled? ",
        content:"Funds are managed through secure, regulated payment channels and tracked transparently within your account."
      },
        {
        key:"29",
        label:"Is my personal information protected?  ",
        content:"Yes. Your personal and financial data is protected using industry-standard security practices. "
      },
      {
        key:"30",
        label:"Do I need to complete KYC?  ",
        content:"Yes. Completing KYC (NIN, BVN, Address verification) helps protect your account, unlock more features, and ensures compliance with regulations."
      }
    ]
  },
  {
    heading:"SUPPORT & ASSISTANCE",
    items:[
      {
  key: "31",
  label: "What if I need help or clarification? ",
  content: {
    intro:
      "Our support team is available to assist you with:",
    points: [
      "Savings plans  ",
      "Property details",
      "Documentation  ",
      "Account issues   "
    ],
    outro:"Support is accessible directly through the app or official Ilefund channels.  "
  }
},
    ]
  }
];

// Accordion item with animated icon and content
const AccordionItem = ({ item, isOpen, onToggle }) => {
  const { label, content } = item;

  return (
    <div className="border border-gray-200 p-3 rounded-md">
      {/* HEADER */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left font-medium text-base sm:text-lg transition-all duration-300"
      >
        <span>{label}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180 scale-110 text-red-500" : "rotate-0"
          }`}
        >
          {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
        </span>
      </button>

      {/* BODY */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-[500px] opacity-100 mt-3"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-600 text-sm sm:text-base space-y-2">
          {/* OBJECT CONTENT (intro + list + outro) */}
          {typeof content === "object" ? (
            <>
              <p>{content.intro}</p>

              <ul className="list-disc pl-5 space-y-1">
                {content.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <p>{content.outro}</p>
            </>
          ) : (
            /* STRING CONTENT */
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  );
};


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
<<<<<<< Updated upstream

      
    </div>
 
=======
     </div>

     <section className="bg-[#F2F3FA] py-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10">
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-4xl mt-1">1250+ customer say</h1>
            <h1 className="font-bold text-3xl text-[#0047FF]">
              about our finance
            </h1>
            <p className="text-sm">
              With over 1,250 established clients, our finance and consulting
              services have earned praise for reliability, personalized
              guidance, and impactful results.
            </p>

            <Button
              type="primary"
              size="medium"
              className="!rounded-full !px-6 flex items-center gap-2 w-fit mt-2 !py-4 !h-10 !bg-[#0047FF]"
            >
              Contact Now <LiaLongArrowAltRightSolid size={20} />
            </Button>
          </div>

          <div className="bg-[#DAE2FB] p-6 rounded-lg">
            <Slider {...settings}>
              <div>
                <h2 className="text-2xl font-bold ">Logoipsum</h2>
                <p className="mt-2 text-sm">
                  The guidance we received has transformed oyr financial
                  outlook. our consultant was patient, knowledgeable, and
                  crafted s plan that aligned with our goals. Thanks to their
                  strategic advice, optimistic about our future.
                </p>
                <div className="mt-3 flex items-center gap-5">
                  <div className="bg-indigo-600 h-14 w-14 rounded-md"></div>
                  <h1 className="font-bold text-lg">
                    Rachael T./{" "}
                    <span className="!font-light">Entrepreneur</span>
                  </h1>
                </div>
                <Divider />
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
                  <div className="flex flex-col p-2 relative">
                    <img
                      src={blueline}
                      alt=""
                      className="w-30 absolute right-0"
                    />
                    <span className="text-xs mt-1">Google Rating</span>
                    <div className="flex items-center mt-1">
                      {/* Map star 5 times */}
                      <h1 className="text-[17px] mr-2 mt-1">5.0</h1>
                      {[...Array(5)].map((_, index) => (
                        <img
                          key={index}
                          src={star}
                          alt="star"
                          className="w-4 h-4 "
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col p-2 relative">
                    <img
                      src={blueline}
                      alt=""
                      className="w-30 absolute right-0"
                    />
                    <div className="flex mt-1 flex-col">
                      {/* Map star 5 times */}
                      <div className="flex items-center">
                        <span className="text-[17px] mr-2 mt-1">5.0</span>
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            src={star}
                            alt="star"
                            className="w-4 h-4"
                          />
                        ))}
                      </div>
                      <div className="flex items-center">
                        <h1 className="mr-2 mt-1 text-xs">Rated</h1>
                        <h1 className="mr-2 mt-1 text-xs">Trustpilot</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 relative">
                    <img
                      src={blueline}
                      alt=""
                      className="w-30 absolute right-0"
                    />
                    <div className="flex mt-1 flex-col">
                      {/* Map star 5 times */}
                      <div className="flex items-center">
                        <span className="text-[17px] mr-2 mt-1">5.0</span>
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            src={star}
                            alt="star"
                            className="w-4 h-4"
                          />
                        ))}
                      </div>
                      <div className="flex items-center">
                        <h1 className="mr-2 mt-1 text-xs">Rated</h1>
                        <h1 className="mr-2 mt-1 text-xs">Trustpilot</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold">Logoipsum</h2>
                <p className="mt-2 text-sm">
                  The guidance we received has transformed oyr financial
                  outlook. our consultant was patient, knowledgeable, and
                  crafted s plan that aligned with our goals. Thanks to their
                  strategic advice, optimistic about our future.
                </p>
                <div className="mt-3 flex items-center gap-5">
                  <div className="bg-indigo-600 h-14 w-14 rounded-md"></div>
                  <h1 className="font-bold text-lg ">
                    Rachael T./{" "}
                    <span className="!font-light">Entrepreneur</span>
                  </h1>
                </div>
                <Divider />
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
                  <div className="flex flex-col p-2 relative">
                    <img
                      src={blueline}
                      alt=""
                      className="w-30 absolute right-0"
                    />
                    <span className="text-xs mt-1">Google Rating</span>
                    <div className="flex items-center mt-1">
                      {/* Map star 5 times */}
                      <h1 className="text-[17px] mr-2 mt-1">5.0</h1>
                      {[...Array(5)].map((_, index) => (
                        <img
                          key={index}
                          src={star}
                          alt="star"
                          className="w-4 h-4 "
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col p-2 relative">
                    <img
                      src={blueline}
                      alt=""
                      className="w-30 absolute right-0"
                    />
                    <div className="flex mt-1 flex-col">
                      {/* Map star 5 times */}
                      <div className="flex items-center">
                        <span className="text-[17px] mr-2 mt-1">5.0</span>
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            src={star}
                            alt="star"
                            className="w-4 h-4"
                          />
                        ))}
                      </div>
                      <div className="flex items-center">
                        <h1 className="mr-2 mt-1 text-xs">Rated</h1>
                        <h1 className="mr-2 mt-1 text-xs">Trustpilot</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 relative">
                    <img
                      src={blueline}
                      alt=""
                      className="w-30 absolute right-0"
                    />
                    <div className="flex mt-1 flex-col">
                      {/* Map star 5 times */}
                      <div className="flex items-center">
                        <span className="text-[17px] mr-2 mt-1">5.0</span>
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            src={star}
                            alt="star"
                            className="w-4 h-4"
                          />
                        ))}
                      </div>
                      <div className="flex items-center">
                        <h1 className="mr-2 mt-1 text-xs">Rated</h1>
                        <h1 className="mr-2 mt-1 text-xs">Trustpilot</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
>>>>>>> Stashed changes
    </>
  );
};

export default Faq;
