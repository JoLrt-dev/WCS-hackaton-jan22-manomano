import Layout from "../components/Layout";
import ReactPlayer from "react-player";
import avatar from "../public/Img/avatar-mr-brico.webp";
import Image from "next/image";
import avatar1 from "../public/Img/avatar1.jpeg";

export default function myfavoritesMovies() {
  return (
    <div>
      <Layout>
        {/* ------------------------Profil------------------------------------------------ */}
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
        {/* ---------------------------------------------------------------------------- */}

        <h1 className="text-2xl m-10 text-center font-extrabold">
          Mes tutoriels favoris
        </h1>

        <div className=" rounded overflow-hidden border w-50 lg:w-6/12 md:w-6/12 bg-white mx-3 ">
          <div className="w-full flex justify-between p-3">
            <div className="flex">
              <div className="rounded-full h-12 w-12  bg-gray-500 flex items-center justify-center overflow-hidden">
                <Image src={avatar1} alt="profilepic" />
              </div>
            </div>
            <span className="pt-1 ml-2 font-bold text-l mr-2">
              Braydoncoyer
            </span>
          </div>
          <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
            <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
          </span>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=eP0-5Chb8k8"
            width="100%"
          />

          <div className="px-3 pb-2">
            <div className="pt-2">
              <i className="far fa-heart cursor-pointer"></i>
              <span className="text-sm text-gray-400 font-medium">
                12 likes
              </span>
            </div>
            <div className="pt-1">
              <div className="mb-2 text-sm">
                <span className="font-medium mr-2 text-blue-600">
                  Braydoncoyer
                </span>{" "}
                J{`'`}ai testé la perceuse TEENO et je vous livre mon sentiment
                sur sa qualité et ses performances.
              </div>
            </div>
            <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
              Vue des 14 commentaires
            </div>
            <div className="mb-2">
              <div className="mb-2 text-sm">
                <span className="font-medium mr-2 text-blue-600">
                  SuperBricolo
                </span>{" "}
                Merci pour cette superbe vidéo, qui a fait finaliser mon achat
                de cette perceuse !
              </div>
            </div>
          </div>
        </div>

        <div className=" m-3 rounded overflow-hidden border w-50 lg:w-6/12 md:w-6/12 bg-white mx-3 ">
          <div className="w-full flex justify-between p-3">
            <div className="flex">
              <div className="rounded-full h-12 w-12  bg-gray-500 flex items-center justify-center overflow-hidden">
                <Image src={avatar1} alt="profilepic" />
              </div>
            </div>
            <span className="pt-1 ml-2 font-bold text-l mr-2">
              Robert Brico
            </span>
          </div>
          <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
            <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
          </span>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ZGXUhxtetGs"
            width="100%"
          />

          <div className="px-3 pb-2">
            <div className="pt-2">
              <i className="far fa-heart cursor-pointer"></i>
              <span className="text-sm text-gray-400 font-medium">
                68 likes
              </span>
            </div>
            <div className="pt-1">
              <div className="mb-2 text-sm">
                <span className="font-medium mr-2 text-blue-600">
                  Braydoncoyer
                </span>{" "}
                Dans cette vidéo je vous présente les différentes méthodes pour
                scier et découper le métal.
              </div>
            </div>
            <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
              Vue des 70 commentaires
            </div>
            <div className="mb-2">
              <div className="mb-2 text-sm">
                <span className="font-medium mr-2 text-blue-600">
                  SuperBricolo
                </span>{" "}
                Merci pour cette exellente vidéo Robert, très utile pour mes
                prochains travaux.
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
