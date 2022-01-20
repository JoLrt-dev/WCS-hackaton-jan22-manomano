import Link from "next/link";
import MyProfil from "../components/MyProfil";

import { RiArrowRightSLine } from "react-icons/ri";
import Layout from "../components/Layout";

export default function userCompte() {
  return (
    <div>
      <Layout>
        <MyProfil />
        <h1 className="m-5 text-2xl">Bienvenue sur votre compte !</h1>
        <h2 className="m-5 text-xl">Ici, vous êtes comme à la maison</h2>
        <h3 className="m-5 text-xl font-extrabold">Mes commandes</h3>
        <div className="flex flex-row justify-between bg-white">
          <div className="pl-5 pt-2 h-10 ">Toutes mes commandes</div>{" "}
          <RiArrowRightSLine size={24} className="m-2" />
        </div>
        <div className="bg-primary ">
          <h3 className="p-5 text-xl font-extrabold bg-primary">
            Ma contribution
          </h3>
          <Link href="/myPoints">
            <a>
              <div className=" flex flex-row justify-between bg-white">
                <div className="pl-5 pt-2  pr-20 border-solid h-10 border-1 border-black">
                  Mon solde de points
                </div>{" "}
                <RiArrowRightSLine size={24} />
              </div>
            </a>
          </Link>
          <Link href="/myMovies">
            <a className="flex flex-row justify-between bg-white">
              <div className="pl-5 pt-2 p-2 border-solid  h-10 border-1 border-black">
                Mes vidéos
              </div>
              <RiArrowRightSLine size={24} />
            </a>
          </Link>
          <Link href="/myFavoritesMovies">
            <a className="flex flex-row justify-between bg-white">
              <div className="pl-5 pt-2 p-2 h-30 ">Mes vidéos préférées</div>
              <RiArrowRightSLine size={24} />
            </a>
          </Link>

          <h3 className="p-5 text-xl font-extrabold ">Mes envies et avis</h3>
          <div className="flex flex-row justify-between bg-white">
            <div className="pl-5 pt-2 border-solid  h-10 border-1 border-black">
              Mes envies
            </div>
            <RiArrowRightSLine size={24} />
          </div>
          <div className="flex flex-row justify-between bg-white">
            <div className="pl-5 pt-2 border-solid h-10 border-1 border-black">
              Avis produits
            </div>
            <RiArrowRightSLine size={24} />
          </div>
          <h3 className="p-5 text-xl font-extrabold ">
            Mes informations personnelles
          </h3>
          <div className="flex flex-row justify-between bg-white">
            <div className="pl-5 pt-2 border-solid h-10 border-1 border-black">
              Modifier mon email et mon mot de passe
            </div>
            <RiArrowRightSLine size={24} />
          </div>
          <div className="flex flex-row justify-between bg-white">
            <div className="pl-5  pt-2 border-solid  h-10 border-1 border-black">
              Mes abonnements aux offres ManoMano
            </div>
            <RiArrowRightSLine size={24} />
          </div>
        </div>
      </Layout>
    </div>
  );
}
