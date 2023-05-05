import React, { useEffect, useState } from "react";
import styles from "./pageBlog.module.css";
import grid from "../../assets/zerogrid/zerogrid.module.css";
import SinglePost from "../../components/pageBlog/singlePost/SinglePost";
import { getPosts } from "../../services/posts";

const PageBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => {
      console.log(res.data);
      setPosts(res.data.items);
    });
  }, []);

  return (
    <div className={styles.wrapContent}>
      <div className={grid.row}>
        {posts.map((post, index) => {
          let tagLink = "";
          let imgLink = "";
          if (post.content.includes("<img")) {
            const startIndex = post.content.indexOf("<a");
            const lastTag = post.content.indexOf("</a>");
            const endIndex = lastTag + 4;
            for (let index = startIndex; index < endIndex; index++) {
              tagLink += post.content[index];
            }
            const element = document.createElement("div");
            element.innerHTML = tagLink;

            imgLink = element.querySelector("a").href;
          }
          const newContent = post.content.replace(tagLink, "");

          return (
            <SinglePost
              title={post.title}
              content={newContent}
              key={index}
              img={imgLink}
              date={post.updated}
              author={post.author}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PageBlog;
