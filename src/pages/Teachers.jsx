import Image from "next/image";
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Teachers = () => {
  return (
    <div className=" min-h-[150vh] bg-[#F0EFEC] py-16 px-6 md:px-10 lg:px-20 relative z-1">
      <div className="max-w-7xl mx-auto text-center ">
        <div className="section-title mb-4 font-semibold text-[#ff6b35]">
          Learning Is An Adventure!
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
          Enrol Your Child In <br />A{" "}
          <span className="relative inline-block text-[#333333] py-2">
            Session Now!
            <span className="absolute inset-x-0 bottom-2 h-2 bg-[#F9B001] -z-1 rounded-sm"></span>
          </span>
        </h1>

        <p className="max-w-[32rem] mx-auto text-center mb-12 text-gray-500 text-lg">
          Kindergarten is an early childhood educational environment where most
          young children engage in foundational learning experiences.
        </p>

        <div className="grid md:grid-cols-4 gap-10 sm:gap-8 mt-12">
          <div className="rounded-t-2xl group relative  w-full max-w-md">
            {/* Main Image */}
            <Image
              src={"/teachers/teacher-1.jpg"}
              alt={"Teacher Image"}
              width={400}
              height={400}
              className="w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* Service BG & Text */}
            <div className="absolute inset-x-0 top-75 flex justify-center">
              <div className="relative w-full">
                <Image
                  src="/images/service-bg.png"
                  alt="service-bg"
                  width={300}
                  height={300}
                  className="w-full h-[25vh] object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-5 w-full left-1/2 -translate-x-1/2 text-center">
                  <h3 className="text-2xl font-semibold mb-1 mt-6 text-[#343434]">
                    Stephen Miller
                  </h3>
                  <p className="text-md py-1 px-1 text-[#ff6b35] font-semibold">
                    Literacy Teacher
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <Facebook className="w-8 h-8 text-white bg-[#ff6b35] p-1 rounded-md" />
              <Twitter className="w-8 h-8 text-white bg-[#ff6b35] p-1 rounded-md" />
              <Instagram className="w-8 h-8 text-white bg-[#ff6b35] p-1 rounded-md" />
              <Linkedin className="w-8 h-8 text-white bg-[#ff6b35] p-1 rounded-md" />
            </div>
          </div>
          <div className="rounded-t-2xl group relative  w-full max-w-md">
            <div className="relative">
              <Image
                src={"/teachers/teacher-2.jpg"}
                alt={"Teacher Image"}
                width={400}
                height={400}
                className="w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 top-75 flex justify-center">
                <div className="relative w-full">
                  <Image
                    src="/images/service-bg.png"
                    alt="service-bg"
                    width={300}
                    height={300}
                    className="w-full h-[25vh] object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute top-5 w-full left-1/2 -translate-x-1/2 text-center">
                    <h3 className="text-2xl font-semibold mb-1 mt-6 text-[#343434]">
                      Abraham McGraw
                    </h3>
                    <p className="text-md py-1 px-1 text-[#ff6b35] font-semibold">
                      Preschoold Teacher
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <Facebook className="w-8 h-8 text-white bg-[#ff6b35] p-1 rounded-md" />
              <Twitter className="w-8 h-8 text-white bg-[#ff6b35] p-1 rounded-md" />
              <Instagram className="w-8 h-8 text-white bg-[#ff6b35] p-1 rounded-md" />
              <Linkedin className="w-8 h-8 text-white bg-[#ff6b35] p-1 rounded-md" />
            </div>

            </div>
          </div>
          <div className="rounded-t-2xl group relative  w-full max-w-md">
            <div className="relative">
              <Image
                src={"/teachers/teacher-3.jpg"}
                alt={"Teacher Image"}
                width={400}
                height={400}
                className="w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 top-75 flex justify-center">
                <div className="relative w-full">
                  <Image
                    src="/images/service-bg.png"
                    alt="service-bg"
                    width={300}
                    height={300}
                    className="w-full h-[25vh] object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute top-5 w-full left-1/2 -translate-x-1/2 text-center">
                    <h3 className="text-2xl font-semibold mb-1 mt-6 text-[#343434]">
                      Fiorella Ibáñez
                    </h3>
                    <p className="text-md py-1 px-1 text-[#ff6b35] font-semibold">
                      Music Teacher
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <Facebook className="w-8 h-8 text-white bg-[#ff6b35] p-1 rounded-md" />
              <Twitter className="w-8 h-8 text-white bg-[#ff6b35] p-1 rounded-md" />
              <Instagram className="w-8 h-8 text-white bg-[#ff6b35] p-1 rounded-md" />
              <Linkedin className="w-8 h-8 text-white bg-[#ff6b35] p-1 rounded-md" />
            </div>

            </div>
          </div>
          <div className="rounded-t-2xl group relative  w-full max-w-md ">
            <div className="relative">
              <Image
                src={"/teachers/teacher-4.jpg"}
                alt={"Teacher Image"}
                width={400}
                height={400}
                className="w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 top-75 flex justify-center">
                <div className="relative w-full">
                  <Image
                    src="/images/service-bg.png"
                    alt="service-bg"
                    width={300}
                    height={300}
                    className="w-full h-[25vh] object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute top-5 w-full left-1/2 -translate-x-1/2 text-center">
                    <h3 className="text-2xl font-semibold mb-1 mt-6 text-[#343434]">
                      Scott Gonzalez
                    </h3>
                    <p className="text-md py-1 px-1 text-[#ff6b35] font-semibold">
                      Learning Teacher
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <Facebook className="w-8 h-8 text-white bg-[#ff6b35] p-1 rounded-md" />
              <Twitter className="w-8 h-8 text-white bg-[#ff6b35] p-1 rounded-md" />
              <Instagram className="w-8 h-8 text-white bg-[#ff6b35] p-1 rounded-md" />
              <Linkedin className="w-8 h-8 text-white bg-[#ff6b35] p-1 rounded-md" />
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
