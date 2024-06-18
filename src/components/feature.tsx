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
      "https://img.freepik.com/free-photo/programming-background-collage_23-2149901791.jpg?t=st=1718727134~exp=1718730734~hmac=3c20692774f9ef6619111e81f8ee251dd476a20e65275a16a6fa19cb41e87de7&w=2000",
    alt: "Website Development Image",
    brifDescription: (
      <span>
        In today&#39;s rapidly evolving digital landscape, businesses that
        embrace the latest technology in website development are poised to gain
        a significant competitive edge. A tailored website, crafted with the
        most innovative tools and techniques, can serve as a powerful platform
        to showcase your brand, engage your target audience, and drive tangible
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
      "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?t=st=1718727190~exp=1718730790~hmac=afe6baa0b0175cf4021e72842eadc7f0e24caec9124a84944f9025b59137753f&w=2000",
    alt: "Web App Development Image",
    brifDescription: (
      <span>
        Leveraging the power of cutting-edge web app development, businesses can
        unlock unprecedented levels of productivity and revenue growth. By
        embracing the latest technological advancements, companies can create
        tailored solutions that streamline operations, enhance collaboration,
        and drive strategic decision-making. At the core of this transformation
        lies the ability to develop custom web applications that cater precisely
        to the unique needs of your business. These applications can automate
        time-consuming tasks, facilitate seamless information sharing, and
        provide real-time insights that empower your team to make informed
        choices. By streamlining workflows and eliminating manual processes, web
        app development can significantly boost employee efficiency, freeing up
        valuable time and resources to focus on high-impact initiatives.
        Moreover, web apps designed with a customer-centric approach can elevate
        the user experience, fostering stronger brand loyalty and driving
        increased revenue. Intuitive interfaces, personalized features, and
        seamless cross-device compatibility can attract and retain a loyal
        customer base, ultimately translating to a healthier bottom line.
        Investing in web app development also positions your business for
        long-term success by ensuring adaptability to evolving market demands
        and technological trends. With the ability to continuously update and
        enhance your web applications, you can stay ahead of the curve,
        outpacing your competitors and solidifying your position as an industry
        leader. By embracing the power of web app development, businesses can
        unlock a transformative pathway to enhanced productivity, increased
        revenue, and a competitive edge that will propel them towards sustained
        growth and profitability.
      </span>
    ),
  },
  {
    title: "Mobile App Development",
    description:
      "Our team of expert web developers will work with you to create a stunning, user-friendly website that showcases your brand and drives conversions. From custom design to responsive development, we have you covered.",
    imageSrc:
      "https://cdn.b12.io/client_media/ELma8729/bf95f92c-20be-11ef-a1ee-0242ac110002-jpg-regular_image.jpeg",
    alt: "Mobile App Development Image",
    brifDescription: (
      <p>
        Developing a tailored mobile app htmlFor your business is a strategic
        move that can significantly enhance your reach and engagement with your
        target audience. By leveraging the latest technology in both Android and
        iOS platforms, you can create a seamless and user-friendly experience
        that sets your business apart in the competitive market.
        <br />
        <br />
        With the increasing reliance on mobile devices for everyday tasks, a
        well-designed and feature-rich mobile app can become a powerful tool to
        showcase your products or services, facilitate seamless transactions,
        and foster stronger connections with your customers. By investing in a
        tailored mobile app, you can ensure that your business is positioned at
        the forefront of the digital landscape, providing your customers with a
        convenient and accessible way to interact with your brand.
        <br />
        <br />
        The integration of the latest technology, such as cutting-edge user
        interface (UI) design, intuitive navigation, and secure payment
        gateways, can elevate the overall user experience and drive higher
        levels of customer satisfaction. Moreover, the ability to collect
        valuable data and insights through your mobile app can help you make
        informed decisions, optimize your marketing strategies, and continually
        improve the app&#39;s functionality to better meet the evolving needs of
        your customers.
        <br />
        <br />
        Ultimately, a tailored mobile app developed for both Android and iOS
        platforms can serve as a powerful tool to enhance your business&#39;s
        competitiveness, increase customer loyalty, and drive sustainable growth
        in the digital age. By partnering with experienced mobile app
        development experts, you can bring your vision to life and unlock a
        world of opportunities for your business.
      </p>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "Our team of expert web developers will work with you to create a stunning, user-friendly website that showcases your brand and drives conversions. From custom design to responsive development, we have you covered.",
    imageSrc:
      "https://img.freepik.com/free-photo/marketing-strategy-business-commerce-solution-concept_53876-98143.jpg?t=st=1718727233~exp=1718730833~hmac=36ed91d1edb699f42b3c6d7c19fb48d08e306edae5919e305b9dab49c33fb7e4&w=2000",
    alt: "Digital Marketing Image",
    brifDescription: (
      <p>
        Businesses looking to stay ahead in the digital landscape can no longer
        afford to overlook the power of tailored digital marketing. By
        leveraging the latest technology, companies can craft highly
        personalized campaigns that resonate with their target audience on a
        deeper level. <br />
        <br />
        Implementing advanced data analytics and AI-driven tools, businesses can
        gain unprecedented insights into their customers&#39; behaviors,
        preferences, and pain points. This wealth of information allows them to
        develop targeted marketing strategies that speak directly to the needs
        and desires of each individual consumer. From personalized product
        recommendations to customized email campaigns, the possibilities are
        endless when it comes to delivering a truly unique and engaging digital
        experience.
        <br />
        <br />
        Moreover, the integration of cutting-edge technologies, such as machine
        learning and predictive analytics, empowers businesses to anticipate
        their customers&#39; future actions and proactively address their
        evolving requirements. This level of responsiveness and adaptability is
        crucial in today&#39;s fast-paced digital world, where consumer
        expectations are constantly shifting.
        <br />
        <br />
        By embracing the latest advancements in digital marketing technology,
        businesses can not only capture the attention of their audience but also
        foster stronger, more meaningful relationships. This, in turn,
        translates into increased brand loyalty, higher conversion rates, and
        ultimately, a significant competitive edge in the market. The time to
        invest in tailored digital marketing is now, as those who fail to adapt
        risk being left behind in the ever-evolving digital landscape.
      </p>
    ),
  },
  {
    title: "Infrastructure Security ",
    description:
      "Our team of expert web developers will work with you to create a stunning, user-friendly website that showcases your brand and drives conversions. From custom design to responsive development, we have you covered.",
    imageSrc:
      "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595831.jpg?t=st=1718727292~exp=1718730892~hmac=34c02c561d774bcff0dee0ead3a0062e93f7c5e05f42c96fb852b791c2aaf075&w=2000",
    alt: "Infrastructure Security Image",
    brifDescription: (
      <p>
        Businesses today face an ever-evolving landscape of cyber threats,
        making robust infrastructure security a critical necessity. Leveraging
        the latest technology advancements is the key to safeguarding your
        organization&#39;s sensitive data and mission-critical systems. By
        implementing cutting-edge security solutions, you can establish a
        formidable defense against malicious actors and ensure the integrity of
        your digital assets.
        <br />
        <br />
        Advanced threat detection and response systems powered by artificial
        intelligence and machine learning can proactively identify and mitigate
        cyber threats in real-time, providing an early warning system to protect
        your infrastructure. Secure cloud-based storage and collaboration
        platforms ensure your data is stored safely and accessible only to
        authorized personnel, while encrypted communication channels safeguard
        your business transactions and sensitive information.
        <br />
        <br />
        Automated vulnerability scanning and patch management tools enable you
        to stay ahead of evolving security risks, quickly addressing weaknesses
        and deploying the latest security updates across your infrastructure.
        Comprehensive identity and access management solutions, coupled with
        multi-factor authentication, reinforce your perimeter defenses and
        control who can access your critical systems.
        <br />
        <br />
        By investing in the latest infrastructure security technologies, you can
        transform your organization into a resilient, cyber-resistant fortress,
        able to withstand even the most sophisticated attacks. This strategic
        approach not only safeguards your business but also instills confidence
        in your customers, partners, and stakeholders, positioning your company
        as a trusted leader in the digital landscape.
      </p>
    ),
  },
  {
    title: "Business Consulting ",
    description:
      "Our team of expert web developers will work with you to create a stunning, user-friendly website that showcases your brand and drives conversions. From custom design to responsive development, we have you covered.",
    imageSrc:
      "https://img.freepik.com/free-photo/three-businesspersons-meeting_23-2147626534.jpg?t=st=1718727309~exp=1718730909~hmac=07413f15fbd9713ad73b49abc1d72c0c73322bdcf487a1aa641f82a7f00f51f7&w=2000",
    alt: "Business Consulting Image",
    brifDescription: (
      <p>
        Businesses today face an ever-evolving landscape of challenges and
        opportunities. In this dynamic environment, the value of professional
        business consulting cannot be overstated. Experienced consultants
        possess the expertise and industry insights to help organizations
        navigate complex issues, identify growth strategies, and unlock their
        full potential.
        <br />
        <br />
        By partnering with a reputable business consulting firm, companies can
        gain a fresh perspective and access to a wealth of knowledge that may be
        difficult to cultivate in-house. Consultants bring a deep understanding
        of market trends, industry best practices, and proven methodologies that
        can be tailored to the unique needs of each client.
        <br />
        <br />
        Through a collaborative approach, consultants work closely with business
        leaders to assess the current state of the organization, diagnose
        underlying challenges, and develop comprehensive solutions. Whether
        it&#39;s optimizing operational efficiency, enhancing financial
        performance, or driving digital transformation, the guidance of seasoned
        consultants can be instrumental in propelling a business forward.
        <br />
        <br />
        Moreover, business consultants offer an objective, unbiased view that
        can challenge existing assumptions and inspire innovative thinking. By
        bringing an outside-in perspective, they can help organizations identify
        blind spots, mitigate risks, and capitalize on emerging possibilities.
        <br />
        <br />
        Investing in business consulting services is not merely an expense, but
        a strategic investment in the long-term success and resilience of an
        organization. With their specialized expertise and proven track record,
        consultants can help businesses navigate the complexities of today&#39;s
        competitive landscape and position themselves for sustained growth and
        profitability.
      </p>
    ),
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
              className="h-44 w-full object-cover rounded-3xl"
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
                  <ScrollArea className="h-96 mt-5">
                    <div className="pb-3">
                      <img
                        src={feature.imageSrc}
                        className="h-72 object-cover w-full rounded-3xl"
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
