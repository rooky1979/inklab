import React, { useState, useEffect } from "react";
import blogStyles from "../styles/Blog.module.css";
import { client } from "@/sanity/lib/client";
import {Link} from "react-router-dom"
import post from "@/sanity/schemas/post";
const Posts = ({ backgroundImage }) => {
  const mainpageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const [postData, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    }
  }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section className={blogStyles.mainpage} style={mainpageStyle}>
        <div className={blogStyles.bodycontainer}>
        <h1 className={blogStyles.boldtext}>Welcome to my world....</h1>
        <div className={blogStyles.grid}>
          {postData && postData.map((post, index) => (
          <article>
            <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
              <span className={blogStyles.tile} key={index}>
                <img 
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt}
                className={blogStyles.postimage}
                />
                <span className={blogStyles.tiletitle}>
                  <h3>{post.title}</h3>
                </span>
              </span>
            </Link>
          </article>
          ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
