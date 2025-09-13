import Image from "next/image";
import Card from "@/components/ui/Card";

const enrollDetails = [
  {
    title: "Introducing Basic Academics",
    content:
      "Kindergarten is an early childhood educational environment where most young children engage.",

    iconBgImage: "/images/blue-bg.png",
    iconBgColor: "/icons/bg-blue-icon.png",
    arrowBgColor: "bg-[#ff6b35]",
    post: "/images/post-1.jpg",
  },
  {
    title: "Creativity And Imagination",
    content:
      " Kindergarten is an early childhood educational environment where most young children engage.",
    iconBgImage: "/images/orange-bg.png",
    iconBgColor: "/icons/bg-orange-icon.png",
    arrowBgColor: "bg-[#A3D2EE]",
    post: "/images/post-2.jpg",
  },
  {
    title: "Problem Solving Development",
    content:
      "Kindergarten is an early childhood educational environment where most young children engage.",
    iconBgImage: "/images/green-bg.png",
    iconBgColor: "/icons/bg-green-icon.png",
    arrowBgColor: "bg-[#A5BE25]",
    post: "/images/post-3.jpg",
  },
];

export default function EnrollSection() {
  return (
    <div className=" min-h-[150vh] bg-[#F0EFEC] py-16 px-6 md:px-10 lg:px-20 relative z-1 custom-padding">
      <div className="absolute top-10 right-10 hidden md:block">
        <Image
          src="/images/monkey.png"
          alt="Monkey image"
          width={200}
          height={200}
          className="transform -rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto text-center ">
        <div className="section-title mb-4 font-semibold text-[#ff6b35]">
          Learning Is An Adventure!
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
          Enrol Your Child In <br />A{" "}
          <span className="relative inline-block text-[#333333] py-2">
            Session Now!
            <span className="absolute inset-x-0 bottom-2 h-2 bg-[#F9B001] -z-1 rounded-sm"></span>
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-center mb-12">
          Kindergarten is an early childhood educational environment where most
          young children engage in foundational learning experiences.
        </p>

        <div className="grid md:grid-cols-3  gap-50 custom-margin sm:gap-8 mt-12">
          {enrollDetails.map((e) => (
            <Card
              key={e.title}
              title={e.title}
              content={e.content}
              iconBgImage={e.iconBgImage}
              iconBgColor={e.iconBgColor}
              arrowBgColor={e.arrowBgColor}
              post={e.post}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
