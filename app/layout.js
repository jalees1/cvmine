// app/layout.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import './globals.css'; 
import DashFooter from '@/components/dashfooter';
import TopNavbar from '@/components/TopNavbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        {/* Navbar is fixed across all pages */}
       
        
        <TopNavbar />
    
        <Navbar />

        
        
        {/* The children will render the content of the current page */}
        <main className=''>
          {children}  {/* This is where the page content will be rendered */}
        </main>
        <DashFooter/>
      </body>
      
    </html>
  );
}
