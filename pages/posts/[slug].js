import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { client } from "@/sanity/lib/client";
import singlePostStyles from "../../styles/SinglePost.module.css";
import imageUrlBuilder from "@sanity/image-url";

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
            alert("Post not found");
          }
        })
        .catch(console.error);
    }
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }
  console.log(post.body);

  const serializers = {
    types: {
      paragraph: (props) => (
        <p className={singlePostStyles.paragraph}>{props.children}</p>
      ),
    },
  };
  const processedContent = post.body.map((block) => {
    if (block._type === "block") {
      const paragraphs = block.children[0].text.split("\n");

      return paragraphs.map((paragraph, index) => {
        const textWithBold = paragraph.replace(
          /\*\*(.*?)\*\*/g,
          (match, content) => <strong key={match}>{content}</strong>
        );

        return (
          <p key={index} className={singlePostStyles.paragraph}>
            {textWithBold}
            {index < paragraphs.length - 1 && <br />}
          </p>
        );
      });
    }
    // Handle other block types if needed
    return serializers.types[block._type]
      ? serializers.types[block._type](block)
      : null;
  });

  const handleBackClick = () => {
    router.push("/blog");
  };

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
                <p className={singlePostStyles.authorname}>{post.name}</p>
              </div>
            </div>
          </div>
          <img
            src={post.mainImage.asset.url}
            alt={post.title}
            className={singlePostStyles.blogimage}
            style={{ height: "370px" }}
          />
        </header>
        <div className={singlePostStyles.bodystyle}>{processedContent}</div>
      </article>
      <button className={singlePostStyles.backButton} onClick={handleBackClick}>
        Back to Blog
      </button>
    </main>
  );
};

export default PostDetail;
