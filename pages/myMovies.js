import Link from "next/link";
import { RiNavigationLine } from "react-icons/ri";
import ReactPlayer from "react-player";
import Layout from "../components/Layout";
import { BsArrowLeft } from "react-icons/bs";
import avatar from "../public/Img/avatar-mr-brico.webp";
import Image from "next/image";

export default function myMovies() {
  const myMovie = JSON.parse(localStorage.getItem("myMovie")) ?? {};

  return (
    <div>
      <Layout>
        {/* -----------------------Profil--------------------------------------------- */}
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

        {/* -----------------------------------------------------------------------
         */}

        <Link href="/userCompte">
          <a>
            <BsArrowLeft className="ml-5 mt-2" size={28} />
          </a>
        </Link>
        <h1 className="text-2xl m-10 text-center font-extrabold">
          Mes tutoriels
        </h1>
        <Link href="/addMovie">
          <a>
            <button
              type="submit"
              className="bg-gray-100 border-solid border-2 p-2 ml-10  border-gray-800"
            >
              {" "}
              Ajouter un tuto
            </button>{" "}
          </a>
        </Link>

        <div className=" shadow-2xl rounded overflow-hidden border w-50 lg:w-6/12 md:w-6/12 bg-white mx-3 ">
          <div className="w-full flex justify-between p-3">
            <div className="flex">
              <div className="rounded-full h-12 w-12  bg-gray-500 flex items-center justify-center overflow-hidden">
                {/* <Image src={avatar1} alt="profilepic" /> */}
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
                J{`'`}ai testé la perceuse TEENO et je vous livre mon sentiment
                sur sa qualité et ses performances.
              </div>
            </div>
          </div>
        </div>

        {/* <div>
          <h3> {myMovie.nameVideo}</h3>
          <ReactPlayer url={myMovie.url} width="100%" />
          <p>{myMovie.description}</p>
        </div>
        <div className="">
          <div className="prod-img p-3 drop-shadow-2xl  m-8 ">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=eP0-5Chb8k8"
              width="100%"
            />
          </div> */}

        <div className="prod-img p-5 border-solid border-2 border-gray-400 m-5">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=eP0-5Chb8k8"
            width="100%"
          />
        </div>

        <div className="prod-img p-5 border-solid border-2 border-gray-400 m-5">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=eP0-5Chb8k8"
            width="100%"
          />
        </div>

        <div className="prod-img p-5 border-solid border-2 border-gray-400 m-5">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=eP0-5Chb8k8"
            width="100%"
          />
        </div>
      </Layout>
    </div>
  );
}
