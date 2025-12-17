import React from "react";
import safe from "../../assets/safe.png";
import step from "../../assets/step.png";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import icon4 from "./../../../public/images/ilefund-land-nigeria-icon-4.png";
import star from "../../assets/star.png";
import blueline from "../../assets/blueline.png";
import { Button, Divider } from "antd";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HowToSave = () => {
  const data = [
    { feature: "Property Access Threshold", ilefund: true, traditional: false },
    { feature: "Verified Developers", ilefund: true, traditional: false },
    { feature: "Automated Saving", ilefund: true, traditional: false },
    { feature: "Real Estate Focused", ilefund: true, traditional: false },
    { feature: "Diaspora Ready", ilefund: true, traditional: false },
    { feature: "KYC-Tier Benefits", ilefund: true, traditional: false },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="px-4 sm:px-8 lg:px-16 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          {/* ✅ Image Section */}
          <div className="w-full h-64 sm:h-80 lg:h-[500px] bg-[url('/src/assets/hos_img_1.png')] bg-no-repeat bg-contain bg-center rounded-md"></div>

          {/* ✅ Text Section */}
          <div>
            <h1 className="text-[#0047ff] font-bold text-lg sm:text-xl lg:text-2xl">
              Building your future, one smart step at a time
            </h1>

            <h1 className="mt-3 font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-snug">
              Your Dream Home Is
              <br /> Within Reach
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-700 leading-relaxed">
              Saving for a home shouldn’t feel impossible. At ILEFUND, we’ve
              made it simple, secure, and flexible — no matter where you live or
              what your income level is.
            </p>

            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              Whether you want to buy land, build, or own your dream home, we
              help you get there with structured saving plans built specifically
              for Nigerians at home and in the diaspora.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center p-5">
          {/* ✅ Image Section */}
          <div className="flex justify-center">
            <img src={safe} alt="Safe" className="object-contain w-80" />
          </div>

          {/* ✅ Text Section */}
          <div>
            <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-snug">
              Safe & Transparent
            </h1>

            <ul className="list-disc ml-10 mt-4 space-y-3 ">
              <li>
                Funds are held securely in wallets <br /> until disbursement.
              </li>
              <li>
                Funds are held securely in wallets <br /> until disbursement.
              </li>
              <li>
                Every step is documented, verified, <br /> and traceable.
              </li>
            </ul>
          </div>
        </div>

        <section className="mt-25">
          <h1 className="font-bold text-center text-3xl mb-10">
             What Makes ILEFUND Different?
          </h1>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm sm:text-base">
              {/* ✅ Table Head */}
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Feature
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    ILEFUND
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Traditional Saving Groups
                  </th>
                </tr>
              </thead>

              {/* ✅ Table Body */}
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      {row.feature}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      {row.ilefund ? (
                        <span className="flex items-center justify-center gap-1 text-green-600 font-medium">
                          <CheckCircleOutlined /> Yes
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-1 text-red-600 font-medium">
                          <CloseCircleOutlined /> No
                        </span>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      {row.traditional ? (
                        <span className="flex items-center justify-center gap-1 text-green-600 font-medium">
                          <CheckCircleOutlined /> Yes
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-1 text-red-600 font-medium">
                          <CloseCircleOutlined /> No
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center p-10">
          {/* ✅ Text Section */}
          <div>
            <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-snug text-[#0047ff]">
              Want to know how <br /> long it'll take?
            </h1>

            <ul className="list-disc ml-10 mt-4 space-y-3 ">
              <li>Set a savings goal (₦1,000,000)</li>
              <li>Choose how much you can save monthly</li>
              <li>Get an estimated completion date</li>
              <li>Adjust and plan better</li>
            </ul>
          </div>

          {/* ✅ Image Section */}
          <div className="flex justify-center">
            <img src={step} alt="Safe" className="object-contain" />
          </div>
        </div>

        <div className="mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section
              className="h-[500px] sm:h-[500px] md:h-[600px] w-full 
  bg-[url('/public/images/ilefund-land-nigeria-icon-5.png')] 
  bg-contain bg-center bg-no-repeat
  flex items-center justify-center text-center px-4"
            >
              <div>
                <h2 className=" text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Get Started Today
                </h2>

                <p className=" max-w-xl mx-auto text-sm sm:text-base md:text-lg">
                  It takes less than 5 minutes to open an account.
                </p>
              </div>
            </section>

            <div className="">
              <h1 className="font-bold text-3xl">
                Your journey to homeownership starts here.
              </h1>
              <div className="mt-9">
                <div className="flex items-center gap-4">
                  <img src={icon4} alt="" srcset="" className="w-5" />
                  <p className="text-lg font-semibold">No hidden fees</p>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <img src={icon4} alt="" srcset="" className="w-5" />
                  <p className="text-lg font-semibold">Transparent process</p>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <img src={icon4} alt="" srcset="" className="w-5" />
                  <p className="text-lg font-semibold">
                    Property options unlocked as you save
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <img src={icon4} alt="" srcset="" className="w-5" />
                  <p className="text-lg font-semibold">
                    Property options unlocked as you save
                  </p>
                </div>
              </div>
            </div>
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
export default HowToSave;
