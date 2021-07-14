import React from 'react'

import './css/Banner.css';

const Banner = () => {


return (

<>
<main class="charity-01-main">
<section class="banner">

<div class="container">
<div class="row">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<div class="wrapper">
<div class="content">
<span>We Are In A Mission To</span>    
<h1>Vaccination For All</h1>
<p >Protect rural communities from COVID-19.

Help us take our COVID-19 Missions to more people. Share the page with your friends and family. Each contribution, however small they might be, can make a huge difference.



</p>
<div class="btn-002">
  <a target="_blank" href="https://pages.razorpay.com/pl_HS1Jrs6EJ5y0MR/view">

<button className="btn btn-success">Donate</button>
  
  </a>
<span className="con"> Contact Us +911 55 33 </span>
</div>

<div className="cover">

</div>


</div>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<div class="img-wrapper">
<div class="banner-img">
<img src={ process.env.PUBLIC_URL+"/images/slider/donation-02.png"}/>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</>
)


}

export default Banner;
