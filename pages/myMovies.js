import Link from "next/link";
import { RiNavigationLine } from "react-icons/ri";
import ReactPlayer from "react-player";
import Layout from "../components/Layout";

export default function myMovies() {
  const myMovie = JSON.parse(localStorage.getItem("myMovie")) ?? {};

  return (
    <div>
      <Layout>
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
          <p>{myMovie.association}</p>
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
