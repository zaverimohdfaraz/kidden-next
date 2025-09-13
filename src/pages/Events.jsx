import Image from "next/image";
import React from "react";

// const events = [
//     {}
// ]
const Events = () => {
  return (
    <div className=" min-h-[120vh] bg-[white] my-[2rem] sm:my-[2rem] px-6 md:px-10 lg:px-20 relative z-1">
      <div className="absolute top-10 right-5 hidden md:block">
        <Image
          src="/images/black-cat.png"
          alt="Black Cat image"
          width={250}
          height={250}
          className="transform -rotate-12"
        />
      </div>
      <div className="absolute top-10 left-0 hidden md:block">
        <Image
          src="/images/tree-doth.png"
          alt="Tree image"
          width={300}
          height={300}
          className="transform -rotate-12"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center ">
        <div className="section-title mb-4 font-semibold text-[#ff6b35]">
          Upcoming Events!
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-[#333333] mb-4">
          Ongoing {""}
          <span className="relative inline-block text-[#333333] py-2">
            Events!
            <span className="absolute inset-x-0 bottom-2 h-2 bg-[#F9B001] -z-1 "></span>
          </span>
        </h1>

        <p className="max-w-[32rem] mx-auto text-center mb-12 text-gray-500 text-lg">
          Kindergarten is an early childhood educational environment where most
          young children engage in foundational learning experiences.
        </p>

        <div className="grid md:grid-cols-3  gap-8 mt-12">
          <div className="rounded-t-2xl mb-[10rem] ">
            <div className="relative">
              <div className="absolute top-2 right-2 h-7 w-25 rounded-md bg-[#A5BE25] text-white text-sm pt-1">
                Education
              </div>
              {/* Top Image */}
              <Image
                src={"/posts/post-7.jpg"}
                alt={"Teacher teaching students"}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-2xl"
              />

              <div className="absolute inset-x-0 top-30 flex justify-center">
                <div className="relative w-[90%]">
                  <div className="w-full h-[40vh] rounded-2xl bg-white">
                    <div className="absolute top-[-32] right-5 h-20 w-15 rounded-2xl">
                      <div className="font-semibold text-lg h-[40%] text-center rounded-t-2xl py-1 text-white bg-[#ff6b35]">
                        JAN
                      </div>
                      <div className="font-semibold text-2xl h-[60%] text-center py-1 rounded-b-2xl text-white bg-[#F9B001]">
                        01
                      </div>
                    </div>
                    <h3 className="text-1xl text-left font-bold mb-1 pt-5 pl-5 text-[#ff6b35]">
                      $69.00
                    </h3>
                    <div className="group relative pl-5">
                      <p className="text-2xl py-1 text-left font-semibold relative after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#ff6b35] after:w-0 after:transition-all after:duration-300 group-hover:after:w-[80%]">
                        Garden Party
                      </p>
                    </div>
                    <p className="text-lg py-2 text-gray-500 text-left pl-5">
                      Join us for a delightful day of fun and learning at our
                      annual Little Learners Day! This special event...
                    </p>
                    <p className="font-semibold text-left pl-5">
                      <span className="text-[#ff6b35]">Venue</span> : Mellow
                      Function Rooms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-t-2xl mb-[10rem]">
            <div className="relative">
              <div className="absolute top-2 right-2 h-7 w-25 rounded-md bg-[#A5BE25] text-white text-sm pt-1">
                Developmet
              </div>
              {/* Top Image */}
              <Image
                src={"/posts/post-6.jpg"}
                alt={"Teacher teaching students"}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-2xl"
              />

              <div className="absolute inset-x-0 top-30 flex justify-center">
                <div className="relative w-[90%]">
                  <div className="w-full h-[40vh] rounded-2xl bg-white">
                    <div className="absolute top-[-32] right-5 h-20 w-15 rounded-2xl">
                      <div className="font-semibold text-lg h-[40%] text-center rounded-t-2xl py-1 text-white bg-[#ff6b35]">
                        JAN
                      </div>
                      <div className="font-semibold text-2xl h-[60%] text-center py-1 rounded-b-2xl text-white bg-[#F9B001]">
                        01
                      </div>
                    </div>
                    <h3 className="text-1xl text-left font-bold mb-1 pt-5 pl-5 text-[#ff6b35]">
                      $59.00
                    </h3>
                    <div className="group relative pl-5">
                      <p className="text-2xl py-1 text-left font-semibold relative after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#ff6b35] after:w-0 after:transition-all after:duration-300 group-hover:after:w-[80%]">
                        Nature Adventures
                      </p>
                    </div>
                    <p className="text-lg py-2 text-gray-500 text-left pl-5">
                      Join us for a delightful day of fun and learning at our
                      annual Little Learners Day! This special event...
                    </p>
                    <p className="font-semibold text-left pl-5">
                      <span className="text-[#ff6b35]">Venue</span> : Mellow
                      Function Rooms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-t-2xl mb-[10rem]">
            <div className="relative">
              <div className="absolute top-2 right-2 h-7 w-25 rounded-md bg-[#A5BE25] text-white text-sm pt-1">
                Classroom
              </div>
              {/* Top Image */}
              <Image
                src={"/posts/post-6.jpg"}
                alt={"Teacher teaching students"}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-2xl"
              />

              <div className="absolute inset-x-0 top-30 flex justify-center">
                <div className="relative w-[90%]">
                  <div className="w-full h-[40vh] rounded-2xl bg-white">
                    <div className="absolute top-[-32] right-5 h-20 w-15 rounded-2xl">
                      <div className="font-semibold text-lg h-[40%] text-center rounded-t-2xl py-1 text-white bg-[#ff6b35]">
                        JAN
                      </div>
                      <div className="font-semibold text-2xl h-[60%] text-center py-1 rounded-b-2xl text-white bg-[#F9B001]">
                        01
                      </div>
                    </div>
                    <h3 className="text-1xl text-left font-bold mb-1 pt-5 pl-5 text-[#ff6b35]">
                      $49.00
                    </h3>
                    <div className="group relative pl-5">
                      <p className="text-2xl py-1 text-left font-semibold relative after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#ff6b35] after:w-0 after:transition-all after:duration-300 group-hover:after:w-[80%]">
                        Summer Camp
                      </p>
                    </div>
                    <p className="text-lg py-2 text-gray-500 text-left pl-5">
                      Join us for a delightful day of fun and learning at our
                      annual Little Learners Day! This special event...
                    </p>
                    <p className="font-semibold text-left pl-5">
                      <span className="text-[#ff6b35]">Venue</span> : Mellow
                      Function Rooms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
