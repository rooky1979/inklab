import React, { useState, useEffect } from "react";
import blogStyles from "../styles/Blog.module.css";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
/* import post from "@/sanity/schemas/post"; */
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
          <div className={blogStyles.titleContainer}>
          <p className={blogStyles.boldtext}>Just some stuff...</p>
          </div>
          <div className={blogStyles.grid}>
            {postData &&
              postData.map((post, index) => (
                <Link href={`/posts/${post.slug.current}`} key={post.slug.current}>
                <article>
                  <span className={blogStyles.tile}>
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className={blogStyles.postimage}
                    />
                    <span className={blogStyles.tiletitle}>
                      <h3 className={blogStyles.tiletext}>{post.title}</h3>
                    </span>
                  </span>
                </article>
              </Link>
              ))}
          </div>
      </section>
    </main>
  );
};

export default Posts;
