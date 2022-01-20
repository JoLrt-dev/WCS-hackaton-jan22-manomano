import Layout from "../components/Layout";
import ReactPlayer from "react-player";

export default function myfavoritesMovies() {
  return (
    <div>
      <Layout>
        <h1 className="text-2xl m-10 text-center font-extrabold">
          Mes tutos favoris
        </h1>
        <div className="">
          <div className="prod-img p-3 border-solid border-2 border-gray-400 m-5">
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
