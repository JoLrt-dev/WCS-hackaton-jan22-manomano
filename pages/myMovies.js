import Link from "next/link";
import { RiNavigationLine } from "react-icons/ri";
import ReactPlayer from "react-player";
import Layout from "../components/Layout";

import avatar from "../public/Img/avatar-mr-brico.webp";
import Image from "next/image";

export default function myMovies() {
  const myMovie = JSON.parse(localStorage.getItem("myMovie")) ?? {};

  return (
    <div>
      <Layout>
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
        <h1 className="text-2xl m-10 text-center font-extrabold">Mes tutos</h1>
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
        <div>
          <h3> {myMovie.nameVideo}</h3>
          <ReactPlayer url={myMovie.url} />
          <p>{myMovie.description}</p>
        </div>
        <div className="">
          <div className="prod-img p-3 drop-shadow-2xl  m-8 ">
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

          <div className="prod-img p-5 border-solid border-2 border-gray-400 m-5">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=eP0-5Chb8k8"
              width="100%"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
