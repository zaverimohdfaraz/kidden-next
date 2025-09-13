import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="background-layer-1"></div>
      <div className="background-layer-2 relative">
        <div className="block md:hidden bg-white custom-div w-full absolute bottom-[-9.5rem] z-0"></div>
      </div>
      <section className="absolute sm:relative pt-[96px] w-full min-h-[20vh] sm:min-h-[80vh] flex items-center px-6 sm:my-0 my-6 sm:px-8">
        <div className="max-w-5xl sm:max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">
          {/* Left Content (Optional) */}
          <div className="md:w-1/2 mb-10 md:mb-1 z-20">
            <div className="py-2 sm:pb-[15%] sm:pl-[5%] ">
              <h3 className="text-[#ff6b35] font-semibold sm:text-lg text-lg">
                Learning is an Adventure!
              </h3>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#343434]">
                Where Every Child <br />
                Plays to{" "}
                <span className="relative inline-block">
                  Learn!
                  <span className="absolute inset-x-0 bottom-1 h-2 bg-[#F9B001] -z-1"></span>
                </span>
              </h1>
              <p className="text-xl/10 sm:text-lg font-semibold text-gray-600 mb-4">
                Kindergarten is an early childhood educational environment where
                most young children engage in learning experiences.
              </p>
              <button className="btn-primary bg-[#ff6b35] text-white font-semibold px-6 py-3 rounded-lg border-b-[3px] border-b-[#ffc04e] hover:bg-[#ffc04e] transition-all duration-400 cursor-pointer text-xl sm:text-lg">
                Enroll your kid!
              </button>
            </div>
          </div>
          <Image
            src="/images/start-now-img.png"
            width={100}
            height={100}
            alt="Start Now"
            className="absolute right-[30rem] bottom-[15rem] w-[40px] md:w-[170px] z-20 animate-bounce-slow"
          />

          {/* Right Side Images */}
          <div className="md:w-1/2 relative flex justify-center items-end h-[470px]">
            {/* Boy Image - Behind */}
            <img
              src="images/hero-boy.png"
              alt="Boy"
              className="absolute top-[-3rem] right-[30%] w-[280px] md:w-[350px] z-10"
            />

            {/* Girl Image - In Front */}
            <img
              src="images/hero-girl.png"
              alt="Girl"
              className="absolute right-[10%] w-[250px] md:w-[320px] z-10"
            />
          </div>
        </div>
      </section>

      <div className="background-layer-3"></div>
    </>
  );
};

export default HeroSection;
