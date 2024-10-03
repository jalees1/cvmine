"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import TopNavbar from './TopNavbar'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSheet = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  return (
    <div className="border-b border-gray-200 bg-white"> {/* Added background color here */}
      <TopNavbar />
      <nav className="flex items-center justify-between text-base font-sans h-20"> {/* Keep height as is */}
        <div className="md:hidden">
          {/* Mobile menu button (unchanged) */}
        </div>

        {/* Logo Section */}
        <div className="flex items-center p-2 ml-4"> {/* Adjust margin-left as needed */}
          <Link href="/dashboard">
            <img src="/cvminelogo.png"  alt="CV Mine Logo" className="h-14" /> {/* Increased logo size */}
          </Link>
        </div>

        {/* Main Nav Links */}
        <div className="hidden md:flex items-center space-x-6 p-2 gap-4">
          <NavLink href="/" icon="/icon-home.jpg" text="Home" active={pathname === "/"} />
          <NavLink href="/jobs" icon="/icon-job.jpeg" text="Jobs & Training" active={pathname === "/jobs"} />
          <NavLink href="/cv-builder" icon="/icon-cv.jpeg" text="CV Builder" active={pathname === "/cv-builder"} />
          
          {/* Sign In Button */}
          <Button
            variant="primary"
            className="text-base border border-gray-300 flex items-center px-4 py-2 rounded-sm bg-white hover:bg-gray-100 transition-colors duration-300"
          >
            <Image src="/googlelogo.png" alt="Google Logo" width={20} height={20} className="mr-2" />
            Sign in
          </Button>
        </div>
      </nav>
    </div>
  );
}

// Helper component for nav links
const NavLink = ({ href, icon, text, active }) => (
  <Link
    href={href}
    className={`text-base font-normal flex items-center transition-colors hover:text-orange-500 relative ${
      active ? 'text-orange-500' : 'text-gray-700'
    }`}
  >
    <Image src={icon} alt={`${text} Icon`} width={20} height={20} className="mr-2" />
    {text}
    {active && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500" style={{ bottom: '-10px' }}></span>
    )}
  </Link>
);





// "use client";

// import Link from 'next/link';
// import { useState } from 'react';
// import Image from 'next/image';
// import { Button } from './ui/Button'; 
// import { Sheet, SheetTrigger, SheetContent } from './ui/Sheet';
// import TopNavbar from './TopNavbar'; 

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
  
//   const toggleSheet = () => setIsOpen(!isOpen);

//   return (
//     <div className="border border-dashed border-orange-500"> {/* Removed padding to attach border directly */}
//       <TopNavbar /> {/* Top Navbar */}
//       <nav className="flex items-center justify-between bg-white shadow-md text-sm font-poppins"> {/* Removed padding */}
       
//         <div className="md:hidden">
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild>
//               <Button onClick={toggleSheet} className="p-2">
//                 <div className="flex flex-col space-y-1">
//                   <span className="block h-1 w-6 bg-black"></span>
//                   <span className="block h-1 w-6 bg-black"></span>
//                   <span className="block h-1 w-6 bg-black"></span>
//                 </div>
//               </Button>
//             </SheetTrigger>
//             <SheetContent className="bg-orange-500 text-white w-full h-full flex flex-col justify-center items-center">
//               <div className="flex flex-col items-center space-y-4">
//                 <Button variant="primary" className="w-full max-w-xs text-center border border-white text-sm p-2 flex items-center">
//                   <Image src="/googlelogo.png" alt="Google Logo" width={16} height={16} className="inline mr-2" />
//                   Sign In
//                 </Button>
//                 <Link href="/" className="text-lg">Home</Link>
//                 <Link href="/jobs" className="text-lg">Jobs</Link>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>

        
//         <div className="flex items-center p-2"> 
//         <Link href="/dashboard">
//         <img src="/cvminelogo.png" alt="Company Logo" className='h-16'/>
      
//         </Link>
//         </div>

       
//         <div className="hidden md:flex items-center space-x-4 p-2"> {/* Added padding here as well */}
//           <Link href="/" className="text-sm font-semibold hover:underline flex items-center">
//             <Image src="/icon-home.jpg" alt="Home Icon" width={16} height={16} className="mr-1" />
//             Home
//           </Link>
//           <Link href="/jobs" className="text-sm font-semibold hover:underline flex items-center">
//             <Image src="/icon-job.jpeg" alt="Jobs Icon" width={16} height={16} className="mr-1" />
//             Jobs
//           </Link>
//           <Link href="/cv-builder" className="text-sm font-semibold hover:underline flex items-center">
//             <Image src="/icon-cv.jpeg" alt="CV Builder Icon" width={16} height={16} className="mr-1" />
//             CV Builder
//           </Link>
//           <Button variant="primary" className="text-sm ml-2 border border-gray-300 flex items-center p-2">
//             <Image src="/googlelogo.png" alt="Google Logo" width={16} height={16} className="inline mr-2" />
//             Sign In
//           </Button>
//         </div> 
//       </nav>
//     </div> 
//   );
// }
