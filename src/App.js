import { useEffect, useState } from 'react';
import './App.css';
import News from './Component/News';
function App() {
  let [articles,setArticles] = useState([])
  let [category, setCategory] = useState("India")
  // let [date,setDate] = useState()
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-25&apiKey=3370af73c5c345fdb0ec9a05246510f0`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);

      // console.log(articles)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[category])
  return (
    <div className="App">
      <header className='header'>

        <h1>NEWS Today</h1>

        <input type="text" onChange={(e)=>{
          if(e.target.value!== ""){
            setCategory(e.target.value);
          }
          else{
            setCategory("India")
          }
        }} placeholder='Search News'/>

      </header>
      <section className='news-articles'>
        {

          articles.length!==0  ?

          articles.map((article)=>{
            return (
              <News article={article}/>
            )
          })

          :

          <h3>No News Found For Searched Text</h3>
        }
      </section>
    </div>
  );
}

export default App;
