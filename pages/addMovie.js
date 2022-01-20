import { useRouter } from "next/router";
import { useState } from "react";

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
        <div className="bg-blue-900 p-10 flex flex-row">
          <div className="">
            {" "}
            <div className="rounded-full bg-white p-3 h-20 w-20 mb-5">
              <Image
                src={avatar}
                width="60px"
                height="60px"
                className="items-end"
                alt=""
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
        <h1 className="m-5 text-xl font-extrabold text-center">
          Ajouter un tutoriel
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col border-solid border-4 border-primary m-2 p-3"
        >
          <label className="m-3">Votre nom</label>
          <input
            className=" bg-primary border-solid border-4 border-primary m-2 text-center"
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
            className="bg-primary border-solid border-4 border-primary m-2 text-center"
            placeholder="URL de votre vidéo"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          ></input>

          <label className="m-3">Produits associés</label>
          <input
            type="text"
            value={description}
            className="bg-primary border-solid border-4 border-primary m-2 text-center  h-52"
            placeholder="Description du contenu de la vidéo"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>

          <button
            className="m-3 mt-5 bg-primary border-solid border-2 border-gray-500"
            type="submit"
          >
            Ajouter
          </button>
        </form>
      </Layout>
    </div>
  );
}
