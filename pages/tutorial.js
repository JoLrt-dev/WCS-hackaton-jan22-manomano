import next from "next";
import Layout from "../components/Layout";
import Image from "next/image";
import ReactPlayer from "react-player";
import avatar1 from "../public/Img/avatar1.jpeg";
import man from "../public/Img/man.jpeg";
import girl from "../public/Img/girl.jpeg";
import woman from "../public/Img/woman.jpeg";

export default function Tutorial() {
  return (
    <Layout>
      <div className="title">
        <h1 className="text-l uppercase text-gray font-bold text-center">
          Tutoriels Bricolage
        </h1>
        <h3 className="text-l uppercase text-gray font-bold text-center m-6">
          matériel
        </h3>
      </div>
      <div className="rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0 mb-4 ">
        <div className="w-full flex justify-between p-3">
          <div className="flex">
            <div className="rounded-full h-12 w-12  bg-gray-500 flex items-center justify-center overflow-hidden">
              <Image src={avatar1} alt="profilepic" />
            </div>
          </div>
          <span className="pt-1 ml-2 font-bold text-l mr-2">Braydoncoyer</span>
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
            <span className="text-sm text-gray-400 font-medium">12 likes</span>
          </div>
          <div className="pt-1">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2 text-blue-600">
                Braydoncoyer
              </span>{" "}
              J&apos;ai testé la perceuse TEENO et je vous livre mon sentiment
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
              Merci pour cette superbe vidéo, qui a fait finaliser mon achat de
              cette perceuse !
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
        <div className="w-full flex justify-between p-3">
          <div className="flex">
            <div className="rounded-full h-12 w-12 bg-gray-500 flex items-center justify-center overflow-hidden">
              <Image src={man} alt="profilepic" />
            </div>
          </div>
          <span className="pt-1 ml-2 font-bold text-l mr-6">Robert Brico</span>
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
            <span className="text-sm text-gray-400 font-medium">12 likes</span>
          </div>
          <div className="pt-1">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2 text-blue-600">
                Robert Brico
              </span>{" "}
              Dans cette vidéo je vous présente les différentes méthodes pour
              scier et découper le métal.
            </div>
          </div>
          <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
            View all 12 comments
          </div>
          <div className="mb-2">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2 text-blue-600">
                Pierrot le bricolo
              </span>{" "}
              Merci pour cette exellente vidéo Robert, très utile pour mes
              prochains travaux.
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-l uppercase text-gray font-bold text-center m-5">
        aménagement
      </h3>
      <div className=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0 mb-4">
        <div className="w-full flex justify-between p-3">
          <div className="flex">
            <div className="rounded-full h-12 w-12 bg-gray-500 flex items-center justify-center overflow-hidden">
              <Image src={girl} alt="profilepic" />
            </div>
          </div>
          <span className="pt-1 ml-2 font-bold text-l mr-6">Nath Brico</span>
        </div>
        <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
          <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
        </span>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=YFHRhNEeE8c"
          width="100%"
        />

        <div className="px-3 pb-2">
          <div className="pt-2">
            <i className="far fa-heart cursor-pointer"></i>
            <span className="text-sm text-gray-400 font-medium">12 likes</span>
          </div>
          <div className="pt-1">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2 text-blue-600">Nath Brico</span>{" "}
              Dans cette vidéo je vous donne des conseils pour aménager
              simplement votre intérieur de façon ludique et économique.
            </div>
          </div>
          <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
            View all 12 comments
          </div>
          <div className="mb-2">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2 text-blue-600">Samantha</span>{" "}
              Merci pour cette exellente vidéo Nath, j&apos;ai pu récupérer tes
              idées et améliorer mon intérieur simplement. Le résultat est
              parfait, merci encore pour cette participation.
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
        <div className="w-full flex justify-between p-3">
          <div className="flex">
            <div className="rounded-full h-12 w-12 bg-gray-500 flex items-center justify-center overflow-hidden">
              <Image src={woman} alt="profilepic" />
            </div>
          </div>
          <span className="pt-1 ml-2 font-bold text-l mr-6">Sarah</span>
        </div>
        <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
          <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
        </span>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=IFss98ZZVaA"
          width="100%"
        />

        <div className="px-3 pb-2">
          <div className="pt-2">
            <i className="far fa-heart cursor-pointer"></i>
            <span className="text-sm text-gray-400 font-medium">1200 likes</span>
          </div>
          <div className="pt-1">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2 text-blue-600">Sarah</span>{" "}
              Dans cette vidéo je réponds aux questions que l&apos;on me pose le plus souvent sur le bricolage et sur l&apos;aménagement.
          </div>
          <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
            Vue avec 1500 commentaires
          </div>
          <div className="mb-2">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2 text-blue-600">Hélène</span>{" "}
              Merci FAQ c&apos;était très intéressant et les questions posées pertinentes
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}
