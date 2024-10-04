"use client"; // Indicates that this component uses client-side rendering

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Importing a custom Button component
import TopNavbar from './TopNavbar'; // Importing the TopNavbar component
import { Menu } from 'lucide-react'; // Importing the Menu icon from lucide-react
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; // Importing custom Sheet components

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the open/close status of the mobile sheet menu

  // Function to toggle the sheet's open/closed state
  const toggleSheet = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200 bg-white">
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden ml-4"> {/* Only visible on mobile devices */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          {/* Trigger for opening the sheet */}
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open navigation menu">
              <Menu className="h-6 w-6" /> {/* Menu icon */}
            </Button>
          </SheetTrigger>
          {/* Content of the sheet that slides in */}
          <SheetContent side="left" className="w-[300px] bg-orange-500">
            <div className="flex flex-col space-y-4 mt-8 items-center">
              {/* Sign In Button in the mobile menu */}
              <Button
                variant="primary"
                className="text-base border border-white flex items-center px-4 py-2 rounded-sm bg-white hover:bg-gray-100 transition-colors duration-300"
              >
                <Image src="/googlelogo.png" alt="Google Logo" width={20} height={20} className="mr-2" />
                Sign In
              </Button>
              {/* Navigation Links in the mobile menu */}
              <Link href="/" className="text-lg text-white" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/jobs" className="text-lg text-white" onClick={() => setIsOpen(false)}>Jobs</Link>
              <Link href="/cv-builder" className="text-lg text-white" onClick={() => setIsOpen(false)}>CV Builder</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Top Navbar - Visible only on desktop */}
      {/* Uncomment this to add the TopNavbar component */}
      {/* <TopNavbar /> */}

      {/* Main Navigation */}
      <nav className="hidden md:flex items-center justify-between text-base font-sans h-20">
        {/* Logo Section */}
        <div className="flex items-center p-2 ml-4 md:ml-4">
          <Link href="/dashboard">
            <img src="/cvminelogo.png" alt="CV Mine Logo" className="h-14" />
          </Link>
        </div>

        {/* Main Nav Links - Visible only on desktop */}
        <div className="hidden md:flex items-center space-x-6 p-2 gap-4">
          <NavLink href="/" icon="/icon-home.jpg" text="Home" /> {/* Home link */}
          <NavLink href="/jobs" icon="/icon-job.jpeg" text="Jobs & Training" /> {/* Jobs link */}
          <NavLink href="/cv-builder" icon="/icon-cv.jpeg" text="CV Builder" /> {/* CV Builder link */}

          {/* Sign In Button in the desktop navigation */}
          <Button
            variant="primary"
            className="text-base border border-gray-300 flex items-center px-4 py-2 rounded-sm bg-white hover:bg-gray-100 transition-colors duration-300"
          >
            <Image src="/googlelogo.png" alt="Google Logo" width={20} height={20} className="mr-2" />
            Sign In
          </Button>
        </div>
      </nav>
    </div>
  );
}

// Helper component for nav links
const NavLink = ({ href, icon, text }) => (
  <Link
    href={href}
    className="text-base font-normal flex items-center transition-colors hover:text-orange-500 text-gray-700"
  >
    <Image src={icon} alt={`${text} Icon`} width={20} height={20} className="mr-2" />
    {text} {/* Display the text next to the icon */}
  </Link>
);
