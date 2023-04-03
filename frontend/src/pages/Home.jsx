import React from 'react';
import backgroundimage from "../assets/kingdomCheck4.jpeg";

import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles["home-cont"]}>
      <div className={styles["box-img"]}>
        <img  className={styles["home-img"]} src={backgroundimage} alt="backGroundImage" />
      </div>
      <div className={styles["desc-home"]}>
        <h1 className={styles["title-home"]}>
          Welcome to the Royal's Kingdom's
        </h1>
        <h2 className={styles["sub-title-home"]}>
          About Kingdom's
        </h2>
        <p className={styles["text-home"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni quas dolor accusantium rerum, assumenda repellat optio reiciendis delectus qui! Sunt tenetur accusamus iure atque corrupti quibusdam hic nesciunt veritatis.
        </p>
      </div>
    </div>
  )
}

export default Home;