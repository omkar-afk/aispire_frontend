"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section id="pricing" className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <motion.div 
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto text-center"
          >
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Simple, Transparent Pricing`,
                description: `Choose the perfect plan for your business needs. No hidden fees, no surprises.`,
              }}
            />
          </motion.div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <motion.div 
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5"
            >
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Free{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /Forever
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Freemium
              </h4>
              <p>Forever</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <h5 className="mb-4">Features include:</h5>
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Knowledge Base:</span> Website Link (URL)/ Docs
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Customization:</span> Not Available (Powered by AIspire Labs)
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Response Speed:</span> 4-5 Seconds
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Concurrent Visitors:</span> &lt;5 Concurrent Visitors on platform
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Assistants:</span> 1
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Tokens Words:</span> &lt;300K Words
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Support:</span> Email (24-48 Hours)
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get Started button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get Started
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </motion.div>

            {/* <!-- Pricing Item --> */}
            <motion.div 
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5"
            >
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                Most Popular
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                ₹8,760{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /year
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Pro
              </h4>
              <p>12 months</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <h5 className="mb-4">Features include:</h5>
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Knowledge Base:</span> URLs, Docs, Text, Images, Videos
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Customization:</span> Yes (Brand Logo, Colour, Tone etc)
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Response Speed:</span> 2-3 Seconds
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Concurrent Visitors:</span> 100 Concurrent Visitors on platform
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Assistants:</span> 2
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Tokens Words:</span> 10M Words
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Support:</span> Phone/Email &lt;1Hour
                  </li>
                </ul>
              </div>

              <button
                aria-label="Contact Sales button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Contact Sales
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </motion.div>

            {/* <!-- Pricing Item --> */}
            <motion.div 
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5"
            >
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                ₹36,500{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /year
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Enterprise
              </h4>
              <p>12 months</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <h5 className="mb-4">Features include:</h5>
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Knowledge Base:</span> URLs, Docs, Text, Images, Videos, Code
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Customization:</span> Yes (Brand Logo, Colour, Tone etc)
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Response Speed:</span> 1-2 Seconds
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Concurrent Visitors:</span> Unlimited visitors
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Assistants:</span> 3
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Tokens Words:</span> 50M Words
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    <span className="font-medium">Support:</span> Dedicated CSM
                  </li>
                </ul>
              </div>

              <button
                aria-label="Contact Sales button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Contact Sales
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;