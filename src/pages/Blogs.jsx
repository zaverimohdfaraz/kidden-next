import { UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Calendar } from "lucide-react";
import { MoveRight } from "lucide-react";
// 8 , 7 , 6 post
const Blogs = () => {
  return (
    <div className="min-h-[120vh] bg-[white] py-10 sm:py-16 px-6 md:px-10 lg:px-20 relative z-1">
      <div className="absolute top-10 right-5 hidden md:block">
        <Image
          src="/images/tree-doth-inverted.png"
          alt="Bear Image"
          width={250}
          height={250}
          className="transform -rotate-12"
        />
      </div>
      <div className="absolute top-10 left-[-22] hidden md:block">
        <Image
          src="/images/bear-in-tree.png"
          alt="Tree image"
          width={300}
          height={300}
          className="transform -rotate-12"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center ">
        <div className="section-title mb-4 font-semibold text-[#ff6b35] text-xl sm:text-lg">
          Blog News Articles!
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-[#333333] mb-4">
          Explore Blogs And {""}
          <span className="relative inline-block text-[#333333] py-2">
            News!
            <span className="absolute inset-x-0 bottom-2 h-2 bg-[#F9B001] -z-1 "></span>
          </span>
        </h1>

        <p className="max-w-[32rem] mx-auto text-center mb-12 text-gray-500 text-lg">
          Kindergarten is an early childhood educational environment where most
          young children engage in foundational learning experiences.
        </p>

        <div className="grid md:grid-cols-3  gap-8 mt-12">
          <div className="rounded-t-2xl mb-[12rem]">
            <div className="relative">
              <div className="absolute top-2 right-2 h-8 w-25 rounded-md bg-[#ff6b35] text-white text-md pt-1 hover:bg-[#ffc04e] transition-all duration-400 cursor-pointer">
                Education
              </div>
              {/* Top Image */}
              <Image
                src={"/posts/post-8.jpg"}
                alt={"Teacher teaching students"}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-2xl"
              />

              <div className="absolute inset-x-0 top-30 flex justify-center">
                <div className="relative w-[90%]">
                  <div className="w-full h-[40vh] rounded-2xl bg-white">
                    <div className="relative">
                      <div className="flex px-2 py-2 items-center">
                        <UserRound color="orange" size={20} />{" "}
                        <div className=" m-2 pr-2">Dynamic Layers</div>
                        <Calendar color="orange" size={20} />{" "}
                        <div className="px-1"> August 13, 2024</div>
                      </div>
                    </div>
                    <div className="group">
                        
                    </div>
                    <p
                      className="text-2xl py-1 text-left px-3 font-semibold"
                    >
                      Discovering The Joy Of Child Kindergarten...
                    </p>
                    <p className="text-lg py-2 text-gray-500 text-left pl-5">
                      The digital landscape is vast and changing, presenting for
                      businesses. From social media platforms...
                    </p>
                    <p className="text-lg text-gray-900 text-left pl-5 flex items-end gap-1 group hover:cursor-pointer hover:text-[#ff6b35]">
                      Read More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <MoveRight />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-t-2xl  mb-[12rem]">
            <div className="relative">
              <div className="absolute top-2 right-2 h-8 w-25 rounded-md bg-[#ff6b35] text-white text-md pt-1 hover:bg-[#ffc04e] transition-all duration-400 cursor-pointer">
                Development
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
                    <div className="relative">
                      <div className="flex px-2 py-2 items-center">
                        <UserRound color="orange" size={20} />{" "}
                        <div className=" m-2 pr-2">Dynamic Layers</div>
                        <Calendar color="orange" size={20} />{" "}
                        <div className="px-1"> August 13, 2024</div>
                      </div>
                    </div>
                    <div className="group">
                        
                    </div>
                    <p
                      className="text-2xl py-1 text-left px-3 font-semibold"
                    >
                      Discovering The Joy Of Child Kindergarten...
                    </p>
                    <p className="text-lg py-2 text-gray-500 text-left pl-5">
                      The digital landscape is vast and changing, presenting for
                      businesses. From social media platforms...
                    </p>
                    <p className="text-lg text-gray-900 text-left pl-5 flex items-end gap-1 group hover:cursor-pointer hover:text-[#ff6b35]">
                      Read More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <MoveRight />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-t-2xl  mb-[12rem] ">
            <div className="relative">
              <div className="absolute top-2 right-2 h-8 w-25 rounded-md bg-[#ff6b35] text-white text-md pt-1 hover:bg-[#ffc04e] transition-all duration-400 cursor-pointer">
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
                    <div className="relative">
                      <div className="flex px-2 py-2 items-center">
                        <UserRound color="orange" size={20} />{" "}
                        <div className=" m-2 pr-2">Dynamic Layers</div>
                        <Calendar color="orange" size={20} />{" "}
                        <div className="px-1"> August 13, 2024</div>
                      </div>
                    </div>
                    <div className="group">
                        
                    </div>
                    <p
                      className="text-2xl py-1 text-left px-3 font-semibold"
                    >
                      Discovering The Joy Of Child Kindergarten...
                    </p>
                    <p className="text-lg py-2 text-gray-500 text-left pl-5">
                      The digital landscape is vast and changing, presenting for
                      businesses. From social media platforms...
                    </p>
                    <p className="text-lg text-gray-900 text-left pl-5 flex items-end gap-1 group hover:cursor-pointer hover:text-[#ff6b35]">
                      Read More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <MoveRight />
                      </span>
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

export default Blogs;
