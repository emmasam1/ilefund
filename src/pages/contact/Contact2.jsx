import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
     <div className="relative w-full bg-[url('/src/assets/house.jpg')] px-10 lg:px-20 py-20 grid lg:grid-cols-2 gap-12 
  bg-no-repeat bg-cover bg-center h-[760px] sm:h-[500px] md:h-[600px]">

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60 z-0" />

  {/* LEFT CONTENT */}
  <div className="relative z-10 text-white">
    <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
      You Have Questions,<br />We Have Answers
    </h1>
    <p className="mt-4 text-gray-200 max-w-md">
      Everything you need to know before booking your exclusive escape.
    </p>
  </div>

  {/* RIGHT FORM */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative z-10 bg-white rounded-xl shadow-2xl p-6 
      h-[370px] sm:h-[200px] md:h-[380px]"
  >
    <h3 className="font-semibold text-lg mb-4 text-gray-900">
      Tell Us What You Need
    </h3>

    <form className="flex flex-col gap-3">
      <input className="border rounded-md px-4 py-2" placeholder="Full Name" />
      <input className="border rounded-md px-4 py-2" placeholder="Email Address" />
      <textarea className="border rounded-md px-4 py-2" rows="4" placeholder="Message" />
      <button className="bg-black text-white py-2 rounded-md mt-2 hover:bg-gray-800 transition">
        Submit
      </button>
    </form>
  </motion.div>

</div>


      {/* ================= MAP ================= */}
      {/* <div className="w-full px-6 lg:px-20 py-16 bg-gray-200">
        <div className="h-[300px] w-full bg-gray-400 flex items-center justify-center font-medium">
          Map Section
        </div>
      </div> */}

      {/* ================= FAQ SECTION ================= */}
      {/* <div className="w-full px-6 lg:px-20 py-24 grid lg:grid-cols-2 gap-16">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-fit lg:sticky top-32"
        >
          <h2 className="text-4xl font-semibold leading-tight">
            Frequently Asked<br />Questions
          </h2>
          <p className="mt-4 text-gray-600 max-w-sm">
            Clear answers. No confusion. No friction.
          </p>
        </motion.div>

      
        <div className="flex flex-col gap-6">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-b pb-6 cursor-pointer"
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-medium text-lg">{item.q}</h4>
              </div>

              <AnimatePresence>
                {active === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="mt-4 text-gray-600 overflow-hidden"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* ================= LAST BANNER ================= */}
     {/* <div
  className="relative w-full bg-[url('/src/assets/house.jpg')] 
  bg-no-repeat bg-cover bg-center 
  h-[760px] sm:h-[500px] md:h-[600px]
  flex items-center justify-center text-center px-6"
>

  <div className="absolute inset-0 bg-black/60 z-0" />

  <div className="relative z-10 max-w-xl">
    <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-white">
      Your Escape Awaits
    </h2>

    <p className="mt-3 text-gray-200">
      Book your experience right now.
    </p>

    <button
      className="mt-6 bg-white text-black px-8 py-3 rounded-md 
      hover:bg-gray-200 transition"
    >
      Book Now
    </button>
  </div>

</div> */}


    </section>
  );
};

export default Faq2;
