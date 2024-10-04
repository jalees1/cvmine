"use client";

import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TopNavbar() {
  return (
    <nav className="bg-[#0d63ae] text-white py-3 px-6  justify-between items-center hidden md:flex">
      <div className="flex space-x-3">
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
      <div className="flex items-center space-x-3">
      <Button 
       variant="outline" 
       size="sm" 
       className="bg-white text-[#FF6600] border-[#FF6600] hover:bg-[#FF6600] hover:text-white transition-colors text-sm py-1 px-4 h-8"
      >
       Employers
      </Button>
        <div className="flex items-center space-x-2">
          <Select>
            <SelectTrigger className="w-[120px] h-7 text-xs bg- border-none text-white hover:bg-[#3b5998]">
              <SelectValue placeholder="Afghanistan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="afghanistan">Afghanistan</SelectItem>
              <SelectItem value="albania">Albania</SelectItem>
              <SelectItem value="algeria">Algeria</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[90px] h-7 text-xs bg-transparent border-none text-white hover:bg-[#3b5998]">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="french">French</SelectItem>
              <SelectItem value="spanish">Spanish</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </nav>
  )
}