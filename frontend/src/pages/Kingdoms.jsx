import React, { useState, useEffect } from 'react';

import assetAPI from "../services/assetAPI";

import KingdomCard from "../components/KingdomCard";

import styles from "../styles/kingdoms.module.css"

function Kingdoms( ) {
    const [kingdoms, setKingdoms] = useState([]);

    useEffect(() => {
      assetAPI
        .get("/kingdoms")
        .then(res => setKingdoms(res.data))
        .catch(err => console.error(err));
    }, []);

  return (
    <div className={styles["cont-king"]}>
        <h1 className={styles["title-king"]}>Kingdom's</h1>
        <input className={styles.input} type="select" />
        <div className={styles["box-card"]}>
            {kingdoms.map((kingdom) => (
              <KingdomCard 
                key={kingdom.id} 
                name={kingdom.name}
                id={kingdom.id}
            />
            ))}
        </div>
    </div>
  )
}

export default Kingdoms;