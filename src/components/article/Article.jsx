import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text }) => {
  return (
    <div className="blog__container--article">
      <div className="blog__container--article-img">
        <img src={imgUrl} alt="blog__image" />
      </div>
      <div className="blog__container--article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
