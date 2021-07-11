import React from 'react'

import './css/AboutUs.css';

const AboutUs = () => {


return (
<>
<div class="w3-content" id="about" >

<h1 class="w3-center head">About Us</h1>

<div class="w3-row w3-padding-64" >
<div class="w3-col m6 w3-padding-large   imgs">
<img src={process.env.PUBLIC_URL+"/brand.png"}
class="w3-round w3-image 
w3-opacity-min" alt="Table Setting" 
width="600" height="750"/>
</div>

<div class="w3-col m6 w3-padding-large sideb">

{/* <h5 class="w3-center">Tradition since 1889</h5> */}
<p class="w3-large">
<span class="w3-tag w3-light-grey aa">
Amit Foundation</span>  has already protected an entire generation of children, and is now working to protect the next generation.</p>
<br/>
<p class="w3-large w3-text-grey w3-hide-medium">

By improving access to new and under-used 
vaccines for millions of the most vulnerable children, 
the Vaccine Alliance is transforming the lives of individuals, 
helping to boost the economies of lower-income
 countries and making the world safer for everyone.

   </p>
</div>
</div>
</div>
<hr/>
</>
)
}

export default AboutUs;