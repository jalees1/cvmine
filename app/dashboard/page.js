import React from 'react';
import { ChevronDown, ChevronDownIcon, ChevronRight, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PersonalInformationForm() {
  return (
    <div>
      <div className="bg-white shadow-sm mb-4 w-full md:w-[75%] mx-auto mt-2">
        <div className="flex justify-between items-center pb-1 bg-[#f5f5f5]">
          <h2 className="text-sm font-sans font-semibold p-1 text-gray-800 ">Personal Information</h2>
          <ChevronUp className="w-5 h-5 text-gray-400" />
        </div>
        
        <form className="space-y-6 p-6">
          <div className="w-full md:w-2/4">
            <Label htmlFor="resume" className="text-[#1c1c80] font-semibold">Upload your Resume here*</Label>
            <div className="flex mt-1">
              <Input id="resume" placeholder="Attach your resume here *" className="rounded-r-none" disabled />
              <Button type="button" className="text-white rounded-l-none bg-blue-800 hover:bg-blue-900">Upload</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName" className="text-[#1c1c80] font-semibold">First name*</Label>
              <Input id="firstName" placeholder="Enter first name" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-[#1c1c80] font-semibold">Last name</Label>
              <Input id="lastName" placeholder="Enter last name" className="mt-1" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="mobileNumber" className="text-[#1c1c80] font-semibold">Primary mobile number*</Label>
              <div className="flex mt-1">
                <Select>
                  <SelectTrigger className="w-[100px] rounded-r-none">
                    <SelectValue placeholder="+972" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+972">+972</SelectItem>
                    {/* Add more country codes as needed */}
                  </SelectContent>  
                </Select>
                <Input id="mobileNumber" placeholder="Enter mobile number" className="rounded-l-none flex-1" />
              </div>
            </div>
            <div>
              <Label htmlFor="primaryEmail" className="text-[#1c1c80] font-semibold">Primary Email ID*</Label>
              <Input id="primaryEmail" placeholder="Enter primary Email ID" className="mt-1" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="alternateEmail" className="text-[#1c1c80] font-semibold">Alternate Email ID</Label>
              <Input id="alternateEmail" placeholder="Enter secondary Email ID" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="gender" className="text-[#1c1c80] font-semibold">Gender (Affirmative Action/EEO)</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="-- Select --" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="nationality" className="text-[#1c1c80] font-semibold">Nationality</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="-- Select --" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  {/* Add more nationalities as needed */}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="location" className="text-[#1c1c80] font-semibold">
                Present location (not found? <a href="#" className="text-blue-500 hover:underline">Click here</a>)
              </Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="-- Select --" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newyork">New York</SelectItem>
                  <SelectItem value="london">London</SelectItem>
                  {/* Add more locations as needed */}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="button" className="bg-blue-700 hover:bg-blue-800 text-white">Next</Button>
          </div>
        </form>

        <div className="flex justify-between items-center pb-1 bg-[#f5f5f5]">
          <h2 className="text-sm font-sans font-semibold p-1 text-gray-800 ">Personal Information</h2>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

