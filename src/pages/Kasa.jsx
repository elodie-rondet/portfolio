import React from "react"
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Gallery from "../components/Projets/Gallerie";
import Competences from "../images/competences_kasa.png";
import KasaAccueil from "../images/kasa-accueil.webp";
import KasaAppartement from "../images/kasa-appartement.webp";
import KasaErreur from "../images/kasa-pageErreur.webp";
import KasaApropos from "../images/kasa-Apropos.webp";
import KasaMobile from "../images/kasa-mobile.webp";
import Kasa from "../images/kasa.png";
import faXmark from "../images/fermeture.png";
import { NavLink } from 'react-router-dom';
import '../sass/header.scss';
import '../sass/footer.scss';
import '../sass/page.scss';
import '../sass/main.scss';
import { useState } from 'react';

const SophieBluel = () => {
    const datas = [{
            "pictures": [
                KasaAccueil,
                KasaAppartement,
                KasaErreur,
                KasaApropos,
                KasaMobile
            ]
        }
    
    ];
    const [toggle, setToggle] = useState(false);
    return (
        <>
    <Header />
    {toggle && (<>
    <img className="close" src={faXmark} alt="Carousel" onClick={() => {setToggle(!toggle)}}></img>
    <Gallery imageSlider={datas[0].pictures} classSlider="kasa-carousel" /></>)}
	<section className="project_page_pres background_section">
		<h1>Projet : Kasa</h1>
		<article className="project_page_pres_article">
			<div className="conteneur_article">
				<img className="img-article" src={Kasa} alt="Kasa"/>
				<div className="conteneur-titre-text">
					<h2 className="project_page_pres_title">Contexte :
					</h2>
					<p className="project_page_pres_text">
					Créez une application web de location immobilière avec React
					</p>
				</div>
			</div>
		</article>
		<article className="project_page_pres_article">
			<div className="conteneur_article">
				<div className="conteneur-titre-text">
					<h2 className="project_page_pres_title">Contraintes fonctionnelles:</h2>
						<p>- Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. </p>
						<p>- Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. </p>
						<p>- S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.</p>
				</div>
				<div className="conteneur-titre-text">
						<p>- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.</p>
						<p>- Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. </p>
						<p>- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer. Inversement, si le Collapse est fermé, un clic permet de l'ouvrir. </p>
				</div>
			</div>
			<h2 className="project_page_pres_title">Technologies utilisées :</h2>
			<img className="img-techno-optimisation" src={Competences} alt="Competences"/>
		</article>
		<div id="conteneur-button">
            <button className="button-page" data-testid="button">
            <NavLink className="nav-link" to="https://github.com/elodie-rondet/kasa">
            github du projet</NavLink></button>

		<button className="button-page" data-testid="button">
            <NavLink className="nav-link" to="https://elodie-rondet.github.io/kasa/">
            demo</NavLink>
		</button>
		</div>
		<article className="project_page_pres_article">
			<h2>Les différentes pages développées</h2>
			<div className="conteneur_article">
				<div className="conteneur-titre-text">
					<h2 className="titre-page">Page d'accueil</h2>
					<img className="img-article-horizontal-booki" src={KasaAccueil} alt="Kasa accueil"  onClick={() => {setToggle(!toggle)}}/>
				</div>
				<div className="conteneur-titre-text">
					<h2 className="titre-page">Page appartement</h2>
					<img className="img-article-horizontal-booki" src={KasaAppartement} alt="Kasa appartement"  onClick={() => {setToggle(!toggle)}}/>
				</div>
			</div>
			<div className="conteneur_article">
				<div className="conteneur-titre-text">
					<h2 className="titre-page">Page à propos</h2>
					<img className="img-article-horizontal-booki" src={KasaApropos} alt="Kasa A propos"  onClick={() => {setToggle(!toggle)}}/>
				</div>
				<div className="conteneur-titre-text">
					<h2 className="titre-page">Page erreur</h2>
					<img className="img-article-horizontal-booki" src={KasaErreur} alt="Kasa Page erreur"  onClick={() => {setToggle(!toggle)}}/>
				</div>
			</div>
            <div className="conteneur_article">
				<div className="conteneur-titre-text">
					<h2 className="titre-page">Version mobile</h2>
					<img className="img-article-horizontal-booki" src={KasaMobile} alt="Kasa mobile"/>
				</div>
			</div>
		</article>
	</section>
    <Footer />
        </>
    )
}

export default SophieBluel;