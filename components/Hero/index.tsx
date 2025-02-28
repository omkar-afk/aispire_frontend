"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12 xl:gap-24">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
            <h4 className="mb-4 text-lg font-medium text-black dark:text-white">
              🔥 SARA - A Smart AI Assistant
            </h4>
            <h1 className="mb-5 pr-8 text-3xl font-bold text-black dark:text-white xl:text-hero">
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                Assistant
              </span>{" "}
              for your Business
            </h1>
            <p className="text-base text-gray-700 dark:text-gray-300">
              We excite, engage, and elevate your customer experience on your platform. Nothing less, nothing more.
            </p>

            <div className="mt-8">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap gap-4">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full max-w-sm rounded-full border border-stroke px-6 py-2.5 shadow-sm focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-black px-7 py-2.5 text-white transition-all duration-300 ease-in-out hover:bg-gray-800 dark:bg-btndark dark:hover:bg-blackho"
                  >
                    Get Started
                  </button>
                </div>
              </form>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Try for free, no credit card required.
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-1/2 lg:flex lg:justify-center">
            <div className="relative max-w-lg">
              <Image
                src="/gif/ded0bbdd8485e424327257405a86a884.gif"
                alt="Hero"
                width={700}
                height={444}
                className="rounded-lg object-contain shadow-lg dark:hidden"
              />
              <Image
                src="/gif/ded0bbdd8485e424327257405a86a884.gif"
                alt="Hero"
                width={700}
                height={444}
                className="hidden rounded-lg object-contain shadow-lg dark:block"
              />

              {/* Decorative Shapes */}
              <Image
                src="/images/shape/shape-01.png"
                alt="Shape 1"
                width={46}
                height={246}
                className="absolute -left-10 top-0"
              />
              <Image
                src="/images/shape/shape-02.svg"
                alt="Shape 2"
                width={36}
                height={36}
                className="absolute bottom-0 right-0"
              />
              <Image
                src="/images/shape/shape-03.svg"
                alt="Shape 3"
                width={22}
                height={22}
                className="absolute -right-6 bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
