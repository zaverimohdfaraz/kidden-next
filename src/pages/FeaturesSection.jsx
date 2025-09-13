import Image from "next/image";
import { House } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="pt-[40rem] sm:pt-2 py-20 px-6 md:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
        <Image src={'/images/element-3.png'} width={100} height={100} className="absolute top-30 z-20"></Image>

          <Image
            src="/images/about-girl.png"
            alt="Child with backpack"
            width={500}
            height={600}
            className="relative z-10"
          />
          
            <Image src={'/images/element-1.png'} alt="Image"  width={100} height={100} className="absolute bottom-60 z-20"></Image>
            <Image src={'/images/element-10.png'} alt="Image" width={70} height={70} className="absolute bottom-25 left-15 z-20"></Image>
            <Image src={'/images/giraffe.png'} alt="Image" width={200} height={70} className="absolute bottom-[-5rem] sm:bottom-5 right-0 sm:right-30 z-20"></Image>
          
        </div>

        <div>
          <div className="section-title text-md mb-4 text-[#ff6b35] font-semibold">
            Learning Is An Adventure!
          </div>
          <h2 className="heading-medium mb-6 text-4xl md:text-7xl font-bold">
            Where Little Hands <br /> Create Big Dreams!
          </h2>
          <p className="text-lg mb-4 font-medium">
            Kindergarten is an early childhood educational environment where
            most young children, typically aged 4 to 6, engage in foundational
            learning experiences.
          </p>
          <p className="text-lg mb-8 font-medium">
            The focus is on fostering social, emotional, cognitive, and physical
            development through a mix of structured activities and play.
          </p>
          <div className="flex w-[1/2]">
            <div className="flex items-center w-full">
            <Image src={"/icons/home-icon.png"} width={100} height={100} className="mb-4"/>
              <p className=" mb-6 text-1xl md:text-2xl font-bold">
                Fully Home Like Environment
              </p>
             
            </div>
            <div className="flex items-center w-full">
              <Image src={"/icons/dress-icon.png"} width={90} height={90} className="mb-4" />
              <p className=" mb-6 text-1xl md:text-2xl font-bold">
              100% Quality Safety
              And Security
              </p>
            </div>
          </div>
          <div className="flex w-full ">
          <div className="flex items-center w-full justify-center">
          <button className="btn-primary bg-[#ff6b35] text-white font-semibold px-6 py-3 rounded-lg border-b-[3px] border-b-[#ffc04e] hover:bg-[#ffc04e] transition-all duration-400 cursor-pointer text-xl sm:text-lg">
             More About Us!
             
            </button>

          </div>
            <div className="flex w-full items-center">
            <Image src={'/icons/call-icon.png'} width={60} height={60}></Image>
            <p className="text-1xl font-bold">
            Call For Booking
            <p className="text-[#ff6b35] font-semibold">
            123-456-7890
            </p>
            </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
