import { Facebook, Twitter, Instagram, Linkedin, ChevronsRight } from 'lucide-react'; // Importing icons from lucide-react

export default function Footer() {
  return (
    <footer className=''>
      <div className='flex pt-20'>
          <div className='w-[57%] pl-44'>
          <h2 className="text-md font-semibold mb-2 ">About CVMine™</h2>
          <p className="text-md mb-4 w-full">
            A first-of-its-kind and next-generation career development platform with training and jobs that are aligned to help every jobseeker build a successful career. Vision of CVMine is to help every jobseeker become successful through learning and aligned jobs for continuous career growth. CVMine is a blockchain and crypto-based initiative to bring prosperity, not only through a successful career but with alternate crypto wealth acquired from the transactions performed on CVMine like sign-up, submit CV, apply for training programs, CV download by employers, and other transactions monetized through ITAL Crypto tokens, being a true social and community crypto token.
          </p>
          <div className="flex space-x-4 pb-8 gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-black hover:text-gray-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-5 h-5 text-black hover:text-gray-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-black hover:text-gray-600" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-black hover:text-gray-600" />
            </a>
          </div>
          </div>
          <div className=' pl-16 flex '>
          
          <ul className="space-y-1 text-md ">
            
             <li className='flex col text-black hover:text-orange-700 cursor-pointer '>
             <ChevronsRight className="ml-1" />
               <a href="#" className="hover:underline">Browse Jobs</a> 
             </li>
             <div>
              <li className='flex col text-black hover:text-orange-700 cursor-pointer '>
                <ChevronsRight className="ml-1" />
               <a href="#" className="hover:underline" >Sign up as a Jobseeker</a>
             </li>
             </div>
             
          
          </ul>
          </div>
      </div>
    </footer>
  );
}

{/* <footer className="bg-white text-black p-05 md:p-10 flex">
      <div className="flex justify-center item center w-full pl-16 pt-8">
        <div className=" mb-6 md:mb-0 pl-24">
          <h2 className="text-md font-semibold mb-2 ">About CVMine™</h2>
          <p className="text-md mb-4 w-full">
            A first-of-its-kind and next-generation career development platform with training and jobs that are aligned to help every jobseeker build a successful career. Vision of CVMine is to help every jobseeker become successful through learning and aligned jobs for continuous career growth. CVMine is a blockchain and crypto-based initiative to bring prosperity, not only through a successful career but with alternate crypto wealth acquired from the transactions performed on CVMine like sign-up, submit CV, apply for training programs, CV download by employers, and other transactions monetized through ITAL Crypto tokens, being a true social and community crypto token.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-black hover:text-gray-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-5 h-5 text-black hover:text-gray-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-black hover:text-gray-600" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-black hover:text-gray-600" />
            </a>
          </div>
        </div>

        {/* Right Side - Links Section */}
    //     <div className="md:w-1/2 md:ml-8">
    //       <h2 className="text-sm font-semibold mb-2">Quick Links</h2>
    //       <ul className="space-y-1 text-xs">
    //         <li>
    //           <a href="#" className="hover:underline">Frequently Asked Questions (FAQs)</a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:underline">Browse Jobs</a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:underline">Sign up as a Jobseeker</a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:underline">Sign up as an Employer</a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:underline">Sign up as an Advisor/Influencer</a>
    //         </li>
    //       </ul>
    //     </div>

    //   </div>
    // </footer> */}