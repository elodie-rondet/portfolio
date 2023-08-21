import React from "react"
import Header from "../components/Layout/Header";
import Intro from "../components/Accueil/Intro";
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
    let competences4 = false;
    let competences3 = false;
    const classCompetences = project.classcompetences;
    if (project.competences4 !== "")
    {competences4 = true;}
    if (project.competences3 !== "")
    {competences3 = true;}

    let TitreProjet = "";
    if (project.name === "mon-vieux-grimoire")
    TitreProjet = "Mon Vieux Grimoire";
    else if (project.name === "sophie-bluel")
    TitreProjet = "Sophie Bluel";
    else if (project.name === "nina-carducci")
    TitreProjet = "Nina Carducci";
    return (
        <>
    <Header classHeader={toggle}/>
    <Intro page={toggle}/>
    {toggle && (<>
    
    <img className="close" src={project.fermeture} alt="" onClick={() => {setToggle(!toggle)}}></img>
    <Gallery imageSlider={project.pictures} classSlider={"img-carousel"} /></>)}
    <section className="project_page_pres background_section">
    	<h1>Projet : {project.name === "mon-vieux-grimoire" || project.name === "sophie-bluel"  || project.name === "nina-carducci"? TitreProjet :project.name}</h1>
    	<article className="project_page_pres_article">
    	<div className="conteneur_article">
    		<img className="img-article" src={project.imageAccueil} alt={name}></img>
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
    			<div className={"conteneur-titre-text"+classCompetences}src={project.competences}>
    				<h2 className="project_page_pres_title">Objectifs :</h2>
    					<p>{project.objectifs1}</p>
                        <p>{project.objectifs2}</p>
                        <p>{project.objectifs3}</p>
                        <p>{project.objectifs4}</p>
                        <p>{project.objectifs5}</p>
                        <p>{project.objectifs6}</p>

    			</div>
                <div className={"conteneur-titre-text"+classCompetences}src={project.competences}>
                <h2 className="project_page_pres_title">{project.technologies}</h2>
                <li class="techno-item">{project.competences}</li>
                <li class="techno-item">{project.competences1}</li>
                <li class="techno-item">{project.competences2}</li>
                <li class={competences3 === true ? 'techno-item' : 'techno-item-hide'}>{project.competences3}</li>
                <li class={competences4 === true ? 'techno-item' : 'techno-item-hide'}>{project.competences4}</li>
                </div>

    		</div>
    	</article>
    	<div id={"conteneur-button"+classCompetences}>
    		<button className="button-page-lien" data-testid="button">
                <a href={project.gitLink}>github du projet</a>
            </button>
    		<button className="button-page-lien" data-testid="button">
    			<a href={project.demoLink}>demo</a>
    		</button>
    	</div>
    		<article className="project_page_pres_article">
    			<h2>{project.titrePageDéveloppees}</h2>
    			<div className="conteneur_article_image">
                {project.pictures.map((picture) => (
                    <div className="conteneur-image">
                            <img 
                                src={picture} 
                                alt={project.name} 
                                className={"img-article-horizontal-booki"} 
                                onClick={() => {setToggle(!toggle);}}
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