import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // let [articles,setArticles] = useState([])
  // useEffect(()=>{
  //   fetch("https://newsapi.org/v2/everything?q=india&from=2023-12-24&apiKey=3370af73c5c345fdb0ec9a05246510f0")
  //   .then((response)=>response.json())
  //   .then((news)=>{
  //     setArticles(news.articles);
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  // },[])
  return (
    <div className="App">
      <h1>News App</h1>
    </div>
  );
}

export default App;
