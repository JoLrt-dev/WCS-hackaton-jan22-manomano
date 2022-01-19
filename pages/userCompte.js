import Link from "next/link";

import { RiArrowRightSLine } from "react-icons/ri";
import Layout from "../components/Layout";

export default function user() {
  return (
    <div>
      <h1 className="m-5 text-2xl">Bienvenue sur votre compte !</h1>
      <h2 className="m-5 text-xl">Ici, vous êtes comme à la maison</h2>
      <h3 className="m-5 text-xl font-extrabold">Mes commandes</h3>
      <div className="pl-5 pt-2 border-solid  h-10 border-1 border-black">
        Toutes mes commandes
      </div>
      <h3 className="p-5 text-xl font-extrabold bg-zinc-200">
        Ma contribution
      </h3>
      <Link href="/myPoints">
        <a>
          <div className=" flex flex-row justify-between">
            <div className="pl-5 pt-2  pr-20 border-solid h-10 border-1 border-black">
              Mon solde de points
            </div>{" "}
            <RiArrowRightSLine size={24} />
          </div>
        </a>
      </Link>
      <Link href="/myMovies">
        <a className="flex flex-row justify-between">
          <div className="pl-5 pt-2  border-solid  h-10 border-1 border-black">
            Mes vidéos
          </div>
          <RiArrowRightSLine size={24} />
        </a>
      </Link>
      <Link href="/myFavoritesMovies">
        <a className="flex flex-row justify-between ">
          <div className="pl-5 pt-2 h-30 ">Mes vidéos préférées</div>
          <RiArrowRightSLine size={24} />
        </a>
      </Link>

      <h3 className="p-5 text-xl font-extrabold bg-zinc-200">
        Mes envies et avis
      </h3>
      <div className="flex flex-row justify-between">
        <div className="pl-5 pt-2 border-solid  h-10 border-1 border-black">
          Mes envies
        </div>
        <RiArrowRightSLine size={24} />
      </div>
      <div className="flex flex-row justify-between">
        <div className="pl-5 pt-2 border-solid h-10 border-1 border-black">
          Avis produits
        </div>
        <RiArrowRightSLine size={24} />
      </div>
      <h3 className="p-5 text-xl font-extrabold bg-zinc-200">
        Mes informations personnelles
      </h3>
      <div className="flex flex-row justify-between">
        <div className="pl-5 pt-2 border-solid h-10 border-1 border-black">
          Modifier mon email et mon mot de passe
        </div>
        <RiArrowRightSLine size={24} />
      </div>
      <div className="flex flex-row justify-between">
        <div className="pl-5  pt-2 border-solid  h-10 border-1 border-black">
          Mes abonnements aux offres ManoMano
        </div>
        <RiArrowRightSLine size={24} />
      </div>
    </div>
  );
}
