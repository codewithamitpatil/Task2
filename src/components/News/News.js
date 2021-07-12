import React from 'react'

import '../css/News/News.css';

import Type1Grid from './Type1Grid';
import Type2Grid from './Type2Grid';

 const News = () => {
    return (
      <>

    <div className="container-fluid mainGridContainer">

    <div className="leftSectionMain">

    <div className="type1">
    

     <Type1Grid/>

    </div>

 


    </div>

    <div className="rightSectionMain">
    <Type2Grid/>
    </div>

    </div>
 


      </>
    )
}


export default News;