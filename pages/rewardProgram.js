import React from "react";
import Layout from "../components/Layout";
import { GrAdd } from "react-icons/gr";

const rewardProgram = () => {
  return (
    <Layout>
      <div
        className="m-6 border border-solid border-indigo-600 rounded-lg p-4"
        id="conditions-bloc"
      >
        <h5>ManoPoints en quelques points:</h5>
        <div id="conditions-list">
          <ul className="list-disc pl-8">
            <li className="pb-4">
              Depuis votre espace client, postez vos tutoriels en vidéo. Une
              fois validé par notre équipe de super modérateurs, la vidéo sera
              accessible à l'ensemble de la communauté ManoMano et vous recevrez
              20 ManoPoints. Si vous n'avez pas encore de compte client, cliquez
              ici pour y remédier... ;)
            </li>
            <li className="pb-4">
              A partir de 500 vues, vous recevez 10 ManoPoints supplémentaires,
              puis 10 ManoPoints toutes les 100 vues. Si votre vidéo est vue 700
              fois, vous recevez donc un total de 30 ManoPoints !
            </li>
            <li className="pb-4">
              Tous les 100 ManoPoints, bénéficiez d'une réduction de 10% de
              réduction sur votre prochaine commande.
            </li>
            <li className="pb-4">
              {" "}
              Vous pouvez consulter votre solde de ManoPoints à tout moment
              depuis votre espace personnel.
            </li>
          </ul>
          <p className="flex justify-center">
            {" "}
            N'attendez plus, rejoignez nous !{" "}
          </p>
        </div>
      </div>

      <div id="post-video">
        <p>
          {" "}
          Ajoutez dès maintenant votre premère vidéo et commencez à cumuler des
          points !
        </p>
        <div className="flex justify-center">
          <GrAdd
            size={"5em"}
            className="border border-solid border-indigo-600 rounded-lg p-4"
          />
        </div>
      </div>
    </Layout>
  );
};

export default rewardProgram;
