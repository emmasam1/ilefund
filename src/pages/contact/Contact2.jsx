import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// const faqs = [
//   {
//     q: "Is the island private and secure?",
//     a: "Yes, the island is fully private with controlled access and 24/7 security."
//   },
//   {
//     q: "How do guests arrive?",
//     a: "Guests arrive via a private boat transfer arranged by the resort."
//   },
//   {
//     q: "Are custom experiences available?",
//     a: "Yes, all experiences can be personalized based on guest preferences."
//   },
//   {
//     q: "Is the resort family-friendly?",
//     a: "Absolutely. There are curated activities for both adults and children."
//   },
//   {
//     q: "Are wellness and spa treatments available?",
//     a: "Yes, luxury spa services and wellness programs are offered daily."
//   }
// ];

const Faq2 = () => {
  // const [active, setActive] = useState(null);

  return (
   <section className="w-full bg-white text-gray-900">

  {/* ================= HERO ================= */}
  <div className="w-full bg-white">
    <div
      className="
        relative
        w-full
        max-w-[75rem] mx-auto
        grid
        lg:grid-cols-2
        gap-[3rem]
        px-[5%] lg:px-[2rem]
        py-[5rem] lg:py-[6rem]
        
        min-h-[30rem] sm:min-h-[31.25rem] md:min-h-[37.5rem] lg:min-h-[47.5rem]
      "
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0  z-0 rounded-[1rem]" />

      {/* LEFT CONTENT */}
      <div className="relative z-10 text-dark flex flex-col justify-center">
        <img src="https://res.cloudinary.com/da1mxvbx2/image/upload/v1768477709/ilefund/cuate_dkwhji.svg" alt="ileFund-contact" className=''/>
       
      </div>

      {/* RIGHT FORM */}
      <motion.div
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          relative z-10
          bg-white
          rounded-[1rem]
          shadow-2xl
          p-[1.5rem] sm:p-[2rem]
          max-w-[28rem] w-full
          h-[28rem] sm:h-[28rem] md:h-[28rem] lg:h-[30rem]
          flex flex-col justify-between
        "
      >
         <h3 className="font-bold text-[1.5rem] sm:text-[1.25rem] text-gray-900 ">
          You Have Questions,
          We Have Answers
        </h3>
        <p className=" text-dark-200 text-[1rem] sm:text-[1.125rem] max-w-[28rem] mb-[0.5rem]">
          Everything you need to know in the real estate sector in Nigeria.
        </p>
       

        <form className="flex flex-col gap-[0.75rem]">
          <input
            className="border rounded-md px-[1rem] py-[0.75rem] text-[1rem]"
            placeholder="Full Name"
          />
          <input
            className="border rounded-md px-[1rem] py-[0.75rem] text-[1rem]"
            placeholder="Email Address"
          />
          <textarea
            className="border rounded-md px-[1rem] py-[0.75rem] text-[1rem]"
            rows={4}
            placeholder="Message"
          />
          <button
            className="
              bg-[#0047FF] text-white py-[0.75rem] mt-[0.75rem] rounded-md
              hover:bg-gray-800 transition
              text-[1rem] font-medium
            "
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  </div>
</section>

  )
}

export default Faq2
