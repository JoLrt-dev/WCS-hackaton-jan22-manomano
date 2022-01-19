import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoManoMano from "../public/Img/LogoManoMano.png";

export default function Header() {
  return (
    <div className="bg-red-700">
      <Link href="/">
        <a className="flex justify-center md:justify-end bg-red-700">
          <Image src={LogoManoMano} alt="Logo" width="100px" height="50px" />
        </a>
      </Link>
      <p className="text-red-600">COUCOU</p>
    </div>
  );
}
