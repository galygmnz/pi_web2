
"use client";



import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import CarouselCanchas from './components/CarouselCanchas';
import { FAQ } from './components/Footer';
import ContactUs from './components/ContactUs';
import AboutUs2 from './components/AboutUs2';



export default function Home() {

  return (
    <div className="font-sans flex flex-col justify-between min-h-screen bg-[#008c9a]">
      <Navbar />



      



      
      
      

  
     <div>
      
     </div>
       
      <div className=' bg-[#006f79]   py-1 px-6 md:px-12 mt-30  text-lime-100'>
      
      

      <AboutUs/>
      <AboutUs2/>

      

      
     
     
      </div>


      <div >
      
       <CarouselCanchas/>
       <ContactUs/>
       <FAQ/>
      

      </div>

    </div>
  );
}
