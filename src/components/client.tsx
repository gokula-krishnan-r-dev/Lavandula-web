import React from "react";

const Client = () => {
  const clients = [
    "Zalon Partner",
    "Shira Enterprises",
    "Mialyn",
    "MV Groups",
    "LabourMAX",
  ];

  return (
    <section id="customer">
      <div className=" px-5 py-24 mx-auto lg:px-16">
        <div className="flex flex-col w-full mb-8 text-center">
          <span className="mb-4 text-sm font-medium tracking-wide text-gray-500 uppercase">
            The best front end teams use Wickedtemplates to state their
            presence.
            <a
              href="https://www.wickedtemplates.com/expo.html"
              className="font-semibold text-blue-600 lg:mb-0 hover:text-blue-500"
            >
              Our customers »
            </a>
          </span>
        </div>
        <div className="mx-auto text-center">
          <div className="grid grid-cols-5 gap-4 mx-auto lg:grid-cols-5">
            {clients.map((client, index) => (
              <div key={index}>
                <h1 className="font-bold text-2xl lg:text-2xl text-gray-500">
                  {client}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
