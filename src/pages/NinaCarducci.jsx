import React from "react"
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import NinaCarducciAccueil from "../images/nina_carducci_page.png";
import Competences from "../images/competences_optimisation.png";
import { NavLink } from 'react-router-dom';
import '../sass/header.scss';
import '../sass/footer.scss';
import '../sass/page.scss';
import '../sass/main.scss';

const NinaCarducci = () => {
    return (
        <>
    <Header />
	<section className="project_page_pres background_section">
	    <h1>Projet : Nina Carducci</h1>
	        <article className="project_page_pres_article">
	            <div className="conteneur_article">
	                <img className="img-article-carducci" src={NinaCarducciAccueil} alt="Accueil"/>
	                <div className="conteneur-titre-text">
	                    <h2 className="project_page_pres_title">Contexte :
	                    </h2>
	                    <p className="project_page_pres_text">
	                    En tant que développeur freelance, il s'agissait de proposer un service d’optimisation SEO à de nouveaux clients. 
	                    Parmi les prospects, il y a le site de Nina Carducci, une photographe.
	                    La cliente répond positivement à la proposition en demandant une optimisation de son site.
	                    </p>
	                </div>
	            </div>
	        </article>
	        <article className="project_page_pres_article">
	            <h2 className="project_page_pres_title">Objectifs :</h2>
	            <p>- Faire une optimisation globale du site, tant sur les performances que sur le SEO ;</p>
	            <p>- Mettre en place le référencement local en utilisant Schema.org ;</p>
	            <p>- Ajouter les metas pour les réseaux sociaux ;</p>
	            <p>- Faire les modifications liées à l’accessibilité du site ;</p>
	            <p>- Produire un rapport d’optimisation présentant toutes vos actions et leur impact.</p>
	        </article>
	        <article className="project_page_pres_article">
	            <h2 className="project_page_pres_title">Technologies utilisées :</h2>
	            <img className="img-techno-optimisation" src={Competences} alt="Competences"/>
	            <div className="project_page_pres_logos">
	            </div>
	        </article>
	        <div id="conteneur-button">
		        <button className="button-page" data-testid="button">
                    <NavLink className="nav-link" to="https://github.com/elodie-rondet/nina-carducci.github.io-master">
                    github du projet</NavLink></button>

		        <button className="button-page" data-testid="button">
			        <a href="https://test.elo-web.fr/">demo</a>
		        </button>
	        </div>
	</section>
    <Footer />
        </>
    )
}

export default NinaCarducci;