import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  HomeOutline,
  HomeSharp,
  EarthOutline,
  EarthSharp,
  ConstructOutline,
  ConstructSharp,
} from "react-ionicons";

import styles from "../styles/Navbar.module.css";

function Navbar() {
  const location = useLocation();

  return (
    <div className={styles.cont}>
      <nav className={styles["nav-cont"]}>
        <ul className={styles.navul}>
          <li>
            <NavLink to="/">
              {location.pathname === "/" ? (
                <HomeSharp color="#ffffff" height="35px" width="35px" />
              ) : (
                <HomeOutline color="#ffffff" height="35px" width="35px" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/kingdoms">
              {location.pathname === "/kingdoms" ? (
                <EarthSharp color="#ffffff" height="35px" width="35px" />
              ) : (
                <EarthOutline color="#ffffff" height="35px" width="35px" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/kingdom/asset">
              {location.pathname === "/kingdom/asset" ? (
                <ConstructSharp color="#ffffff" height="35px" width="35px" />
              ) : (
                <ConstructOutline color="#ffffff" height="35px" width="35px" />
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;