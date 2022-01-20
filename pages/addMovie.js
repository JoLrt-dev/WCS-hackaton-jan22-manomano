import { useRouter } from "next/router";
import { useState } from "react";

export default function addMovie() {
  const router = useRouter();
  const [nameVideo, setNameVideo] = useState("");
  const [url, setUrl] = useState("");
  const [association, setAssociation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = {
      nameVideo,
      url: url,
      association,
    };
    localStorage.setItem("myMovie", JSON.stringify(newVideo));
    router.push("/myMovies");
  };

  return (
    <div>
      <h1>Ajouter un tuto</h1>
      <form onSubmit={handleSubmit}>
        <label>Nom de la vidéo</label>
        <input
          type="text"
          value={nameVideo}
          placeholder="Nom de la vidéo"
          onChange={(e) => {
            setNameVideo(e.target.value);
          }}
        ></input>

        <label>Url de votre vidéo</label>
        <input
          type="url"
          value={url}
          placeholder="URL de votre vidéo"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        ></input>

        <label>Produits associés</label>
        <input
          type="text"
          value={association}
          placeholder="Produits associés à votre vidéo"
          onChange={(e) => {
            setAssociation(e.target.value);
          }}
        ></input>

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
