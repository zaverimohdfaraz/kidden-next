"use client";
import React, { useState , useEffect} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TestimonialCard from "@/components/ui/TestimonialCard";

const cards = [
  {
    name: "Fiorella Ibáñez",
    title: "Pharmacist",
    description: "love this kindergarten! The teachers are incredibly caring and patient, creating a warm and welcoming environment for the children. The curriculum is well-rounded.",
    post: "/testimonial/testimonial-shape-blue.png",
    teacherImage : "/teachers/teacher-2.jpg"
  },
  {
    name: "Abraham McGraw",
    title: "Journalist",
    description: "love this kindergarten! The teachers are incredibly caring and patient, creating a warm and welcoming environment for the children. The curriculum is well-rounded.",
    post: "/testimonial/testimonial-shape-green.png",
    teacherImage : "/teachers/teacher-3.jpg"
  },
  {
    name: "Scott Gonzalez",
    title: "Businessman",
    description: "love this kindergarten! The teachers are incredibly caring and patient, creating a warm and welcoming environment for the children. The curriculum is well-rounded.",
    post: "/testimonial/testimonial-shape-yellow.png",
    teacherImage : '/teachers/teacher-4.jpg'
  },
  {
    name: "Stephen Miller",
    title: "Engineer",
    description: "love this kindergarten! The teachers are incredibly caring and patient, creating a warm and welcoming environment for the children. The curriculum is well-rounded.",
    post: "/testimonial/testimonial-shape-red.png",
        teacherImage : '/teachers/teacher-1.jpg'
  },
];

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);
  const totalCards = cards.length;

  const handleNext = () => {
    if (currentIndex + cardsPerView < totalCards) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0)
    }

    
  };

  const handlePrev = () => {
    if(currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(totalCards - cardsPerView)
    }
  };

  return (
    <div className="min-h-[100vh] sm:min-h-[150vh] bg-white py-16 px-6 md:px-10 lg:px-20 relative z-1">
      <div className="max-w-7xl mx-auto text-center ">
        <div className="section-title text-lg mb-4 font-semibold text-[#ff6b35]">
          Testimonials!
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-[#333333] mb-4">
          What Do Parents
          <br /> Say{" "}
          <span className="relative inline-block text-[#333333] py-2">
            About Us!
            <span className="absolute inset-x-0 bottom-2 h-2 bg-[#F9B001] -z-1"></span>
          </span>
        </h1>

        <p className="max-w-[32rem] mx-auto text-center mb-12 text-gray-500 text-lg">
          Kindergarten is an early childhood educational environment where most
          young children engage in foundational learning experiences.
        </p>

        <div className="relative w-full h-[60vh] custom-height-testimonial-card sm:h-[100vh] overflow-x-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="min-w-full sm:min-w-1/2 md:min-w-1/3 px-2 box-borde">
                <TestimonialCard {...card} />
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-[25vh] sm:top-[40vh] left-0 transform -translate-y-1/2 bg-white/100 hover:bg-gray-200 px-4 py-3 rounded-full z-10"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-[25vh] sm:top-[40vh] right-0 transform -translate-y-1/2 bg-white/100 hover:bg-gray-200 px-4 py-3 rounded-full z-10"
          >
            <ArrowRight />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-2 ">
          <div
            className="w-2 h-2 rounded-full bg-[#ff6b35]"
            onClick={handlePrev}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-[#ffd23f]"
            onClick={handlePrev}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-[#8cc63f]"
            onClick={handleNext}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-[#3fa9c6]"
            onClick={handleNext}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
