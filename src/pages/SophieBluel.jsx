import React from "react"
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Gallery from "../components/Projets/Gallerie";
import Competences from "../images/competences_booki.png";
import SophieBluelGalerie from "../images/galerie_photo.png";
import SophieBluelTablette from "../images/sophie-bluel-tablette.png";
import SophieBluelLogin from "../images/sophie_bluel_login.png";
import SophieBluelAccueil from "../images/sophie-bluel.png";
import SophieBluelAjoutTravaux from "../images/popup_ajout_photo.png";
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
                SophieBluelTablette,
                SophieBluelLogin,
                SophieBluelGalerie
            ]
        }
    
    ];
    const [toggle, setToggle] = useState(false);
    return (
        <>
    <Header />
    {toggle && (<>
    <img className="close" src={faXmark} alt="" onClick={() => {setToggle(!toggle)}}></img>
    <Gallery imageSlider={datas[0].pictures} classSlider="sophie-carousel" /></>)}
    <section className="project_page_pres background_section">
	<h1>Projet : Sophie Bluel</h1>
	<article className="project_page_pres_article">
	<div className="conteneur_article">
		<img className="img-article" src={SophieBluelAccueil} alt=""/>
		<div className="conteneur-titre-text">
			<h2 className="project_page_pres_title">Contexte :
			</h2>
			<p className="project_page_pres_text"> Développer la partir Front du site portfolio d’une architecte d’intérieur.
		</p>
		</div>
	</div>
	</article>
	<article className="project_page_pres_article">
		<div className="conteneur_article">
			<div className="conteneur-titre-text">
				<h2 className="project_page_pres_title">Objectifs :</h2>
					<p>- la page de présentation des travaux de l'architecte (à partir du HTML fourni) ;</p>
					<p>- la page de connexion de l'administrateur du site (le client) (code à créer de zéro)</p>
					<p>- la modale permettant d'uploader de nouveaux médias (code à créer from scratch)</p>
			</div>
			<div className="conteneur-titre-text">
				<h2 className="project_page_pres_title">Technologies utilisées :</h2>
				<img className="img-techno-optimisation" src={Competences} alt="Compétences"/>
			</div>
		</div>
	</article>
	<div id="conteneur-button">
		<button className="button-page-lien" data-testid="button">
        <NavLink className="nav-link" to="https://github.com/elodie-rondet/sophie-bluel">
            github du projet</NavLink></button>

		<button className="button-page-lien" data-testid="button">
            <NavLink className="nav-link" to="https://sophie-bluel.elo-web.fr/">
            demo</NavLink>
		</button>
	</div>
	<article className="project_page_pres_article">
			<h2>Les différentes pages développées</h2>
			<div className="conteneur_article">
				<div className="conteneur-titre-text">
					<img className="img-article-horizontal-booki" src={SophieBluelGalerie} alt="Kasa accueil"  onClick={() => {setToggle(!toggle)}}/>
				</div>
				<div className="conteneur-titre-text">
					<img className="img-article-horizontal-booki" src={SophieBluelTablette} alt="Kasa appartement"  onClick={() => {setToggle(!toggle)}}/>
				</div>
			</div>
			<div className="conteneur_article">
				<div className="conteneur-titre-text">
					<img className="img-article-horizontal-booki" src={SophieBluelLogin} alt="Kasa A propos"  onClick={() => {setToggle(!toggle)}}/>
				</div>
				<div className="conteneur-titre-text">
					<img className="img-article-horizontal-booki" src={SophieBluelAjoutTravaux} alt="Kasa Page erreur"  onClick={() => {setToggle(!toggle)}}/>
				</div>
			</div>
		</article>
</section>
    <Footer />
        </>
    )
}

export default SophieBluel;