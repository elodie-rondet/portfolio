import React from "react"
import Header from "../components/Layout/Header";
import { ProjectsList  } from '../components/ProjectsList/projectsList';
import Footer from "../components/Layout/Footer";
import Gallery from "../components/Projets/Gallerie";
import '../sass/header.scss';
import '../sass/footer.scss';
import '../sass/page.scss';
import '../sass/main.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Booki = () => {
    const { name } = useParams()
    const project = ProjectsList.find(project => project.name === name)
    const [toggle, setToggle] = useState(false);
    return (
        <>
    <Header />
    {toggle && (<>
    
    <img className="close" src={project.fermeture} alt="" onClick={() => {setToggle(!toggle)}}></img>
    <Gallery imageSlider={project.pictures} classSlider={"img-carousel"} /></>)}
    <section className="project_page_pres background_section">
    	<h1>Projet : {project.name}</h1>
    	<article className="project_page_pres_article">
    	<div className="conteneur_article">
    		<img className="img-article" src={project.pictures[0]} alt={project.name}></img>
    		<div className="conteneur-titre-text">
    			<h2 className="project_page_pres_title">Contexte :
    			</h2>
    			<p className="project_page_pres_text"> {project.context}
    		</p>
    		</div>
    	</div>
    	</article>
    	<article className="project_page_pres_article">
    		<div className="conteneur_article">
    			<div className="conteneur-titre-text">
    				<h2 className="project_page_pres_title">Objectifs :</h2>
    					<p>{project.objectifs1}</p>
    			</div>
    			<div className="conteneur-titre-text">
    				<h2 className="project_page_pres_title">{project.technologies}</h2>
                    <img className="img-techno-optimisation" src={project.competences} alt="Compétences"/>

    			</div>
    		</div>
    	</article>
    	<div id="conteneur-button">
    		<button className="button-page-lien" data-testid="button">
                <a href="https://github.com/elodie-rondet/booki">github du projet</a>
            </button>
    		<button className="button-page-lien" data-testid="button">
    			<a href="https://booki.elo-web.fr/">demo</a>
    		</button>
    	</div>
    		<article className="project_page_pres_article">
    			<h2>Les différentes pages développées</h2>
    			<div className="conteneur_article">
                {project.pictures.map((picture) => (
                    <div className="conteneur-titre-text">
                            <img 
                                src={picture} 
                                alt={project.name} 
                                className={"img-article-horizontal-booki"} 
                                onClick={() => {setToggle(!toggle)}}
                            />
                            </div>
                        ))}
    			</div>
    		</article>
    </section>
    <Footer />
        </>
    )
}

export default Booki;