"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    href: "/",
    dropdown: [
      { name: "Home Kindergarten", href: "/home-kindergarten" },
      { name: "Home Preschool", href: "/home-preschool" },
    ],
  },
  {
    name: "Pages",
    href: "/pages",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Online Admission", href: "/online-admission" },
      { name: " Gallery", href: "/gallery" },
      { name: "Our Teachers", href: "/our-teachers" },
      { name: "Teacher Details", href: "/teacher-details" },
      { name: "Services", href: "/services" },
      { name: "Service Details", href: "/service-details" },
      { name: "Testinomials", href: "/testinomials" },
      { name: "Help and Faqs", href: "/help-faq" },
      { name: "404 Error", href: "/404-error" },
    ],
  },
  {
    name: "Programs",
    href: "/programs",
    dropdown: [
      { name: "Program", href: "/program" },
      { name: "Program Details", href: "/program-details" },
    ],
  },
  {
    name: "Events",
    href: "/events",
    dropdown: [
      { name: "Ongoing Events", href: "/ongoing-events" },
      { name: "Event Details", href: "/event-details" },
    ],
  },
  {
    name: "Blog",
    href: "/blog",
    dropdown: [
      { name: "  Blog Grid", href: "/blog-grid" },
      { name: "Blog Classic", href: "/blog-classic" },
      { name: "Blog Details", href: "/blog-details" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled , setIsScrolled ] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

//   console.log("window.scrollY", window.scrollY);
// console.log("isScrolled", isScrolled);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md: 768px
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isScrolled]);

  const handleMenuClick = () => {
    if (isMobile) {
      setIsLeftSidebarOpen(true);
    } else {
      setIsRightSidebarOpen(true);
    }
  };

  return (
    <>
      <nav className={`fixed py-6 px-6 md:px-10 lg:px-30 z-50 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"} w-full top-0 transition-colors duration-500 `}>
        <div className="max-w-7xl mx-auto flex justify-between items-center ">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={
                "/icons/logo.png"
              }
              width={100}
              height={100}
              alt="Logo"
            ></Image>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 mr-[5%] ml-[20%]">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="font-semibold hover:text-[#ff6b35]  transition-colors flex items-center text-xl"
                >
                  {link.name}
                </Link>

                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-3 w-48 rounded-lg bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ">
                    <div className="py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="relative flex items-center font-semibold px-4 py-2 text-sm text-gray-700 transition-all duration-200 hover:pl-6 hover:text-[#ff6b35] before:content-['-'] before:absolute before:left-2 before:opacity-0 hover:before:opacity-100 z-99"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Online Admission */}
          <Link
            href="/admission"
            className="invisible md:visible btn-primary bg-[#ff6b35] text-white font-semibold px-6 py-3 rounded-lg border-b-[3px] border-b-[#ffc04e] hover:bg-[#ffc04e] transition-all duration-400"
          >
            Online Admission
          </Link>

          {/* Menu Button */}
          <button onClick={handleMenuClick}>
            <Image src="/icons/menu.svg" alt="Logo" width={40} height={40} className="md:w-[40] lg:w-[50]" />
          </button>
        </div>
      </nav>

      {/* ✅ Right Sidebar (Desktop) */}
      <div
        className={`fixed inset-y-0 right-0 w-full md:w-1/3 md:rounded-l-[5rem] bg-white/90 backdrop-blur-md z-50 transform transition-transform duration-400 ease-in-out ${
          isRightSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto p-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsRightSidebarOpen(false)}
              className="p-2 rounded-full hover:bg-[#fff3c4] transition-colors"
              aria-label="Close sidebar"
            >
              <X className="h-6 w-6 text-[#333333]" />
            </button>
          </div>

          <div className="">
            <Image
              src={
                "/icons/desktop-sidebar-logo.png"
              }
              width={150}
              height={200}
              className="mb-4"
            />
            <p className="text-xl mb-4">
              Kidden is an early childhood education school where all children,
              typically aged 4 to 6, begin their learning journey.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#ff6b35] mb-2">
                  Call For Support:
                </h3>
                <p className="text-3xl text-black font-bold">5267-214-392</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#ff6b35] mb-2">
                  You Can Find Us At:
                </h3>
                <p className="text-lg">Hall Street New York, USA - 2386</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#ff6b35] mb-2">
                  Email Now:
                </h3>
                <p className="text-lg">info.kidden@mail.com</p>
              </div>

              <div>
                <div className="flex space-x-4 mt-4">
                  <Link
                    href="#"
                    className="group bg-white p-2 rounded-xl text-black hover:bg-[#ffc04e] transition-colors duration-500"
                  >
                    <svg
                      className="w-5 h-5 fill-current text-black group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="group bg-white p-2 rounded-xl text-black hover:bg-[#ffc04e] transition-colors duration-500"
                  >
                    <svg
                      className="w-5 h-5 fill-current text-black group-hover:text-white transition-colors"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </Link>

                  <Link
                    href="#"
                    className="group bg-white p-2 rounded-xl text-black hover:bg-[#ffc04e] transition-colors duration-500"
                  >
                    <svg
                      className="w-5 h-5 fill-current text-black group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="group bg-white p-2 rounded-xl text-black hover:bg-[#ffc04e] transition-colors duration-500"
                  >
                    <svg
                      className="w-5 h-5 fill-current text-black group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Left Sidebar (Mobile Nav) */}
      <div
        className={`fixed inset-y-0 left-0 w-4/5 sm:w-3/4 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isLeftSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto p-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsLeftSidebarOpen(false)}
              className="p-2 rounded-full hover:bg-[#fff3c4] transition-colors"
              aria-label="Close sidebar"
            >
              <X className="h-6 w-6 text-[#333333]" />
            </button>
          </div>

          <div className="mt-8 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <div
                  className="flex justify-between items-center cursor-pointer text-lg font-semibold text-[#333] hover:text-[#ff6b35]"
                  onClick={() => toggleDropdown(link.name)}
                >
                  <span>{link.name}</span>
                  {link.dropdown && (
                    <span className="text-xl">
                      {openDropdown === link.name ? "-" : "+"}
                    </span>
                  )}
                </div>

                {/* Dropdown Links */}
                {link.dropdown && openDropdown === link.name && (
                  <div className="ml-4 mt-2 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-[#ff8c42]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
