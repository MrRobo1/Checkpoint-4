import React from 'react';
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles["cont-footer"]}>
        <div className={styles["box-link"]}>
            <a href="https://www.linkedin.com/in/kadiryilmaz22/">
                <img  className={styles["img-linkedin"]} src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/MrRobo1">
                <img className={styles["img-github"]} src={github} alt="github" />
            </a>
        </div>
        <div className={styles["copyright-footer"]}>
            <p>&copy; Checkpoint4 Wild Code School</p>
        </div>
    </div>
  )
}
;
export default Footer;