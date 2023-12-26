import { useEffect, useState } from 'react';
import './App.css';
import News from './Component/News';
function App() {
  let [articles,setArticles] = useState([])
  useEffect(()=>{
    fetch("https://newsapi.org/v2/everything?q=india&from=2023-12-25&apiKey=3370af73c5c345fdb0ec9a05246510f0")
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      // console.log(articles)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div className="App">
      <header className='header'>
        <h1>NEWS Today</h1>
        <input type="text" placeholder='search news'/>
      </header>
      <section className='news-articles'>
        {
          articles.map((article)=>{
            return (
              <News article={article}/>
            )
          })
        }
      </section>
    </div>
  );
}

export default App;
