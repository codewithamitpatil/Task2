

 import React from 'react';
 
 import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';

// importing components
 import Header from './components/Header';   

 import AboutUs from './components/AboutUs';
 import ContactUs from './components/ContactUs';
 import Home from './components/Home';
 import Footer from './components/Footer';
 

 import './components/css/App.css';

 const App = () =>{

  
    return(
    <>


       
  
       {/* <Banner/> */}
       {/* <ContactUs/> */}
       {/* <Banner/>
    
       
       */}
      <Router>

      <Header/>

       <Switch>
     
      <Route exact  path="/"  component={Home} />
      <Route path="/about"  component={AboutUs} />
      <Route path="/contact" component={ContactUs} />
    

       </Switch>
       <Footer/>
       </Router>

{/* 
          <AboutUs/>  */}

      
    </>
    );

 } 

export default App;











