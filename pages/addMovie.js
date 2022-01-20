import { useRouter } from "next/router";
import MyProfil from "../components/MyProfil";
import Layout from "../components/Layout";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { writeStorage, useLocalStorage } from "@rehooks/local-storage";

export default function addMovie() {
  const router = useRouter();
  const [nameVideo, setNameVideo] = useLocalStorage("name");
  const [url, setUrl] = useLocalStorage("urm");
  const [description, setDescription] = useLocalStorage("qsdf");

  function handleSubmit(e) {
    e.preventDefault();
    const newVideo = {
      nameVideo,
      url: url,
      description,
    };
    localStorage.setItem("myMovie", JSON.stringify(newVideo));

    router.push("/myMovies");
  }

  return (
    <div>
      <Layout>
        <MyProfil />
        <Link href="/userCompte">
          <a>
            <BsArrowLeft className="ml-5 mt-2" size={28} />
          </a>
        </Link>
        <h1 className="m-5 text-xl font-extrabold text-center">
          Ajouter un tutoriel
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-white border-solid border-4 border-primary-500 m-2 p-3"
        >
          <label className="m-3">Votre nom</label>
          <input
            className="p-2 bg-primary border-solid border-4 border-primary m-2 text-center"
            type="text"
            value={nameVideo}
            placeholder="Votre nom"
            onChange={(e) => {
              writeStorage(setNameVideo(e.target.value));
            }}
          ></input>

          <label className="m-3">Url de votre vidéo</label>
          <input
            type="url"
            value={url}
            className="bg-primary p-3 border-solid border-4 border-primary m-2 text-center"
            placeholder="URL de votre vidéo"
            onChange={(e) => {
              writeStorage(setUrl(e.target.value));
            }}
          ></input>

          <label className="m-3">Description</label>
          <input
            type="text"
            value={description}
            className="bg-primary p-3 border-solid border-4 border-primary m-2 text-center  h-52"
            placeholder="Description du contenu de la vidéo"
            onChange={(e) => {
              writeStorage(setDescription(e.target.value));
            }}
          ></input>

          <button
            className="m-3 mt-10 p-2 bg-primary border-solid border-2 border-primary-300"
            type="submit"
          >
            Ajouter
          </button>
        </form>
      </Layout>
    </div>
  );
}
