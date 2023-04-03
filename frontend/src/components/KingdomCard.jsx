import React from 'react';

import styles from "../styles/KingdomCard.module.css";

function KingdomCard( { name } ) {
  return (
    <div className={styles["card-cont"]}>
        <h1 className={styles["card-title"]}>Kingdom {name}</h1>
        <img src="" alt="" />
    </div>
  )
}

export default KingdomCard