import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="block sm:hidden" onClick={toggleMenu}>
        <div className="space-y-1">
          <span className="block w-8 h-1 bg-black"></span>
          <span className="block w-8 h-1 bg-black"></span>
          <span className="block w-8 h-1 bg-black"></span>
        </div>
      </button>

      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <ul className="flex flex-col items-center bg-white absolute top-12 right-0 w-48 py-4 shadow-lg">
          <li>
            <a href="#home" className="p-2 block">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="p-2 block">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="p-2 block">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="p-2 block">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
