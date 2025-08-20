import React from "react";

const Details = () => {
  const infor = [
    {
      id: 1,
      title: "price",
      amount: "N1,300,000",
    },
    {
      id: 2,
      title: "Square meter",
      amount: "500",
    },
    {
      id: 3,
      title: "Min Initial Deposit",
      amount: "N300,000",
    },
    {
      id: 4,
      title: "Duration",
      amount: "6 months",
    },
    {
      id: 5,
      title: "Title Document",
      amount: "C Of O/R Of O",
    },
    {
      id: 6,
      title: "FCDA Approval",
      amount: "Approved/Pending",
    },
  ];

  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {infor.map((item) => {
          return (
            <div class="bg-[#D9D9D9] py-10 p-6 rounded-lg" key={item.id}>
              <p className="text-gray-500">{item.title}</p>
              <h1 className="!text-black font-semibold text-2xl">
                {item.amount}
              </h1>
            </div>
          );
        })}
      </div>

      <h1 className="font-bold text-2xl mt-8">Get To Know More!!!</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            class="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="aspect-w-16 aspect-h-9">
          <iframe
            class="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/ysz5S6PUM-U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="aspect-w-16 aspect-h-9">
          <iframe
            class="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/jNQXAC9IVRw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Details;
