import React from "react";
import styles from "@/styles/FeaturedProducts.module.css";
import Card from "./Card";

function FeaturedProducts({ type }) {
  const data = [
    {
      id: 1,

      img: "  https://static.zara.net/assets/public/3b28/b7f8/dc1d442f8cb6/f9efbda753cb/02550186712-p/02550186712-p.jpg?ts=1709819118234&w=960",
      img2: "https://static.zara.net/photos///contents/mkt/spots/ss24-man-curated/ryo-look-04-xmedia//w/494/IMAGE-web-430781a7-43d8-4eea-a200-4017240dc1c8-default.jpg?ts=1712307036499",
      title: "Men's Denim Jacket",
      isNew: true,
      oldPrice: 59.99,
      price: 49.99,
    },
    {
      id: 2,
      img: "https://static.zara.net/assets/public/9f5a/dc13/5d594896a87e/be525050e251/02406235620-p/02406235620-p.jpg?ts=1709120688201&w=960",
      img2: "https://static.zara.net/photos///contents/mkt/spots/ss24-man-curated/mathis-look-03-xmedia//w/494/IMAGE-web-3803864d-73b2-41f9-9139-dfbad639363e-default.jpg?ts=1712306225166",
      title: "Men's Denim Jacket",
      title: "Women's Floral Dress",
      isNew: false,
      oldPrice: 79.99,
      price: 64.99,
    },
    {
      id: 3,
      img: "https://static.zara.net/assets/public/c952/9efe/25e54b219944/b1b7f789852c/02243683400-a2/02243683400-a2.jpg?ts=1707308708969&w=960",
      img2: "https://static.zara.net/assets/public/b156/fc33/e6e14a0199fd/eb5394080959/02247178712-a5/02247178712-a5.jpg?ts=1712565666582&w=960",
      title: "Men's Denim Jacket",
      title: "Unisex Hoodie",
      isNew: true,
      oldPrice: 39.99,
      price: 34.99,
    },
    {
      id: 4,
      img: "https://static.zara.net/assets/public/9d22/5673/0b324eceb910/576bad943213/03201140051-a1/03201140051-a1.jpg?ts=1711568370829&w=1920",
      img2: "https://t4.ftcdn.net/jpg/03/06/16/79/240_F_306167983_U29tsfFtKWe8GdK99NQfdUr8ipbylR16.jpg",
      title: "Men's Denim Jacket",
      title: "Unisex Hoodie",
      isNew: true,
      oldPrice: 39.99,
      price: 34.99,
    },
  ];

  return (
    <div className={styles.featuredProducts}>
      <div className={styles.top}>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className={styles.bottom}>
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
