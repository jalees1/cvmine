// "use client";

// import React from 'react';
// import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Importing social media icons from Lucide
// import { Button } from "@/components/ui/button"; // Importing Button component
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Importing Select components

// export default function TopNavbar() {
//   return (
//     <nav className="bg-[#0d63ae] text-white py-3 px-6 justify-between items-center hidden md:flex">
//       {/* Flex container for the top navbar, hidden on mobile, shown on desktop */}
      
//       <div className="flex space-x-3">
//         {/* Social media icons section with hover effects */}
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Facebook size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Twitter size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Instagram size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Linkedin size={12} />
//         </a>
//       </div>
//       {/* End of social media icons section */}

//       <div className="flex items-center space-x-3">
//         {/* Button for Employers */}
//         <Button 
//           variant="outline" 
//           size="sm" 
//           className="bg-white text-[#FF6600] border-[#FF6600] hover:bg-[#FF6600] hover:text-white transition-colors text-sm py-1 px-4 h-8"
//         >
//           Employers
//         </Button>

//         <div className="flex items-center space-x-2">
//           {/* Dropdown for selecting country */}
//           <Select>
//             <SelectTrigger className="w-[120px] h-7 text-xs bg-transparent border-none text-white hover:bg-[#3b5998] data-[state=open]:bg-white data-[state=open]:text-black">
//               <SelectValue placeholder="Afghanistan" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               <SelectItem value="afghanistan" className="text-gray-500 hover:text-white hover:bg-blue-500">
//                 Afghanistan
//               </SelectItem>
//               <SelectItem value="albania" className="text-gray-500 hover:text-white hover:bg-blue-500">
//                 Albania
//               </SelectItem>
//               <SelectItem value="algeria" className="text-gray-500 hover:text-white hover:bg-blue-500">
//                 Algeria
//               </SelectItem>
//             </SelectContent>
//           </Select>
//           {/* End of country dropdown */}

//           {/* Dropdown for selecting language */}
//           <Select>
//             <SelectTrigger className="w-[90px] h-7 text-xs bg-transparent border-none text-white hover:bg-[#3b5998] data-[state=open]:bg-white data-[state=open]:text-black">
//               <SelectValue placeholder="English" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               <SelectItem value="english" className="text-gray-500 hover:text-white hover:bg-blue-500">
//                 English
//               </SelectItem>
//               <SelectItem value="french" className="text-gray-500 hover:text-white hover:bg-blue-500">
//                 French
//               </SelectItem>
//               <SelectItem value="spanish" className="text-gray-500 hover:text-white hover:bg-blue-500">
//                 Spanish
//               </SelectItem>
//             </SelectContent>
//           </Select>
//           {/* End of language dropdown */}
//         </div>
//         {/* End of dropdown section */}
//       </div>
//     </nav>
//   );
// }



// current

// "use client";

// import React, { useState } from 'react';
// import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Importing social media icons from Lucide
// import { Button } from "@/components/ui/button"; // Importing Button component
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Importing Select components
// import { countryLanguageList } from "@/data/countryLanguageData"; // Importing country-language data

// export default function TopNavbar() {
//   const [selectedCountry, setSelectedCountry] = useState(''); // State to track selected country
//   const [selectedLanguage, setSelectedLanguage] = useState(''); // State to track selected language

//   // Function to handle country change and automatically set the language
//   const handleCountryChange = (countryCode) => {
//     const selected = countryLanguageList.find(item => item.countryCode === countryCode);
//     setSelectedCountry(selected.countryName);
//     setSelectedLanguage(selected.language); // Automatically set the default language for the selected country
//   };

//   return (
//     <nav className="bg-[#0d63ae] text-white py-3 px-6 justify-between items-center hidden md:flex">
//       {/* Flex container for the top navbar, hidden on mobile, shown on desktop */}
      
//       <div className="flex space-x-3">
//         {/* Social media icons section with hover effects */}
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Facebook size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Twitter size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Instagram size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Linkedin size={12} />
//         </a>
//       </div>
//       {/* End of social media icons section */}

//       <div className="flex items-center space-x-3">
//         {/* Button for Employers */}
//         <Button 
//           variant="outline" 
//           size="sm" 
//           className="bg-white text-[#FF6600] border-[#FF6600] hover:bg-[#FF6600] hover:text-white transition-colors text-sm py-1 px-4 h-8"
//         >
//           Employers
//         </Button>

//         <div className="flex items-center space-x-2">
//           {/* Dropdown for selecting country */}
//           <Select onValueChange={handleCountryChange}>
//             <SelectTrigger className="w-[120px] h-7 text-xs bg-transparent border-none text-white hover:bg-[#3b5998] data-[state=open]:bg-white data-[state=open]:text-black">
//               <SelectValue placeholder="Select Country" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               {countryLanguageList.map((item) => (
//                 <SelectItem 
//                   key={item.countryCode} 
//                   value={item.countryCode} 
//                   className="text-gray-500 hover:text-white hover:bg-blue-500"
//                 >
//                   {item.countryName} {/* Display country name */}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           {/* End of country dropdown */}

//           {/* Language dropdown is set based on the selected country */}
//           <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
//             <SelectTrigger className="w-[90px] h-7 text-xs bg-transparent border-none text-white hover:bg-[#3b5998] data-[state=open]:bg-white data-[state=open]:text-black">
//               <SelectValue placeholder="Select Language" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               {countryLanguageList.map((item) => (
//                 <SelectItem 
//                   key={item.language} // Unique key for each language
//                   value={item.language} // Set the value to the language
//                   className="text-gray-500 hover:text-white hover:bg-blue-500"
//                 >
//                   {item.language} {/* Display language name */}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           {/* End of language dropdown */}
//         </div>
//         {/* End of dropdown section */}
//       </div>
//     </nav>
//   );
// }




// TRANSLating code

// "use client";

// import React, { useState, useEffect } from "react";
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Importing social media icons from Lucide
// import { Button } from "@/components/ui/button"; // Importing Button component
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Importing Select components
// import { countryLanguageList } from "@/data/countryLanguageData"; // Importing country-language data

// export default function TopNavbar() {
//   const [selectedCountry, setSelectedCountry] = useState(""); // State to track selected country
//   const [selectedLanguage, setSelectedLanguage] = useState(""); // State to track selected language

//   // Function to handle language translation using Google Translate API
//   const handleLanguageTranslation = (languageCode) => {
//     if (typeof window !== "undefined" && window.google && window.google.translate) {
//       const selectLanguage = document.querySelector(".goog-te-combo");
//       if (selectLanguage) {
//         selectLanguage.value = languageCode; // Set the language code
//         selectLanguage.dispatchEvent(new Event("change")); // Trigger change event
//       }
//     }
//   };

//   // Function to handle country change
//   const handleCountryChange = (countryCode) => {
//     const selected = countryLanguageList.find((item) => item.countryCode === countryCode);
//     setSelectedCountry(selected.countryName);
//     // You may want to set a default language based on the selected country
//     // Uncomment the next line if needed
//     // setSelectedLanguage(selected.language); // This could set a default language
//   };

//   // Function to handle language change without translation
//   const handleLanguageChange = (languageCode) => {
//     setSelectedLanguage(languageCode);
//     // If you want to initiate translation when the language is selected, uncomment the next line
//     // handleLanguageTranslation(languageCode); // Trigger language translation if needed
//   };

//   // Effect to load Google Translate script only once
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     script.async = true;
//     document.body.appendChild(script);

//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         { pageLanguage: "en" },
//         "google_translate_element"
//       );
//     };

//     return () => {
//       // Clean up the script when component unmounts
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <nav className="bg-[#0d63ae] text-white py-3 px-6 justify-between items-center hidden md:flex">
//       <div className="flex space-x-3">
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Facebook size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Twitter size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Instagram size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Linkedin size={12} />
//         </a>
//       </div>

//       <div className="flex items-center space-x-3">
//         <Button
//           variant="outline"
//           size="sm"
//           className="bg-white text-[#FF6600] border-[#FF6600] hover:bg-[#FF6600] hover:text-white transition-colors text-sm py-1 px-4 h-8"
//         >
//           Employers
//         </Button>

//         <div className="flex items-center space-x-2">
//           <Select onValueChange={handleCountryChange}>
//             <SelectTrigger className="w-[120px] h-7 text-xs bg-transparent border-none text-white hover:bg-[#3b5998] data-[state=open]:bg-white data-[state=open]:text-black">
//               <SelectValue placeholder="Select Country" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               {countryLanguageList.map((item) => (
//                 <SelectItem
//                   key={item.countryCode}
//                   value={item.countryCode}
//                   className="text-gray-500 hover:text-white hover:bg-blue-500"
//                 >
//                   {item.countryName}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
//             <SelectTrigger className="w-[90px] h-7 text-xs bg-transparent border-none text-white hover:bg-[#3b5998] data-[state=open]:bg-white data-[state=open]:text-black">
//               <SelectValue placeholder="Select Language" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               {countryLanguageList.map((item) => (
//                 <SelectItem
//                   key={item.language}
//                   value={item.language}
//                   className="text-gray-500 hover:text-white hover:bg-blue-500"
//                 >
//                   {item.language}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         <div id="google_translate_element" className="translate-element"></div>
//       </div>
//     </nav>
//   );
// }




// working code not reolding
// "use client";

// import React, { useState, useEffect } from "react";
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Importing social media icons from Lucide
// import { Button } from "@/components/ui/button"; // Importing Button component
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Importing Select components
// import { countryLanguageList } from "@/data/countryLanguageData"; // Importing country-language data

// export default function TopNavbar() {
//   const [selectedCountry, setSelectedCountry] = useState(""); // State to track selected country
//   const [selectedLanguage, setSelectedLanguage] = useState(""); // State to track selected language

//   // Function to handle language translation using Google Translate API
//   const handleLanguageTranslation = (languageCode) => {
//     if (typeof window !== "undefined" && window.google && window.google.translate) {
//       const selectLanguage = document.querySelector(".goog-te-combo");
//       if (selectLanguage) {
//         selectLanguage.value = languageCode; // Set the language code
//         selectLanguage.dispatchEvent(new Event("change")); // Trigger change event
//       }
//     }
//   };

//   // Function to handle country change
//   const handleCountryChange = (countryCode) => {
//     const selected = countryLanguageList.find((item) => item.countryCode === countryCode);
//     if (selected) {
//       setSelectedCountry(selected.countryName);
//       setSelectedLanguage(selected.language); // Automatically set the default language for the selected country
//       handleLanguageTranslation(selected.languageCode); // Trigger translation based on selected language code
//     }
//   };

//   // Function to handle language change
//   const handleLanguageChange = (languageCode) => {
//     setSelectedLanguage(languageCode);
//     handleLanguageTranslation(languageCode); // Trigger translation when the language is selected
//   };

//   // Effect to load Google Translate script only once
//   useEffect(() => {
//     const googleTranslateInit = () => {
//       new window.google.translate.TranslateElement(
//         { pageLanguage: "en" },
//         "google_translate_element"
//       );
//     };

//     if (typeof window !== "undefined" && !window.google?.translate) {
//       const script = document.createElement("script");
//       script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateInit";
//       script.async = true;
//       document.body.appendChild(script);
      
//       // Ensure googleTranslateInit is in the global scope
//       window.googleTranslateInit = googleTranslateInit;
//     } else {
//       googleTranslateInit(); // If the script is already loaded
//     }

//     return () => {
//       // Clean up the script when the component unmounts
//       document.body.removeChild(document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateInit"]'));
//     };
//   }, []);

//   return (
//     <nav className="bg-[#0d63ae] text-white py-3 px-6 justify-between items-center hidden md:flex">
//       <div className="flex space-x-3">
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Facebook size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Twitter size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Instagram size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Linkedin size={12} />
//         </a>
//       </div>

//       <div className="flex items-center space-x-3">
//         <Button 
//           variant="outline" 
//           size="sm" 
//           className="bg-white text-[#FF6600] border-[#FF6600] hover:bg-[#FF6600] hover:text-white transition-colors text-sm py-1 px-4 h-8"
//         >
//           Employers
//         </Button>

//         <div className="flex items-center space-x-2">
//           {/* Dropdown for selecting country */}
//           <Select onValueChange={handleCountryChange}>
//             <SelectTrigger className="w-[120px] h-7 text-xs bg-transparent border-none text-white hover:bg-[#3b5998] data-[state=open]:bg-white data-[state=open]:text-black">
//               <SelectValue placeholder="Select Country" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               {countryLanguageList.map((item) => (
//                 <SelectItem 
//                   key={item.countryCode} 
//                   value={item.countryCode} 
//                   className="text-gray-500 hover:text-white hover:bg-blue-500"
//                 >
//                   {item.countryName}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           {/* Language dropdown */}
//           <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
//             <SelectTrigger className="w-[90px] h-7 text-xs bg-transparent border-none text-white hover:bg-[#3b5998] data-[state=open]:bg-white data-[state=open]:text-black">
//               <SelectValue placeholder="Select Language" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               {countryLanguageList.map((item) => (
//                 <SelectItem 
//                   key={item.language} // Unique key for each language
//                   value={item.languageCode} // Set the value to the language code
//                   className="text-gray-500 hover:text-white hover:bg-blue-500"
//                 >
//                   {item.language} {/* Display language name */}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       {/* Google Translate Element */}
//       <div id="google_translate_element" style={{ display: 'none' }}></div>
//     </nav>
//   );
// }




// "use client";

// import React, { useState, useEffect } from "react";
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Import social media icons from Lucide
// import { Button } from "@/components/ui/button"; // Button component
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Select components
// import { countryLanguageList } from "@/data/countryLanguageData"; // Import country-language data

// export default function TopNavbar() {
//   const [selectedLanguage, setSelectedLanguage] = useState(""); // State to track selected language
//   const [selectedCountry, setSelectedCountry] = useState(""); // State to track selected country
//   const [isScriptLoaded, setIsScriptLoaded] = useState(false); // State to check if script is loaded

//   const handleLanguageTranslation = (languageCode) => {
//     const selectLanguage = document.querySelector(".goog-te-combo");
//     if (selectLanguage) {
//       selectLanguage.value = languageCode; // Set the language code
//       selectLanguage.dispatchEvent(new Event("change")); // Trigger the change event
//     }
//   };

//   const handleLanguageChange = (languageCode) => {
//     setSelectedLanguage(languageCode);
//     localStorage.setItem("lngId", languageCode); // Store selected language in local storage
//     document.cookie = `googtrans=/en/${languageCode.toLowerCase()}`;
//     window.location.reload(); // Reload the page to apply the new language
//   };

//   const handleCountryChange = (countryCode) => {
//     const country = countryLanguageList.find((item) => item.countryCode === countryCode);
//     if (country) {
//       setSelectedCountry(countryCode);
//       const defaultLanguage = country.languageCode;
//       setSelectedLanguage(defaultLanguage);
//       handleLanguageChange(defaultLanguage); // Automatically change the language based on selected country
//     }
//   };

//   const fetchUserLocation = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://ipinfo.io/?token=f411bffc738445", true); // Replace token with your own if needed
//     xhr.responseType = "json";
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         const response = xhr.response;
//         const userCountryCode = response.country; // Get country code from the response
//         const country = countryLanguageList.find((item) => item.countryCode === userCountryCode);
//         if (country) {
//           handleCountryChange(userCountryCode); // Set detected country and language
//         }
//       }
//     };
//     xhr.send();
//   };

//   useEffect(() => {
//     const googleTranslateInit = () => {
//       new window.google.translate.TranslateElement(
//         { pageLanguage: "en" }, // Set the default page language to English
//         "google_translate_element" // The element ID where Google Translate is rendered
//       );

//       const style = document.createElement("style");
//       style.innerHTML = `
//         .goog-te-banner-frame.skiptranslate,
//         .goog-te-menu-frame,
//         .goog-te-gadget,
//         .goog-te-combo { 
//           color: white !important; /* Set all unwanted text to white */
//         }
//         iframe.goog-te-banner-frame { display: none !important; } /* Hide banner frame */
//       `;
//       document.head.appendChild(style);

//       return () => {
//         document.head.removeChild(style);
//       };
//     };

//     if (typeof window !== "undefined" && !window.google?.translate) {
//       const script = document.createElement("script");
//       script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateInit";
//       script.async = true;
//       script.onload = () => setIsScriptLoaded(true);
//       document.body.appendChild(script);

//       window.googleTranslateInit = googleTranslateInit;

//       return () => {
//         const scriptElement = document.getElementById("google-translate-script");
//         if (scriptElement) {
//           document.body.removeChild(scriptElement);
//         }
//         delete window.googleTranslateInit;
//       };
//     } else {
//       googleTranslateInit(); // Initialize if script is already loaded
//     }
//   }, []);

//   useEffect(() => {
//     const storedLanguage = localStorage.getItem("lngId");
//     if (storedLanguage) {
//       setSelectedLanguage(storedLanguage);
//       handleLanguageTranslation(storedLanguage); // Translate based on stored language
//     } else {
//       fetchUserLocation(); // Detect user location if no language is stored
//     }
//   }, []);

//   useEffect(() => {
//     if (selectedLanguage && isScriptLoaded) {
//       handleLanguageTranslation(selectedLanguage);
//     }
//   }, [selectedLanguage, isScriptLoaded]);

//   return (
//     <nav className="bg-[#0d63ae] text-white py-3 px-6 justify-between items-center hidden md:flex">
//       <div className="flex space-x-3">
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Facebook size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Twitter size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Instagram size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Linkedin size={12} />
//         </a>
//       </div>

//       <div className="flex items-center space-x-3 notranslate">
//         <Button 
//           variant="outline" 
//           size="sm" 
//           className="bg-white text-[#FF6600] border-[#FF6600] hover:bg-[#FF6600] hover:text-white transition-colors text-sm py-1 px-4 h-8"
//         >
//           Employers
//         </Button>

//         <div className="flex items-center space-x-2">
//           {/* Country dropdown */}
//           <Select value={selectedCountry} onValueChange={handleCountryChange} className="notranslate">
//             <SelectTrigger className="w-[90px] h-8 text-xs text-white border-none bg-[#0d63ae] hover:bg-[#3b5998] transition-colors">
//               <SelectValue placeholder="Select Country" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               {countryLanguageList.map((item) => (
//                 <SelectItem
//                   key={item.countryCode}
//                   value={item.countryCode}
//                   className="text-gray-500 hover:text-white hover:bg-blue-500"
//                 >
//                   {item.country} {/* Display country name */}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           {/* Language dropdown */}
//           <Select value={selectedLanguage} onValueChange={handleLanguageChange} className="notranslate">
//             <SelectTrigger className="w-[90px] h-8 text-xs text-white border-none bg-[#0d63ae] hover:bg-[#3b5998] transition-colors">
//               <SelectValue placeholder="Select Language" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               {countryLanguageList.map((item) => (
//                 <SelectItem
//                   key={item.languageCode}
//                   value={item.languageCode}
//                   className="text-gray-500 hover:text-white hover:bg-blue-500"
//                 >
//                   {item.language} {/* Display language name */}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       {/* Google Translate div */}
//       <div id="google_translate_element" style={{ display: "none" }}></div>
//     </nav>
//   );
// }


// "use client";

// import React, { useState, useEffect } from "react";
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Import social media icons
// import { Button } from "@/components/ui/button"; // Button component
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Select components
// import { countryLanguageList } from "@/data/countryLanguageData"; // Import country-language data

// export default function TopNavbar() {
//   const [selectedLanguage, setSelectedLanguage] = useState(""); // Track selected language
//   const [selectedCountry, setSelectedCountry] = useState("AE"); // Track selected country, default to UAE
//   const [isScriptLoaded, setIsScriptLoaded] = useState(false); // Track if script is loaded

//   // Function to handle language translation using Google Translate API
//   const handleLanguageTranslation = (languageCode) => {
//     const selectLanguage = document.querySelector(".goog-te-combo");
//     if (selectLanguage) {
//       selectLanguage.value = languageCode; // Set language code
//       selectLanguage.dispatchEvent(new Event("change")); // Trigger the change event
//     }
//   };

//   // Function to handle language selection and trigger translation
//   const handleLanguageChange = (languageCode) => {
//     setSelectedLanguage(languageCode);
//     localStorage.setItem("lngId", languageCode); // Store language in local storage
//     document.cookie = `googtrans=/en/${languageCode.toLowerCase()}`;
//     window.location.reload(); // Reload page to apply language
//   };

//   // Function to handle country change and update language
//   const handleCountryChange = (countryCode) => {
//     setSelectedCountry(countryCode);
//     const country = countryLanguageList.find((item) => item.countryCode === countryCode);
//     if (country) {
//       const defaultLanguage = country.languageCode;
//       setSelectedLanguage(defaultLanguage);
//       handleLanguageChange(defaultLanguage); // Change language based on selected country
//     }
//   };

//   // Load user's location via IP and set language and country automatically
//   const fetchUserLocation = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://ipinfo.io/?token=f411bffc738445", true); // Replace with your token
//     xhr.responseType = "json";
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         const response = xhr.response;
//         const userCountryCode = response.country || "AE"; // Default to UAE if not found
//         const country = countryLanguageList.find((item) => item.countryCode === userCountryCode);
//         if (country) {
//           setSelectedCountry(userCountryCode); // Set detected country
//           setSelectedLanguage(country.languageCode); // Set detected language
//           handleLanguageChange(country.languageCode); // Translate based on location
//         }
//       }
//     };
//     xhr.send();
//   };

//   // Load Google Translate script once
//   useEffect(() => {
//     const googleTranslateInit = () => {
//       new window.google.translate.TranslateElement(
//         { pageLanguage: "en" }, // Default page language
//         "google_translate_element"
//       );
//     };

//     if (typeof window !== "undefined" && !window.google?.translate) {
//       const script = document.createElement("script");
//       script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateInit";
//       script.async = true;
//       script.id = "google-translate-script";
//       script.onload = () => setIsScriptLoaded(true); // Set script loaded
//       document.body.appendChild(script);

//       window.googleTranslateInit = googleTranslateInit;

//       return () => {
//         const scriptElement = document.getElementById("google-translate-script");
//         if (scriptElement) {
//           document.body.removeChild(scriptElement);
//         }
//         delete window.googleTranslateInit;
//       };
//     } else {
//       googleTranslateInit();
//     }
//   }, []);

//   // Apply translation when script has loaded
//   useEffect(() => {
//     if (selectedLanguage && isScriptLoaded) {
//       handleLanguageTranslation(selectedLanguage);
//     }
//   }, [selectedLanguage, isScriptLoaded]);

//   // Load stored language and country from local storage or fetch user location
//   useEffect(() => {
//     const storedLanguage = localStorage.getItem("lngId");
//     if (storedLanguage) {
//       setSelectedLanguage(storedLanguage);
//       handleLanguageTranslation(storedLanguage);
//     } else {
//       fetchUserLocation();
//     }
//   }, []);

//   return (
//     <nav className="bg-[#0d63ae] text-white py-3 px-6 justify-between items-center hidden md:flex">
//       <div className="flex space-x-3">
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Facebook size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Twitter size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Instagram size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Linkedin size={12} />
//         </a>
//       </div>

//       <div className="flex items-center space-x-3 notranslate">
//         <Button 
//           variant="outline" 
//           size="sm" 
//           className="bg-white text-[#FF6600] border-[#FF6600] hover:bg-[#FF6600] hover:text-white transition-colors text-sm py-1 px-4 h-8"
//         >
//           Employers
//         </Button>

//         <div className="flex items-center space-x-2">
//   {/* Country dropdown */}
//   <Select value={selectedCountry} onValueChange={handleCountryChange} className="notranslate">
//     <SelectTrigger className="w-[90px] h-8 text-xs text-white border-none bg-[#0d63ae] hover:bg-[#3b5998] transition-colors">
//       <SelectValue placeholder="Select Country" />
//     </SelectTrigger>
//     <SelectContent className="bg-white">
//       {countryLanguageList.map((item) => (
//         <SelectItem
//           key={item.countryCode}
//           value={item.countryCode}
//           className="text-gray-500 hover:text-white hover:bg-blue-500"
//         >
//           {item.countryName} {/* Display country name */}
//         </SelectItem>
//       ))}
//     </SelectContent>
//   </Select>

//   {/* Language dropdown */}
//   <Select value={selectedLanguage} onValueChange={handleLanguageChange} className="notranslate">
//     <SelectTrigger className="w-[90px] h-8 text-xs text-white border-none bg-[#0d63ae] hover:bg-[#3b5998] transition-colors">
//       <SelectValue placeholder="Select Language" />
//     </SelectTrigger>
//     <SelectContent className="bg-white">
//       {countryLanguageList.map((item) => (
//         <SelectItem
//           key={item.languageCode}
//           value={item.languageCode}
//           className="text-gray-500 hover:text-white hover:bg-blue-500"
//         >
//           {item.language} {/* Display language name */}
//         </SelectItem>
//       ))}
//     </SelectContent>
//   </Select>
// </div>

//       </div>

//       {/* Google Translate div */}
//       <div id="google_translate_element" style={{ display: "none" }}></div>
//     </nav>
//   );
// }



// perfect working without rendering error 
// "use client";

// import React, { useState, useEffect } from "react";
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Import social media icons from Lucide
// import { Button } from "@/components/ui/button"; // Button component
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Select components
// import { countryLanguageList } from "@/data/countryLanguageData"; // Import country-language data

// export default function TopNavbar() {
//   const [selectedLanguage, setSelectedLanguage] = useState(""); // State to track selected language
//   const [selectedCountry, setSelectedCountry] = useState(""); // State to track selected country
//   const [isScriptLoaded, setIsScriptLoaded] = useState(false); // State to check if script is loaded

//   // Function to handle language translation using Google Translate API
//   const handleLanguageTranslation = (languageCode) => {
//     const selectLanguage = document.querySelector(".goog-te-combo");
//     if (selectLanguage) {
//       selectLanguage.value = languageCode; // Set the language code
//       selectLanguage.dispatchEvent(new Event("change")); // Trigger the change event
//     }
//   };

//   // Function to handle language selection and trigger translation
//   const handleLanguageChange = (languageCode) => {
//     setSelectedLanguage(languageCode);
//     localStorage.setItem("lngId", languageCode); // Store selected language in local storage
//     document.cookie = `googtrans=/en/${languageCode.toLowerCase()}`;
//     window.location.reload(); // Reload the page to apply the new language
//   };

//   // Function to handle country change and update the language dropdown
//   const handleCountryChange = (countryCode) => {
//     setSelectedCountry(countryCode);
//     const country = countryLanguageList.find((item) => item.countryCode === countryCode);
//     if (country) {
//       const defaultLanguage = country.languageCode;
//       setSelectedLanguage(defaultLanguage);
//       handleLanguageChange(defaultLanguage); // Automatically change the language based on selected country
//     }
//   };

//   // Load user's location via IP and set the language and country automatically
//   const fetchUserLocation = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://ipinfo.io/?token=f411bffc738445", true); // Replace token with your own if needed
//     xhr.responseType = "json";
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         const response = xhr.response;
//         const userCountryCode = response.country; // Get country code from the response
//         const country = countryLanguageList.find((item) => item.countryCode === userCountryCode);
//         if (country) {
//           setSelectedCountry(userCountryCode); // Set the detected country
//           setSelectedLanguage(country.languageCode); // Set the detected language
//           handleLanguageChange(country.languageCode); // Translate page based on location
//         }
//       }
//     };
//     xhr.send();
//   };

//   // Load Google Translate script once
//   useEffect(() => {
//     const googleTranslateInit = () => {
//       new window.google.translate.TranslateElement(
//         { pageLanguage: "en" }, // Set the default page language to English
//         "google_translate_element" // The element ID where Google Translate is rendered
//       );

//       // Hide unwanted Google Translate elements by changing the text color to white
//       const style = document.createElement("style");
//       style.innerHTML = `
//         .goog-te-banner-frame.skiptranslate,
//         .goog-te-menu-frame,
//         .goog-te-gadget,
//         .goog-te-combo { 
//           color: white !important; /* Set all unwanted text to white */
//         }
//         iframe.goog-te-banner-frame { display: none !important; } /* Hide banner frame */
//       `;
//       document.head.appendChild(style);

//       return () => {
//         document.head.removeChild(style);
//       };
//     };

//     if (typeof window !== "undefined" && !window.google?.translate) {
//       const script = document.createElement("script");
//       script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateInit";
//       script.async = true;
//       script.id = "google-translate-script";
//       script.onload = () => setIsScriptLoaded(true); // Set script loaded state
//       document.body.appendChild(script);

//       window.googleTranslateInit = googleTranslateInit;

//       return () => {
//         const scriptElement = document.getElementById("google-translate-script");
//         if (scriptElement) {
//           document.body.removeChild(scriptElement);
//         }
//         delete window.googleTranslateInit;
//       };
//     } else {
//       googleTranslateInit(); // Initialize if script is already loaded
//     }
//   }, []);

//   // Apply translation when script has loaded
//   useEffect(() => {
//     if (selectedLanguage && isScriptLoaded) {
//       handleLanguageTranslation(selectedLanguage);
//     }
//   }, [selectedLanguage, isScriptLoaded]);

//   // Load stored language from local storage on mount
//   useEffect(() => {
//     const storedLanguage = localStorage.getItem("lngId");
//     if (storedLanguage) {
//       setSelectedLanguage(storedLanguage);
//       handleLanguageTranslation(storedLanguage); // Translate based on stored language
//     } else {
//       fetchUserLocation(); // Detect user location if no language is stored
//     }
//   }, []);

//   return (
//     <nav className="bg-[#0d63ae] text-white py-3 px-6 justify-between items-center hidden md:flex">
//       <div className="flex space-x-3">
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Facebook size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Twitter size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Instagram size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Linkedin size={12} />
//         </a>
//       </div>

//       <div className="flex items-center space-x-3 notranslate">
//         <Button 
//           variant="outline" 
//           size="sm" 
//           className="bg-white text-[#FF6600] border-[#FF6600] hover:bg-[#FF6600] hover:text-white transition-colors text-sm py-1 px-4 h-8"
//         >
//           Employers
//         </Button>
//         <div className="flex items-center space-x-2">
//   {/* Country dropdown */}
//   <Select value={selectedCountry} onValueChange={handleCountryChange} className="notranslate">
//     <SelectTrigger className="w-[90px] h-8 text-xs text-white border-none bg-[#0d63ae] hover:bg-[#3b5998] transition-colors">
//       <SelectValue placeholder="Select Country" />
//     </SelectTrigger>
//     <SelectContent className="bg-white">
//       {countryLanguageList.map((item) => (
//         <SelectItem
//           key={item.countryCode}
//           value={item.countryCode}
//           className="text-gray-500 hover:text-white hover:bg-[#0d63ae] transition-all"
//         >
//           {item.countryName} {/* Display country name */}
//         </SelectItem>
//       ))}
//     </SelectContent>
//   </Select>

//   {/* Language dropdown */}
//   <Select value={selectedLanguage} onValueChange={handleLanguageChange} className="notranslate">
//     <SelectTrigger className="w-[90px] h-8 text-xs text-white border-none bg-[#0d63ae] hover:bg-[#3b5998] transition-colors">
//       <SelectValue placeholder="Select Language" />
//     </SelectTrigger>
//     <SelectContent className="bg-white">
//       {countryLanguageList.map((item) => (
//         <SelectItem
//           key={item.languageCode}
//           value={item.languageCode}
//           className="text-gray-500 hover:text-white hover:bg-[#0d63ae] transition-all"
//         >
//           {item.language} {/* Display language name */}
//         </SelectItem>
//       ))}
//     </SelectContent>
//   </Select>
// </div>

//       </div>

//       {/* Google Translate div */}
//       <div id="google_translate_element" style={{ display: "none" }}></div>
//     </nav>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { countryLanguageList } from "@/data/countryLanguageData";

export default function TopNavbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const handleLanguageTranslation = (languageCode) => {
    const selectLanguage = document.querySelector(".goog-te-combo");
    if (selectLanguage) {
      selectLanguage.value = languageCode;
      selectLanguage.dispatchEvent(new Event("change"));
    }
  };

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
    localStorage.setItem("lngId", languageCode);
    document.cookie = `googtrans=/en/${languageCode.toLowerCase()}`;
    window.location.reload();
  };

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
    const country = countryLanguageList.find((item) => item.countryCode === countryCode);
    if (country) {
      const defaultLanguage = country.languageCode;
      setSelectedLanguage(defaultLanguage);
      handleLanguageChange(defaultLanguage);
    }
  };

  const fetchUserLocation = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ipinfo.io/?token=f411bffc738445", true);
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = xhr.response;
        const userCountryCode = response.country;
        const country = countryLanguageList.find((item) => item.countryCode === userCountryCode);
        if (country) {
          setSelectedCountry(userCountryCode);
          setSelectedLanguage(country.languageCode);
          handleLanguageChange(country.languageCode);
        }
      }
    };
    xhr.send();
  };

  useEffect(() => {
    const googleTranslateInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );

      const style = document.createElement("style");
      style.innerHTML = `
        .goog-te-banner-frame.skiptranslate,
        .goog-te-menu-frame,
        .goog-te-gadget,
        .goog-te-combo { 
          color: white !important; 
        }
        iframe.goog-te-banner-frame { display: none !important; }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    };

    if (typeof window !== "undefined" && !window.google?.translate) {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateInit";
      script.async = true;
      script.id = "google-translate-script";
      script.onload = () => setIsScriptLoaded(true);
      document.body.appendChild(script);

      window.googleTranslateInit = googleTranslateInit;

      return () => {
        const scriptElement = document.getElementById("google-translate-script");
        if (scriptElement) {
          document.body.removeChild(scriptElement);
        }
        delete window.googleTranslateInit;
      };
    } else {
      googleTranslateInit();
    }
  }, []);

  useEffect(() => {
    if (selectedLanguage && isScriptLoaded) {
      handleLanguageTranslation(selectedLanguage);
    }
  }, [selectedLanguage, isScriptLoaded]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("lngId");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      handleLanguageTranslation(storedLanguage);
    } else {
      fetchUserLocation();
    }
  }, []);

  return (
    <nav className="bg-[#0d63ae] text-white py-3 px-6 justify-between items-center hidden md:flex">
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

      <div className="flex items-center space-x-3 notranslate">
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-white text-[#FF6600] border-[#FF6600] hover:bg-[#FF6600] hover:text-white transition-colors text-sm py-1 px-4 h-8"
        >
          Employers
        </Button>
        <div className="flex items-center space-x-2">
          {/* Country dropdown */}
          <Select value={selectedCountry || "Select Country"} onValueChange={handleCountryChange} className="notranslate">
            <SelectTrigger className="w-[90px] h-8 text-xs text-white border-none bg-[#0d63ae] hover:bg-[#3b5998] transition-colors">
              <SelectValue>{selectedCountry ? countryLanguageList.find((item) => item.countryCode === selectedCountry)?.countryName : "Select Country"}</SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-white">
              {countryLanguageList.map((item) => (
                <SelectItem
                  key={item.countryCode}
                  value={item.countryCode}
                  className="text-gray-500 hover:text-white hover:bg-[#0d63ae] transition-all"
                >
                  {item.countryName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Language dropdown */}
          <Select value={selectedLanguage || "Select Language"} onValueChange={handleLanguageChange} className="notranslate">
            <SelectTrigger className="w-[90px] h-8 text-xs text-white border-none bg-[#0d63ae] hover:bg-[#3b5998] transition-colors">
              <SelectValue>{selectedLanguage ? countryLanguageList.find((item) => item.languageCode === selectedLanguage)?.language : "Select Language"}</SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-white">
              {countryLanguageList.map((item) => (
                <SelectItem
                  key={item.languageCode}
                  value={item.languageCode}
                  className="text-gray-500 hover:text-white hover:bg-[#0d63ae] transition-all"
                >
                  {item.language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Google Translate div */}
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </nav>
  );
}




// "use client";

// import React, { useState, useEffect } from "react";
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { countryLanguageList } from "@/data/countryLanguageData";

// export default function TopNavbar() {
//   const [selectedLanguage, setSelectedLanguage] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [isScriptLoaded, setIsScriptLoaded] = useState(false);

//   const handleLanguageTranslation = (languageCode) => {
//     const selectLanguage = document.querySelector(".goog-te-combo");
//     if (selectLanguage) {
//       selectLanguage.value = languageCode;
//       selectLanguage.dispatchEvent(new Event("change"));
//     }
//   };

//   const handleLanguageChange = (languageCode) => {
//     setSelectedLanguage(languageCode);
//     localStorage.setItem("lngId", languageCode);
//     document.cookie = `googtrans=/en/${languageCode.toLowerCase()}`;
//     window.location.reload();
//   };

//   const handleCountryChange = (countryCode) => {
//     setSelectedCountry(countryCode);
//     const country = countryLanguageList.find((item) => item.countryCode === countryCode);
//     if (country) {
//       const defaultLanguage = country.languageCode;
//       setSelectedLanguage(defaultLanguage);
//       handleLanguageChange(defaultLanguage);
//     }
//   };

//   const fetchUserLocation = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://ipinfo.io/?token=f411bffc738445", true);
//     xhr.responseType = "json";
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         const response = xhr.response;
//         const userCountryCode = response.country;
//         const country = countryLanguageList.find((item) => item.countryCode === userCountryCode);
//         if (country) {
//           setSelectedCountry(userCountryCode);
//           setSelectedLanguage(country.languageCode);
//           handleLanguageChange(country.languageCode);
//         }
//       }
//     };
//     xhr.send();
//   };

//   useEffect(() => {
//     const googleTranslateInit = () => {
//       new window.google.translate.TranslateElement(
//         { pageLanguage: "en" },
//         "google_translate_element"
//       );

//       const style = document.createElement("style");
//       style.innerHTML = `
//         .goog-te-banner-frame.skiptranslate,
//         .goog-te-menu-frame.skiptranslate,
//         .goog-te-combo,
//         .goog-te-gadget { 
//           display: none !important; /* Hide all unwanted elements */
//         }
//         body { top: 0 !important; }
//       `;
//       document.head.appendChild(style);

//       return () => {
//         document.head.removeChild(style);
//       };
//     };

//     if (typeof window !== "undefined" && !window.google?.translate) {
//       const script = document.createElement("script");
//       script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateInit";
//       script.async = true;
//       script.id = "google-translate-script";
//       script.onload = () => setIsScriptLoaded(true);
//       document.body.appendChild(script);

//       window.googleTranslateInit = googleTranslateInit;

//       return () => {
//         const scriptElement = document.getElementById("google-translate-script");
//         if (scriptElement) {
//           document.body.removeChild(scriptElement);
//         }
//         delete window.googleTranslateInit;
//       };
//     } else {
//       googleTranslateInit();
//     }
//   }, []);

//   useEffect(() => {
//     if (selectedLanguage && isScriptLoaded) {
//       handleLanguageTranslation(selectedLanguage);
//     }
//   }, [selectedLanguage, isScriptLoaded]);

//   useEffect(() => {
//     const storedLanguage = localStorage.getItem("lngId");
//     if (storedLanguage) {
//       setSelectedLanguage(storedLanguage);
//       handleLanguageTranslation(storedLanguage);
//     } else {
//       fetchUserLocation();
//     }
//   }, []);

//   return (
//     <nav className="bg-[#0d63ae] text-white py-3 px-6 justify-between items-center hidden md:flex">
//       <div className="flex space-x-3">
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Facebook size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Twitter size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Instagram size={12} />
//         </a>
//         <a href="#" className="hover:text-[#FF6600] transition-colors p-1 rounded-full border border-white hover:border-[#FF6600]">
//           <Linkedin size={12} />
//         </a>
//       </div>

//       <div className="flex items-center space-x-3 notranslate">
//         <Button 
//           variant="outline" 
//           size="sm" 
//           className="bg-white text-[#FF6600] border-[#FF6600] hover:bg-[#FF6600] hover:text-white transition-colors text-sm py-1 px-4 h-8"
//         >
//           Employers
//         </Button>
//         <div className="flex items-center space-x-2">
//           <Select value={selectedCountry} onValueChange={handleCountryChange} className="notranslate">
//             <SelectTrigger className="w-[90px] h-8 text-xs text-white border-none bg-[#0d63ae] hover:bg-[#3b5998] transition-colors">
//               <SelectValue placeholder="Select Country" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               {countryLanguageList.map((item) => (
//                 <SelectItem
//                   key={item.countryCode}
//                   value={item.countryCode}
//                   className="text-gray-500 hover:text-white hover:bg-[#0d63ae] transition-all"
//                 >
//                   {item.countryName}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           <Select value={selectedLanguage} onValueChange={handleLanguageChange} className="notranslate">
//             <SelectTrigger className="w-[90px] h-8 text-xs text-white border-none bg-[#0d63ae] hover:bg-[#3b5998] transition-colors">
//               <SelectValue placeholder="Select Language" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               {countryLanguageList.map((item) => (
//                 <SelectItem
//                   key={item.languageCode}
//                   value={item.languageCode}
//                   className="text-gray-500 hover:text-white hover:bg-[#0d63ae] transition-all"
//                 >
//                   {item.language}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       <div id="google_translate_element" style={{ display: "none" }}></div>
//     </nav>
//   );
// }
