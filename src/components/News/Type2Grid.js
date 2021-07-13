
import React,{useState ,useEffect} from 'react';

import axios from 'axios';

import './../css/News/Type2Grid.css';



const Type2Grid = () => {
 





const [news1 ,setNews1] = useState([]);
 
useEffect(() => {



 
  axios.get('https://amitfoundation.herokuapp.com/techno.json')
  .then(response =>{
    // setNews1(response.data.articles);
   
    let filter = response.data.articles.filter(function (e,index) {
        console.log(index);
        return index >= 15;
    });

    console.log(filter);
    setNews1(filter);
  });
 



}, []);
 

const List2 =()=>{

  let  str =''; 
  
  news1.map((item,i)=>{
 
 <div class="card" key={i} >
  <img src={ item.urlToImage} 
  class="card-img-top" alt="..."/>
  <div class="card-bodys">
  
  <p className="date">{item.author}</p>
  <h1 className="tit">{item.title} </h1>
  
  </div>
  </div>
  });


}

    return (
        <>
   
<div className="Type2Grid">

<div class=" d-none d-md-block">


<h1 className="tit">Top Stories </h1>


</div>




{ 


 news1.map((item,i)=>(


     

<div class="card" key={i} >
<img src={ item.urlToImage} 
class="card-img-top" alt="..."/>
<div class="card-bodys">

<p className="date">{item.author}</p>
<h1 className="tit">{item.title} </h1>

</div>
</div>


 ))


}





</div>


        </>
    )


}

export default Type2Grid;
