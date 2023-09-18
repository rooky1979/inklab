import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { client } from "@/sanity/lib/client";
import blogStyles from "../styles/Blog.module.css";

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
    <div className={blogStyles.postDetail}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
};

export default PostDetail;
