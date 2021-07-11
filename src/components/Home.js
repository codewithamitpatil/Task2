import React from 'react'

import Banner from './Banner';
import FaqSection from './FaqSection';
import Testimonials from './Testimonials'; 
import NewsBanner1 from './NewsBanner1';

 const Home = () => {
    return (
       <>
      <Banner/>
        <FaqSection/>
        <NewsBanner1/>
        <Testimonials/>
       </>
    )
}

export default Home;