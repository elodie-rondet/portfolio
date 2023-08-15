import React from "react"
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Gallery from "../components/Projets/Gallerie";
import CompetencesBooki from "../images/competences_booki.png";
import BookiDesktop from "../images/booki.png";
import BookiTablette from "../images/booki_tablette.png";
import BookiMobile from "../images/booki-mobile.png";
import faXmark from "../images/fermeture.png";
import '../sass/header.scss';
import '../sass/footer.scss';
import '../sass/page.scss';
import '../sass/main.scss';
import { useState } from 'react';

const Booki = () => {
    const datas = [{
            "pictures": [
                BookiDesktop,
                BookiTablette,
                BookiMobile
            ]
        }
    
    ];
    const [toggle, setToggle] = useState(false);
    return (
        <>
    <Header />
    {toggle && (<>
    <img className="close" src={faXmark} alt="" onClick={() => {setToggle(!toggle)}}></img>
    <Gallery imageSlider={datas[0].pictures} classSlider={"img-carousel"} /></>)}
    <section className="project_page_pres background_section">
    	<h1>Projet : Booki</h1>
    	<article className="project_page_pres_article">
    	<div className="conteneur_article">
    		<img className="img-article" src={BookiDesktop} alt="Booki version Desktop"></img>
    		<div className="conteneur-titre-text">
    			<h2 className="project_page_pres_title">Contexte :
    			</h2>
    			<p className="project_page_pres_text"> Créez la page d'accueil d'une agence de voyage avec HTML & CSS
    		</p>
    		</div>
    	</div>
    	</article>
    	<article className="project_page_pres_article">
    		<div className="conteneur_article">
    			<div className="conteneur-titre-text">
    				<h2 className="project_page_pres_title">Objectifs :</h2>
    					<p>L’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.
    						Il faut développer l'interface du site avec du code HTML et CSS</p>
    			</div>
    			<div className="conteneur-titre-text">
    				<h2 className="project_page_pres_title">Technologies utilisées :</h2>
    				<img className="img-techno-optimisation" src={CompetencesBooki} alt="Compétences"></img>
    			</div>
    		</div>
    	</article>
    	<div id="conteneur-button">
    		<button className="button-page" data-testid="button"><a href="https://github.com/elodie-rondet/kasa">github du projet</a></button>
    		<button className="button-page" data-testid="button">
    			<a href="https://booki.elo-web.fr/">demo</a>
    		</button>
    	</div>
    		<article className="project_page_pres_article">
    			<h2>Les différentes pages développées</h2>
    			<div className="conteneur_article">
    				<div className="conteneur-titre-text">
    					<img className="img-article-horizontal-booki" src={BookiDesktop} alt="Booki desktop" onClick={() => {setToggle(!toggle)}}></img>
    				</div>
    				<div className="conteneur-titre-text">
    					<img className="img-article-horizontal-kasa" src={BookiTablette} alt="Booki tablette" onClick={() => {setToggle(!toggle)}}></img>
    				</div>
    				<div className="conteneur-titre-text">
    					<img className="img-article-horizontal-booki" src={BookiMobile} alt="Booki mobile" onClick={() => {setToggle(!toggle)}}></img>
    				</div>
    			</div>
    		</article>
    </section>
    <Footer />
        </>
    )
}

export default Booki;