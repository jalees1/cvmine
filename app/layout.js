// app/layout.js

import Footer from '@/components/footer';
import Navbar from '../components/Navbar';
import './globals.css'; 
import DashFooter from '@/components/dashfooter';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar is fixed across all pages */}
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
