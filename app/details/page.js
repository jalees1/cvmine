import React from 'react'
import { MapPin, Calendar, Briefcase, DollarSign, Clock, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function JobDetailsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Senior Full Stack Engineer, Creator Success Full Time</h1>
          <div className="text-sm text-gray-500 flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>California</span>
            <span className="mx-2">•</span>
            <Calendar className="w-4 h-4 mr-1" />
            <span>7 hours ago</span>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Apply now</Button>
      </div>

      <div className="flex gap-8">
        <div className="w-2/3">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Employment Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Industry</p>
                    <p className="font-medium">Mechanical / Auto / Automotive, Civil / Construction</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Job Level</p>
                    <p className="font-medium">Experienced (Non - Manager)</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Salary</p>
                    <p className="font-medium">$800 - $1000</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="font-medium">1 - 2 years</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Job Type</p>
                    <p className="font-medium">Permanent</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Deadline</p>
                    <p className="font-medium">10/08/2022</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Updated</p>
                    <p className="font-medium">10/07/2022</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">Dallas, Texas Remote Friendly</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Welcome to AllStudio Team</h2>
            <p className="mb-4">AllStudio is a creative studio that creates products and utility companies. It's a world of digital and remote everything, constantly changing work patterns, platforms, and the nature of organizational creativity.</p>
            <p className="mb-4">We are looking for a talented Senior Full Stack Engineer to join our team. The ideal candidate will have a strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. The candidate will have experience in working with numerous different design platforms such as digital and print.</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Essential Knowledge, Skills, and Experience</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
              <li>5+ years of industry experience in interactive design and/or visual design</li>
              <li>Excellent interpersonal skills</li>
              <li>Aware of trends in mobile, communications, and collaboration</li>
              <li>Ability to create highly polished design artifacts, mockups, and other communication artifacts</li>
              <li>The ability to scope and estimate efforts accurately and provide team-wide transparency</li>
              <li>History of impacting shipping products with your work</li>
              <li>A Bachelor's Degree in Design (or related field) or equivalent professional experience</li>
              <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Preferred Experience</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Designing for developer-focused products</li>
              <li>Creating and applying established design principles and interaction patterns</li>
              <li>Aligning or influencing design efforts across time zones or other geographies</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Product Designer</h2>
            <p className="font-medium mb-2">Product knowledge: Deeply understand the technology and features of the product area to which you are assigned.</p>
            <p className="mb-4">Research: Provide human and business impact and insights for products.</p>
            <p className="font-medium mb-2">Deliverables: Create deliverables for your product area that express the brand, empower ease of development, and consider scalability.</p>
            <p className="mb-4">Concepts, high fidelity mockups, prototypes, and other communication materials as needed. Collect and address feedback from users and teammates throughout this user experience.</p>
            <p className="font-medium mb-2">Communication: Communicate the results of UX activities within your product area to the design team and partners.</p>
            <p>Clearly articulate your design rationale. Practice principled thinking and be able to defend your design decisions. Use clear language that simplifies complexity.</p>
          </div>

          <div className="flex items-center justify-between border-t border-b py-4 mb-6">
            <div className="text-gray-500">— AllThemes —</div>
            <div className="flex space-x-2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Apply now</Button>
              <Button variant="outline">Save job</Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">Share this job:</div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon"><Share2 className="w-4 h-4" /></Button>
              <Button variant="outline" size="icon">f</Button>
              <Button variant="outline" size="icon">in</Button>
              <Button variant="outline" size="icon">t</Button>
            </div>
          </div>
        </div>

        <div className="w-1/3">
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg mr-4"></div>
                <div>
                  <h3 className="font-semibold">AllThemes</h3>
                  <p className="text-sm text-gray-500">IT Company</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">Email: contact@allthemes.com</p>
            </CardContent>
          </Card>

          <h3 className="font-semibold mb-4">Similar jobs</h3>
          {[
            { title: "UI/UX Designer", company: "AllThemes", location: "Chicago, IL", salary: "$280/hour" },
            { title: "Frontend Developer", company: "TechCorp", location: "New York, NY", salary: "$100/hour" },
            { title: "Product Manager", company: "InnovateCo", location: "San Francisco, CA", salary: "$150/hour" },
            { title: "DevOps Engineer", company: "CloudSys", location: "Austin, TX", salary: "$130/hour" },
            { title: "Data Scientist", company: "DataMinds", location: "Seattle, WA", salary: "$200/hour" }
          ].map((job, index) => (
            <Card key={index} className="mb-4">
              <CardContent className="p-4 flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4"></div>
                <div>
                  <h4 className="font-semibold">{job.title}</h4>
                  <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
                  <p className="text-sm font-medium text-blue-600">{job.salary}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

// "use client"

// import React from 'react';
// import { MapPin, Calendar, Briefcase, DollarSign, Clock, Share2 } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// export default function JobDetailsPage() {
//   // Define job data
//   const jobData = {
//     title: "Senior Full Stack Engineer, Creator Success Full Time",
//     location: "California",
//     postedTime: "7 hours ago",
//     employmentInfo: {
//       industry: "Mechanical / Auto / Automotive, Civil / Construction",
//       jobLevel: "Experienced (Non - Manager)",
//       salary: "$800 - $1000",
//       experience: "1 - 2 years",
//       jobType: "Permanent",
//       deadline: "10/08/2022",
//       updated: "10/07/2022",
//       locationDetails: "Dallas, Texas Remote Friendly"
//     },
//     companyInfo: {
//       name: "AllThemes",
//       email: "contact@allthemes.com",
//       industry: "IT Company"
//     },
//     description: {
//       welcome: "Welcome to AllStudio Team",
//       intro: "AllStudio is a creative studio that creates products and utility companies. It's a world of digital and remote everything, constantly changing work patterns, platforms, and the nature of organizational creativity.",
//       role: "We are looking for a talented Senior Full Stack Engineer to join our team. The ideal candidate will have strong creative skills and a portfolio of work that demonstrates their passion for illustrative design and typography."
//     },
//     essentialSkills: [
//       "A portfolio demonstrating well thought through and polished end to end customer journeys",
//       "5+ years of industry experience in interactive design and/or visual design",
//       "Excellent interpersonal skills",
//       "Aware of trends in mobile, communications, and collaboration",
//       "Ability to create highly polished design artifacts, mockups, and other communication artifacts",
//       "The ability to scope and estimate efforts accurately and provide team-wide transparency",
//       "History of impacting shipping products with your work",
//       "A Bachelor's Degree in Design (or related field) or equivalent professional experience",
//       "Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch"
//     ],
//     preferredExperience: [
//       "Designing for developer-focused products",
//       "Creating and applying established design principles and interaction patterns",
//       "Aligning or influencing design efforts across time zones or other geographies"
//     ],
//     similarJobs: [
//       { title: "UI/UX Designer", company: "AllThemes", location: "Chicago, IL", salary: "$280/hour" },
//       { title: "Frontend Developer", company: "TechCorp", location: "New York, NY", salary: "$100/hour" },
//       { title: "Product Manager", company: "InnovateCo", location: "San Francisco, CA", salary: "$150/hour" },
//       { title: "DevOps Engineer", company: "CloudSys", location: "Austin, TX", salary: "$130/hour" },
//       { title: "Data Scientist", company: "DataMinds", location: "Seattle, WA", salary: "$200/hour" }
//     ]
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex justify-between items-start mb-6">
//         <div>
//           <h1 className="text-2xl font-bold mb-2">{jobData.title}</h1>
//           <div className="text-sm text-gray-500 flex items-center">
//             <MapPin className="w-4 h-4 mr-1" />
//             <span>{jobData.location}</span>
//             <span className="mx-2">•</span>
//             <Calendar className="w-4 h-4 mr-1" />
//             <span>{jobData.postedTime}</span>
//           </div>
//         </div>
//         <Button className="bg-blue-600 hover:bg-blue-700 text-white">Apply now</Button>
//       </div>

//       <div className="flex gap-8">
//         <div className="w-2/3">
//           <Card className="mb-6">
//             <CardContent className="p-6">
//               <h2 className="text-lg font-semibold mb-4">Employment Information</h2>
//               <div className="grid grid-cols-2 gap-4">
//                 {Object.entries(jobData.employmentInfo).map(([key, value]) => (
//                   <div className="flex items-center" key={key}>
//                     {key === 'industry' && <Briefcase className="w-5 h-5 mr-2 text-gray-400" />}
//                     {key === 'jobLevel' && <Briefcase className="w-5 h-5 mr-2 text-gray-400" />}
//                     {key === 'salary' && <DollarSign className="w-5 h-5 mr-2 text-gray-400" />}
//                     {key === 'experience' && <Clock className="w-5 h-5 mr-2 text-gray-400" />}
//                     {key === 'jobType' && <Briefcase className="w-5 h-5 mr-2 text-gray-400" />}
//                     {key === 'deadline' && <Calendar className="w-5 h-5 mr-2 text-gray-400" />}
//                     {key === 'updated' && <Calendar className="w-5 h-5 mr-2 text-gray-400" />}
//                     {key === 'locationDetails' && <MapPin className="w-5 h-5 mr-2 text-gray-400" />}
//                     <div>
//                       <p className="text-sm text-gray-500">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
//                       <p className="font-medium">{value}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>

//           <div className="mb-6">
//             <h2 className="text-xl font-semibold mb-4">{jobData.description.welcome}</h2>
//             <p className="mb-4">{jobData.description.intro}</p>
//             <p className="mb-4">{jobData.description.role}</p>
//           </div>

//           <div className="mb-6">
//             <h2 className="text-xl font-semibold mb-4">Essential Knowledge, Skills, and Experience</h2>
//             <ul className="list-disc pl-5 space-y-2">
//               {jobData.essentialSkills.map((skill, index) => (
//                 <li key={index}>{skill}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="mb-6">
//             <h2 className="text-xl font-semibold mb-4">Preferred Experience</h2>
//             <ul className="list-disc pl-5 space-y-2">
//               {jobData.preferredExperience.map((experience, index) => (
//                 <li key={index}>{experience}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="mb-6">
//             <h2 className="text-xl font-semibold mb-4">Product Designer</h2>
//             <p className="font-medium mb-2">Product knowledge: Deeply understand the technology and features of the product area to which you are assigned.</p>
//             <p className="mb-4">Research: Provide human and business impact and insights for products.</p>
//             <p className="font-medium mb-2">Deliverables: Create deliverables for your product area that express the brand, empower ease of development, and consider scalability.</p>
//             <p className="mb-4">Concepts, high fidelity mockups, prototypes, and other communication materials as needed. Collect and address feedback from users and teammates throughout this user experience.</p>
//             <p className="font-medium mb-2">Communication: Communicate the results of UX activities within your product area to the design team and partners.</p>
//             <p>Clearly articulate your design rationale. Practice principled thinking and be able to defend your design decisions. Use clear language that simplifies complexity.</p>
//           </div>

//           <div className="flex items-center justify-between border-t border-b py-4 mb-6">
//             <div className="text-gray-500">— {jobData.companyInfo.name} —</div>
//             <div className="flex space-x-2">
//               <Button className="bg-blue-600 hover:bg-blue-700 text-white">Apply now</Button>
//               <Button variant="outline">Save job</Button>
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="text-sm text-gray-500">Share this job:</div>
//             <div className="flex space-x-2">
//               <Button variant="outline" size="icon"><Share2 className="w-4 h-4" /></Button>
//               <Button variant="outline" size="icon">f</Button>
//               <Button variant="outline" size="icon">in</Button>
//               <Button variant="outline" size="icon">t</Button>
//             </div>
//           </div>
//         </div>

//         <div className="w-1/3">
//           <Card className="mb-6">
//             <CardContent className="p-6">
//               <h2 className="text-lg font-semibold mb-4">Similar Jobs</h2>
//               <ul className="space-y-2">
//                 {jobData.similarJobs.map((job, index) => (
//                   <li key={index} className="border-b py-2">
//                     <h3 className="font-medium">{job.title}</h3>
//                     <p className="text-sm text-gray-500">{job.company} - {job.location}</p>
//                     <p className="text-sm text-gray-500">{job.salary}</p>
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );  
// }
