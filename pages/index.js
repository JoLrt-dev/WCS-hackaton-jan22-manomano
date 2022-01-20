import Slider from "../components/Slider";
import Layout from "../components/Layout";
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
// Images and Assets
import Image from "next/image";
import Top1 from "../public/Img/Top1.jpeg";
import Top2 from "../public/Img/Top2.jpeg";
import Maison1 from "../public/Img/Maison1.jpeg";
import Maison2 from "../public/Img/Maison2.jpeg";
import Head from "next/head";
import styles from "../styles/Home.module.css";
// React-Icons
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

export default function Home() {
  return (
    <Layout>
      <Slider />

      {/* Category */}
      <div className="m-4">
        <div className="flex justify-between items-center">
          <span>
            <h2>Notre sélection Maison</h2>
            <p>Plein de produits pour vous réunis ici</p>
          </span>
          <span className="flex">
            <BiChevronLeft size={"2em"} color="#d8dadf" />
            <BiChevronRight size={"2em"} />
          </span>
        </div>
      </div>
      <div className="flex justify-around">
        {" "}
        <ProductCard
          picture={Maison1}
          productName={"Produit Maison 1"}
          reviews={"327"}
          price={"77€99"}
        />
        <ProductCard
          picture={Maison2}
          productName={"Produit Maison 2"}
          reviews={"171"}
          price={"92€99"}
        />
      </div>

      {/* Category */}
      <div className="m-4">
        <div className="flex justify-between items-center">
          <span>
            <h2>Nos top ventes</h2>
            <p>Oui, ces produits sont vraiment top</p>
          </span>
          <span className="flex">
            <BiChevronLeft size={"2em"} color="#d8dadf" />
            <BiChevronRight size={"2em"} />
          </span>
        </div>
      </div>
      <div className="flex justify-around">
        {" "}
        <ProductCard
          picture={Top1}
          productName={"Produit Top 1"}
          reviews={"327"}
          price={"422€99"}
        />
        <ProductCard
          picture={Top2}
          productName={"Produit Top 2"}
          reviews={"171"}
          price={"69€99"}
        />
      </div>
    </Layout>
  );
}
