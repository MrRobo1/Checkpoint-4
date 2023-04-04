import React from 'react';
import { CloseOutline } from 'react-ionicons';
import axios from 'axios';

import assetAPI from "../services/assetAPI";

import styles from "../styles/KingdomCard.module.css";

function KingdomCard( { id, name } ) {
  
  const deleteKingdom = async (id) => {
    try {
      const response = await assetAPI.delete(`/kingdom/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className={styles["card-cont"]}>
        <h1 className={styles["card-title"]}>Kingdom {name}</h1>
        <CloseOutline
          color={'#ffffff'}
          height="35px"
          width="35px"
          onClick={() => deleteKingdom(id)}
        />
    </div>
  )
}

export default KingdomCard;
