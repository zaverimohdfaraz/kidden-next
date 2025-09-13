import Link from "next/link";
import React from "react";
import Image from "next/image";

const AdmissionPage = () => {
  return (
    <div className="bg-[#F0EFEC] py-10">
      <div
        className="min-h-[80vh] sm:min-h-[100vh] mx-[10%] mb-5 py-16 px-6 md:px-10 lg:px-20 relative z-1"
        style={{
          backgroundImage: "url('/images/cta-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        
        <div className="max-w-7xl mx-auto text-center ">
          <div className="section-title text-lg mb-4 font-semibold text-[#ff6b35]">
            Learning is an Adventure!
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#333333] mb-4">
            Where Learning Is
            <br />
            <span className="relative inline-block text-[#333333] py-2">
              An Adventure!
              <span className="absolute inset-x-0 bottom-2 h-2 bg-[#F9B001] -z-1"></span>
            </span>
          </h1>

          <p className="max-w-[32rem] mx-auto text-center mb-12 text-[#333333] text-lg">
            Kindergarten is an early childhood educational environment where
            most young children engage in foundational learning experiences.
          </p>
          <Link
            href="#"
            className="bg-[#ff6b35] text-white font-bold py-3 px-6 rounded-lg inline-block border-b-[3px] border-b-[#ffc04e] hover:bg-[#ffc04e] transition-all duration-400 cursor-pointer"
          >
            Apply for Admission
          </Link>
          <Image
            src={"/images/cta-illustration-1.png"}
            alt={"Horse beating Drum"}
            width={250}
            height={250}
            className="sm:visible invisible absolute left-5 bottom-50"
          />
          <Image
            src={"/images/cta-illustration-02.png"}
            alt={"Train"}
            width={250}
            height={250}
            className="sm:visible invisible absolute right-10 bottom-55"
          />
          <Image
            src={"/images/cta-bottom-shape.png"}
            alt={"Bottom Shape background"}
            width={1100}
            height={250}
            className="absolute right-0 bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
