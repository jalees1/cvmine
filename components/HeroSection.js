import React from 'react';
import { Button } from '@/components/ui/button'; // Importing custom Button component
import { Card, CardContent } from '@/components/ui/card'; // Importing Card and CardContent components
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Importing Select components for dropdowns
import { Input } from '@/components/ui/input'; // Importing custom Input component
import { Search } from 'lucide-react'; // Importing Search icon from Lucide

// HeroSection Component
function HeroSection() {
  return (
    <div className="bg-blue-50 p-4 md:p-1"> {/* Outer container with background color and padding */}
      <div className="max-w-4xl mx-auto space-y-8 p-4"> {/* Centered content with spacing and padding */}
        {/* Main Header */}
        <h1 className="text-center text-2xl md:text-4xl font-bold text-gray-800">
  Let the CV be visible to millions of jobs across 
  <span className="relative inline-block">
    <span className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-200 to-blue-300 opacity-30" />
    <span className="relative text-blue-500">150+ countries</span>
  </span>, either directly or with your consent.
</h1>

        {/* Form Container for Job Search */}
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Select Dropdown for All/Jobs/Companies */}
          <Select className="w-full md:w-[100px]"> {/* Full width on mobile, fixed width on desktop */}
            <SelectTrigger className="bg-transparent md:bg-white"> {/* Trigger for dropdown */}
              <SelectValue placeholder="All" /> {/* Placeholder text */}
            </SelectTrigger>
            <SelectContent className="bg-white"> {/* Dropdown content */}
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="jobs">Jobs</SelectItem>
              <SelectItem value="companies">Companies</SelectItem>
            </SelectContent>
          </Select>

          {/* Input for Keywords */}
          <div className="relative flex w-full md:flex-1 md:w-auto"> {/* Responsive input container */}
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"> {/* Search icon position */}
              <Search className="w-4 h-4" /> {/* Lucide Search icon */}
            </span>
            <Input
              className="pl-10 w-full" // Padding left for the search icon
              placeholder="Keywords" // Input placeholder
            />
          </div>

          {/* Input for Experience */}
          <div className="flex flex-col w-full md:w-auto"> {/* Container for experience input */}
            <div className="flex items-center space-x-2"> {/* Flex container for label and input */}
              <Input className="w-full md:w-24" placeholder="Experience" /> {/* Experience input */}
              <label htmlFor="years" className="text-sm text-gray-600">Years</label> {/* Label for experience */}
            </div>
          </div>

          {/* Select Dropdown for Location */}
          <Select className="w-full md:w-[150px]"> {/* Full width on mobile, fixed width on desktop */}
            <SelectTrigger className="bg-white"> {/* Trigger for dropdown */}
              <SelectValue placeholder="Location" /> {/* Placeholder text */}
            </SelectTrigger>
            <SelectContent className="bg-white"> {/* Dropdown content */}
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
            </SelectContent>
          </Select>

          {/* Find Jobs Button */}
          <Button className="bg-blue-500 text-white w-full md:w-auto px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Find Jobs {/* Button text */}
          </Button>
        </div>

        {/* Info about Quick Sign Up */}
        <div className="text-center">
          <p className="text-lg text-gray-800">
            Go for <span className="text-blue-600 font-semibold">Quick Sign</span> up if you have a Resume or ATS friendly <span className="text-blue-600 font-semibold">AI CV Builder</span>
          </p>
        </div>

        {/* Cards Section for Promotions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Responsive grid layout */}
          {/* Card for earning ITAL Cryptocurrency */}
          <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
            <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" /> {/* Left border for effect */}
            <CardContent className="p-4 relative z-10">
              <p className="text-center">
                Sign up to earn 100 <span className="text-blue-600 font-semibold">ITAL</span> Cryptocurrency
              </p>
            </CardContent>
          </Card>

          {/* Card for referring friends */}
          <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
            <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" /> {/* Left border for effect */}
            <CardContent className="p-4 relative z-10">
              <p className="text-center">
                Refer friends to earn 20 <span className="text-blue-600 font-semibold">ITAL</span> per sign up
              </p>
            </CardContent>
          </Card>

          {/* Card for applying for jobs */}
          <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
            <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" /> {/* Left border for effect */}
            <CardContent className="p-4 relative z-10">
              <p className="text-center">
                Apply for jobs and training to earn more <span className="text-blue-600 font-semibold">ITAL</span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Link for more information about ITAL */}
        <div className="text-center">
          <a href="#" className="text-blue-600 font-semibold">Know more about ITAL Cryptocurrency</a>
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-600">
          World's first Web 3.0 (Blockchain) based Jobs and Career Development platform to help every jobseeker in the world reach the right employers and monetize their efforts through <span className="text-blue-600 font-semibold">ITAL</span> jobseeker community cryptocurrency to bring value and recognition for the efforts of the jobseeker community.
        </p>
      </div>
    </div>
  );
}

export default HeroSection; // Exporting the HeroSection component


// import React from "react";
// import { Button } from "@/components/ui/button"; // Importing custom Button component
// import { Card, CardContent } from "@/components/ui/card"; // Importing Card and CardContent components
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"; // Importing Select components for dropdowns
// import { Input } from "@/components/ui/input"; // Importing custom Input component
// import { Search } from "lucide-react"; // Importing Search icon from Lucide
// import { jobsdata } from "@/data/jobsdata";




// // HeroSection Component
// function HeroSection() {
//   return (
//     <div className="bg-white p-4 md:p-1">
//       {" "}
//       {/* Outer container with background color and padding */}
//       <div className="max-w-4xl mx-auto space-y-8 p-4 mt-1">
//         {" "}
//         {/* Centered content with spacing and padding */}
//         {/* Main Header */}
//         <h1 className="text-center text-2xl md:text-4xl font-bold text-gray-800">
//   Let the CV be visible to millions of jobs across 
//   <span className="relative inline-block">
//     <span className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-200 to-blue-300 opacity-30" />
//     <span className="relative text-blue-500">150+ countries</span>
//   </span>, either directly or with your consent.
// </h1>



// {/* Form Container for Job Search */}
// <div className="rounded-lg shadow-sm p-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full mt-0">
//   {/* Combined Search Input with Dropdowns */}
//   <div className="flex flex-col md:flex-row items-center w-full border border-gray-300 rounded-lg p-3"> {/* Increased padding for the whole box */}
    
//     {/* Select Dropdown for All/Jobs/Companies */}
//     <Select className="md:w-[120px] border-r border-gray-300 pr-2">
//       <SelectTrigger className="bg-transparent md:bg-white">
//         <SelectValue placeholder="All" /> {/* Placeholder text */}
//       </SelectTrigger>
//       <SelectContent className="bg-white">
//         <SelectItem value="all">All</SelectItem>
//         <SelectItem value="jobs">Jobs</SelectItem>
//         <SelectItem value="companies">Companies</SelectItem>
//       </SelectContent>
//     </Select>

//     {/* Input for Keywords */}
//     <div className="relative flex w-full border-0 focus:ring-0 md:mr-2">
//       <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
//         <Search className="w-4 h-4" /> {/* Lucide Search icon */}
//       </span>
//       <Input
//         className="pl-10 w-full border-0 focus:ring-0 rounded-l" // Padding left for the search icon
//         placeholder="Keywords" // Input placeholder
//       />
//     </div>

//     {/* Input for Experience */}
//     <div className="flex flex-col md:flex-row items-center md:mx-2 w-full md:w-auto">
//       <Input className="border-0 focus:ring-0 w-full md:w-[120px]" placeholder="Experience" />
//       <label htmlFor="years" className="text-sm text-gray-600 md:ml-2 mt-2 md:mt-0">
//         Years
//       </label>
//     </div>

//     {/* Select Dropdown for Location */}
//     <Select className="md:w-[150px] border-l border-gray-300">
//       <SelectTrigger className="bg-white">
//         <SelectValue placeholder="Location" /> {/* Placeholder text */}
//       </SelectTrigger>
//       <SelectContent className="bg-white">
//         <SelectItem value="us">United States</SelectItem>
//         <SelectItem value="uk">United Kingdom</SelectItem>
//         <SelectItem value="ca">Canada</SelectItem>
//       </SelectContent>
//     </Select>
//   </div>

//   {/* Find Jobs Button */}
//   <Button className="bg-blue-500 text-white w-full md:w-auto px-4 py-2 rounded hover:bg-blue-600 transition duration-300 md:ml-2">
//     Find Jobs {/* Button text */}
//   </Button>
// </div>





//         {/* Info about Quick Sign Up */}
//         <div className="text-center">
//           <p className="text-lg text-gray-800">
//             Go for{" "}
//             <span className="text-blue-600 font-semibold">Quick Sign</span> up
//             if you have a Resume or ATS friendly{" "}
//             <span className="text-blue-600 font-semibold">AI CV Builder</span>
//           </p>
//         </div>


       



//         {/* Cards Section for Promotions */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {" "}
//           {/* Responsive grid layout */}
//           {/* Card for earning ITAL Cryptocurrency */}
//           <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
//             <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" />{" "}
//             {/* Left border for effect */}
//             <CardContent className="p-4 relative z-10">
//               <p className="text-center">
//                 Sign up to earn 100{" "}
//                 <span className="text-blue-600 font-semibold">ITAL</span>{" "}
//                 Cryptocurrency
//               </p>
//             </CardContent>
//           </Card>
//           {/* Card for referring friends */}
//           <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
//             <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" />{" "}
//             {/* Left border for effect */}
//             <CardContent className="p-4 relative z-10">
//               <p className="text-center">
//                 Refer friends to earn 20{" "}
//                 <span className="text-blue-600 font-semibold">ITAL</span> per
//                 sign up
//               </p>
//             </CardContent>
//           </Card>
//           {/* Card for applying for jobs */}
//           <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
//             <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" />{" "}
//             {/* Left border for effect */}
//             <CardContent className="p-4 relative z-10">
//               <p className="text-center">
//                 Apply for jobs and training to earn more{" "}
//                 <span className="text-blue-600 font-semibold">ITAL</span>
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//         {/* Link for more information about ITAL */}
//         <div className="text-center">
//           <a href="#" className="text-blue-600 font-semibold">
//             Know more about ITAL Cryptocurrency
//           </a>
//         </div>
//         {/* Footer Text */}
//         <p className="text-center text-sm text-gray-600">
//           World's first Web 3.0 (Blockchain) based Jobs and Career Development
//           platform to help every jobseeker in the world reach the right
//           employers and monetize their efforts through{" "}
//           <span className="text-blue-600 font-semibold">ITAL</span> jobseeker
//           community cryptocurrency to bring value and recognition for the
//           efforts of the jobseeker community.
//         </p>
//       </div>




//     </div>
//   );
// }

// export default HeroSection; // Exporting the HeroSection component









// import React from "react";
// import { Button } from "@/components/ui/button"; // Importing custom Button component
// import { Card, CardContent } from "@/components/ui/card"; // Importing Card and CardContent components
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"; // Importing Select components for dropdowns
// import { Input } from "@/components/ui/input"; // Importing custom Input component
// import { Search } from "lucide-react"; // Importing Search icon from Lucide
// import { jobData } from "@/data/jobsdata"; // Importing job data
// import JobCard from "@\components\jobcard"; // Importing JobCard component

// // HeroSection Component
// function HeroSection() {
//   return (
//     <div className="bg-white p-4 md:p-1">
//       {/* Outer container with background color and padding */}
//       <div className="max-w-4xl mx-auto space-y-8 p-4 mt-1">
//         {/* Main Header */}
//         <h1 className="text-center text-2xl md:text-4xl font-bold text-gray-800">
//           Let the CV be visible to millions of jobs across 
//           <span className="relative inline-block">
//             <span className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-200 to-blue-300 opacity-30" />
//             <span className="relative text-blue-500">150+ countries</span>
//           </span>, either directly or with your consent.
//         </h1>

//         {/* Form Container for Job Search */}
//         <div className="rounded-lg shadow-sm p-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full mt-0">
//           {/* Combined Search Input with Dropdowns */}
//           <div className="flex flex-col md:flex-row items-center w-full border border-gray-300 rounded-lg p-3">
//             {/* Select Dropdown for All/Jobs/Companies */}
//             <Select className="md:w-[120px] border-r border-gray-300 pr-2">
//               <SelectTrigger className="bg-transparent md:bg-white">
//                 <SelectValue placeholder="All" />
//               </SelectTrigger>
//               <SelectContent className="bg-white">
//                 <SelectItem value="all">All</SelectItem>
//                 <SelectItem value="jobs">Jobs</SelectItem>
//                 <SelectItem value="companies">Companies</SelectItem>
//               </SelectContent>
//             </Select>

//             {/* Input for Keywords */}
//             <div className="relative flex w-full border-0 focus:ring-0 md:mr-2">
//               <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
//                 <Search className="w-4 h-4" />
//               </span>
//               <Input
//                 className="pl-10 w-full border-0 focus:ring-0 rounded-l"
//                 placeholder="Keywords"
//               />
//             </div>

//             {/* Input for Experience */}
//             <div className="flex items-center md:mx-2">
//               <Input className="border-0 focus:ring-0 w-[120px]" placeholder="Experience" />
//               <label htmlFor="years" className="text-sm text-gray-600 ml-2">
//                 Years
//               </label>
//             </div>

//             {/* Select Dropdown for Location */}
//             <Select className="md:w-[150px] border-l border-gray-300">
//               <SelectTrigger className="bg-white">
//                 <SelectValue placeholder="Location" />
//               </SelectTrigger>
//               <SelectContent className="bg-white">
//                 <SelectItem value="us">United States</SelectItem>
//                 <SelectItem value="uk">United Kingdom</SelectItem>
//                 <SelectItem value="ca">Canada</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Find Jobs Button */}
//           <Button className="bg-blue-500 text-white w-full md:w-auto px-4 py-2 rounded hover:bg-blue-600 transition duration-300 md:ml-2">
//             Find Jobs
//           </Button>
//         </div>

//         {/* Info about Quick Sign Up */}
//         <div className="text-center">
//           <p className="text-lg text-gray-800">
//             Go for{" "}
//             <span className="text-blue-600 font-semibold">Quick Sign</span> up
//             if you have a Resume or ATS friendly{" "}
//             <span className="text-blue-600 font-semibold">AI CV Builder</span>
//           </p>
//         </div>

//         {/* Cards Section for Promotions */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* Card for earning ITAL Cryptocurrency */}
//           <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
//             <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" />
//             <CardContent className="p-4 relative z-10">
//               <p className="text-center">
//                 Sign up to earn 100{" "}
//                 <span className="text-blue-600 font-semibold">ITAL</span>{" "}
//                 Cryptocurrency
//               </p>
//             </CardContent>
//           </Card>
//           {/* Card for referring friends */}
//           <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
//             <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" />
//             <CardContent className="p-4 relative z-10">
//               <p className="text-center">
//                 Refer friends to earn 20{" "}
//                 <span className="text-blue-600 font-semibold">ITAL</span> per
//                 sign up
//               </p>
//             </CardContent>
//           </Card>
//           {/* Card for applying for jobs */}
//           <Card className="relative border border-orange-500 transition-transform duration-300 transform hover:translate-x-1">
//             <div className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300 w-0 hover:w-2" />
//             <CardContent className="p-4 relative z-10">
//               <p className="text-center">
//                 Apply for jobs and training to earn more{" "}
//                 <span className="text-blue-600 font-semibold">ITAL</span>
//               </p>
//             </CardContent>
//           </Card>
//         </div>
        
//         {/* Link for more information about ITAL */}
//         <div className="text-center">
//           <a href="#" className="text-blue-600 font-semibold">
//             Know more about ITAL Cryptocurrency
//           </a>
//         </div>

//         {/* Footer Text */}
//         <p className="text-center text-sm text-gray-600">
//           World's first Web 3.0 (Blockchain) based Jobs and Career Development
//           platform to help every jobseeker in the world reach the right
//           employers and monetize their efforts through{" "}
//           <span className="text-blue-600 font-semibold">ITAL</span> jobseeker
//           community cryptocurrency to bring value and recognition for the
//           efforts of the jobseeker community.
//         </p>
        
//         {/* Job Cards Section */}
//         <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mt-8">
//           Latest Job Listings
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {jobData.map((job) => (
//             <JobCard key={job.id} job={job} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection; // Exporting the HeroSection component

