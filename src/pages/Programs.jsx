"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProgramCard from "../components/ui/ProgramCard";

const cards = [
  {
    title: "Kids Play Group",
    description:
      "Kindergarten is an educational environment designed for young children, typically age...",
    post: "/posts/post-1.jpg",
    age: "Age 3-4 Year",
    icons: {
      color: "#F9B001",
      bgColor: "#FFE8B6",
    },
  },
  {
    title: "Nursery Preschool",
    description:
      "Kindergarten is an educational environment designed for young children, typically age...",
    post: "/posts/post-2.jpg",
    age: "Age 2-4 Year",
    icons: {
      color: "#A3D2EE",
      bgColor: "#CCECFF",
    },
  },
  {
    title: "Toddler Learning",
    description:
      "Kindergarten is an educational environment designed for young children, typically age...",
    post: "/posts/post-3.jpg",
    age: "Age 3-5 Year",
    icons: {
      color: "#F9B001",
      bgColor: "#FFE8B6",
    },
    icons: {
      color: "#F15F25",
      bgColor: "#FFE8B6",
    },
    // ff3232
    // FFE8B6
  },
  {
    title: "Physical Development",
    description:
      "Kindergarten is an educational environment designed for young children, typically age...",
    post: "/posts/post-4.jpg",
    age: "Age 4-6 Year",
    icons: {
      color: "#A5BE25",
      bgColor: "#E0F2C0",
    },
  },
  {
    title: "Speech Correction",
    description:
      "Kindergarten is an educational environment designed for young children, typically age...",
    post: "/posts/post-5.jpg",
    age: "Age 2-4 Year",
    icons: {
      color: "#F9B001",
      bgColor: "#FFE8B6",
    },
  },
  {
    title: "Drawing and Colors",
    description:
      "Kindergarten is an educational environment designed for young children, typically age...",
    post: "/posts/post-6.jpg",
    age: "Age 3-5 Year",
    icons: {
      color: "#A3D2EE",
      bgColor: "#CCECFF",
    },
  },
  {
    title: "Discipline Program",
    description:
      "Kindergarten is an educational environment designed for young children, typically age...",
    post: "/posts/post-7.jpg",
    age: "Age 2-4 Year",
    icons: {
      color: "#F15F25",
      bgColor: "#FFE8B6",
    },
  },
  {
    title: "Junior Nursery",
    description:
      "Kindergarten is an educational environment designed for young children, typically age...",
    post: "/posts/post-8.jpg",
    age: "Age 3-5 Year",
    icons: {
      color: "#A5BE25",
      bgColor: "#E0F2C0",
    },
  },
];

const ProgramsPage = () => {
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
    <div className="min-h-[150vh] custom-margin-xs bg-white mb-[-12rem] mt-[5rem] sm:mb-[5rem] sm:mt-[0rem] sm:py-16 px-6 md:px-10 lg:px-20 relative z-1">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 p-5">
          <div>
            <div className="section-title mb-4 text-[#ff6b35] font-semibold py-2">
              Learning Is An Adventure!
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#333333] mb-4">
              Guiding Little Feet <br />
              On Big{" "}
              <span className="relative inline-block text-[#333333] py-2">
                Journeys!
                <span className="absolute inset-x-0 bottom-2 h-2 bg-[#F9B001] -z-1"></span>
              </span>
            </h1>
          </div>

          <div className="mt-4 md:mt-0">
            <p className="max-w-lg mb-4 text-lg">
              Kindergarten is an early childhood educational environment where
              most young children engage in foundational learning experiences.
            </p>
            <Link
              href="/programs/all"
              className="bg-[#ff6b35] text-white font-bold py-3 px-6 rounded-md inline-block border-b-[3px] border-b-[#ffc04e] hover:bg-[#ffc04e] transition-all duration-400"
            >
              View All Programs
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[70vh] custom-height-programs  sm:h-[90vh] overflow-x-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-1/2 md:min-w-1/3 px-2 box-border"
              >
                <ProgramCard {...card} />
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-[25vh] sm:top-[40vh] left-2 transform -translate-y-1/2 bg-white/100 hover:bg-gray-200 px-4 py-3 rounded-full z-10"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-[25vh] sm:top-[40vh] right-2 transform -translate-y-1/2 bg-white/100 hover:bg-gray-200 px-4 py-3 rounded-full z-10"
          >
            <ArrowRight />
          </button>
        </div>

        {/* Pagination dots below carousel*/}
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

export default ProgramsPage;
