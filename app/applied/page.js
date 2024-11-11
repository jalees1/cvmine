"use client"

import React, { useState } from 'react'
import { Search, MapPin, Calendar, Briefcase, ChevronDown, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Mock data for applications
const applications = [
  {
    id: 1,
    jobTitle: "Senior Full Stack Engineer",
    company: "TechCorp",
    location: "New York, NY",
    appliedDate: "2023-05-15",
    status: "Under Review",
    type: "Full-time",
  },
  {
    id: 2,
    jobTitle: "UX Designer",
    company: "DesignHub",
    location: "Remote",
    appliedDate: "2023-05-10",
    status: "Interviewed",
    type: "Contract",
  },
  {
    id: 3,
    jobTitle: "Product Manager",
    company: "InnovateCo",
    location: "San Francisco, CA",
    appliedDate: "2023-05-05",
    status: "Rejected",
    type: "Full-time",
  },
  {
    id: 4,
    jobTitle: "Data Scientist",
    company: "DataMinds",
    location: "Boston, MA",
    appliedDate: "2023-05-01",
    status: "Offer Received",
    type: "Part-time",
  },
  {
    id: 5,
    jobTitle: "Frontend Developer",
    company: "WebWizards",
    location: "Austin, TX",
    appliedDate: "2023-04-28",
    status: "Under Review",
    type: "Full-time",
  },
]

export default function MyApplicationsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const filteredApplications = applications.filter(app => 
    (app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
     app.company.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === 'All' || app.status === statusFilter)
  )

  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Review': return 'text-yellow-600 bg-yellow-100'
      case 'Interviewed': return 'text-blue-600 bg-blue-100'
      case 'Rejected': return 'text-red-600 bg-red-100'
      case 'Offer Received': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Applications</h1>
      
      <div className="flex space-x-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search jobs or companies"
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Statuses</SelectItem>
            <SelectItem value="Under Review">Under Review</SelectItem>
            <SelectItem value="Interviewed">Interviewed</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
            <SelectItem value="Offer Received">Offer Received</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.jobTitle}</TableCell>
                  <TableCell>{app.company}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                      {app.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                      {app.appliedDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {filteredApplications.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No applications found matching your search criteria.</p>
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Application Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Total Applications', 'Under Review', 'Interviews Scheduled', 'Offers Received'].map((stat) => (
            <Card key={stat}>
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">{stat}</h3>
                <p className="text-2xl font-bold">
                  {stat === 'Total Applications' ? applications.length : 
                   applications.filter(app => app.status.includes(stat.split(' ')[0])).length}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}



// 'use client'

// import React, { useState } from 'react'
// import { Search, Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"

// // Mock data for applied jobs
// const appliedJobs = [
//   {
//     id: 1,
//     title: "Senior Full Stack Engineer",
//     company: "TechCorp",
//     location: "New York, NY",
//     appliedDate: "2023-05-15",
//     status: "Under Review",
//   },
//   {
//     id: 2,
//     title: "UX Designer",
//     company: "DesignHub",
//     location: "Remote",
//     appliedDate: "2023-05-10",
//     status: "Interviewed",
//   },
//   {
//     id: 3,
//     title: "Product Manager",
//     company: "InnovateCo",
//     location: "San Francisco, CA",
//     appliedDate: "2023-05-05",
//     status: "Rejected",
//   },
//   {
//     id: 4,
//     title: "Data Scientist",
//     company: "DataMinds",
//     location: "Boston, MA",
//     appliedDate: "2023-05-01",
//     status: "Offer Received",
//   },
// ]

// export default function AppliedJobsPage() {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [expandedJob, setExpandedJob] = useState(null)

//   const filteredJobs = appliedJobs.filter(job => 
//     job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     job.company.toLowerCase().includes(searchTerm.toLowerCase())
//   )

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Under Review': return 'bg-yellow-100 text-yellow-800'
//       case 'Interviewed': return 'bg-blue-100 text-blue-800'
//       case 'Rejected': return 'bg-red-100 text-red-800'
//       case 'Offer Received': return 'bg-green-100 text-green-800'
//       default: return 'bg-gray-100 text-gray-800'
//     }
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-6">Applied Jobs</h1>
      
//       <div className="mb-6">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           <Input
//             placeholder="Search jobs or companies"
//             className="pl-10"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="space-y-4">
//         {filteredJobs.map((job) => (
//           <Card key={job.id}>
//             <CardContent className="p-6">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
//                   <p className="text-gray-600 mb-2">{job.company}</p>
//                   <div className="flex items-center text-sm text-gray-500 mb-2">
//                     <MapPin className="w-4 h-4 mr-1" />
//                     {job.location}
//                   </div>
//                   <div className="flex items-center text-sm text-gray-500">
//                     <Calendar className="w-4 h-4 mr-1" />
//                     Applied on {job.appliedDate}
//                   </div>
//                 </div>
//                 <Badge className={getStatusColor(job.status)}>
//                   {job.status}
//                 </Badge>
//               </div>
//               <div className="mt-4">
//                 <Button 
//                   variant="ghost" 
//                   className="text-blue-600 p-0 h-auto"
//                   onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
//                 >
//                   {expandedJob === job.id ? (
//                     <>
//                       Hide Details
//                       <ChevronUp className="ml-1 h-4 w-4" />
//                     </>
//                   ) : (
//                     <>
//                       View Details
//                       <ChevronDown className="ml-1 h-4 w-4" />
//                     </>
//                   )}
//                 </Button>
//               </div>
//               {expandedJob === job.id && (
//                 <div className="mt-4 pt-4 border-t border-gray-200">
//                   <h3 className="font-semibold mb-2">Application Details</h3>
//                   <p className="text-sm text-gray-600 mb-2">
//                     Your application for this position is currently {job.status.toLowerCase()}.
//                     {job.status === 'Under Review' && " We'll update you as soon as we have more information."}
//                     {job.status === 'Interviewed' && " The hiring team is evaluating your interview performance."}
//                     {job.status === 'Rejected' && " Thank you for your interest. We encourage you to apply for other suitable positions."}
//                     {job.status === 'Offer Received' && " Congratulations! Please check your email for further instructions."}
//                   </p>
//                   <Button variant="outline" className="mr-2">View Application</Button>
//                   <Button variant="outline">Contact Recruiter</Button>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {filteredJobs.length === 0 && (
//         <div className="text-center py-8">
//           <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
//           <h3 className="mt-2 text-sm font-semibold text-gray-900">No applied jobs</h3>
//           <p className="mt-1 text-sm text-gray-500">
//             You haven't applied to any jobs yet, or no jobs match your search.
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }



