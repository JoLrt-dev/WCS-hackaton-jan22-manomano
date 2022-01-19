import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoManoMano from "../public/Img/LogoManoMano.png";
import { CgShoppingCart } from "react-icons/cg";
import tailwindHamburgers from "tailwind-hamburgers";

export default function Header() {
  return (
    <div className="bg-slate-50 justify-between">
      <div className="flex flex-row mb-4">
        <Link href="/">
          <a className="flex justify-start sm:justify-start">
            <Image src={LogoManoMano} alt="Logo" width="105px" height="34px" />
          </a>
        </Link>
        <p className="flex justify-end sm:justify-end text-slate-600 text-sm mr-4">
          Identifiez-vous
        </p>
        <CgShoppingCart />
      </div>
      <div className="ml-2 tham tham-e-squeeze tham-w-6">
        <div className="tham-box">
          <div className="tham-inner" />
        </div>
      </div>
      {/* <div className=" bg-gray-200">
        <div className="container h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              className="h-9 w-60 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
              placeholder="Rechercher un produit..."
            />
            <div className="absolute top-4 right-3">
              <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>{" "}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
