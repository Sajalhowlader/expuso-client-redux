import React from "react";

const Blog = ({ blog }) => {
const {image,title,author,time,date,content}= blog
  return <div className="blog_info">

<img src={image} alt="" />
<h2>{title}</h2>
<p>{author}</p>
<div>
  <span>{date}</span> <span>{time}</span>
</div>
<p>{content.slice(0,250)+ "..."}</p>
<button>See More..</button>
  </div>;
};

export default Blog;
