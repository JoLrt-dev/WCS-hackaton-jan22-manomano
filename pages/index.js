import Slider from "../components/Slider";
import Layout from "../components/Layout";
import React, { useState } from "react";
import Image from "next/image";
import perceuse from "../public/Img/perceuse.png";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Slider />

      {/* Category */}
      <div className="m-4">
        <h1>Notre sélection Maison</h1>
        <p>Plein de produits pour vous réunis ici</p>

        {/* First Product Card */}
        <div className="flex justify-around items-center">
          <div className="rounded shadow-md p-2">
            <Image src={perceuse} alt="" height={100} width={100} />
            <p className="">Nom du produit</p>
            <p>Note et avis</p>
            <p>Prix</p>
          </div>

          {/* Second Product Card */}
          <div className="rounded shadow-md p-2">
            <Image src={perceuse} alt="" height={100} width={100} />
            <p className="">Nom du produit</p>
            <p>Note et avis</p>
            <p>Prix</p>
          </div>

          {/* Third Product Card */}
          <div className="rounded shadow-md p-2">
            <Image src={perceuse} alt="" height={100} width={100} />
            <p className="">Nom du produit</p>
            <p>Note et avis</p>
            <p>Prix</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
