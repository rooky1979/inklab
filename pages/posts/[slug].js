import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { client } from "@/sanity/lib/client";
import singlePostStyles from "../../styles/SinglePost.module.css";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const PostDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (slug) {
      client
        .fetch(
          `*[_type == "post" && slug.current == $slug]{
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
          }`,
          { slug }
        )
        .then((data) => {
          if (data && data.length > 0) {
            setPost(data[0]);
          } else {
            // Handle the case where the post is not found
            alert("Post not found")
          }
        })
        .catch(console.error);
    }
  }, [slug]);

  if (!post) {
    // You can add a loading indicator here
    return <div>Loading...</div>;
  }

  return (
    <main className={singlePostStyles.singlepostmain}>
    <article className={singlePostStyles.singlepostarticle}>
      <header className={singlePostStyles.header}>
        <div className={singlePostStyles.singlepostcontainer}>
          <div className={singlePostStyles.title}>
            <h1 className={singlePostStyles.titletext}>{post.title}</h1>
            <div className={singlePostStyles.authorimage}>
              <img
                src={urlFor(post.authorImage).url()}
                alt={post.name}
                className={singlePostStyles.image}
              />
              <p className={singlePostStyles.authorname}>
                {post.name}
              </p>
            </div>
          </div>
        </div>
        <img src={post.mainImage.asset.url} alt={post.title}
        className={singlePostStyles.blogimage}
        style={{height: "370px"}} />
      </header>
      <div className={singlePostStyles.bodystyle}>
          <BlockContent 
          blocks={post.body} 
          projectId="3tju7dlp" 
          dataset="production"/>
          </div>
    </article>
  </main>
  );
};

export default PostDetail;
    {/* <div className={singlePostStyles.postDetail}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div> */}
