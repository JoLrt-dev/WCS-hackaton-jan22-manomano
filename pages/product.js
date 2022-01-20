import next from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import perceuse from "../public/Img/perceuse.png";
import { BsStarFill, BsStar, BsPaypal } from "react-icons/bs";
import styles from "../styles/Home.module.css";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import ReactPlayer from "react-player";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import gants from "../public/Img/gants.jpeg";
import masque from "../public/Img/masque.jpeg";
import pince from "../public/Img/pince.webp";
import coffret from "../public/Img/coffret.webp";
import batterie from "../public/Img/batterie.jpeg";
import lunettes from "../public/Img/lunettes.webp";


export default function Product() {

    return(
        
        <><div className="flex flex-wrap items-center justify-center">
        <div className="w-80 flex justify-center items-center">
          <div className="w-full p-4">
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
              <div className="prod-title">
                <p className="text-xl uppercase text-gray font-bold">
                  Perceuse visseuse
                </p>
                <p className="text-l uppercase text-gray font-bold">
                  sans fil TEENO PSR 21V
                </p>
                <p className="uppercase text-sm text-gray-400">
                  2 batteries + 41 accessoires + gants professionels - Rouge
                </p>
              </div>
              <div className="prod-img">
                <Image
                  src={perceuse}
                  alt=""
                  width={600}
                  height={600}
                  className="w-full object-cover object-center" />
              </div>
              <div className="prod-info grid gap-10">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                  <p className="font-bold text-xl text-blue-800">56 €</p>
                  <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>< /><p className="text-l uppercase text-gray font-bold text-center p-10">
          Produits associés
        </p><Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className={styles.swiper}
        >
          <SwiperSlide>
            <div className="w-200 flex justify-center items-center">
              <div className="w-full p-1">
                <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                  <Image
                    src={gants}
                    alt=""
                    //   width={700}
                    //   height={700}
                    className="w-full object-cover object-center"
                    Layout="responsive" />
                </div>
                <div className="prod-info grid gap-10">
                  <div className="flex flex-col md:flex-row justify-between items-center text-gray-900"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-200 flex justify-center items-center">
              <div className="w-full p-1">
                <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                  <Image
                    src={masque}
                    alt=""
                    //   width={700}
                    //   height={700}
                    className="w-full object-cover object-center"
                    Layout="responsive" />
                </div>
                <div className="prod-info grid gap-10">
                  <div className="flex flex-col md:flex-row justify-between items-center text-gray-900"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-200 flex justify-center items-center">
              <div className="w-full p-1">
                <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                  <Image
                    src={lunettes}
                    alt=""
                    //   width={700}
                    //   height={700}
                    className="w-full object-cover object-center"
                    Layout="responsive" />
                </div>
                <div className="prod-info grid gap-10">
                  <div className="flex flex-col md:flex-row justify-between items-center text-gray-900"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-200 flex justify-center items-center">
              <div className="w-full p-1">
                <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                  <Image
                    src={pince}
                    alt=""
                    //   width={700}
                    //   height={700}
                    className="w-full object-cover object-center"
                    Layout="responsive" />
                </div>
                <div className="prod-info grid gap-10">
                  <div className="flex flex-col md:flex-row justify-between items-center text-gray-900"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-200 flex justify-center items-center">
              <div className="w-full p-1">
                <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                  <Image
                    src={coffret}
                    alt=""
                    //   width={700}
                    //   height={700}
                    className="w-full object-cover object-center"
                    Layout="responsive" />
                </div>
                <div className="prod-info grid gap-10">
                  <div className="flex flex-col md:flex-row justify-between items-center text-gray-900"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-200 flex justify-center items-center">
              <div className="w-full p-1">
                <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                  <Image
                    src={batterie}
                    alt=""
                    //   width={700}
                    //   height={700}
                    className="w-full object-cover object-center"
                    Layout="responsive" />
                </div>
                <div className="prod-info grid gap-10">
                  <div className="flex flex-col md:flex-row justify-between items-center text-gray-900"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper></>
    </Layout>
  );
}
