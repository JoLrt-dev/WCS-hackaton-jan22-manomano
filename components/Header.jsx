import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoManoMano from "../public/Img/LogoManoMano.png";
import { CgShoppingCart } from "react-icons/cg";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineMenu } from "react-icons/ai";


export default function Header() {
  return (
    <header className=" bg-gray-50">
      <nav className="grid overflow-hidden grid-cols-2 grid-rows-2 gap-px">
        <div className="box">
          <Link href="/">
            <a className="sm:inline-block text-gray-700 cursor-pointer">
              <Image
                src={LogoManoMano}
                alt="Logo"
                width="105px"
                height="34px"
              />
            </a>
          </Link>
        </div>

        <div className="box justify-items-end cursor-pointer">
          <Link href="/userCompte" passHref>
            <a>
              <p className="text-slate-600 text-sm mr-4 flex">Mon compte <CgShoppingCart /></p>
              
            </a>
          </Link>
        </div>

        <div className="box ml-2">
          <AiOutlineMenu size={25} />
        </div>

        <div className="flex justify-end">
          <div className="flex-around hover:w-1/7 group">
            <a
              href="#"
              className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-1/5 text-black"
            >
              
              <input
                type="search" className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none rounded-r-lg"
                placeholder="search" x-model="search"
              />
              
              <VscSearch className="rounded-r-lg bg-white w-8 h-8"/>
            
            </a>
          </div>
        </div>
      </nav>
      <div className="flex justify-between items-center flex-wrap text-sm mx-4">
        <p>Bons plans</p>
        <p>Meilleurs plans</p>
        <Link href="/product" passHref>
          <a>
            <p>Produits</p>
          </a>
        </Link>

        <Link href="/tutorial" passHref>
          <a>
            <p>Tutoriels</p>
          </a>
        </Link>
      </div>
    </header>
  );
}
