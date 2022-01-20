import Slider from "../components/Slider";
import Layout from "../components/Layout";
import React from "react";
import ProductCard from "../components/ProductCard";
// Images and Assets
import Top1 from "../public/Img/Top1.jpeg";
import Top2 from "../public/Img/Top2.jpeg";
import Maison1 from "../public/Img/Maison1.jpeg";
import Maison2 from "../public/Img/Maison2.jpeg";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Category from "../components/Category";

export default function Home() {
  return (
    <Layout>
      <Slider />

      <Category
        title={"Our selection for your Home"}
        tagLine={"Full of our best products, just for you"}
      />
      <div className="flex justify-around">
        {" "}
        <ProductCard
          picture={Maison1}
          productName={"SARA Chairs, by 6"}
          reviews={"327"}
          price={"77€99"}
        />
        <ProductCard
          picture={Maison2}
          productName={"Bedframe 140x190"}
          reviews={"171"}
          price={"92€99"}
        />
      </div>

      <Category
        title={"Best-Sellers"}
        tagLine={"Yeah, those are really great"}
      />
      <div className="flex justify-around">
        {" "}
        <ProductCard
          picture={Top1}
          productName={"L-shapped corner sofa"}
          reviews={"327"}
          price={"422€99"}
        />
        <ProductCard
          picture={Top2}
          productName={"Industrial desk"}
          reviews={"171"}
          price={"69€99"}
        />
      </div>
    </Layout>
  );
}
