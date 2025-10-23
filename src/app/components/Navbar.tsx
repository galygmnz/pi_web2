"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation"; 
// Authentication was using Clerk. Removed Clerk to switch to JWT.
// TODO: Integrate JWT auth and replace the static buttons below with real logic.

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const router = useRouter(); 


  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY: number = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

    const handleLogin = () => {
    router.push("./dashboard");
  };

  return (
    <nav
      className={`fixed left-0 right-0 bg-[#006f79] shadow-lg z-40 h-20 flex items-center transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center font-bold text-white">
            { <Image
              src="/OrbixLogo.png"
              alt="OrbixLogo"
              width={130}
              height={120}
              className="mr-10"
            /> }
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <div
            className={`flex-col lg:flex-row lg:flex items-center gap-2 ${
              isOpen ? "flex" : "hidden"
            } absolute lg:static top-20 left-0 w-full h-60 lg:w-auto bg-[#006f79] lg:bg-transparent shadow-lg lg:shadow-none z-40`}
          >
            <a
              href="#Nosotros"
              className="block px-5 py-2 text-lime-200 hover:text-neutral-300"
            >
              Nosotros
            </a>
            <a
              href="#Canchas"
              className="block px-5 py-2 text-lime-200 hover:text-neutral-300"
            >
              Canchas
            </a>
            <a
              href="#contacto"
              className="block px-5 py-2 text-lime-200 hover:text-neutral-300"
            >
              Contacto
            </a>

            <div className="ml-0 lg:ml-4 mt-2 lg:mt-0">
              {/* TODO: Replace with JWT-based conditional UI. For now show static buttons */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLogin}
                  className="px-6 py-2 rounded-full bg-cyan-900 text-lime-200 font-semibold hover:bg-[#87AECE] transition"
                >
                  Iniciar Sesión
                </button>
                <button className="px-6 py-2 rounded-full bg-cyan-900 text-lime-200 font-semibold hover:bg-[#87AECE] transition">
                  Registrarse
                </button>
              </div>
              {/* When implementing login, show user menu here instead of the buttons */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
