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

     
    </>
  );
};

export default Blog;
