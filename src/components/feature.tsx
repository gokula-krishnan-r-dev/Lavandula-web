import React from "react";
import { DrawerDemo } from "./Drawer";
import { ScrollArea } from "./ui/scroll-area";

interface Feature {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  brifDescription?: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Website Development",
    description:
      "Our team of expert web developers will work with you to create a stunning, user-friendly website that showcases your brand and drives conversions. From custom design to responsive development, we have you covered.",
    imageSrc:
      "https://cdn.b12.io/client_media/ELma8729/bf95f92c-20be-11ef-a1ee-0242ac110002-jpg-regular_image.jpeg",
    alt: "Website Development Image",

    brifDescription: (
      <span>
        In today's rapidly evolving digital landscape, businesses that embrace
        the latest technology in website development are poised to gain a
        significant competitive edge. A tailored website, crafted with the most
        innovative tools and techniques, can serve as a powerful platform to
        showcase your brand, engage your target audience, and drive tangible
        results for your business. <br /> <br /> By leveraging the latest
        advancements in web development, you can create a website that is not
        only visually stunning but also highly functional and user-friendly.
        From responsive design that seamlessly adapts to various devices, to
        cutting-edge features that enhance the user experience, a
        technologically-advanced website can help you stand out in a crowded
        market. Moreover, the integration of emerging technologies, such as
        artificial intelligence, machine learning, and data analytics, can
        empower your website to anticipate and cater to the evolving needs of
        your customers. <br /> <br /> This level of personalization and
        optimization can lead to increased conversions, higher customer
        satisfaction, and ultimately, greater business success. <br /> <br />{" "}
        Investing in a tailored website that harnesses the power of the latest
        technology is a strategic move that can pay dividends for your
        organization. By demonstrating your commitment to innovation and
        delivering a superior online experience, you can build trust, foster
        loyalty, and position your business as a leader in your industry.
      </span>
    ),
  },
  {
    title: "Web App Development ",
    description:
      "Our team of expert web developers will work with you to create a stunning, user-friendly website that showcases your brand and drives conversions. From custom design to responsive development, we have you covered.",
    imageSrc:
      "https://cdn.b12.io/client_media/ELma8729/bf95f92c-20be-11ef-a1ee-0242ac110002-jpg-regular_image.jpeg",
    alt: "Web App Development Image",
  },
  {
    title: "Mobile App Development",
    description:
      "Our team of expert web developers will work with you to create a stunning, user-friendly website that showcases your brand and drives conversions. From custom design to responsive development, we have you covered.",
    imageSrc:
      "https://cdn.b12.io/client_media/ELma8729/bf95f92c-20be-11ef-a1ee-0242ac110002-jpg-regular_image.jpeg",
    alt: "Mobile App Development Image",
  },
  {
    title: "Digital Marketing",
    description:
      "Our team of expert web developers will work with you to create a stunning, user-friendly website that showcases your brand and drives conversions. From custom design to responsive development, we have you covered.",
    imageSrc:
      "https://cdn.b12.io/client_media/ELma8729/bf95f92c-20be-11ef-a1ee-0242ac110002-jpg-regular_image.jpeg",
    alt: "Digital Marketing Image",
  },
  {
    title: "Infrastructure Security ",
    description:
      "Our team of expert web developers will work with you to create a stunning, user-friendly website that showcases your brand and drives conversions. From custom design to responsive development, we have you covered.",
    imageSrc:
      "https://cdn.b12.io/client_media/ELma8729/bf95f92c-20be-11ef-a1ee-0242ac110002-jpg-regular_image.jpeg",
    alt: "Infrastructure Security Image",
  },
  {
    title: "Business Consulting ",
    description:
      "Our team of expert web developers will work with you to create a stunning, user-friendly website that showcases your brand and drives conversions. From custom design to responsive development, we have you covered.",
    imageSrc:
      "https://cdn.b12.io/client_media/ELma8729/bf95f92c-20be-11ef-a1ee-0242ac110002-jpg-regular_image.jpeg",
    alt: "Business Consulting Image",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className="rounded-3xl border border-gray-100 bg-white p-8 py-6 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-3"
        >
          <div className="space-y-12 text-center">
            <img
              src={feature.imageSrc}
              className="h-44 w-full rounded-3xl"
              width={712}
              height={712}
              alt={feature.alt}
            />
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
              <DrawerDemo
                description={feature.brifDescription}
                title={feature.title}
                button={
                  <a
                    aria-label="read more"
                    className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                }
              >
                <div className="">
                  <ScrollArea className="max-h-96 mt-5">
                    <div className="">
                      <img
                        src={feature.imageSrc}
                        className="h-44 object-cover w-full rounded-3xl"
                        width={712}
                        height={712}
                        alt={feature.alt}
                      />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.brifDescription}
                    </p>
                  </ScrollArea>
                </div>
              </DrawerDemo>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
