import React from 'react';

import './css/ContactUs.css';

const ContactUs = () => {
return (
<>




<div class="w3-content w3-container w3-padding-64" id="contact">

<h1 class="w3-center"> Contact Us</h1>


<div class="w3-row w3-padding-32 w3-section">
<div class="w3-col m4 w3-container imgs">
<img src={process.env.PUBLIC_URL+"/brand.png"} class="w3-image w3-round" 
/>
</div>
<div class="w3-col m8 w3-panel">
<div class="w3-large w3-margin-bottom">
<i class="fa fa-map-marker fa-fw 
w3-hover-text-black w3-xlarge w3-margin-right"></i>
 Latur , Maharashta<br/>
<i class="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone : +91 7666194617<br/>
<i class="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email : amit@gmail.com<br/>
</div>
<p>I'd love your feedback!</p>
<form  target="_blank">
<div class="w3-row-padding yy" >
<div class="w3-half">
<input class="w3-input w3-border" type="text" placeholder="Name" required name="Name"/>
</div>
<div class="w3-half">
<input class="w3-input w3-border" type="text" placeholder="Email" required name="Email"/>
</div>
</div>
<input class="w3-input w3-border" type="text" placeholder="Message" required name="Message"
/>
<button class="btn btn-success w3-right w3-section" type="submit">

<i class="fa fa-paper-plane"></i> Send Message
</button>
</form>
</div>
</div>
</div>


</>
)
}

export default ContactUs;
