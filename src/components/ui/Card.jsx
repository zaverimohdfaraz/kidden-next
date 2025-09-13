import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Card = ({title , content , iconBgImage , iconBgColor , arrowBgColor , post }) => {
  return (
    <div className="rounded-t-2xl sm:mb-[0vh] mb-[20vh]  ">
            <div className="relative group">
              {/* Top Image */}
              <Image
                src={post}
                alt={title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-2xl"
              />

              {/* Service BG with content inside */}
              <div className="absolute inset-x-0 top-24 flex justify-center">
                <div className="relative w-[90%]">
                  <Image
                    src="/images/service-bg.png"
                    alt="service-bg"
                    width={200}
                    height={200}
                    className="w-full h-[40vh] custom-height-xs sm:h-[60vh] rounded-2xl "
                  />
                  {/* 55vh */}

                  {/* Content inside the service-bg */}
                  <div className="absolute top-25 w-full left-1/2 -translate-x-1/2 text-center">
                    <h3 className="text-3xl font-bold mb-3 mt-2">
                    {title.split(" ").slice(0, 2).join(" ")} <br />
                    {title.split(" ")[2]}
                    </h3>
                    <p className="text-lg py-2 px-2">
                      {content}
                    </p>
                    <div className="flex justify-center mt-4">
                      <Link
                        href="#"
                        className={` ${arrowBgColor} text-white rounded-md w-10 h-10 flex items-center justify-center`}
                      >
                        {/* bg-[#ff6b35] */}
                        <ArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blue Icon at bottom */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 ">
                <div className="relative w-[100px] h-[100px]">
                  <Image
                    src={iconBgImage}
                    width={100}
                    height={100}
                    alt="blue background"
                    className="w-full h-full"
                  />
                  <Image
                    src={iconBgColor}
                    width={50}
                    height={50}
                    alt="icon inside"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
            </div>
          </div>
  )
}

export default Card