import React from "react";
import styles from "./pagePost.module.css";
import grid from "../../assets/zerogrid/zerogrid.module.css";
import img2 from "../../assets/images/slide2.jpg";
import { useParams } from "react-router";

const PagePost = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className={styles.wrapContent}>
      <div className={grid.row}>
        <article className={`${styles.singlePost} ${grid.zeroGrid}`}>
          <div className={`${grid.row} ${styles.wrapPost}`}>
            <div className={styles.entryHeader}>
              <span className={styles.time}>June 26, 2013 by admin</span>
              <h2 className={styles.entryTitle}>
                <a href="/">
                  RETRO GALLERY: FRAGMENTING PERSISTENT FLIGHT AND PATHOLOGY
                </a>
              </h2>
              <span className={styles.catLinks}>
                <a href="/">BUSINESS</a>, <a href="/">LIFESTYLE</a>
              </span>
            </div>
            <div className={styles.postThumbnailWrap}>
              <img src={img2} alt="" />
            </div>
            <div className={styles.entryContent}>
              <div className={styles.excerpt}>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum exercitation
                  ullamco laboris nisi ut aliquip.
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
              <blockquote>
                <p>
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                  ipsum dolor sit amet vultatup duista.
                </p>
              </blockquote>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril.
              </p>
              <h2>Heading 1</h2>
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse lorem ipsum dolor sit amet.
              </p>
              <h2>Heading 2</h2>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis. At vero eos et accusam et justo.
              </p>
              <h2>Heading 3</h2>
              <p>
                Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum hendrerit in vulputate velit esse molestie.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
              <p>
                <code>
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                  ipsum dolor sit amet.
                </code>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
              <div className={styles.note}>
                <ol>
                  <li>Lorem ipsum</li>
                  <li>Sit amet vultatup nonumy</li>
                  <li>Duista sed diam</li>
                </ol>
                <div className={styles.clear}></div>
              </div>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat.
              </p>
              <p>
                Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores.
              </p>
            </div>
          </div>
        </article>
        <div className={grid.zeroGrid}>
          <div className={styles.commentsAre}>
            <div id={styles["comment"]}>
              <h3>Leave a Reply</h3>
              <span>
                Your email address will not be published. Required fields are
                marked{" "}
              </span>
              <form
                name="comment_form"
                id={styles["comment_form"]}
                method="post"
                action=""
              >
                <label>
                  <span>Comment:</span>
                  <textarea name="message" id={styles["message"]}></textarea>
                </label>
                <label>
                  <span>Name:</span>
                  <input type="text" name="name" id="name" required />
                </label>
                <label>
                  <span>Email:</span>
                  <input type="email" name="email" id="email" required />
                </label>
                <center>
                  <input
                    className={styles.sendButton}
                    type="submit"
                    name="submitcomment"
                    value="Submit"
                  />
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePost;
