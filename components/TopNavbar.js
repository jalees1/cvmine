"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { countryLanguageList } from "@/data/countryLanguageData";

export default function TopNavbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const uniqueLanguages = useMemo(() => {
    const uniqueEntries = new Map();
    
    countryLanguageList.forEach((item) => {
      if (!uniqueEntries.has(item.languageCode)) {
        uniqueEntries.set(item.languageCode, {
          languageCode: item.languageCode,
          language: item.language
        });
      }
    });
    
    return Array.from(uniqueEntries.values());
  }, []);

  const handleLanguageTranslation = (languageCode) => {
    const selectLanguage = document.querySelector(".goog-te-combo");
    if (selectLanguage) {
      selectLanguage.value = languageCode;
      selectLanguage.dispatchEvent(new Event("change"));
    }
  };

  const handleLanguageChange = (languageCode, skipReload = false) => {
    setSelectedLanguage(languageCode);
    localStorage.setItem("lngId", languageCode);
    document.cookie = `googtrans=/en/${languageCode.toLowerCase()}`;
    if (!skipReload) {
      window.location.reload();
    }
  };

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
    localStorage.setItem("countryId", countryCode);
    const country = countryLanguageList.find((item) => item.countryCode === countryCode);
    if (country) {
      const defaultLanguage = country.languageCode;
      setSelectedLanguage(defaultLanguage);
      handleLanguageChange(defaultLanguage);
    }
  };

  const fetchUserLocation = async () => {
    try {
      const response = await fetch("https://ipinfo.io/?token=f411bffc738445");
      const data = await response.json();
      const userCountryCode = data.country;
      
      const country = countryLanguageList.find((item) => item.countryCode === userCountryCode);
      if (country) {
        setSelectedCountry(userCountryCode);
        localStorage.setItem("countryId", userCountryCode);
        
        // Set language without page reload initially
        handleLanguageChange(country.languageCode, true);
        
        // Apply translation once script is loaded
        if (isScriptLoaded) {
          handleLanguageTranslation(country.languageCode);
        }
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  // Load Google Translate script
  useEffect(() => {
    const googleTranslateInit = () => {
      new window.google.translate.TranslateElement(
        { 
          pageLanguage: "en",
          autoDisplay: true
        },
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

      setIsScriptLoaded(true);

      return () => {
        document.head.removeChild(style);
      };
    };

    if (typeof window !== "undefined" && !window.google?.translate) {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateInit";
      script.async = true;
      script.id = "google-translate-script";
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

  // Initialize location and language
  useEffect(() => {
    if (!isInitialized) {
      const storedLanguage = localStorage.getItem("lngId");
      const storedCountry = localStorage.getItem("countryId");

      if (storedCountry && storedLanguage) {
        setSelectedCountry(storedCountry);
        setSelectedLanguage(storedLanguage);
        if (isScriptLoaded) {
          handleLanguageTranslation(storedLanguage);
        }
      } else {
        fetchUserLocation();
      }
      setIsInitialized(true);
    }
  }, [isScriptLoaded, isInitialized]);

  // Apply translation when script loads
  useEffect(() => {
    if (isScriptLoaded && selectedLanguage) {
      handleLanguageTranslation(selectedLanguage);
    }
  }, [isScriptLoaded, selectedLanguage]);

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
          <Select value={selectedCountry} onValueChange={handleCountryChange} className="notranslate">
            <SelectTrigger className="w-[90px] h-8 text-xs text-white border-none bg-[#0d63ae] hover:bg-[#3b5998] transition-colors">
              <SelectValue placeholder="Country" />
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

          <Select value={selectedLanguage} onValueChange={handleLanguageChange} className="NoTranslate">
            <SelectTrigger className="w-[90px] h-8 text-xs text-white border-none bg-[#0d63ae] hover:bg-[#3b5998] transition-colors">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {uniqueLanguages.map((item) => (
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

      <div id="google_translate_element" style={{ display: "none" }}></div>
    </nav>
  );
}

// "use client";

// import React, { useState, useEffect, useMemo } from "react";
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { countryLanguageList } from "@/data/countryLanguageData";

// export default function TopNavbar() {
//   const [selectedLanguage, setSelectedLanguage] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [isScriptLoaded, setIsScriptLoaded] = useState(false);

//   // Create a memoized array of unique languages
//   const uniqueLanguages = useMemo(() => {
//     const uniqueEntries = new Map();
    
//     countryLanguageList.forEach((item) => {
//       if (!uniqueEntries.has(item.languageCode)) {
//         uniqueEntries.set(item.languageCode, {
//           languageCode: item.languageCode,
//           language: item.language
//         });
//       }
//     });
    
//     return Array.from(uniqueEntries.values());
//   }, []);

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
//     localStorage.setItem("countryId", countryCode);
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
//           localStorage.setItem("countryId", userCountryCode);
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
//         .goog-te-menu-frame,
//         .goog-te-gadget,
//         .goog-te-combo { 
//           color: white !important;
//         }
//         iframe.goog-te-banner-frame { display: none !important; }
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
//     const storedCountry = localStorage.getItem("countryId");

//     if (storedCountry) {
//       setSelectedCountry(storedCountry);
//     }

//     if (storedLanguage) {
//       setSelectedLanguage(storedLanguage);
//       handleLanguageTranslation(storedLanguage);
//     } else if (!storedCountry) {
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
//               <SelectValue placeholder="Country" />
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

//           <Select value={selectedLanguage} onValueChange={handleLanguageChange} className="NoTranslate">
//             <SelectTrigger className="w-[90px] h-8 text-xs text-white border-none bg-[#0d63ae] hover:bg-[#3b5998] transition-colors">
//               <SelectValue placeholder="Select Language" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               {uniqueLanguages.map((item) => (
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
//     localStorage.setItem("countryId", countryCode); // Store country selection
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
//           localStorage.setItem("countryId", userCountryCode); // Store detected country
//           setSelectedLanguage(country.languageCode);
//           handleLanguageChange(country.languageCode);
//         }
//       }
//     };
//     xhr.send();
//   };

//   // Load Google Translate script
//   useEffect(() => {
//     const googleTranslateInit = () => {
//       new window.google.translate.TranslateElement(
//         { pageLanguage: "en" },
//         "google_translate_element"
//       );

//       const style = document.createElement("style");
//       style.innerHTML = `
//         .goog-te-banner-frame.skiptranslate,
//         .goog-te-menu-frame,
//         .goog-te-gadget,
//         .goog-te-combo { 
//           color: white !important;
//         }
//         iframe.goog-te-banner-frame { display: none !important; }
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

//   // Apply translation when script is loaded
//   useEffect(() => {
//     if (selectedLanguage && isScriptLoaded) {
//       handleLanguageTranslation(selectedLanguage);
//     }
//   }, [selectedLanguage, isScriptLoaded]);

//   // Load stored language and country from local storage on mount
//   useEffect(() => {
//     const storedLanguage = localStorage.getItem("lngId");
//     const storedCountry = localStorage.getItem("countryId");

//     if (storedCountry) {
//       setSelectedCountry(storedCountry);
//     }

//     if (storedLanguage) {
//       setSelectedLanguage(storedLanguage);
//       handleLanguageTranslation(storedLanguage);
//     } else if (!storedCountry) {
//       // Only fetch location if neither country nor language is stored
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
//               <SelectValue placeholder="Country" />
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

//           <Select value={selectedLanguage} onValueChange={handleLanguageChange} className="NoTranslate">
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
// // // // perfect working without rendering error 
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
//       <SelectValue placeholder="Country" />
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
//   <Select value={selectedLanguage} onValueChange={handleLanguageChange} className="NoTranslate">
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

// 'use client'

// import React, { useState, useEffect } from "react"
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { countryLanguageList } from "@/data/countryLanguageData"

// export default function TopNavbar() {
//   const [selectedLanguage, setSelectedLanguage] = useState("")
//   const [selectedCountry, setSelectedCountry] = useState("")
//   const [key, setKey] = useState(0)

//   // Handle language change
//   const handleLanguageChange = (languageCode) => {
//     setSelectedLanguage(languageCode)
//     localStorage.setItem("lngId", languageCode)
//     const country = countryLanguageList.find((item) => item.languageCode === languageCode)
//     if (country) {
//       setSelectedCountry(country.countryCode)
//     }
//     changeLanguage(languageCode)
//     setKey(prevKey => prevKey + 1) // Force re-render
//   }

//   // Handle country change
//   const handleCountryChange = (countryCode) => {
//     setSelectedCountry(countryCode)
//     const country = countryLanguageList.find((item) => item.countryCode === countryCode)
//     if (country) {
//       setSelectedLanguage(country.languageCode)
//       localStorage.setItem("lngId", country.languageCode)
//       changeLanguage(country.languageCode)
//       setKey(prevKey => prevKey + 1) // Force re-render
//     }
//   }

//   // Change language function (called when language is changed)
//   const changeLanguage = (languageCode) => {
//     if (window.google && window.google.translate) {
//       const selectElement = document.querySelector('.goog-te-combo')
//       if (selectElement) {
//         selectElement.value = languageCode
//         selectElement.dispatchEvent(new Event('change')) // Trigger the change event to initiate translation
//         // Re-initialize the Google Translate element after changing the language
//         const translateElement = new window.google.translate.TranslateElement(
//           { pageLanguage: "en", autoDisplay: false },
//           "google_translate_element"
//         )
//       }
//     }
//   }

//   // Fetch user's geolocation based on IP
//   const fetchUserLocation = async () => {
//     try {
//       const response = await fetch("https://ipinfo.io/?token=f411bffc738445") // Replace with your IP info API token
//       if (response.ok) {
//         const data = await response.json()
//         const userCountryCode = data.country
//         const country = countryLanguageList.find((item) => item.countryCode === userCountryCode)
//         if (country) {
//           setSelectedCountry(userCountryCode)
//           setSelectedLanguage(country.languageCode)
//           localStorage.setItem("lngId", country.languageCode)
//           changeLanguage(country.languageCode)
//           setKey(prevKey => prevKey + 1) // Force re-render
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching user location:", error)
//     }
//   }

//   // Check for language in localStorage or use geolocation
//   useEffect(() => {
//     const storedLanguage = localStorage.getItem("lngId")
//     if (storedLanguage) {
//       const country = countryLanguageList.find((item) => item.languageCode === storedLanguage)
//       if (country) {
//         setSelectedCountry(country.countryCode)
//         setSelectedLanguage(storedLanguage)
//         changeLanguage(storedLanguage)
//       }
//     } else {
//       fetchUserLocation() // If no language is stored, fetch user location
//     }

//     // Load Google Translate script only once
//     const script = document.createElement("script")
//     script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
//     script.async = true
//     document.body.appendChild(script)

//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         { pageLanguage: "en", autoDisplay: false },
//         "google_translate_element"
//       )
//     }

//     return () => {
//       document.body.removeChild(script)
//       delete window.googleTranslateElementInit
//     }
//   }, [])

//   return (
//     <nav key={key} className="bg-[#0d63ae] text-white py-3 px-6 justify-between items-center hidden md:flex">
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
//                   className="text-gray-500 hover:text-white hover:bg-[#0d63ae] transition-all"
//                 >
//                   {item.countryName} {/* Display country name */}
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
//                   className="text-gray-500 hover:text-white hover:bg-[#0d63ae] transition-all"
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

