// app/layout.js
import Head from 'next/head'; // Importing the Head component for managing document head
import Navbar from '../components/Navbar'; // Importing the main navigation bar component
import './globals.css'; // Importing global CSS styles
import DashFooter from '@/components/dashfooter'; // Importing the footer component for the dashboard layout
import TopNavbar from '@/components/TopNavbar'; // Importing the top navigation bar component

export default function RootLayout({ children }) {
  return (
    <html lang="en"> {/* Setting the language attribute for the document */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Ensuring responsive design */}
      </Head>
      <body>
        {/* Navbar is fixed across all pages */}
        
        <TopNavbar /> {/* Rendering the top navigation bar */}

        <Navbar /> {/* Rendering the main navigation bar */}

        {/* The children will render the content of the current page */}
        <main className=''> {/* Main content area */}
          {children}  {/* This is where the page content will be rendered */}
        </main>
        
        <DashFooter /> {/* Rendering the footer for the dashboard layout */}
      </body>
      
    </html>
  );
}
