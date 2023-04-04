import { useState } from "react";
import assetAPI from "../services/assetAPI";

import styles from "../styles/CreateKingdom.module.css";

function CreateKingdom() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
        assetAPI
            .post("/kingdoms", {name})
            .then(response => {
                console.log(response.data);
                alert("Your Kingdom has been created!");
            })
            .catch(error => {
                console.error(error);
                alert("A error has occurred!");
            });
    }   
  };

  return (
    <div className={styles["cont-kingdom-create"]}>
      <div className={styles["card-king"]}>
        <form className={styles["form-king"]} onSubmit={handleSubmit}>
            <input 
              className={styles.input}  
              placeholder="Name of Kingdom" 
              type="text" value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          <button className={styles["btn-login"]} type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default CreateKingdom;
