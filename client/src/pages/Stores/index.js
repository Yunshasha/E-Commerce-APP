import React from "react";
import styles from "@/styles/Home.module.css";
import FeaturedProducts from "@/components/FeaturedProducts";

function index() {
  return (
    <div>
      <div className={styles.divider}></div>
      <div className={styles.store}>
        <FeaturedProducts type={"trending"} />
      </div>
    </div>
  );
}

export default index;
