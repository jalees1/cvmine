// // app/layout.js
// import Head from 'next/head'; // Importing the Head component for managing document head
// import Navbar from '../components/Navbar'; // Importing the main navigation bar component
// import './globals.css'; // Importing global CSS styles
// import DashFooter from '@/components/dashfooter'; // Importing the footer component for the dashboard layout
// import TopNavbar from '@/components/TopNavbar'; // Importing the top navigation bar component

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en"> {/* Setting the language attribute for the document */}
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Ensuring responsive design */}
//       </Head>
//       <body>
//         {/* Navbar is fixed across all pages */}
        
//         <TopNavbar /> 

//         <Navbar /> {/* Rendering the main navigation bar */}

//         {/* The children will render the content of the current page */}
//         <main className=''> {/* Main content area */}
//           {children}  {/* This is where the page content will be rendered */}
//         </main>
        
//         <DashFooter /> {/* Rendering the footer for the dashboard layout */}
//       </body>
      
//     </html>
//   );
// }

// layout.js
// import Head from 'next/head'; // Import the Head component
// import Navbar from '../components/Navbar';
// import './globals.css';
// import DashFooter from '@/components/dashfooter';
// import TopNavbar from '@/components/TopNavbar';

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en"> {/* Set the default language to English */}
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         {/* Google Translate Script */}
//         <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
//         <script>
//           {`
//             function googleTranslateElementInit() {
//               new google.translate.TranslateElement({
//                 pageLanguage: 'en',
//                 includedLanguages: 'en,ar,fr,de,es,hi', // Add supported languages
//                 layout: google.translate.TranslateElement.InlineLayout.SIMPLE
//               }, 'google_translate_element');
//             }
//           `}
//         </script>
//       </Head>
//       <body>
//         <TopNavbar />
//         <Navbar />
//         <div id="google_translate_element"></div> {/* Google Translate Element */}
//         <main className=''>
//           {children}
//         </main>
//         <DashFooter />
//       </body>
//     </html>
//   );
// }

// // working //

"use client";

import Head from 'next/head'; // Import the Head component
import Navbar from '../components/Navbar';
import './globals.css';
import DashFooter from '@/components/dashfooter';
import TopNavbar from '@/components/TopNavbar';

export default function RootLayout({ children }) {
  

  return (
    <html lang="en"> {/* Set the default language to English */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

      </Head>
      <body>
        <TopNavbar /> {/* Top Navigation Bar */}
        <Navbar /> {/* Main Navigation Bar */}
    
        <main>
          {children}
        </main>
        <DashFooter /> {/* Footer */}
      </body>
    </html>
  );
}

