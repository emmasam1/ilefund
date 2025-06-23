import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import eoy from "../../assets/eoy.jpg";
import photo1 from "../../assets/team-photo-4.jpg";
import photo2 from "../../assets/ed-photo-12.jpg";
import photo3 from "../../assets/team-5.jpg";
import quona from "../../assets/quona.svg";
import vsq from "../../assets/vsq.svg";
import cf from "../../assets/cf.png";
import applestore from "../../assets/applestore.png";
import googleplay from "../../assets/googleplay.png";
import star from "../../assets/star.svg";

import { Card, Button, Input } from "antd";
import { BiBorderRadius } from "react-icons/bi";
const { Meta } = Card;

const people = [
  { id: 1, img: photo3, name: "Chigozie Ochuba", post: "Customer Experience" },
  { id: 2, img: photo3, name: "John Doe", post: "Software Engineer" },
  { id: 3, img: photo3, name: "Jane Smith", post: "Marketing Lead" },
  { id: 4, img: photo3, name: "Michael Johnson", post: "Product Manager" },
  { id: 5, img: photo3, name: "Emily Davis", post: "HR Specialist" },
  { id: 6, img: photo3, name: "David Brown", post: "Sales Associate" },
  { id: 7, img: photo3, name: "Sarah Wilson", post: "Data Scientist" },
  { id: 8, img: photo3, name: "Daniel Garcia", post: "UX/UI Designer" },
  { id: 9, img: photo3, name: "Sophia Martinez", post: "Content Strategist" },
  { id: 10, img: photo3, name: "James Anderson", post: "SEO Specialist" },
  { id: 11, img: photo3, name: "Isabella Thomas", post: "Project Coordinator" },
  { id: 12, img: photo3, name: "Lucas Taylor", post: "Business Analyst" },
  { id: 13, img: photo3, name: "Mia Harris", post: "Customer Support" },
  { id: 14, img: photo3, name: "Ethan Clark", post: "Software Developer" },
  { id: 15, img: photo3, name: "Ava Robinson", post: "Operations Manager" },
  { id: 16, img: photo3, name: "Oliver Lewis", post: "Finance Director" },
];

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const About = () => {
  const teamRef = useRef(null);
  const isInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <>
      <div className="m-auto w-11/12">
        {/* HEADER */}
        <div className="flex justify-center items-center flex-col py-25">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl text-center pb-10">
            Digitizing wealth <br />
            management for Africans
          </h1>
          <p className="text-center text-base sm:text-lg lg:text-xl">
            We are building savings and investment culture among the growing
            population of <br className="hidden sm:block" />
            underserved African middle class and millennials.
          </p>
        </div>

        {/* IMAGES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          <div className="rounded-lg overflow-hidden lg:h-[90vh] grid gap-4 grid-cols-1 grid-flow-row">
            <div className="rounded-lg overflow-hidden">
              <img src={photo2} alt="" className="w-full object-cover h-full" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={photo2} alt="" className="w-full object-cover h-full" />
            </div>
          </div>

          <div className="rounded-lg overflow-hidden lg:h-[90vh]">
            <img src={eoy} alt="" className="w-full object-cover h-full" />
          </div>

          <div className="rounded-lg overflow-hidden lg:h-[90vh]">
            <img src={photo1} alt="" className="w-full object-cover h-full" />
          </div>

          <div className="rounded-lg overflow-hidden lg:h-[90vh] grid gap-4 grid-cols-2">
            {Array(4)
              .fill(photo3)
              .map((img, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden">
                  <img
                    src={img}
                    alt=""
                    className="w-full object-cover h-full"
                  />
                </div>
              ))}
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="mt-20" ref={teamRef}>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-4xl pb-10">
            The right skills, the right people.
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {people.map((person, i) => (
              <motion.div
                key={person.id}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                //   variants={cardVariants}
                className="flex flex-col items-center text-center"
              >
                <div className="rounded-[9999px_9999px_9999px_0] overflow-hidden shadow-lg w-32 h-32 sm:w-44 sm:h-44 lg:w-54 lg:h-54">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-base sm:text-lg">
                    {person.name}
                  </h3>
                  <p className="text-sm text-gray-500">{person.post}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-4xl pb-10 text-center">
            Our Investors
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            <div className="mt-10">
              <img src={quona} alt="" className="object-contain" />
            </div>
            <div className="mt-10">
              <img src={vsq} alt="" className="object-contain" />
            </div>
            <div className="mt-10">
              <img src={quona} alt="" className="object-contain" />
            </div>
            <div className="mt-10">
              <img src={vsq} alt="" className="object-contain" />
            </div>
            <div className="mt-20">
              <img src={quona} alt="" className="object-contain" />
            </div>
            <div className="mt-20">
              <img src={vsq} alt="" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 bg-[#F4F8FC] py-20">
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-4xl pb-10 text-center">
          What defines us
        </h1>
        <p className="text-center text-xl">
          Our values define the Cowrywise culture, who we are, and what we do
          every day. They are the foundation of <br />
          our identity and the compass of our interaction with all stakeholders:
          customers, regulators, investors,
          <br /> partners and our communities.
        </p>
        <div className="m-auto w-11/12 mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="">
              <Card
                // hoverable
                className="w-full"
                cover={<img alt="img" src={cf} className="h-80 object-cover" />}
              >
                <Meta
                  title={
                    <span className="font-bold text-2xl">Customers First</span>
                  }
                  description={
                    <span className="text-xl">
                      We are in business to make our customers happy and meet
                      their needs. Meeting the needs of our customers is an act
                      we value dearly.
                    </span>
                  }
                />
              </Card>
            </div>
            <div className="">
              <Card
                // hoverable
                className="w-full"
                cover={<img alt="img" src={cf} className="h-80 object-cover" />}
              >
                <Meta
                  title={
                    <span className="font-bold text-2xl">Customers First</span>
                  }
                  description={
                    <span className="text-xl">
                      We are in business to make our customers happy and meet
                      their needs. Meeting the needs of our customers is an act
                      we value dearly.
                    </span>
                  }
                />
              </Card>
            </div>
            <div className="">
              <Card
                // hoverable
                className="w-full"
                cover={<img alt="img" src={cf} className="h-80 object-cover" />}
              >
                <Meta
                  title={
                    <span className="font-bold text-2xl">Customers First</span>
                  }
                  description={
                    <span className="text-xl">
                      We are in business to make our customers happy and meet
                      their needs. Meeting the needs of our customers is an act
                      we value dearly.
                    </span>
                  }
                />
              </Card>
            </div>
            <div className="">
              <Card
                // hoverable
                className="w-full"
                cover={<img alt="img" src={cf} className="h-80 object-cover" />}
              >
                <Meta
                  title={
                    <span className="font-bold text-2xl">Customers First</span>
                  }
                  description={
                    <span className="text-xl">
                      We are in business to make our customers happy and meet
                      their needs. Meeting the needs of our customers is an act
                      we value dearly.
                    </span>
                  }
                />
              </Card>
            </div>
            <div className="">
              <Card
                // hoverable
                className="w-full"
                cover={<img alt="img" src={cf} className="h-80 object-cover" />}
              >
                <Meta
                  title={
                    <span className="font-bold text-2xl">Customers First</span>
                  }
                  description={
                    <span className="text-xl">
                      We are in business to make our customers happy and meet
                      their needs. Meeting the needs of our customers is an act
                      we value dearly.
                    </span>
                  }
                />
              </Card>
            </div>
            <div className="">
              <Card
                // hoverable
                className="w-full"
                cover={<img alt="img" src={cf} className="h-80 object-cover" />}
              >
                <Meta
                  title={
                    <span className="font-bold text-2xl">Customers First</span>
                  }
                  description={
                    <span className="text-xl">
                      We are in business to make our customers happy and meet
                      their needs. Meeting the needs of our customers is an act
                      we value dearly.
                    </span>
                  }
                />
              </Card>
            </div>
          </div>

          <div className="mt-25 flex justify-center items-center flex-col">
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-4xl pb-10 text-center">
              Press
            </h1>
            <p className="text-center text-xl">
              Writing about Cowrywise? Get brand assets and product screenshots
              for use in
              <br /> web and print media
            </p>

            <Button className="!bg-[#0066F5] !px-12 !py-6 mt-10 !text-white !font-bold !text-xl !border-0">
              Get Press Kit
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-30">
            <div className="">
              <Card className="!p-0 custom-card">
                <div className="!p-5">
                  <Meta
                    title={
                      <span className="font-bold text-2xl">
                        Customers First
                      </span>
                    }
                    description={
                      <span className="text-xl">
                        We are in business to make our customers happy and meet
                        their needs. Meeting the needs of our customers is an
                        act we value dearly.
                      </span>
                    }
                  />
                </div>

                <img alt="img" src={cf} className="h-80 object-cover w-full" />
              </Card>
            </div>
            <div className="">
              <Card className="!p-0 custom-card">
                <div className="!p-5">
                  <Meta
                    title={
                      <span className="font-bold text-2xl">
                        Customers First
                      </span>
                    }
                    description={
                      <span className="text-xl">
                        We are in business to make our customers happy and meet
                        their needs. Meeting the needs of our customers is an
                        act we value dearly.
                      </span>
                    }
                  />
                </div>

                <img alt="img" src={cf} className="h-80 object-cover w-full" />
              </Card>
            </div>
            <div className="">
              <Card className="!p-0 custom-card">
                <div className="!p-5">
                  <Meta
                    title={
                      <span className="font-bold text-2xl">
                        Customers First
                      </span>
                    }
                    description={
                      <span className="text-xl">
                        We are in business to make our customers happy and meet
                        their needs. Meeting the needs of our customers is an
                        act we value dearly.
                      </span>
                    }
                  />
                </div>

                <img alt="img" src={cf} className="h-80 object-cover w-full" />
              </Card>
            </div>
            <div className="">
              <Card className="!p-0 custom-card">
                <div className="!p-5">
                  <Meta
                    title={
                      <span className="font-bold text-2xl">
                        Customers First
                      </span>
                    }
                    description={
                      <span className="text-xl">
                        We are in business to make our customers happy and meet
                        their needs. Meeting the needs of our customers is an
                        act we value dearly.
                      </span>
                    }
                  />
                </div>

                <img alt="img" src={cf} className="h-80 object-cover w-full" />
              </Card>
            </div>
            <div className="">
              <Card className="!p-0 custom-card">
                <div className="!p-5">
                  <Meta
                    title={
                      <span className="font-bold text-2xl">
                        Customers First
                      </span>
                    }
                    description={
                      <span className="text-xl">
                        We are in business to make our customers happy and meet
                        their needs. Meeting the needs of our customers is an
                        act we value dearly.
                      </span>
                    }
                  />
                </div>

                <img alt="img" src={cf} className="h-80 object-cover w-full" />
              </Card>
            </div>
            <div className="">
              <Card className="!p-0 custom-card">
                <div className="!p-5">
                  <Meta
                    title={
                      <span className="font-bold text-2xl">
                        Customers First
                      </span>
                    }
                    description={
                      <span className="text-xl">
                        We are in business to make our customers happy and meet
                        their needs. Meeting the needs of our customers is an
                        act we value dearly.
                      </span>
                    }
                  />
                </div>

                <img alt="img" src={cf} className="h-80 object-cover w-full" />
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto w-11/12 mt-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-100 rounded-lg py-10 px-7">
            <div className="flex justify-between items-center">
               <div className="flex items-center gap-1">
                 <h1 className="font-bold text-4xl">4.5<span className="text-lg text-gray-400">/5</span></h1>
                 <div className="flex">
                    <img src={star} alt="" className="w-4 mt-2"/>
                    <img src={star} alt="" className="w-4 mt-2"/>
                    <img src={star} alt="" className="w-4 mt-2"/>
                    <img src={star} alt="" className="w-4 mt-2"/>
                    <img src={star} alt="" className="w-4 mt-2"/>
                 </div>
               </div>
                <img src={googleplay} alt="" className="w-36"/>
            </div>
            
            <h1 className="font-semibold text-xl mt-1">Available on the Play Store</h1>
            <p className="mt-3 text-md text-gray-500">“I was able to achieve my one year goal of saving a particular amount of money every month.” - Lilian, May 2023</p>
          </div>
          <div className="border border-gray-100 rounded-lg py-10 px-7">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">

                <h1 className="font-bold text-4xl">4.5<span className="text-lg text-gray-400">/5</span></h1>
                 <div className="flex">
                    <img src={star} alt="" className="w-4 mt-2"/>
                    <img src={star} alt="" className="w-4 mt-2"/>
                    <img src={star} alt="" className="w-4 mt-2"/>
                    <img src={star} alt="" className="w-4 mt-2"/>
                    <img src={star} alt="" className="w-4 mt-2"/>
                 </div>
                </div>
                <img src={applestore} alt="" className="w-36"/>
            </div>
              <h1 className="font-semibold text-xl mt-1">Available on the App Store</h1>
            <p className="mt-3 text-md text-gray-500">“I love the option of being able to lock my money without being able to withdraw it until full term. This is the most important and amazing feature 😍” - Chidiebere, May 2023</p>
          </div>
        </div>
      </div>
      <div
        className="bg-[#0066F5] py-30 mt-20 m-auto w-11/12 px-30"
        style={{ borderRadius: "20px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-white font-bold text-3xl">
              Join over 1 million customers on Cowrywise today
            </h1>
          </div>
          <div>
            <div>
              <div className="bg-[#408CF8] flex p-3 rounded-sm">
                <Input
                  className="
                    !bg-[#408CF8] !border-0 !outline-0 placeholder:!text-[#C6DDFC] !text-[white]"
                  placeholder="Your email..."
                />
                <Button className="!font-semibold hover:!bg-[#082552] hover:!text-white !py-5 !border-0">
                  Sing UP For Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
