import { useNavigate } from "react-router-dom";

import assetAPI from "../services/assetAPI";
import { useAuthContext } from "../contexts/authContext";

import { LogInOutline, LogOutOutline } from 'react-ionicons';

import styles from "../styles/Header.module.css";
import logo from "../assets/logo.png";

function Header() {
  const { user, setUser } = useAuthContext();

  const navigate = useNavigate();

    const handleDisconnection = () => {
      assetAPI
        .get("/logout")
        .then(() => {
          localStorage.clear();
          setUser(undefined);
          navigate("/");
        })
        .catch((err) => 
        console.error(err));
    };



  return (
    <div className={styles["cont-head"]}>
        <div className={styles["box-logo"]}>
            <img className={styles.logo} src={logo} alt="logo" />
        </div>
        <div className={styles["box-link"]}>
          {user ? <LogOutOutline
              color={'#ffffff'} 
              height="35px"
              width="35px"
              onClick={handleDisconnection}
            /> : <a href="/login">
            <LogInOutline
              color={'#ffffff'} 
              height="35px"
              width="35px"
            />
            </a> } 
        </div>  
    </div>
  )
}

export default Header;