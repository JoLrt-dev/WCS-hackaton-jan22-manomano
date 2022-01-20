// Images and Assets
import React from "react";
import Image from "next/image";
import Top1 from "../public/Img/Top1.jpeg";
import styles from "../styles/Products.module.css";
// React-Icons
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const ProductCard = ({ productName, picture, reviews, price }) => {
  return (
    <div className={styles.card}>
      <Image src={picture} alt="" height={150} width={150} />
      <p className={styles.name}>{productName}</p>{" "}
      <div className={styles.rateAndReviews}>
        {" "}
        <span className={styles.rate}>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />{" "}
        </span>
        <span className={styles.reviews}>{reviews}</span>
      </div>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
