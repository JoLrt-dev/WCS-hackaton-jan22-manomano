import { useRouter } from "next/router";
import { useState } from "react";
import MyProfil from "../components/MyProfil";
import Layout from "../components/Layout";
import avatar from "../public/Img/avatar-mr-brico.webp";
import Image from "next/image";

export default function addMovie() {
  const router = useRouter();
  const [nameVideo, setNameVideo] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = {
      nameVideo,
      url: url,
      description,
    };
    localStorage.setItem("myMovie", JSON.stringify(newVideo));
    router.push("/myMovies");
  };

  return (
    <div>
      <Layout>
        <MyProfil />
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
              setNameVideo(e.target.value);
            }}
          ></input>

          <label className="m-3">Url de votre vidéo</label>
          <input
            type="url"
            value={url}
            className="bg-primary p-3 border-solid border-4 border-primary m-2 text-center"
            placeholder="URL de votre vidéo"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          ></input>

          <label className="m-3">Description</label>
          <input
            type="text"
            value={description}
            className="bg-primary p-3 border-solid border-4 border-primary m-2 text-center  h-52"
            placeholder="Description du contenu de la vidéo"
            onChange={(e) => {
              setDescription(e.target.value);
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
