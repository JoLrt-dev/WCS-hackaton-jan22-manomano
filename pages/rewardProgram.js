import React from "react";
import Layout from "../components/Layout";
import { GrAdd } from "react-icons/gr";
import Link from "next/link";

const rewardProgram = () => {
  return (
    <Layout>
      <div
        className="m-6 border border-solid border-gray-900 rounded-lg p-4"
        id="conditions-bloc"
      >
        <h5 className="underline underline-offset-2 text-lg font-bold pb-6">
          ManoPoints en quelques points:
        </h5>
        <div id="conditions-list">
          <ul className="list-disc pl-8">
            <li className="pb-4">
              Depuis votre espace client, postez vos tutoriels en vidéo. Une
              fois validé par notre équipe de super modérateurs, la vidéo sera
              &apos;ensemble de la communauté ManoMano et vous recevrez 30
              ManoPoints. Si vous n&apos;avez pas encore de compte client,
              cliquez ici pour y remédier.
            </li>
            <li className="pb-4">
              A partir de 500 vues, vous recevez 15 ManoPoints supplémentaires,
              puis 15 ManoPoints toutes les 100 vues. Si votre vidéo est vue 700
              fois, vous recevez donc un total de 60 ManoPoints !
            </li>
            <li className="pb-4">
              Tous les 150 ManoPoints, bénéficiez d&apos;une réduction de 5% de
              réduction sur votre prochaine commande.
            </li>
            <li className="pb-4">
              {" "}
              Vous pouvez consulter votre solde de ManoPoints à tout moment
              depuis votre espace personnel.
            </li>
          </ul>
          <p className="text-lg flex justify-center">
            {" "}
            N&apos;attendez plus, rejoignez nous !{" "}
          </p>
        </div>
      </div>

      <div id="post-video">
        <p className=" font-bold text-lg m-8 text-center">
          {" "}
          Ajoutez dès maintenant votre premère vidéo et commencez à cumuler des
          points !{" "}
        </p>
        <div className="flex justify-center">
          <Link href="/addMovie">
            <a>
              <GrAdd
                size={"5em"}
                className="border border-solid border-gray-900 rounded-lg p-4"
              />
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default rewardProgram;
