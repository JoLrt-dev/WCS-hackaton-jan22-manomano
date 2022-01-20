import Link from "next/link";
import { RiNavigationLine } from "react-icons/ri";
import ReactPlayer from "react-player";
import Layout from "../components/Layout";
import { BsArrowLeft } from "react-icons/bs";
import avatar1 from "../public/Img/avatar1.jpeg";
import MyProfil from "../components/MyProfil";
import Image from "next/image";
import MyMovie from "../components/MyMovie";

export default function myMovies() {
  return (
    <div>
      <Layout>
        <MyProfil />
        <Link href="/userCompte">
          <a>
            <BsArrowLeft className="ml-5 mt-2" size={28} />
          </a>
        </Link>
        <h1 className="text-2xl m-10 text-center font-extrabold">
          My tutoriels
        </h1>
        <Link href="/addMovie">
          <a>
            <button
              type="submit"
              className="bg-white border-solid border-2 p-2 ml-10 mb-5 border-primary-500"
            >
              {" "}
              Add tutorial
            </button>{" "}
          </a>
        </Link>
<<<<<<< Updated upstream
        <MyMovie />
        {/* ------------------------------------------------------------------------------------------- */}
=======

        <div className=" shadow-2xl rounded overflow-hidden border w-50 lg:w-6/12 md:w-6/12 bg-white mx-3 ">
          <div className="w-full flex justify-between p-3">
            <div className="flex">
              <div className="rounded-full h-12 w-12  bg-gray-500 flex items-center justify-center overflow-hidden">
                <Image src={avatar1} alt="profilepic" />
              </div>
            </div>
            <span className="pt-1 ml-2 font-bold text-l mr-2">
              {myMovie.nameVideo}
            </span>
          </div>
          <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
            <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
          </span>
          <ReactPlayer url={myMovie.url} width="100%" />

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
                  {myMovie.description}
                </span>{" "}
                I tested the TEENO drill and I give you my feeling on its
                quality and performance.
              </div>
            </div>
          </div>
        </div>

>>>>>>> Stashed changes
        <div className=" mt-5 shadow-2xl rounded overflow-hidden border w-50 lg:w-6/12 md:w-6/12 bg-white mx-3 ">
          <div className="w-full flex justify-between p-3">
            <div className="flex">
              <div className="rounded-full h-12 w-12  bg-gray-500 flex items-center justify-center overflow-hidden">
                <Image src={avatar1} alt="profilepic" />
              </div>
            </div>
            <span className="pt-1 ml-2 font-bold text-l mr-2">
              {" "}
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

          <div className="px-3 pb-2 ">
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
                I tested the TEENO drill and I give you my feeling on its
                quality and performance.
              </div>
            </div>
            <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
              View of 14 comments
            </div>
            <div className="mb-2">
              <div className="mb-2 text-sm">
                <span className="font-medium mr-2 text-blue-600">
                  SuperBricolo
                </span>{" "}
                Thank you for this great video, which finalized my purchase of
                this drill!
              </div>
            </div>
          </div>
        </div>
        {/*  -----------------------------------Card------------------------------------------------ */}
        <div className=" mt-5 shadow-2xl rounded overflow-hidden border w-50 lg:w-6/12 md:w-6/12 bg-white mx-3 ">
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
            url="https://www.youtube.com/watch?v=ZGXUhxtetGs"
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
<<<<<<< Updated upstream
                Petite démonstrations de le scie à métaux
=======
                I tested the TEENO drill and I give you my feeling on its
                quality and performance.
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                Merci pour cette exellente vidéo Robert, très utile pour mes
                prochains travaux.
=======
                Thank you for this great video, which finalized my purchase of
                this drill!
>>>>>>> Stashed changes
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
