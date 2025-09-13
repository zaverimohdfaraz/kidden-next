import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-[120vh] bg-[#F0EFEC] py-20  sm:py-[10rem] px-6 md:px-10 lg:px-20 relative z-1">
      <div className="absolute top-5 right-0 hidden md:block">
        <Image
          src="/images/snake.png"
          alt="Snake illustration"
          width={250}
          height={150}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[50vh] sm:h-[90vh] rounded-full bg-opacity-70 flex items-center justify-center">
              <Image
                src="/images/about-boy.png"
                alt="Child with books"
                width={450}
                height={450}
                className="rounded-full object-cover z-10"
              />
             
              <div className="absolute top-1/2 left-[30%] sm:left-[35%] sm:w-full sm:h-full z-10 ">
                <Image
                  src="/images/alligator.png"
                  alt="Aligator"
                  width={300}
                  height={300}
                  className="rounded-full object-cover w-[200px] sm:w-[300px]"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="z-11">
            <div className="section-title mb-4 text-[#ff6b35] font-semibold z-10">
              Learning Is An Adventure!
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#343434] mb-6">
              A Safe Place To <br />
              Learn And{" "}
              <span className="relative inline-block text-[#343434] py-2">
                Grow!
                <span className="absolute inset-x-0 bottom-2 h-2 bg-[#F9B001] -z-1"></span>
              </span>
            </h1>

            <p className="mb-8 text-gray-500">
              Kindergarten is an early childhood educational environment where
              most young children engage in foundational learning experiences.
            </p>

            {/* Progress bars */}
            <div className="space-y-6 mb-8">
              <div>
                <div className="flex justify-between mb-2 relative">
                  <span className="font-lg">Experiences</span>
                  <span className="absolute right-10 bottom-0 bg-[#F15F25] text-white text-sm px-3 py-2 rounded">
                    90%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 border border-gray-300 p-[3px] pb-[12px] ">
                  <div
                    className="bg-[#A5BE25] h-2.5 rounded-full "
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 relative">
                  <span className="font-lg">Creativity</span>
                  <span className="absolute right-30 bottom-0 bg-[#ff6b35] text-white text-sm px-3 py-2 rounded">
                    75%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 border border-gray-300 p-[3px] pb-[12px] ">
                  <div
                    className="bg-[#ffc857] h-2.5 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>

            <Link
              href="/enroll"
              className="bg-[#ff6b35] text-white font-bold py-3 px-6 rounded-lg inline-block border-b-[3px] border-b-[#ffc04e] hover:bg-[#ffc04e] transition-all duration-400 cursor-pointer"
            >
              Enroll Your Kid!
            </Link>
          </div>
        </div>
      </div>

      
    
    </div>
  );
}
