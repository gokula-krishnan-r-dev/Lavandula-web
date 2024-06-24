import Client from "@/components/client";
import Contact from "@/components/contact";
import FeaturesSection from "@/components/feature";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen duration-500 bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900">
      <section
        id="home"
        className="h-screen bg-banner  flex items-center justify-center"
      >
        {/* Hero */}
        {/* <img
          className="absolute inset-0 object-cover w-full h-full z-0"
          src="https://images.unsplash.com/photo-1574192324001-ee41e18ed679?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        /> */}

        <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 dark:before:bg-[url('/imgs/1.jpg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            {/* Announcement Banner */}
            <div className="flex justify-center">
              {/* <a
                className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-400"
                href="#"
              >
                Explore the Capital Product
                <span className="flex items-center gap-x-1">
                  <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700">
                    Explore
                  </span>
                  <svg
                    className="flex-shrink-0 size-4 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </a> */}
            </div>
            {/* End Announcement Banner */}
            {/* Title */}
            <div className="mt-5 max-w-xl text-center mx-auto">
              <h1 className="block font-bold text-white text-4xl md:text-5xl lg:text-7xl dark:text-neutral-200">
                LAVANDULA TECHNOLOGIES
              </h1>
            </div>
            {/* End Title */}
            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className="text-xl text-gray-100 dark:text-neutral-400">
                Innovative IT Solutions for your Business in this Digital World
              </p>
            </div>
            {/* Buttons */}
            <div className="mt-8 gap-3 flex justify-center">
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl bg-blue-500  border border-transparent text-white text-sm font-medium rounded-full py-3 px-4 dark:focus:ring-offset-gray-800"
                href="#service"
              >
                <ChevronRight />
                Real More
              </a>
            </div>
            {/* End Buttons */}
          </div>
        </div>
        {/* End Hero */}
      </section>
      <Client />
      <section id="solution">
        {/* Features */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            <div>
              <img
                className="rounded-xl"
                src="/imgs/2.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Col */}
            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                {/* Title */}
                <p className="text-base font-semibold text-green-600">
                  INNOVATIVE IT SOLUTIONS
                </p>
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                    Empowering businesses with Cutting-Edge technology
                  </h2>
                  <p className="text-gray-500 dark:text-neutral-500">
                    Lavandula Technologies, based in Namakkal, specializes in
                    providing top-notch IT solutions including website and web
                    application development, mobile app development for Android
                    and iOS, digital marketing, UI and UX design, and
                    infrastructure security.
                  </p>
                </div>
                {/* End Title */}
                {/* List */}
                <ul className="space-y-2 sm:space-y-4">
                  <li className="flex space-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      <span className="font-bold">Easy &amp; fast</span>{" "}
                      designing
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      Powerful <span className="font-bold">features</span>
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      User Experience Design
                    </span>
                  </li>
                </ul>
                {/* End List */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
      </section>

      <section id="service" className="relative py-32">
        {/* <div
          aria-hidden="true"
          className="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30"
        >
          <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700" />
          <div className="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600" />
        </div> */}
        <div className="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <p className="text-base text-center font-semibold text-green-600">
            OUR CUSTOMERS
          </p>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
              Tailored Solutions for your Business
            </h2>
            <p className="mt-6 text-gray-700 dark:text-gray-300">
              When it comes to your business, one-size-fits-all solutions simply
              won&#39;t do. Your organization is unique, with its own distinct
              challenges, goals, and needs. That&#39;s why you require tailored
              solutions that are specifically designed to address your specific
              requirements. By working closely with you to understand the
              intricacies of your business, we can craft innovative strategies
              and implement customized tools that will propel your company
              forward. <br /> <br /> Our team of experts takes the time to
              deeply analyze your operations, identify areas for improvement,
              and develop a comprehensive plan of action. Whether it&#39;s
              streamlining your workflows, optimizing your technology
              infrastructure, or enhancing your customer experience, we have the
              expertise to deliver solutions that align perfectly with your
              business objectives.
            </p>
          </div>
          <FeaturesSection />
        </div>
      </section>
      {/* <Test /> */}

      <Contact />
    </main>
  );
}
