
import React,{useState ,useEffect} from 'react';

import axios from 'axios';

import './../css/News/Type1Grid.css';



const Type1Grid = () => {
 





  const [news ,setNews] = useState([]);
 
useEffect(() => {



  

  axios.get('https://newsapi.org/v2/everything?q=covid&from=2021-07-11&to=2021-07-11&sortBy=popularity&apiKey=875e6e3477da417bb64f9db63267d8d8')
  .then(response =>{

      let filter = response.data.articles.filter(function (e,index) {
        console.log(index);
        return index >= 8 && index < 15;
    });
    console.log(filter);
    setNews(filter);
  });
 
console.log(news)

}, []);
 

    return (
        <>
   
<div className="Type1Grid  ">



<div class=" d-none d-md-block">


<h1 className="tit">Top Stories </h1>


</div>





{ 


 news.map((item,i)=>(


     

<div class="card" key={i}>
<img src={ item.urlToImage} class="card-img-top" alt="..."/>
<div class="card-bodys">

<p className="date">{item.author}</p>
<h1 className="tit">{item.title} </h1>
<p class="card-text">
{item.content}

</p>
<p class="card-text">

{item.description}
</p>
<p className="times"> { item.publishedAt} </p>

</div>
</div>



 ))


}





</div>


        </>
    )


}

export default Type1Grid;