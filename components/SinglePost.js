import React, { useState, useEffect } from "react";
import blogStyles from "../styles/SinglePost.module.css";
import { client } from "@/sanity/lib/client";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
            asset->{
                _id,
                url
            }
        },
        body,
        "name": author->name,
        "authorImage": author->image,
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className={blogStyles.singlepostmain}>
      <article className={blogStyles.singlepostarticle}>
        <header className={blogStyles.header}>
          <div className={blogStyles.singlepostcontainer}>
            <div className={blogStyles.title}>
              <h1 className={blogStyles.titletext}>{singlePost.title}</h1>
              <div className={blogStyles.authorimage}>
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className={blogStyles.image}
                />
                <p className={blogStyles.authorname}>
                  {singlePost.name}
                </p>
              </div>
            </div>
          </div>
          <img src={singlePost.mainImage.asset.url} alt={singlePost.title}
          className={blogStyles.blogimage}
          style={{height: "400px"}} />
        </header>
        <div className={blogStyles.bodystyle}>
            <BlockContent 
            blocks={singlePost.body} 
            projectId="3tju7dlp" 
            dataset="production"/>
            </div>
      </article>
    </main>
  );
};

export default SinglePost;
