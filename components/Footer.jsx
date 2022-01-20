import React from "react";
import Image from "next/image";
import footer from "../public/Img/footer.png";

export default function Footer() {
  return (
    <div>
      <Image src={footer} alt="Footer" />
    </div>
  );
}
