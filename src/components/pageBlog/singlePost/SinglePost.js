import React from "react";
import styles from "./singlePost.module.css";
import grid from "../../../assets/zerogrid/zerogrid.module.css";
import { NavLink } from "react-router-dom";

const SinglePost = (props) => {
  return (
    <article className={`${styles.singlePost} ${grid.zeroGrid}`}>
      <div className={`${grid.row} ${styles.wrapPost}`}>
        <div className={styles.entryHeader}>
          <span className={styles.time}>June 26, 2013 by admin</span>
          <h2 className={styles.entryTitle}>
            <a href="#">{props.title}</a>
          </h2>
          <span className={styles.catLinks}>
            <a href="#">BUSINESS</a>, <a href="#">LIFESTYLE</a>
          </span>
        </div>
        <div className={styles.postThumbnailWrap}>
          <img src={props.img} alt="Img" />
        </div>
        <div className={styles.entryContent}>
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
          <center>
            <NavLink className={styles.button} to="/post/1">
              Read More
            </NavLink>
          </center>
        </div>
      </div>
    </article>
  );
};

export default SinglePost;
