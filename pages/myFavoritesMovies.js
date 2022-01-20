import Layout from "../components/Layout";
import ReactPlayer from "react-player";
import avatar from "../public/Img/avatar-mr-brico.webp";
import Image from "next/image";
import avatar1 from "../public/Img/avatar1.jpeg";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import MyProfil from "../components/MyProfil";

export default function myfavoritesMovies() {
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
          My favorites tutorials
        </h1>
        {/*  --------------------------------card--------------------------------------------------- */}
        <div className=" shadow-2xl rounded overflow-hidden border w-50 lg:w-6/12 md:w-6/12 bg-white mx-3 ">
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
        {/* -------------------------------card---------------------------------------------------- */}
        <div className=" shadow-2xl m-3 rounded overflow-hidden border w-50 lg:w-6/12 md:w-6/12 bg-white mx-3 ">
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
                In this video I show you the different methods to sawing and
                cutting metal.
              </div>
            </div>
            <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
              View of 70 comments
            </div>
            <div className="mb-2">
              <div className="mb-2 text-sm">
                <span className="font-medium mr-2 text-blue-600">
                  SuperBricolo
                </span>{" "}
                Thank you for this excellent video Robert, very useful for
                future work.
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
