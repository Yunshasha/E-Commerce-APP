import React from "react";
import styles from "@/styles/Card.module.css";
import Link from "next/link";

function Card({ item }) {
  return (
    <Link href={`/Product/${item.id}`} className={styles.container}>
      <div className={styles.image}>
        {item.isNew && <span>New Season</span>}
        <img src={item.img} alt="" className={styles.mainImg} />
        <img src={item.img2} alt="" className={styles.secondImg} />
      </div>
      <h2>{item.title}</h2>
      <div className={styles.prices}>
        <h3 className={styles.oldPrice}>€ {item.oldPrice}</h3>
        <h3>€ {item.price}</h3>
      </div>
    </Link>
  );
}

export default Card;
