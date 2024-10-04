import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

function HeroSection() {
  return (
    <div className="bg-blue-50 p-4 md:p-1">
      <div className="max-w-4xl mx-auto space-y-8 p-4">
        <h1 className="text-center text-lg md:text-xl text-gray-800">
          Let the CV be visible to millions of jobs across 150+ countries, either directly or with your consent
        </h1>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Select Dropdown for All/Jobs/Companies */}
          <Select className="w-full md:w-[100px] bg-transparent md:bg-white">
            <SelectTrigger>
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="jobs">Jobs</SelectItem>
              <SelectItem value="companies">Companies</SelectItem>
            </SelectContent>
          </Select>

          {/* Input for Keywords */}
          <div className="flex flex-1 items-center space-x-2">
            <span className="text-gray-400">
              <i className="lucide lucide-search" /> {/* Adjust based on your icon library */}
            </span>
            <Input className="flex-1 md:w-[100px]" placeholder="Keywords" />
          </div>

          {/* Input for Experience */}
          <div className="flex flex-col w-full md:w-auto">
            <div className="flex items-center space-x-2">
              <Input className="w-full md:w-24" placeholder="Experience" />
              <label htmlFor="years" className="text-sm text-gray-600">Years</label>
            </div>
          </div>

          {/* Select Dropdown for Location */}
          <Select className="w-full md:w-[150px] bg-white">
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
            </SelectContent>
          </Select>

          {/* Find Jobs Button */}
          <Button className="bg-blue-500 text-white w-full md:w-auto px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Find Jobs
          </Button>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-800">
            Go for <span className="text-blue-600 font-semibold">Quick Sign</span> up if you have a Resume or ATS friendly <span className="text-blue-600 font-semibold">AI CV Builder</span>
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
            <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" />
            <CardContent className="p-4 relative z-10">
              <p className="text-center">
                Sign up to earn 100 <span className="text-blue-600 font-semibold">ITAL</span> Cryptocurrency
              </p>
            </CardContent>
          </Card>

          <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
            <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" />
            <CardContent className="p-4 relative z-10">
              <p className="text-center">
                Refer friends to earn 20 <span className="text-blue-600 font-semibold">ITAL</span> per sign up
              </p>
            </CardContent>
          </Card>

          <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
            <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" />
            <CardContent className="p-4 relative z-10">
              <p className="text-center">
                Apply for jobs and training to earn more <span className="text-blue-600 font-semibold">ITAL</span>
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <a href="#" className="text-blue-600 font-semibold">Know more about ITAL Cryptocurrency</a>
        </div>

        <p className="text-center text-sm text-gray-600">
          World's first Web 3.0 (Blockchain) based Jobs and Career Development platform to help every jobseeker in the world reach the right employers and monetize their efforts through <span className="text-blue-600 font-semibold">ITAL</span> jobseeker community cryptocurrency to bring value and recognition for the efforts of the jobseeker community.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;


// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Input } from '@/components/ui/input';

// function HeroSection() {
//   return (
//     <div className="bg-blue-50 p-4 md:p-1">
//       <div className="max-w-4xl mx-auto space-y-8 p-4">
//         <h1 className="text-center text-lg md:text-xl text-gray-800">
//           Let the CV be visible to millions of jobs across 150+ countries, either directly or with your consent
//         </h1>

//         <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 h-auto">
//           <Select>
//             <SelectTrigger className="w-full md:w-[100px]">
//               <SelectValue placeholder="All" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All</SelectItem>
//               <SelectItem value="jobs">Jobs</SelectItem>
//               <SelectItem value="companies">Companies</SelectItem>
//             </SelectContent>
//           </Select>
//           <div className="flex flex-1 items-center space-x-2">
//             <span className="text-gray-400">
//               <i className="lucide lucide-search" /> {/* Adjust based on your icon library */}
//             </span>
//             <Input className="flex-1" placeholder="Keywords" />
//           </div>

//           <Input className="w-full md:w-24" placeholder="Experience" />
//           <div className="flex flex-col">
//             <label htmlFor="years" className="text-sm">Years</label>
//           </div>
//           <Select>
//             <SelectTrigger className="w-full md:w-[150px]">
//               <SelectValue placeholder="Location" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="us">United States</SelectItem>
//               <SelectItem value="uk">United Kingdom</SelectItem>
//               <SelectItem value="ca">Canada</SelectItem>
//             </SelectContent>
//           </Select>
//           <Button className="bg-blue-500 text-white w-full md:w-auto px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
//             Find Jobs
//           </Button>
//         </div>

//         <div className="text-center">
//           <p className="text-lg text-gray-800">
//             Go for <span className="text-blue-600 font-semibold">Quick Sign</span> up if you have a Resume or ATS friendly <span className="text-blue-600 font-semibold">AI CV Builder</span>
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
//             <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" />
//             <CardContent className="p-4 relative z-10">
//               <p className="text-center">
//                 Sign up to earn 100 <span className="text-blue-600 font-semibold">ITAL</span> Cryptocurrency
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
//             <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" />
//             <CardContent className="p-4 relative z-10">
//               <p className="text-center">
//                 Refer friends to earn 20 <span className="text-blue-600 font-semibold">ITAL</span> per sign up
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
//             <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" />
//             <CardContent className="p-4 relative z-10">
//               <p className="text-center">
//                 Apply for jobs and training to earn more <span className="text-blue-600 font-semibold">ITAL</span>
//               </p>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="text-center">
//           <a href="#" className="text-blue-600 font-semibold">Know more about ITAL Cryptocurrency</a>
//         </div>

//         <p className="text-center text-sm text-gray-600">
//           World's first Web 3.0 (Blockchain) based Jobs and Career Development platform to help every jobseeker in the world reach the right employers and monetize their efforts through <span className="text-blue-600 font-semibold">ITAL</span> jobseeker community cryptocurrency to bring value and recognition for the efforts of the jobseeker community.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;

// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Input } from '@/components/ui/input';
// import { Search } from 'lucide-react';

// export default function HeroSection() {
//   return (
//     <div className="bg-blue-50 p-4">
//       <div className="max-w-4xl mx-auto space-y-8">
//         <h1 className="text-center text-lg md:text-xl text-gray-800">
//           Let the CV be visible to millions of jobs across 150+ countries, either directly or with your consent
//         </h1>

//         <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
//           <Select>
//             <SelectTrigger className="w-full">
//               <SelectValue placeholder="All" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All</SelectItem>
//               <SelectItem value="jobs">Jobs</SelectItem>
//               <SelectItem value="companies">Companies</SelectItem>
//             </SelectContent>
//           </Select>

//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <Input className="pl-10" placeholder="Keywords" />
//           </div>

//           <div className="flex items-center space-x-2">
//             <Input className="flex-grow" placeholder="Experience" />
//             <span className="text-sm text-gray-600">years</span>
//           </div>

//           <Select>
//             <SelectTrigger className="w-full">
//               <SelectValue placeholder="Location" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="us">United States</SelectItem>
//               <SelectItem value="uk">United Kingdom</SelectItem>
//               <SelectItem value="ca">Canada</SelectItem>
//             </SelectContent>
//           </Select>

//           <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
//             Find Jobs
//           </Button>
//         </div>
//         </div>

//         <div className="text-center">
//           <p className="text-lg text-gray-800">
//             Go for <span className="text-blue-600 font-semibold">Quick Sign</span> up if you have a Resume or ATS friendly <span className="text-blue-600 font-semibold">AI CV Builder</span>
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
//             <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" />
//             <CardContent className="p-4 relative z-10">
//               <p className="text-center">
//                 Sign up to earn 100 <span className="text-blue-600 font-semibold">ITAL</span> Cryptocurrency
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
//             <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" />
//             <CardContent className="p-4 relative z-10">
//               <p className="text-center">
//                 Refer friends to earn 20 <span className="text-blue-600 font-semibold">ITAL</span> per sign up
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
//             <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" />
//             <CardContent className="p-4 relative z-10">
//               <p className="text-center">
//                 Apply for jobs and training to earn more <span className="text-blue-600 font-semibold">ITAL</span>
//               </p>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="text-center">
//           <a href="#" className="text-blue-600 font-semibold">Know more about ITAL Cryptocurrency</a>
//         </div>

//         <p className="text-center text-sm text-gray-600">
//           World's first Web 3.0 (Blockchain) based Jobs and Career Development platform to help every jobseeker in the world reach the right employers and monetize their efforts through <span className="text-blue-600 font-semibold">ITAL</span> jobseeker community cryptocurrency to bring value and recognition for the efforts of the jobseeker community.
//         </p>
      
    
//       </div>
  
//   );
// }
