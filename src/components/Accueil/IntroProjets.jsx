import React from "react"
import { NavLink } from 'react-router-dom';
import '../../sass/introProjets.scss';
import BookiPortfolio from "../../images/booki_portfolio.png";
import SophieBluel from "../../images/sophie-bluel.png";
import NinaCarducci from "../../images/nina_carducci.png";
import Kasa from "../../images/kasa.png";
import MonVieuxGrimoire from "../../images/mon-vieux-grimoire.png";
import {ProjectsList} from "../ProjectsList/projectsList";
	
const IntroProjets = () => {
	const project = ProjectsList.find(project => project.name === "Booki")
    return (
	<>	
<section className="competences_section">
<h1 className="competences_title">Projets
</h1>
<ul className="projects_list">
	<li className="project_item">
    <NavLink className="nav-link" end to="Booki">
			<figure className="project_item_figure background_section">
				<img src={BookiPortfolio} alt="page d'accueil agence de voyage" className="project_item_figure_img">
                </img>
					<figcaption className="project_item_figcaption">
						<h3 className="project_item_figcaption_title">Booki</h3>
						<p className="project_item_figcaption_subtitle">Création de la page d'accueil d'une agence de voyage avec HTML & CSS</p>
					</figcaption>
			</figure>
     </NavLink>
	</li>
	<li className="project_item">
        <NavLink className="nav-link" end to="sophie-bluel">
			<figure className="project_item_figure background_section">
				<img src={SophieBluel} alt="Portfolio architecte intérieur" className="project_item_figure_img">
                </img>
					<figcaption className="project_item_figcaption">
						<h3 className="project_item_figcaption_title">Sophie Bluel</h3>
						<p className="project_item_figcaption_subtitle">Portfolio architecte intérieur</p>
					</figcaption>
			</figure>
        </NavLink>
	</li>
		<li className="project_item">
		<NavLink className="nav-link" end to="Nina Carducci">
			<figure className="project_item_figure background_section">
				<img src={NinaCarducci} alt="Nina carducci - JavaScript openclassrooms" className="project_item_figure_img"></img>
				<figcaption className="project_item_figcaption">
					<h3 className="project_item_figcaption_title">Nina Carducci</h3>
					<p className="project_item_figcaption_subtitle">Création d'une application web de location immobilière</p>
				</figcaption>
			</figure>
        </NavLink>
	</li>
	<li className="project_item">
        <NavLink className="nav-link" end to="Kasa">
			<figure className="project_item_figure background_section">
				<img src={Kasa} alt="cover Kasa openclassrooms" className="project_item_figure_img"></img>
					<figcaption className="project_item_figcaption">
						<h3 className="project_item_figcaption_title">Kasa</h3>
						<p className="project_item_figcaption_subtitle">Création d'une application web de location immobilière avec React</p>
					</figcaption>
			</figure>
        </NavLink>
	</li>
	<li className="project_item">
        <NavLink className="nav-link" end to="mon-vieux-grimoire">
			<figure className="project_item_figure background_section">
				<img src={MonVieuxGrimoire} alt="cover Mon vieux grimoire openclassrooms" className="project_item_figure_img">
                </img>
				<figcaption className="project_item_figcaption">
					<h3 className="project_item_figcaption_title">Mon vieux grimoire</h3>
					<p className="project_item_figcaption_subtitle">Site de référencement et de notation de livres.  </p>
				</figcaption>
			</figure>
        </NavLink>
	</li>
	</ul>
	</section>
	</>
	    )
}

export default IntroProjets;