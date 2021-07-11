import React from 'react'
import { Link} from 'react-router-dom';




const Footer = () => {
 
 
    return (
        <>
            
           <br/><br/>
<footer>

<div class="container fot">
<div class="row">
<div class="col-lg-3 col-md-3 col-sm-4 col-xs-6">
<div class="_kl_ds_we">
<div class="head-footer">
<h3>Amit Foundation</h3>
<br/>
<p>

<img src={process.env.PUBLIC_URL+"/brand.png"} />

</p>



</div>
</div>
</div>

<div class="col-lg-3 col-md-3 col-sm-4 col-xs-6">
<div class="_kl_ds_we">
<div class="head-footer">
<h3>Useful Links</h3>
<ul>
<li>
  <i class="fas fa-chevron-right"></i>
  <a target="_blank" href="https://www.mohfw.gov.in/covid_vaccination/vaccination/faqs.html#vaccine-registration">VACCINE REGISTRATION</a>
  
  </li>
<li><i class="fas fa-chevron-right"></i>
<a target="_blank" href="https://www.mohfw.gov.in/covid_vaccination/vaccination/faqs.html#about-the-vaccine">
ABOUT THE VACCINE
</a>
</li>
<li><i class="fas fa-chevron-right"></i>
<a target="_blank" href="https://www.mohfw.gov.in/covid_vaccination/vaccination/faqs.html#who-will-get-the-vaccine">
WHO WILL GET THE VACCINE?
</a>
</li>
<li><i class="fas fa-chevron-right"></i>
<a target="_blank" href="https://www.mohfw.gov.in/covid_vaccination/vaccination/faqs.html#how-will-we-be-vaccinated">
HOW WILL WE BE VACCINATED?
</a>
</li>
<li><i class="fas fa-chevron-right"></i>
<a target="_blank" href="https://www.mohfw.gov.in/covid_vaccination/vaccination/faqs.html#what-to-expect-before-vaccination">
WHAT TO EXPECT BEFORE VACCINATION?
</a>
</li>
</ul>
</div>
</div>
</div>

<div class="col-lg-3 col-md-3 col-sm-4 col-xs-6">
<div class="_kl_ds_we">
<div class="head-footer">
<h3>Quick links</h3>
<ul>
<li><i class="fas fa-chevron-right"></i>
<Link to="">
      Home
    </Link>
</li>
<li><i class="fas fa-chevron-right"></i>
<Link to="/about">
About Us
</Link>
</li>
<li><i class="fas fa-chevron-right"></i>
<Link to="/news">
News
</Link>

</li>

<li><i class="fas fa-chevron-right"></i>
<Link to="/contact">
Contact Us
 </Link>  
</li>
</ul>
</div>
</div>
</div>

<div class="col-lg-3 col-md-3 col-sm-4 col-xs-6">
<div class="_kl_ds_we">
<div class="head-footer">
<h3>find us</h3>
<ul class="un-hover">
<li><i class="far fa-location"></i>Latur , Maharashtra</li>
<li><i class="fas fa-mobile-alt"></i>+91 76661946</li>
<li><i class="far fa-envelope"></i>amit@gmail.com</li>
</ul>
</div>
</div>
</div>
<div class="col-12">
<div class="row _pl_we_sq">
<div class="col-12">
<div class="last-01">
<p> Developed By Amit Gujar Patil  <a className="sha"
  href="https://www.linkedin.com/in/amit-gujar-3b269a1b3/">Code With Amit</a></p>
<a className="sha1"
  href="https://www.linkedin.com/in/amit-gujar-3b269a1b3/">Code With Amit</a>
</div>
</div>
</div>
</div>
</div>
</div>
</footer>


        </>
    )
}

export default Footer;