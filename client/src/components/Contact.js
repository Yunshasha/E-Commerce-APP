import React from "react";
import styles from "@/styles/Contact.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Contact() {
  return (
    <div className={styles.container}>
      <span>BE IN TOUCH WITH US</span>
      <div className={styles.input}>
        <input />
        <span>JOIN US</span>
      </div>
      <div className={styles.icons}>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <GoogleIcon />
        <YouTubeIcon />
      </div>
    </div>
  );
}

export default Contact;
