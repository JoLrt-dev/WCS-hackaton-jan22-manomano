import avatar1 from "../public/Img/avatar1.jpeg";
import Image from "next/image";
import ReactPlayer from "react-player";

export default function MyMovie() {
  if (typeof window === "undefined") {
    return null;
  } else {
    JSON.parse(localStorage.getItem("myMovie"));

    const myMovie = JSON.parse(localStorage.getItem("myMovie"));
    {
      return (
        <div
          key={myMovie.id}
          className=" shadow-2xl rounded overflow-hidden border w-50 lg:w-6/12 md:w-6/12 bg-white mx-3 "
        >
          <div className="w-full flex justify-between p-3">
            <div className="flex">
              <div className="rounded-full h-12 w-12  bg-primary-500 flex items-center justify-center overflow-hidden">
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
            </div>
            <div className="pt-1">
              <div className="mb-2 text-sm">
                <span className="font-medium mr-2 text-blue-600">
                  {myMovie.nameVideo}
                </span>{" "}
                {myMovie.description}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
