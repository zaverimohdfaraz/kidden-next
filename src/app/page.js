"use client"
import FeaturesSection from "@/pages/FeaturesSection";
import HeroSection from "@/pages/HeroSection";
import EnrollSection from "@/pages/EnrollSection";
import ProgramsPage from "@/pages/Programs";
import AboutPage from "@/pages/About";
import Events from "@/pages/Events";
import Teachers from "@/pages/Teachers";
import TestimonialsPage from "@/pages/Testimonials";
import AdmissionPage from "@/pages/Admission";
import Blogs from "@/pages/Blogs";
import Footer from "@/pages/Footer";
import Image from "next/image";

export default function Home() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HeroSection />
      <main className="bg-white">
        <FeaturesSection />
        <EnrollSection />
        <ProgramsPage />
        <AboutPage />
        <Events />
        <Teachers />
        <TestimonialsPage />
        <AdmissionPage />
        <Blogs />
        <Footer />
      </main>
      
      <div className="fixed bottom-6 right-6 z-9">
        <button
          onClick={scrollToTop}
          className="bg-[#ff6b35] text-white cursor-pointer rounded-xl px-4 py-3 shadow-lg hover:bg-[#ffc04e] border-b-[3px] border-b-[#ffc04e] transition-all duration-500"
        >
          <Image 
            src={'/icons/arrow-up.svg'}
            width={15}
            height={10}
          />
        </button>
      </div>
    </>
  );
}
