import React, { useState, useEffect } from "react";
import blogStyles from "../styles/Blog.module.css";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
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
    <main className={blogStyles.main} style={mainpageStyle}>
      <section className={blogStyles.mainpage} >
{/*         <div className={blogStyles.bodycontainer}> */}
          <div className={blogStyles.titleContainer}>
          <h1 className={blogStyles.boldtext}>Welcome to my world....</h1>
          </div>
          <div className={blogStyles.grid}>
            {postData &&
              postData.map((post, index) => (
                <article>
                  <Link
                    href={`/blog/${post.slug.current}`}
                    key={post.slug.current}
                  >
                    <span className={blogStyles.tile} key={index}>
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className={blogStyles.postimage}
                      />
                      <span className={blogStyles.tiletitle}>
                        <h3 className={blogStyles.tiletext}>{post.title}</h3>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
          </div>
{/*         </div> */}
      </section>
    </main>
  );
};

export default Posts;
