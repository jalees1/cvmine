"use client";

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Importing social media icons from Lucide
import { Button } from "@/components/ui/button"; // Importing Button component
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Importing Select components

export default function TopNavbar() {
  return (
    <nav className="bg-[#0d63ae] text-white py-3 px-6 justify-between items-center hidden md:flex">
      {/* Flex container for the top navbar, hidden on mobile, shown on desktop */}
      
      <div className="flex space-x-3">
        {/* Social media icons section with hover effects */}
        <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
          <Facebook size={12} />
        </a>
        <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
          <Twitter size={12} />
        </a>
        <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
          <Instagram size={12} />
        </a>
        <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
          <Linkedin size={12} />
        </a>
      </div>
      {/* End of social media icons section */}

      <div className="flex items-center space-x-3">
        {/* Button for Employers */}
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-white text-[#FF6600] border-[#FF6600] hover:bg-[#FF6600] hover:text-white transition-colors text-sm py-1 px-4 h-8"
        >
          Employers
        </Button>

        <div className="flex items-center space-x-2">
          {/* Dropdown for selecting country */}
          <Select>
            <SelectTrigger className="w-[120px] h-7 text-xs bg-transparent border-none text-white hover:bg-[#3b5998] data-[state=open]:bg-white data-[state=open]:text-black">
              <SelectValue placeholder="Afghanistan" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="afghanistan" className="text-gray-500 hover:text-white hover:bg-blue-500">
                Afghanistan
              </SelectItem>
              <SelectItem value="albania" className="text-gray-500 hover:text-white hover:bg-blue-500">
                Albania
              </SelectItem>
              <SelectItem value="algeria" className="text-gray-500 hover:text-white hover:bg-blue-500">
                Algeria
              </SelectItem>
            </SelectContent>
          </Select>
          {/* End of country dropdown */}

          {/* Dropdown for selecting language */}
          <Select>
            <SelectTrigger className="w-[90px] h-7 text-xs bg-transparent border-none text-white hover:bg-[#3b5998] data-[state=open]:bg-white data-[state=open]:text-black">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="english" className="text-gray-500 hover:text-white hover:bg-blue-500">
                English
              </SelectItem>
              <SelectItem value="french" className="text-gray-500 hover:text-white hover:bg-blue-500">
                French
              </SelectItem>
              <SelectItem value="spanish" className="text-gray-500 hover:text-white hover:bg-blue-500">
                Spanish
              </SelectItem>
            </SelectContent>
          </Select>
          {/* End of language dropdown */}
        </div>
        {/* End of dropdown section */}
      </div>
    </nav>
  );
}

