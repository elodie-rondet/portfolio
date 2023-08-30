import React from "react"
import '../../sass/introCompetences.scss';
import LogoFront from "../../images/logo-frontend.webp";
import LogoBack from "../../images/logo-backend.webp";
import LogoOutil from "../../images/logo-outil.webp";
	
const IntroCompetences = () => {

    return (
        <>	
         <h1 className="competences_titre">Compétences</h1>
  
     <section className="competences">
     <div className="conteneur">
        <img src={LogoFront} alt="Logo Front" className="competences_img"></img>
        <div className="competences_accueil">
		<h1 className="competences_title">Front-End</h1>
        <ul className="technologies-list">
            <li className="techno-item">HTML</li>
            <li className="techno-item">CSS</li>
            <li className="techno-item">SASS</li>
            <li className="techno-item">Javascript</li>
            <li className="techno-item">React</li>
            <li className="techno-item">Wordpress</li>
        </ul>
	    </div>
        </div>
        
        <div className="conteneur">
        <img src={LogoBack} alt="Logo Backend" className="competences_img"></img>
        <div className="competences_accueil">
		<h1 className="competences_title">Back-End</h1>
        <ul className="technologies-list">
            <li className="techno-item">NodeJS</li>
            <li className="techno-item">PHP</li>
            <li className="techno-item">C#</li>
            <li className="techno-item">Javascript</li>
            <li className="techno-item">MongoDB</li>
            <li className="techno-item">MySql</li>
            <li className="techno-item">Sql Server</li>
        </ul>
        </div>
        </div>
        <div id="conteneur-outil" className="conteneur">
        <img id="logo-outil" src={LogoOutil} alt="Logo Outil" className="competences_img"></img>
        <div className="competences_accueil">
        <h1 className="competences_title">Outils maitrisés</h1>
        <ul className="technologies-list">
            <li className="techno-item">Visual Studio Code</li>
            <li className="techno-item">Visual Studio</li>
            <li className="techno-item">Github</li>
            <li className="techno-item">SVN</li>
        </ul>
        </div>
        </div>

        </section>
        </>
    )
}

export default IntroCompetences;