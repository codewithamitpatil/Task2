
import React from 'react';
import { NavLink } from 'react-router-dom';


import './css/Header.css';


const Header = () => {
return (

<>
<header>
<div class="my-nav">
<div class="container">
<div class="row">
<div class="nav-items">
<div class="menu-toggle">
<div class="menu-hamburger " >

</div>
</div>
<div class="logo">
 <h1>Amit Foundation </h1>   
<img src={process.env.PUBLIC_URL+ "/uu.png"}/>
{/* <h1> Amit Foundation </h1> */}

</div>
<div class="menu-items">
<div class="menu">
<ul>
<li>
   <NavLink exact activeClassName="activeRoute" to="">
      Home

    </NavLink>
       </li>
<li>
<NavLink activeClassName="activeRoute" to="/about">
About Us
</NavLink>

</li>
<li>
<NavLink activeClassName="activeRoute"  to="/news"> 
News
    </NavLink>
    </li>
<li>
<NavLink activeClassName="activeRoute"  to="/contact">
Contact Us
 </NavLink>   
    </li>
<li>
    <button className="btn btn-success">Donate</button>
    
</li>

</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</header>


</>
)
}

export default Header;
