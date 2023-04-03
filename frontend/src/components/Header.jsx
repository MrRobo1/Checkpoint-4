import { LogInOutline, LogOutOutline } from 'react-ionicons'

import styles from "../styles/Header.module.css";
import logo from "../assets/logo.png";

function Header() {

    const handleDisconnection = () => {}



  return (
    <div className={styles["cont-head"]}>
        <div className={styles["box-logo"]}>
            <img className={styles.logo} src={logo} alt="logo" />
        </div>
        <div className={styles["box-link"]}>
            <LogOutOutline
              color={'#ffffff'} 
              height="35px"
              width="35px"
            />
            <a href="/login">
            <LogInOutline
              color={'#ffffff'} 
              height="35px"
              width="35px"
              onClick={handleDisconnection}
            />
            </a>
        </div>  
    </div>
  )
}

export default Header;