import React from 'react'

import './css/NewsBanner1.css';

const NewsBanner1 = () => {
    return (
        <>

<div class="w3-container  w3-content w3-center w3-padding-64" 
 id="band">
    <h2 class="w3-wide">COVID Relief Impact - ICRF-1</h2>

    <p class="w3-justify">
    We began our COVID relief work
     in April 2020 and supported our 
     NGO partners trying to ease the
      suffering of families caught in
       the eye of the pandemic storm –
        with donations from you. We have
         also received support from corporates, HNIs and philanthropic foundations and many donations through Facebook. 
    Here is the impact report of ICRF-1.</p>

<a> <img src={process.env.PUBLIC_URL+"/new1.jpg"} />
</a>
  </div>

        </>
    )
}


export default  NewsBanner1;