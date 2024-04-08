import React from "react";
import styles from "@/styles/NavBar.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className="wrapper">
        <div className="left">
          <div className={styles.item}>
            <img src="/assets/imgs/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="center"></div>
        <div className="right"></div>
      </div>
    </div>
  );
};
