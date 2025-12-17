import { Card, Button, Divider } from "antd";
const { Meta } = Card;
import blogImg2 from "../../assets/blog_img_2.png";
import blogImg3 from "../../assets/blog_img_3.png";
import blogImg4 from "../../assets/blog_img_4.png";
import star from "../../assets/star.png";
import blueline from "../../assets/blueline.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LiaLongArrowAltRightSolid } from "react-icons/lia";

import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Agency",
      image: blogImg2,
      title: "Build up healthy habits and strong peaceful life.",
      description: "Lorem Ipsum. Neque porro quisquam est qui dolorem...",
      date: "30th August 2021",
      views: 25,
    },
    {
      id: 2,
      category: "Luxurious",
      image: blogImg3,
      title: "Build up healthy habits and strong peaceful life.",
      description: "Lorem Ipsum. Neque porro quisquam est qui dolorem...",
      date: "30th August 2021",
      views: 58,
    },
    {
      id: 3,
      category: "Business",
      image: blogImg4,
      title: "Build up healthy habits and strong peaceful life.",
      description: "Lorem Ipsum. Neque porro quisquam est qui dolorem...",
      date: "30th August 2021",
      views: 75,
    },
    {
      id: 4,
      category: "Agency",
      image: blogImg2,
      title: "Build up healthy habits and strong peaceful life.",
      description: "Lorem Ipsum. Neque porro quisquam est qui dolorem...",
      date: "30th August 2021",
      views: 40,
    },
    {
      id: 5,
      category: "Luxurious",
      image: blogImg4,
      title: "Build up healthy habits and strong peaceful life.",
      description: "Lorem Ipsum. Neque porro quisquam est qui dolorem...",
      date: "30th August 2021",
      views: 61,
    },
    {
      id: 6,
      category: "Business",
      image: blogImg3,
      title: "Build up healthy habits and strong peaceful life.",
      description: "Lorem Ipsum. Neque porro quisquam est qui dolorem...",
      date: "30th August 2021",
      views: 84,
    },
    {
      id: 7,
      category: "Agency",
      image: blogImg2,
      title: "Build up healthy habits and strong peaceful life.",
      description: "Lorem Ipsum. Neque porro quisquam est qui dolorem...",
      date: "30th August 2021",
      views: 33,
    },
    {
      id: 8,
      category: "Luxurious",
      image: blogImg4,
      title: "Build up healthy habits and strong peaceful life.",
      description: "Lorem Ipsum. Neque porro quisquam est qui dolorem...",
      date: "30th August 2021",
      views: 69,
    },
    {
      id: 9,
      category: "Business",
      image: blogImg3,
      title: "Build up healthy habits and strong peaceful life.",
      description: "Lorem Ipsum. Neque porro quisquam est qui dolorem...",
      date: "30th August 2021",
      views: 91,
    },
  ];

  return (
    <>
      <div className="p-6">
        <div className="rounded-md h-96 bg-[url('/src/assets/blog_img_1.png')] bg-cover bg-center relative overflow-hidden">
          <div className="absolute bg-[#00000082] w-full h-full flex justify-center items-center">
            <h1 className="text-white font-bold text-3xl">LATEST BLOG</h1>
          </div>
        </div>
        <div className="rounded-md bg-[#EAEAEA] mt-10 max-w-6xl mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {blogPosts.map((post) => {
              return (
                <Card
                  key={post.id}
                  hoverable
                  cover={
                    <div className="relative">
                      <img
                        alt={post.title}
                        src={post.image}
                        className="h-48 w-full object-cover rounded-t-md"
                      />
                      <span className="absolute top-2 right-2 bg-white px-2 py-1 text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  }
                >
                  <div className="p-3">
                    <h1 className="font-bold text-lg">{post.title}</h1>

                    <p className="mt-4">{post.description}</p>

                    <div className="flex justify-between items-center mt-3">
                      <strong>{post.date}</strong>
                      <div className="flex items-center gap-2">
                        <CiHeart size={25} className="cursor-pointer" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </div>
                  {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
                </Card>
              );
            })}
          </div>
        </div>
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
    </>
  );
};

export default Blog;
