// "use client"

// import React, { useState, useEffect } from 'react'
// import { Search, MapPin, Clock, Briefcase, DollarSign } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Slider } from "@/components/ui/slider"
// import { Card, CardContent } from "@/components/ui/card"
// import jobsData from '@/data/jobsdata.js'

// export default function JobListingsPage() {
//   const [jobs, setJobs] = useState([])
//   const [filteredJobs, setFilteredJobs] = useState([])
//   const [searchTerm, setSearchTerm] = useState('')
//   const [selectedRole, setSelectedRole] = useState('All')
//   const [selectedLocation, setSelectedLocation] = useState('All')
//   const [experienceRange, setExperienceRange] = useState([0, 50])

//   useEffect(() => {
//     setJobs(jobsData)
//     setFilteredJobs(jobsData)
//   }, [])

//   useEffect(() => {
//     const filtered = jobs.filter(job => 
//       job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (selectedRole === 'All' || job.role === selectedRole) &&
//       (selectedLocation === 'All' || job.location === selectedLocation) &&
//       job.experience >= experienceRange[0] && job.experience <= experienceRange[1]
//     )
//     setFilteredJobs(filtered)
//   }, [searchTerm, selectedRole, selectedLocation, experienceRange, jobs])

//   const handleAccept = (jobId) => {
//     console.log(`Accepted job with ID: ${jobId}`)
//     // Implement accept logic here
//   }

//   const handleDecline = (jobId) => {
//     console.log(`Declined job with ID: ${jobId}`)
//     // Implement decline logic here
//   }

//   return (
//     <div className="container mx-auto px-4 py-8 ">
//       <div className="bg-[#2c61a9] text-white p-4 mb-6 justify-between flex h-16 ">
//         <h1 className="text-2xl font-bold mb-4">Matching alerts for your profile</h1>
//         <div className="flex space-x-2">
//           {['New Alerts', 'Accepted', 'Declined', 'Expired', 'All'].map((filter) => (
//             <Button key={filter} variant="outline" className="text-white border-white hover:bg-blue-700">
//               {filter}
//             </Button>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-4 gap-6 mb-6">
//         <div className="col-span-3">
//           <div className="flex space-x-4 mb-4">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <Input
//                 placeholder="Keywords"
//                 className="pl-10"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <Select value={selectedRole} onValueChange={setSelectedRole}>
//               <SelectTrigger className="w-[200px]">
//                 <SelectValue placeholder="Role" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="All">All Roles</SelectItem>
//                 <SelectItem value="Frontend">Frontend</SelectItem>
//                 <SelectItem value="Backend">Backend</SelectItem>
//                 <SelectItem value="FullStack">Full Stack</SelectItem>
//               </SelectContent>
//             </Select>
//             <Select value={selectedLocation} onValueChange={setSelectedLocation}>
//               <SelectTrigger className="w-[200px]">
//                 <SelectValue placeholder="Location" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="All">All Locations</SelectItem>
//                 <SelectItem value="Remote">Remote</SelectItem>
//                 <SelectItem value="NewYork">New York</SelectItem>
//                 <SelectItem value="SanFrancisco">San Francisco</SelectItem>
//               </SelectContent>
//             </Select>
//             <Button className="bg-blue-600 hover:bg-blue-700 text-white">Find</Button>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-4 gap-6">
//         <div className="col-span-1">
//           <Card>
//             <CardContent className="p-4">
//               <h2 className="font-semibold mb-4">Filters</h2>
//               <div className="space-y-4">
//                 <div>
//                   <h3 className="font-medium mb-2">Category</h3>
//                   {['All', 'Job', 'Training'].map((category) => (
//                     <div key={category} className="flex items-center mb-2">
//                       <input type="radio" id={category} name="category" className="mr-2" />
//                       <label htmlFor={category}>{category}</label>
//                     </div>
//                   ))}
//                 </div>
//                 <div>
//                   <h3 className="font-medium mb-2">Types</h3>
//                   {['All', 'Full Time', 'Part Time', 'Contract'].map((type) => (
//                     <div key={type} className="flex items-center mb-2">
//                       <input type="checkbox" id={type} name={type} className="mr-2" />
//                       <label htmlFor={type}>{type}</label>
//                     </div>
//                   ))}
//                 </div>
//                 <div>
//                   <h3 className="font-medium mb-2">Experience</h3>
//                   <Slider
//                     defaultValue={[0, 50]}
//                     max={50}
//                     step={1}
//                     onValueChange={setExperienceRange}
//                   />
//                   <div className="flex justify-between mt-2">
//                     <span>{experienceRange[0]} yrs</span>
//                     <span>{experienceRange[1]} yrs</span>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//         <div className="col-span-3">
//           <h2 className="text-xl font-semibold mb-4">Showing {filteredJobs.length} Results</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredJobs.map((job) => (
//               <Card key={job.id} className="overflow-hidden">
//                 <CardContent className="p-4">
//                   <div className="flex items-center mb-4">
//                     <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4 flex items-center justify-center">
//                       <img src={job.companyLogo} alt={job.company} className="w-8 h-8" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold">{job.title}</h3>
//                       <p className="text-sm text-gray-500">{job.company}</p>
//                     </div>
//                   </div>
//                   <div className="space-y-2 mb-4">
//                     <div className="flex items-center text-sm text-gray-500">
//                       <MapPin className="w-4 h-4 mr-2" />
//                       {job.location}
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Briefcase className="w-4 h-4 mr-2" />
//                       {job.type}
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Clock className="w-4 h-4 mr-2" />
//                       {job.postedTime}
//                     </div>
//                   </div>
//                   <p className="text-sm mb-4 line-clamp-3">{job.description}</p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {job.skills.slice(0, 3).map((skill) => (
//                       <span key={skill} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="text-blue-600 font-semibold">
//                       <DollarSign className="w-4 h-4 inline mr-1" />
//                       {job.salary}/Hour
//                     </div>
//                     <div className="space-x-2">
//                       <Button 
//                         size="sm" 
//                         variant="outline" 
//                         className="bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
//                         onClick={() => handleAccept(job.id)}
//                       >
//                         Accept
//                       </Button>
//                       <Button 
//                         size="sm" 
//                         variant="outline" 
//                         className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
//                         onClick={() => handleDecline(job.id)}
//                       >
//                         Decline
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import React, { useState, useEffect } from 'react'
import { Search, MapPin, Clock, Briefcase, DollarSign } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import jobsData from '@/data/jobsdata.js'

export default function JobListingsPage() {queueMicrotask
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRole, setSelectedRole] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [experienceRange, setExperienceRange] = useState([0, 50])

  useEffect(() => {
    setJobs(jobsData)
    setFilteredJobs(jobsData)
  }, [])

  useEffect(() => {
    const filtered = jobs.filter(job => 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedRole === 'All' || job.title.toLowerCase().includes(selectedRole.toLowerCase())) &&
      (selectedLocation === 'All' || job.location.toLowerCase().includes(selectedLocation.toLowerCase())) &&
      (typeof job.experience === 'string' || (job.experience >= experienceRange[0] && job.experience <= experienceRange[1]))
    )
    setFilteredJobs(filtered)
  }, [searchTerm, selectedRole, selectedLocation, experienceRange, jobs])

  const handleAccept = (jobId) => {
    console.log(`Accepted job with ID: ${jobId}`)
  }

  const handleDecline = (jobId) => {
    console.log(`Declined job with ID: ${jobId}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-[#2c61a9] text-white p-4 mb-6 justify-between flex h-16 items-center">
        <h1 className="text-2xl font-bold">Matching alerts for your profile</h1>
        <div className="flex space-x-2">
          {['New Alerts', 'Accepted', 'Declined', 'Expired', 'All'].map((filter) => (
            <Button key={filter} variant="outline" className="text-white border-white hover:bg-blue-700">
              {filter}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="col-span-3">
          <div className="flex space-x-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Keywords"
                className="pl-10 border-gray-300 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger className="w-[200px] border-gray-300">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Roles</SelectItem>
                <SelectItem value="Frontend">Frontend</SelectItem>
                <SelectItem value="Backend">Backend</SelectItem>
                <SelectItem value="FullStack">Full Stack</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-[200px] border-gray-300">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Locations</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
                <SelectItem value="NewYork">New York</SelectItem>
                <SelectItem value="SanFrancisco">San Francisco</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Find</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1">
          <Card className="shadow-md rounded-lg">
            <CardContent className="p-4">
              <h2 className="font-semibold mb-4">Filters</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Category</h3>
                  {['All', 'Job', 'Training'].map((category) => (
                    <div key={category} className="flex items-center mb-2">
                      <input type="radio" id={category} name="category" className="mr-2" />
                      <label htmlFor={category} className="text-gray-700">{category}</label>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-medium mb-2">Types</h3>
                  {['All', 'Full Time', 'Part Time', 'Contract'].map((type) => (
                    <div key={type} className="flex items-center mb-2">
                      <input type="checkbox" id={type} name={type} className="mr-2" />
                      <label htmlFor={type} className="text-gray-700">{type}</label>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-medium mb-2">Experience</h3>
                  <Slider
                    defaultValue={[0, 50]}
                    max={50}
                    step={1}
                    onValueChange={setExperienceRange}
                  />
                  <div className="flex justify-between mt-2 text-gray-700">
                    <span>{experienceRange[0]} yrs</span>
                    <span>{experienceRange[1]} yrs</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <h2 className="text-xl font-semibold mb-4">Showing {filteredJobs.length} Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="overflow-hidden shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-50">
                <CardContent className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4 flex items-center justify-center">
                      <img src={job.logo} alt={job.company} className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-sm text-gray-500">{job.company}</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.posted}
                    </div>
                  </div>
                  <p className="text-sm mb-4 line-clamp-3">{job.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-blue-600 font-semibold">
                      <DollarSign className="w-4 h-4 inline mr-1" />
                      {job.salary}
                    </div>
                    <div className="space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
                        onClick={() => handleAccept(job.id)}
                      >
                        Accept
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
                        onClick={() => handleDecline(job.id)}
                      >
                        Decline
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
