import React from "react";
import styles from "./footer.module.css";
import grid from "../../assets/zerogrid/zerogrid.module.css";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
import img9 from "../../assets/images/9.jpg";
import img10 from "../../assets/images/10.jpg";
import img11 from "../../assets/images/11.jpg";
import img13 from "../../assets/images/13.jpg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${grid.zeroGrid} ${styles.wrapFooter}`}>
        <div className={grid.row}>
          <div className={`${grid.col_1_4} ${styles.colFooter1}`}>
            <div className={grid.wrapCol}>
              <h3 className={styles.widgetTitle}>About Us</h3>
              <p>
                Ut volutpat consectetur aliquam. Curabitur auctor in nis ulum
                ornare. Metus elit vehicula dui. Curabitur auctor in nis ulum
                ornare. Sed consequat, augue condimentum fermentum
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque la udantium
              </p>
            </div>
          </div>
          <div className={`${grid.col_1_4} ${styles.colFooter2}`}>
            <div className={grid.wrapCol}>
              <h3 className={styles.widgetTitle}>Recent Post</h3>
              <ul>
                <li>
                  <a href="#">MOST VISITED COUNTRIES</a>
                </li>
                <li>
                  <a href="#">5 PLACES THAT MAKE A GREAT HOLIDAY</a>
                </li>
                <li>
                  <a href="#">PEBBLE TIME STEEL IS ON TRACK TO SHIP IN JULY</a>
                </li>
                <li>
                  <a href="#">
                    STARTUP COMPANY???S CO-FOUNDER TALKS ON HIS NEW PRODUCT
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${grid.col_1_4} ${styles.colFooter3}`}>
            <div className={grid.wrapCol}>
              <h3 className={styles.widgetTitle}>Tag Cloud</h3>
              <a href="#">animals</a>
              <a href="#">cooking</a>
              <a href="#">countries</a>
              <a href="#">city</a>
              <a href="#">children</a>
              <a href="#">home</a>
              <a href="#">likes</a>
              <a href="#">photo</a>
              <a href="#">link</a>
              <a href="#">law</a>
              <a href="#">shopping</a>
              <a href="#">skate</a>
              <a href="#">scholl</a>
              <a href="#">video</a>
              <a href="#">travel</a>
              <a href="#">images</a>
              <a href="#">love</a>
              <a href="#">lists</a>
              <a href="#">makeup</a>
              <a href="#">media</a>
              <a href="#">password</a>
              <a href="#">pagination</a>
              <a href="#">wildlife</a>
            </div>
          </div>
          <div className={`${grid.col_1_4} ${styles.colFooter4}`}>
            <div className={grid.wrapCol}>
              <h3 className={styles.widgetTitle}>Gallery</h3>
              <div className={grid.row}>
                <div className={grid.col_1_3}>
                  <div className={grid.wrapCol}>
                    <a href="#">
                      <img src={img11} alt="Фото" />
                    </a>
                    <a href="#">
                      <img src={img1} alt="Фото" />
                    </a>
                    <a href="#">
                      <img src={img13} alt="Фото" />
                    </a>
                  </div>
                </div>
                <div className={grid.col_1_3}>
                  <div className={grid.wrapCol}>
                    <a href="#">
                      <img src={img10} alt="Фото" />
                    </a>
                    <a href="#">
                      <img src={img9} alt="Фото" />
                    </a>
                    <a href="#">
                      <img src={img4} alt="Фото" />
                    </a>
                  </div>
                </div>
                <div className={grid.col_1_3}>
                  <div className={grid.wrapCol}>
                    <a href="#">
                      <img src={img2} alt="Фото" />
                    </a>
                    <a href="#">
                      <img src={img6} alt="Фото" />
                    </a>
                    <a href="#">
                      <img src={img5} alt="Фото" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${grid.zeroGrid} ${styles.bottomFooter}`}>
        <div className={grid.row}>
          <div className={styles.bottomSocial}>
            <a href="#">
              <i className={`${styles.fa} fa fa-facebook`}></i>
            </a>
            <a href="#">
              <i className={`${styles.fa} fa fa-instagram`}></i>
            </a>
            <a href="#">
              <i className={`${styles.fa} fa fa-twitter`}></i>
            </a>
            <a href="#">
              <i className={`${styles.fa} fa fa-google-plus`}></i>
            </a>
            <a href="#">
              <i className={`${styles.fa} fa fa-pinterest`}></i>
            </a>
            <a href="#">
              <i className={`${styles.fa} fa fa-vimeo`}></i>
            </a>
            <a href="#">
              <i className={`${styles.fa} fa fa-linkedin`}></i>
            </a>
            <a href="#">
              <i className={`${styles.fa} fa fa-youtube`}></i>
            </a>
          </div>
        </div>
        <div className={styles.copyright}>
          Copyright @ - Designed by{" "}
          <a href="https://www.zerotheme.com">ZEROTHEME</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
