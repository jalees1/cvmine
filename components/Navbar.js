// "use client"; // Indicates that this component uses client-side rendering

// import Link from 'next/link';
// import { useState } from 'react';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button'; // Importing a custom Button component
// import { Menu } from 'lucide-react'; // Importing the Menu icon from lucide-react
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; // Importing custom Sheet components

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false); // State to manage the open/close status of the mobile sheet menu

//   // Function to toggle the sheet's open/closed state
//   const toggleSheet = () => setIsOpen(!isOpen);

//   return (
//     <div className="border-b border-gray-200 bg-white">
//       {/* Mobile Hamburger Menu */}
//       <div className="md:hidden ml-4"> {/* Only visible on mobile devices */}
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           {/* Trigger for opening the sheet */}
//           <SheetTrigger asChild>
//             <Button variant="ghost" size="icon" aria-label="Open navigation menu">
//               <Menu className="h-6 w-6" /> {/* Menu icon */}
//             </Button>
//           </SheetTrigger>
//           {/* Content of the sheet that slides in */}
//           <SheetContent side="left" className="w-[300px] bg-orange-500">
//             <div className="flex flex-col space-y-4 mt-8 items-center">
//               {/* Sign In Button in the mobile menu */}
//               <Button
//                 variant="primary"
//                 className="text-base border border-black flex items-center px-4 py-2 rounded-sm bg-white hover:bg-gray-300 transition-colors duration-300"
//               >
//                 <Image src="/googlelogo.png" alt="Google Logo" width={20} height={20} className="mr-2" />
//                 Sign In
//               </Button>
//               {/* Navigation Links in the mobile menu */}
//               <Link href="/" className="text-lg text-white" onClick={() => setIsOpen(false)}>Home</Link>
//               <Link href="/jobs" className="text-lg text-white" onClick={() => setIsOpen(false)}>Jobs</Link>
//               <Link href="/cv-builder" className="text-lg text-white" onClick={() => setIsOpen(false)}>CV Builder</Link>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>

//       {/* Top Navbar - Visible only on desktop */}
    

//       {/* Main Navigation */}
//       <nav className="hidden md:flex items-center justify-between text-base font-sans h-20">
//         {/* Logo Section */}
//         <div className="flex items-center p-2 ml-4 md:ml-4">
//           <Link href="/dashboard">
//             <img src="/cvminelogo.png" alt="CV Mine Logo" className="h-14" />
//           </Link>
//         </div>

//         {/* Main Nav Links - Visible only on desktop */}
//         <div className="hidden md:flex items-center space-x-6 p-2 gap-4">
//           <NavLink href="/" icon="/icon-home.jpg" text="Home" /> {/* Home link */}
//           <NavLink href="/jobs" icon="/icon-job.jpeg" text="Jobs & Training" /> {/* Jobs link */}
//           <NavLink href="/cv-builder" icon="/icon-cv.jpeg" text="CV Builder" /> {/* CV Builder link */}

//           {/* Sign In Button in the desktop navigation */}
//           <Button
//             variant="primary"
//             className="text-base border border-gray-300 flex items-center px-4 py-2 rounded-sm bg-white hover:bg-gray-100 transition-colors duration-300"
//           >
//             <Image src="/googlelogo.png" alt="Google Logo" width={20} height={20} className="mr-2" />
//             Sign In
//           </Button>
//         </div>
//       </nav>
//     </div>
//   );
// }

// // Helper component for nav links
// const NavLink = ({ href, icon, text }) => (
//   <Link
//     href={href}
//     className="text-base font-normal flex items-center transition-colors hover:text-orange-500 text-gray-700"
//   >
//     <Image src={icon} alt={`${text} Icon`} width={20} height={20} className="mr-2" />
//     {text} {/* Display the text next to the icon */}
//   </Link>
// );




"use client"; // Indicates that this component uses client-side rendering

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button'; // Importing a custom Button component
import { Menu, Home, Briefcase, FileText, Bell, CheckCircle, LogIn } from 'lucide-react'; // Importing icons for navigation and alerts
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; // Importing custom Sheet components
import Image from 'next/image'; // Importing next/image for the Sign In button logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the open/close status of the mobile sheet menu

  // Function to toggle the sheet's open/closed state
  const toggleSheet = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-white bg-white py-4"> {/* Added top padding */}
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
                className="text-base border border-black flex items-center px-4 py-2 rounded-sm bg-white hover:bg-gray-300 transition-colors duration-300"
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
      <nav className="hidden md:flex items-center justify-between text-base font-sans h-20">
        {/* Logo Section */}
        <div className="flex items-center p-2 ml-10 md:ml-10"> {/* Moved logo slightly to the right */}
          <Link href="/dashboard">
            <img src="/cvminelogo.png" alt="CV Mine Logo" className="h-14" />
          </Link>
        </div>

        {/* Main Nav Links - Visible only on desktop */}
        <div className="hidden md:flex items-center space-x-6 p-2 gap-4">
          <NavLink href="/" icon={<Home className="h-5 w-5" />} text="Home" /> {/* Home link */}
          <NavLink href="/jobs" icon={<Briefcase className="h-5 w-5" />} text="Jobs & Training" /> {/* Jobs link */}
          <NavLink href="/cv-builder" icon={<FileText className="h-5 w-5" />} text="CV Builder" /> {/* CV Builder link */}
          <NavLink href="/alerts" icon={<Bell className="h-5 w-5" />} text="Alerts" /> {/* Alerts link */}
          <NavLink href="/applied" icon={<CheckCircle className="h-5 w-5" />} text="Applied" /> {/* Applied link */}
        </div>

        {/* Google Sign-In Button */}
        <div className="flex items-center p-2 space-x-6 mr-10"> {/* Adjusted the spacing here */}
          <Button
            variant="primary"
            className="text-base border border-gray-300 flex items-center px-4 py-2 rounded-sm bg-white hover:bg-gray-100 transition-colors duration-300"
          >
            <LogIn className="h-5 w-5 mr-2" /> {/* Login icon next to Google */}
            <Image src="/googlelogo.png" alt="Google Logo" width={20} height={20} className="mr-2" />
            Sign In
          </Button>
        </div>
      </nav>
    </div>
  );
}

// Helper component for nav links
const NavLink = ({ href, icon, text }) => {
  return (
    <Link
      href={href}
      className="relative group text-sm font-normal flex items-center transition-colors hover:text-blue-500 text-gray-700"
    >
      {icon}
      <span className="ml-2">{text}</span>
      
      {/* Line on hover */}
      <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 transition-transform duration-300 origin-left group-hover:scale-x-100 scale-x-0" />
    </Link>
  );
};


  