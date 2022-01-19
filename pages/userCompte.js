import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function user() {
  return (
    <div>
      <h1 className="bg-blue-150">Bienvenue sur mon compte !</h1>
      <h2>Ici, vous êtes comme à la maison</h2>
      <h3>Mes commandes</h3>
      <div>Toutes mes commandes</div>
      <h3>Ma contribution</h3>
      <Link href="/pages/myPoints">
        <a>
          <div>Mon solde de points</div>
        </a>
      </Link>
      <Link href="/pages/myMovies">
        <a>
          <div>Mes vidéos</div>
        </a>
      </Link>
      <Link href="/pages/myFavoritesMovies">
        <a>
          <div>Mes vidéos préférées</div>
        </a>
      </Link>
      <h3>Mes informations personnelles</h3>
      <div>Modifier mon email et mon mot de passe</div>
      <div>Mes abonnements aux offres ManoMano</div>

      <div>
        besoin d'aide? Accèder à notre centre d'aide et trouvez la réponse à
        toutes vos questions
      </div>
    </div>
  );
}
