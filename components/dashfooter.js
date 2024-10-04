import Link from 'next/link' // Importing the Link component from Next.js for client-side navigation

export default function DashFooter() {
  return (
    <footer className="w-full border-t border-gray-200 bg-[#f5f5f5] py-4 px-6"> {/* Footer container with full width, border, background color, and padding */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center"> {/* Flex container for layout, adjusts based on screen size */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0"> {/* Links container, changes layout on larger screens */}
          {/* Terms of Use Link */}
          <Link href="/terms" className="text-sm text-[#1c1c80] hover:text-gray-900"> 
            Terms of use
          </Link>
          {/* Privacy Policy Link */}
          <Link href="/privacy" className="text-sm text-[#1c1c80] hover:text-gray-900">
            Privacy policy
          </Link>
        </div>
        <div className="text-sm text-[#1c1c80] text-center sm:text-right"> {/* Text section for copyright and initiative information */}
          <span>CVMine is a social initiative of </span> {/* Text introducing TalentMicro */}
          <Link href="https://talentmicro.com" className="font-semibold hover:text-gray-900"> {/* Link to TalentMicro */}
            TalentMicro
          </Link>
          <span className="ml-2"> {/* Copyright notice */}
            | Copyright© {new Date().getFullYear()}, All rights reserved
          </span>
        </div>
      </div>
    </footer>
  )
}
