import React from "react"
import { NavLink } from 'react-router-dom';
import '../../sass/introProjets.scss';
import BookiPortfolio from "../../images/booki-portfolio.webp";
import SophieBluel from "../../images/sophie-bluel.webp";
import NinaCarducci from "../../images/nina_carducci.webp";
import Kasa from "../../images/kasa.webp";
import MonVieuxGrimoire from "../../images/mon-vieux-grimoire.webp";
import Laure from "../../images/laure_accueil.webp";
import HoaSenYoga from "../../images/hoasen-yoga-accueil.webp";
	
const IntroProjets = () => {
    return (
	<>	
<h1 className="competences_title">Projets
</h1>
<section id="projets" className="competences_section">
<ul className="projects_list">
	<li className="project_item">
    <NavLink className="nav-link" end to="Booki">
			<figure className="project_item_figure background_section">
				<img src={BookiPortfolio} alt="page d'accueil agence de voyage" className="project_item_figure_img" width="361" height="229">
                </img>
					<figcaption className="project_item_figcaption">
						<h2 className="project_item_figcaption_title">Booki</h2>
						<p className="project_item_figcaption_subtitle">Création de la page d'accueil d'une agence de voyage avec HTML & CSS</p>
					</figcaption>
			</figure>
     </NavLink>
	</li>
	<li className="project_item">
        <NavLink className="nav-link" end to="sophie-bluel">
			<figure className="project_item_figure background_section">
				<img src={SophieBluel} alt="Portfolio architecte intérieur" className="project_item_figure_img" width="361" height="229">
                </img>
					<figcaption className="project_item_figcaption">
						<h2 className="project_item_figcaption_title">Sophie Bluel</h2>
						<p className="project_item_figcaption_subtitle">Portfolio architecte intérieur</p>
					</figcaption>
			</figure>
        </NavLink>
	</li>
		<li className="project_item">
		<NavLink className="nav-link" end to="nina-carducci">
			<figure className="project_item_figure background_section">
				<img src={NinaCarducci} alt="Nina carducci - JavaScript openclassrooms" className="project_item_figure_img" width="361" height="229"></img>
				<figcaption className="project_item_figcaption">
					<h2 className="project_item_figcaption_title">Nina Carducci</h2>
					<p className="project_item_figcaption_subtitle">Création d'une application web de location immobilière</p>
				</figcaption>
			</figure>
        </NavLink>
	</li>
	<li className="project_item">
        <NavLink className="nav-link" end to="Kasa">
			<figure className="project_item_figure background_section">
				<img src={Kasa} alt="cover Kasa openclassrooms" className="project_item_figure_img" width="361" height="229"></img>
					<figcaption className="project_item_figcaption">
						<h2 className="project_item_figcaption_title">Kasa</h2>
						<p className="project_item_figcaption_subtitle">Création d'une application web de location immobilière avec React</p>
					</figcaption>
			</figure>
        </NavLink>
	</li>
	<li className="project_item">
        <NavLink className="nav-link" end to="mon-vieux-grimoire">
			<figure className="project_item_figure background_section">
				<img src={MonVieuxGrimoire} alt="cover Mon vieux grimoire openclassrooms" className="project_item_figure_img" width="361" height="229">
                </img>
				<figcaption className="project_item_figcaption">
					<h2 className="project_item_figcaption_title">Mon vieux grimoire</h2>
					<p className="project_item_figcaption_subtitle">Site de référencement et de notation de livres.  </p>
				</figcaption>
			</figure>
        </NavLink>
	</li>
	<li className="project_item">
        <NavLink className="nav-link" end to="Laure">
			<figure className="project_item_figure background_section">
				<img src={Laure} alt="cover Laure" className="project_item_figure_img" width="361" height="229">
                </img>
				<figcaption className="project_item_figcaption">
					<h2 className="project_item_figcaption_title">Laure</h2>
					<p className="project_item_figcaption_subtitle">Site Wordpress d'ateliers DIY – Conseils zéro déchet  </p>
				</figcaption>
			</figure>
        </NavLink>
	</li>
	<li className="project_item">
        <NavLink className="nav-link" end to="HoaSen Yoga">
			<figure className="project_item_figure background_section">
				<img src={HoaSenYoga} alt="cover HoaSen Yoga" className="project_item_figure_img" width="361" height="229">
                </img>
				<figcaption className="project_item_figcaption">
					<h2 className="project_item_figcaption_title">HoaSen Yoga</h2>
					<p className="project_item_figcaption_subtitle">Site Wordpress dédié à la transmission du Yoga  </p>
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