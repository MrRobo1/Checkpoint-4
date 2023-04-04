import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CloseOutline, SettingsOutline } from 'react-ionicons';

import assetAPI from "../services/assetAPI";

import styles from "../styles/KingdomCard.module.css";

function KingdomCard( { id, name } ) {    
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const deleteKingdom = async () => {
    try {
      const response = await assetAPI.delete(`/kingdoms/${id}`);
      navigate("/");
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const updateKingdom = async () => {
    try {
      const response = await assetAPI.put(`/kingdoms/${id}`, { name: newName });
      setIsEditing(false);
      window.location.reload();
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className={styles["card-cont"]}>
        <h1 className={styles["card-title"]}>Kingdom {name}</h1>
        <div className={styles["box-del-edit"]}>
          <CloseOutline
            color={'#ffffff'}
            height="35px"
            width="35px"
            onClick={deleteKingdom}
          />
          <SettingsOutline
            color={'#ffffff'} 
            height="35px"
            width="35px"
            onClick={() => setIsEditing(true)}
          />
          {isEditing && (
            <div className={styles["edit-modal"]}>
              <h3>Edit Kingdom Name</h3>
              <input
                className={styles.input}
                type="text"
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
              />
              <div className={styles["box-btn"]}>
                <button  className={styles.btn} onClick={updateKingdom}>Save</button>
                <button  className={styles.btn} onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default KingdomCard;
