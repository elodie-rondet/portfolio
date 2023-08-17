import React from "react"
import '../../sass/introCompetences.scss';
import LogoFront from "../../images/logo-frontend.png";
import LogoBack from "../../images/logo-backend.png";
	
const IntroCompetences = () => {

    return (
        <>	
     <section class="competences">
     <div className="conteneur">
        <img src={LogoFront} alt="Logo Front" className="competences_img"></img>
        <div className="competences_accueil">
		<h1 className="competences_title">Front-End</h1>
        <ul class="technologies-list">
            <li class="techno-item">HTML</li>
            <li class="techno-item">CSS</li>
            <li class="techno-item">SASS</li>
            <li class="techno-item">Javascript</li>
            <li class="techno-item">React</li>
            <li class="techno-item">Wordpress</li>
        </ul>
	    </div>
        </div>
        
        <div className="conteneur">
        <img src={LogoBack} alt="Logo Backend" className="competences_img"></img>
        <div className="competences_accueil">
		<h1 className="competences_title">Back-End</h1>
        <ul class="technologies-list">
            <li class="techno-item">NodeJS</li>
            <li class="techno-item">PHP</li>
            <li class="techno-item">C#</li>
            <li class="techno-item">Javascript</li>
            <li class="techno-item">MongoDB</li>
            <li class="techno-item">MySql</li>
            <li class="techno-item">Sql Server</li>
        </ul>
        </div>
        </div>
        <div className="competences_accueil">
        <h1 className="competences_title">Outils maitrisés</h1>
        <ul class="technologies-list">
            <li class="techno-item">Visual Studio Code</li>
            <li class="techno-item">Visual Studio</li>
            <li class="techno-item">Github</li>
            <li class="techno-item">SVN</li>
        </ul>
        </div>

        </section>
        </>
    )
}

export default IntroCompetences;