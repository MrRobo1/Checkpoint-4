import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import assetAPI from "../services/assetAPI";

import styles from "../styles/SignUp.module.css";
import tower from "../assets/imglogin.jpeg";


function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleForm = (e) => {
      e.preventDefault();

      if (firstName && lastName && email && password) {
        assetAPI
          .post("/user", { firstName, lastName, email, password })
          .then(() => navigate("/login"))
          .catch((err) => console.log(err));
        console.log("Form submitted");
      } else {
        alert("Please specify all fields");
      }
    };

  return (
    <div className={styles["cont-form"]}>
      <div className={styles["card-form"]}>
        <div className={styles["box-img-signup"]}>
            <img className={styles["img-login"]} src={tower} alt="tower" />
        </div>
      <form
          className={styles["form-sign-up"]}
          onSubmit={handleForm}
        >
            <div className={styles["box-input"]}>
                <input 
                  className={styles["input"]}
                  placeholder="First Name"
                  type="firstName"
                  name="firstName" 
                  id="firstName"
                  onChange={(e) => setFirstName(e.target.value)} 
                />
                <input 
                  className={styles["input"]}
                  placeholder="Last Name"
                  type="lastName"
                  name="lastName" 
                  id="lastName"
                  onChange={(e) => setLastName(e.target.value)} 
                />
                <input 
                  className={styles["input"]}
                  placeholder="E-mail"
                  type="email"
                  name="email" 
                  id="email"
                  onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                  className={styles["input"]}
                  placeholder="Password"
                  type="password" 
                  name="password" 
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className={styles["box-btn-login"]}>
                <button type="submit" className={styles["btn-login"]}>
                  <span className={styles.shadow}></span>
                  <span className={styles.edge}></span>
                  <span className={styles.front}> Sign Up
                  </span>
                </button>
            </div>  
        </form>
      </div>
    </div>
  );
}

export default SignUp;