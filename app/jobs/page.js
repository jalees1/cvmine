"use client";

import React, { useState } from 'react';
import { Search, MapPin, Clock, DollarSign, Briefcase, Users } from 'lucide-react';

const JobListingInterface = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [role, setRole] = useState('All');
  const [location, setLocation] = useState('All');

  // Mock job data      
  const jobs = [
    {
      company: 'Siemens Demo Company',
      logo: 'https://via.placeholder.com/40',
      title: 'Graduate Trainee',
      id: 'CVM/SDC24/SDC',
      experience: 'Fresher',
      salary: 'Not Mentioned',
      type: 'Not Mentioned',
      location: 'Not Mentioned',
      posted: '3 days ago'
    },
    {
      company: 'Quess Corp',
      logo: 'https://via.placeholder.com/40',
      title: 'operator',
      id: 'CVM/QGS/354738',
      experience: '0 - 2 years',
      salary: 'INR 12500.00 - 17500.00 Per Month',
      type: 'Not Mentioned',
      location: 'Not Mentioned',
      posted: '2 months ago'
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Keywords"
              className="w-full p-2 pl-10 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
        <select
          className="p-2 border rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="All">All Roles</option>
        </select>
        <select
          className="p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="All">All Locations</option>
        </select>
        <button className="bg-blue-600 text-white p-2 rounded">Find</button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4">
          <div className="border rounded p-4">
            <h3 className="font-bold mb-2">Filters</h3>
            <div className="mb-4">
              <h4 className="font-semibold">Category</h4>
              <label className="flex items-center">
                <input type="radio" name="category" value="all" defaultChecked /> All
              </label>
              <label className="flex items-center">
                <input type="radio" name="category" value="job" /> Job
              </label>
              <label className="flex items-center">
                <input type="radio" name="category" value="training" /> Training
              </label>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Types</h4>
              <label className="flex items-center">
                <input type="radio" name="type" value="all" defaultChecked /> All
              </label>
              <label className="flex items-center">
                <input type="radio" name="type" value="fullTime" /> Full Time
              </label>
            </div>
            <div>
              <h4 className="font-semibold">Experience</h4>
              <input type="range" min="0" max="50" className="w-full" />
              <div className="flex justify-between text-sm">
                <span>0 yrs</span>
                <span>50 yrs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-3/4">
          <h2 className="text-xl font-bold mb-4">Showing 02 Results</h2>
          {jobs.map((job, index) => (
            <div 
              key={index} 
              className="relative border-l-4 border-orange-500 rounded p-4 mb-4 bg-white hover:bg-gray-50 hover:shadow-lg transform transition-transform duration-300  hover:scale-105 cursor-pointer">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <img src={job.logo} alt={job.company} className="w-10 h-10 mr-4" />
                  <div>
                    <h3 className="font-bold">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                </div>
                <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-sm">Job</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 ">
                <div className="flex items-center">
                  <Briefcase size={16} className="mr-2 text-gray-400" />
                  <span>{job.id}</span>
                </div>
                <div className="flex items-center">
                  <Users size={16} className="mr-2 text-gray-400" />
                  <span>{job.experience}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2 text-gray-400" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign size={16} className="mr-2 text-gray-400" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2 text-gray-400" />
                  <span>{job.location}</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">{job.posted}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Apply</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListingInterface;
