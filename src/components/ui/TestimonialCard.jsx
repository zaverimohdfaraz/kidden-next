import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const TestimonialCard = ({ name, title, description, post, rating , teacherImage}) => {
  return (
    <div className="rounded-t-2xl relative">
      <div className="relative">
        {/* {console.log(post)} */}

        <div className="absolute inset-x-0 top-10 flex justify-center">
          <Image
            src={post}
            alt={title}
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute top-10 w-full left-1/2 -translate-x-1/2 text-center">
            <Image
              src={teacherImage}
              alt={title}
              width={400}
              height={400}
              className="w-20 h-20 object-cover rounded-full absolute left-10"
            />

            <h3 className="text-2xl font-semibold mb-2 ml-12 mt-2 text-center">{name}</h3>

            <p className="text-md mr-3 font-semibold text-[#ff6b35]">{title}</p>
            <div className="flex justify-center mt-5 px-8 text-xl/8 text-left">
              {description}
            </div>
            <div className="flex justify-center absolute left-8 mt-2">
              <Star color="gold" fill="gold" size={20} />
              <Star color="gold" fill="gold" size={20} />
              <Star color="gold" fill="gold" size={20} />
              <Star color="gold" fill="gold" size={20} />
              <Star color="gold" fill="gold" size={20} />
            </div>
          </div>
        </div>

        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
          <div className="relative w-[20vw] h-[30vh]">
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 text-white text-lg">
              {rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
