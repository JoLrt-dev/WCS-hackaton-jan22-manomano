import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoManoMano from "../public/Img/LogoManoMano.png";
import { CgShoppingCart } from "react-icons/cg";
import { VscSearch } from "react-icons/vsc";

export default function Header() {
  return (
    <nav className="">
      <span className="flex justify-between">
        <Link href="/">
          <a>
            <Image src={LogoManoMano} alt="Logo" width="105px" height="34px" />
          </a>
        </Link>

        <div className="flex justify-between items-center mt-10">
          <Link href="/userCompte" passHref>
            <a>
              <p className="text-slate-600 text-sm mr-4 ">Identifiez-vous</p>
              <CgShoppingCart />
            </a>
          </Link>
        </div>
      </span>

      <div className="ml-2 tham tham-e-squeeze tham-w-6">
        <div className="tham-box">
          <div className="tham-inner" />
        </div>
      </div>

      <div className="flex-around hover:w-1/7 group">
        <a
          href="#"
          className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-1/5 text-black"
        >
          <input
            type="search"
            name="search"
            className="rounded-2xl z-10 ml-3 align-bottom p-1 pl-4 md:w-15"
            placeholder="Rechercher un produit..."
          />
          <VscSearch />
        </a>
      </div>
    </nav>
  );
}

// grid-template-areas:
// "logo logo space navigation"
// "button search search search"
// "links links links links";
// grid-template-columns: auto auto 1fr auto;
