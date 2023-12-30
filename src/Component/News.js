import React from 'react'
import "../App.css"

function News(props) {
  return (
    <div className='news'>

      <div className="news-img">
        {
            props.article.urlToImage!== null?
            <img src={props.article.urlToImage} alt=""/>:
            <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" alt=""/>
        }
      </div>

      <h1>{props.article.title}</h1>

      <p>{props.article.description?.substring(0,100).concat("...")}<a href={props.article.url} target='blank'>Read More</a></p>

      <div className="source">

        <p>Author: {props.article.author}</p>

        <p>{props.article.source.name}</p>

      </div>
    </div>
  )
}

export default News
