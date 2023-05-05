import React from "react";
import styles from "./singlePost.module.css";
import grid from "../../../assets/zerogrid/zerogrid.module.css";
import { NavLink } from "react-router-dom";

const FormatDate = (props) => {
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const date = props.date.split("T")[0].split("-");
  date.reverse();
  const indexMonth = Number(date[1]) - 1;
  return (
    <span>
      {date[0]} {months[indexMonth]} {date[2]}
    </span>
  );
};

const SinglePost = (props) => {
  console.log(props.postId);

  return (
    <article className={`${styles.singlePost} ${grid.zeroGrid}`}>
      <div className={`${grid.row} ${styles.wrapPost}`}>
        <div className={styles.entryHeader}>
          <span className={styles.time}>
            <FormatDate date={props.date} /> {props.author.displayName}
          </span>
          <h2 className={styles.entryTitle}>
            <a href="#">{props.title}</a>
          </h2>
        </div>
        <div className={styles.postThumbnailWrap}>
          <img src={props.img} alt="Img" />
        </div>
        <div className={`${styles.entryContent} ${styles.zipContent}`}>
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
          <center>
            <NavLink className={styles.button} to={`/post/${props.postId}`}>
              Читать далее
            </NavLink>
          </center>
        </div>
      </div>
    </article>
  );
};

export default SinglePost;
