import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
    <footer className="bg-white text-[#272727] pt-16 px-6 md:px-10 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="logo-text text-3xl font-bold mb-6">
            <Image
              src={"/icons/logo.png"}
              width={200}
              height={200}
              alt="Kidden Logo"
            />
          </div>
          <p className="mb-6 text-xl">
            Providing quality early childhood education and care in a fun,
            creative environment where children can learn and grow.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="bg-gray-200 p-2 rounded-lg">
              <Facebook />
            </Link>
            <Link href="#" className="bg-gray-200 p-2 rounded-lg">
              <Twitter />
            </Link>
            <Link href="#" className="bg-gray-200 p-2 rounded-lg">
              <Instagram />
            </Link>
            <Link href="#" className="bg-gray-200 p-2 rounded-lg">
              <Linkedin />
            </Link>
          </div>
        </div>

        <div className="ml-10">
          <h3 className="text-3xl font-bold mb-6 ">Information</h3>
          <ul className="space-y-4 text-xl list-disc marker:text-[#ff6b35]">
            <li>
              <Link href="#" className="hover:text-[#ff6b35] transition-colors">
                Kindergarten
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#ff6b35] transition-colors">
                Our Teachers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#ff6b35] transition-colors">
                Blog Page
              </Link>
            </li>
            <li>
              <Link
                href="/teachers"
                className="hover:text-[#ff6b35] transition-colors"
              >
                Help and Faqs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#ff6b35] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-xl">
            <li>
              <Link
                href="/programs/toddler"
                className="hover:text-[#ffc04e] transition-colors"
              >
                <span className="text-[#ff6b35]">Address:</span>
                <br />
                Germany — 785 15h Street, Office 478 Berlin, De 81566
              </Link>
            </li>
            <li>
              <span className="text-[#ff6b35] ]">Phone:</span>
              <br />
              <div className="hover:text-[#ffc04e]">
              (704) 555-0127
              </div>
            </li>
            <li>
              <span className="text-[#ff6b35]">Mail Us:</span>
              <br />
              <div className="hover:text-[#ffc04e]">
              kidden@example.com

              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-6">Newsletter Signup</h3>
          <div className="flex items-center">
            <input type="email" placeholder="Your Email Address" className="h-15 w-[10rem] bg-gray-200 px-2 py-1 rounded-xl mx-2"/>
            <button className="w-20 h-15 rounded-xl px-6 py-2 bg-[#ff6b35]">

            <Send className="text-white" size={30} />
            </button>

          </div>
            <p className="text-xl py-2 px-2">Get the latest updates and offers for business services yearly.</p>
        </div>
      </div>
      

    </footer>
    <div className="relative max-w-8xl mx-auto pt-10 mt-10 text-center">
    <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white z-10">
      &copy; {new Date().getFullYear()} Copyright 2025 ThemeEaster. All Rights Reserved.
    </p>
    <Image src="/images/footer-background.png" width={1500} height={100} alt="Footer" />
  </div>
  
    </div>
   
  );
}
