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
        DIY Tutorials
        </h1>
        <h3 className="text-l uppercase text-gray font-bold text-center m-6">
          material
        </h3>
      </div>
      <div className="rounded overflow-hidden border shadow-2xl w-full lg:w-6/12 md:w-6/12 bg-white  md:mx-0 lg:mx-0 mb-4 ">
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
              I have tested the TEENO drill and I give you my feeling
              on its quality and performance.
            </div>
          </div>
          <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
            View all 14 comments
          </div>
          <div className="mb-2">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2 text-blue-600">
                SuperBricolo
              </span>{" "}
              Thank you for this great video, which made me finalize my purchase of
              this drill !
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded overflow-hidden border shadow-2xl w-full lg:w-6/12 md:w-6/12 bg-white  md:mx-0 lg:mx-0">
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
              In this video I present you the different methods to
              sawing and cutting metal.
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
              Thank you for this excellent video Robert, very useful for my
              future work.
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-l uppercase text-gray font-bold text-center m-5">
        Intérior Design
      </h3>
      <div className=" rounded overflow-hidden border shadow-2xl w-full lg:w-6/12 md:w-6/12 bg-white md:mx-0 lg:mx-0 mb-4">
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
              In this video I give you tips on how to design your interior
              your interior in a fun and economical way.
            </div>
          </div>
          <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
            View all 12 comments
          </div>
          <div className="mb-2">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2 text-blue-600">Samantha</span>{" "}
              Thank you for this excellent video Nath, I was able to pick up your
              ideas and improve my interior simply. The result is
              perfect, thank you again for this participation.
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded overflow-hidden border shadow-2xl w-full lg:w-6/12 md:w-6/12 bg-white md:mx-0 lg:mx-0">
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
              In this video I answer the questions I am most often asked about DIY and home improvement.
          </div>
          <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
            View all 1500 comments
          </div>
          <div className="mb-2">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2 text-blue-600">Hélène</span>{" "}
              Thank you very interesting FAQ and relevant questions asked
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}
