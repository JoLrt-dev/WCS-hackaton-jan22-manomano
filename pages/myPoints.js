import Link from "next/link";
import avatar from "../public/Img/avatar-mr-brico.webp";
import Image from "next/image";

export default function myPoints() {
  return (
    <div>
      <div className="bg-blue-900 p-10 flex flex-row">
        <div className="">
          {" "}
          <div className="rounded-full bg-white p-3 h-20 w-20 mb-5">
            <Image
              src={avatar}
              width="60px"
              height="60px"
              className="items-end"
            />
          </div>
          <div className=" bg-green-600 ">
            <div className="w-15">
              <p className="text-white p-1 text-center text-xs m-2">
                Modifier votre profil
              </p>
            </div>
          </div>
        </div>
        <div className="pl-5">
          <p className="text-white pt-5 text-sm">Bricoleur.2358455</p>
          <p className="text-white pl-50 text-sm">Membre depuis 25 jours</p>
        </div>
      </div>
      <h1 className="text-2xl m-10 text-center">Mon solde de points</h1>
      <div className="  m-10 border-solid border-4 border-gray-400 h-60 p-1">
        <p className="p-5">
          Votre solde de points est de 150 points, vous avez le droit à 5% de
          remise sur votre prochaine commande
        </p>
        <Link href="/conditon">
          <a className=" border-solid border-2 border-gray-400 text-sm flex justify-center m-2 bg-gray-100 p-1">
            {" "}
            Voir les conditions
          </a>
        </Link>
        <p className=" border-solid border-2 border-gray-400 text-sm flex justify-center m-2 bg-gray-100 p-1">
          {" "}
          Utiliser mes points
        </p>
      </div>
      <div className="  m-5  border-solid border-4 border-gray-400 h-25  ">
        <p className="p-5">
          A partir de 150 points, remise de 5 % sur votre prochaine commande
        </p>
      </div>

      <div className="  m-5 border-solid border-4 border-gray-400 h-25  ">
        <p className="p-5">
          A partir de 300 points, remise de 10 % sur votre prochaine commande
        </p>
      </div>

      <div className="  m-5 border-solid border-4 border-gray-400 h-25  ">
        <p className="p-5">
          A partir de 400 points, remise de 15 % sur votre prochaine commande
        </p>
      </div>
      <div className="  m-5 border-solid border-4 border-gray-400 h-25  ">
        <p className="p-5">
          A partir de 500 points, remise de 20 % sur votre prochaine commande
        </p>
      </div>
    </div>
  );
}
