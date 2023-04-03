import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NavbarDesk.module.css";

function NavbarDesk() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={styles["link-navbar"]} to="/">Home</Link>
        </li>
        <li>
          <Link  className={styles["link-navbar"]} to="/kingdoms">Kingdom's</Link>
        </li>
        <li>
          <Link  className={styles["link-navbar"]} to="/royal-assets">Royal Assets</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarDesk;