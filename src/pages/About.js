import React from 'react'
import SponsorCard from "../components/SponsorCard";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutCard from '../components/AboutCard';


function Sponsor() {
    AOS.init({
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 200,
        duration: 800,
        easing: 'ease',
        anchorPlacement: 'top-bottom',

    });
  return (
    <>
        <div className='bg-[#e3ebfa]'>
            <Navbar />
            <div className='flex flex-col items-center justify-center' data-aos="fade-up">
                <div>
                    <h1 className='text-6xl text-center font-[#5A6473] font-bold mb-[5vh]'>
                        ABOUT
                    </h1>
                </div>
                {/* <AboutCard/> */}
                <AboutCard/>
                {/* <SponsorCard/> */}
            </div>
        </div>
    </>
  )
}

export default Sponsor;