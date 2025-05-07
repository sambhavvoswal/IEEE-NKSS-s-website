import React from 'react'
import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Committees", "Events", "NKCON"];
  const socialIcons = [
    { name: "LinkedIn", icon: "/linkedin.svg", link: "https://linkedin.com" },
    { name: "Instagram", icon: "/instagram.svg", link: "https://instagram.com" },
    { name: "Facebook", icon: "/facebook.svg", link: "https://facebook.com" },
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-4 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-12" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              className="text-gray-800 font-medium hover:text-blue-600 transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {socialIcons.map(({ name, icon, link }) => (
            <a key={name} href={link} target="_blank" rel="noopener noreferrer">
              <img src={icon} alt={name} className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4">
          {navItems.map((item) => (
            <button
              key={item}
              className="block w-full text-left text-gray-800 font-medium py-2 hover:text-blue-600"
            >
              {item}
            </button>
          ))}
          <div className="flex space-x-4 mt-4">
            {socialIcons.map(({ name, icon, link }) => (
              <a key={name} href={link} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={name} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

