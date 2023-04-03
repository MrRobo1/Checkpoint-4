import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import assetAPI from "../services/assetAPI";

import { useAuthContext } from "../contexts/authContext";

import styles from "../styles/Login.module.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useAuthContext();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      if (email && password) {
        assetAPI
          .post("/login", {
            email: email,
            password: password,
          })
          .then((res) => {
            setUser(res.data)
            localStorage.setItem("user", JSON.stringify(res.data));
            navigate("/kingdoms");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("Please specify email and password");
      }
    };

  return (
    <div className={styles["cont-form"]}>
      <div className={styles["card-form"]}>
        <form 
          className={styles["form-login"]} 
          onSubmit={handleSubmit}>
          <div className={styles["box-email"]}>
              <input
                className={styles["input"]}
                placeholder="E-mail" 
                type="email"
                name="email" 
                id="email"
                onChange={(e) => setEmail(e.target.value)} 
              />
          </div>
          <div className={styles["box-pass"]}>
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
              <span className={styles.front}> Log In
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;