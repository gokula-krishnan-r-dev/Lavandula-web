import React from "react";

const Client = () => {
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
          <div className="grid grid-cols-3 gap-4 mx-auto lg:grid-cols-3">
            <div>
              <img
                className="h-4 mx-auto lg:h-16"
                src="/client/1.jpeg"
                alt="Figma"
              />
            </div>
            <div>
              <img
                className="h-4 mx-auto lg:h-12"
                src="/client/2.jpeg"
                alt="Framer"
              />
            </div>
            <div>
              <img
                className="h-4 mx-auto lg:h-12"
                src="/client/3.jpeg"
                alt="Sketch "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
