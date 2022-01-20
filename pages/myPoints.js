import Link from "next/link";
import Layout from "../components/Layout";
import { BsArrowLeft } from "react-icons/bs";
import MyProfil from "../components/MyProfil";

export default function myPoints() {
  return (
    <div>
      <Layout>
        <MyProfil />
        <Link href="/userCompte">
          <a>
            <BsArrowLeft className="ml-5 mt-2" size={28} />
          </a>
        </Link>

        <h1 className="text-2xl m-7 text-center">Mon solde de points</h1>
        <div className="  m-10 bg-white border-solid border-4 border-primary-200 h-60 p-1">
          <p className="p-5">
            Votre solde de points est de 150 points, vous avez le droit à 5% de
            remise sur votre prochaine commande
          </p>
          <Link href="/rewardProgram">
            <a className=" border-solid border-2 border-primary-300 text-sm flex justify-center m-2 bg-gray-100 p-1">
              {" "}
              Voir les conditions
            </a>
          </Link>
          <p className=" border-solid border-2 border-primary-300 text-sm flex justify-center m-2 bg-gray-100 p-1">
            {" "}
            Utiliser mes points
          </p>
        </div>
        <div className="  m-5 bg-white border-solid border-4 border-primary-200 h-25  ">
          <p className="p-5">
            A partir de 150 points, remise de 5 % sur votre prochaine commande
          </p>
        </div>

        <div className="  m-5 bg-white border-solid border-4 border-primary-200 h-25  ">
          <p className="p-5">
            A partir de 300 points, remise de 10 % sur votre prochaine commande
          </p>
        </div>

        <div className="  m-5 bg-white border-solid border-4 border-primary-200 h-25  ">
          <p className="p-5">
            A partir de 400 points, remise de 15 % sur votre prochaine commande
          </p>
        </div>
        <div className="  m-5 bg-white border-solid border-4 border-primary-200 h-25  ">
          <p className="p-5">
            A partir de 500 points, remise de 20 % sur votre prochaine commande
          </p>
        </div>
      </Layout>
    </div>
  );
}
