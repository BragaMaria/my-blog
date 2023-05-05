import React from "react";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const checkActive = (props) => {
    console.log(props.isActive);
    return props.isActive ? styles.active : "";
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="#">zVintauge</NavLink>
        <span>Collectible Vintage & Antique Photos</span>
      </div>
      <div id={styles["cssmenu"]} className={styles.alignCenter}>
        <ul>
          <li>
            <NavLink to="#">
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <span>Gallery</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={checkActive}>
              <span>Blog</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/post/1" className={checkActive}>
              <span>About</span>
            </NavLink>
          </li>
          <li className={styles.last}>
            <NavLink to="#">
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
