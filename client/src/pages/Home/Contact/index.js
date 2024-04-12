import React from "react";
import styles from "@/styles/Home.module.css";

function index() {
  return (
    <>
      <div className={styles.divider}></div>
      <div className={styles.contact}>
        <div className={styles.top}>Be in touch with us...</div>
        <div className={styles.info}>
          <ul>
            <li>Tel: +39 223 345 777</li>
            <li>Email: Lamastore@mail.store.it</li>
            <li>WhatsApp: +39 334 666 834</li>
            <li>Address: Viale Tescone 16/b, Sanmenxia</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default index;
