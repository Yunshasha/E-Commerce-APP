import React from "react";
import styles from "@/styles/NavBar.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.item}>
            <img src="/imgs/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className={styles.item}>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className={styles.item}>
            <Link href="/Products/1">Women</Link>
          </div>
          <div className={styles.item}>
            <Link href="/Products/2">Men</Link>
          </div>
          <div className={styles.item}>
            <Link href="/Products/3">Children</Link>
          </div>
        </div>
        <div className={styles.center}>
          <Link href="/">LAMASTORE</Link>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <Link href="/">Homepage</Link>
          </div>
          <div className={styles.item}>
            <Link href="/">About</Link>
          </div>
          <div className={styles.item}>
            <Link href="/">Contact</Link>
          </div>
          <div className={styles.item}>
            <Link href="/">Stores</Link>
          </div>
          <div className={styles.icons}>
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className={styles.cartIcon}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
