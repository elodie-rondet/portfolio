import React from "react"
import { NavLink } from 'react-router-dom';
import CV from '../../media/cv.pdf';
import MenuBurger from "../../images/menu-burger.png";
import Logo from "../../images/logo.png";
import LogoGithub from "../../images/logo_github.png";
import '../../sass/header.scss';
import ImageModale from "../../images/photo.jpg";
import { useState } from 'react';
	
const Header = () => {
const [toggle, setToggle] = useState(false);
let contenu = " ";

	  
    return (
		
	<>	
	<header className={toggle ? "header_modal_open" : "header"}>
		<div className="header_box">
			<NavLink end to='/'>
            	<img className="logo" src={Logo} alt=""></img>
			</NavLink>
			<NavLink end to='/'>
			<div className="header_titles">
				<h1 className="header_titles_title">Rondet Elodie</h1>
				<h2 className="header_titles_subtitle">
				<span class="letter01">D</span>
				<span class="letter02">é</span>
				<span class="letter03">v</span>
				<span class="letter04">e</span>
				<span class="letter05">l</span>
				<span class="letter06">o</span>
				<span class="letter07">p</span>
				<span class="letter08">p</span>
				<span class="letter09">e</span>
				<span class="letter10">u</span>
				<span class="letter11">r</span>
				<span class="letter12"></span>
				<span class="letter13">w</span>
				<span class="letter14">e</span>
				<span class="letter15">b</span>
					</h2>
			</div>
			</NavLink>
			<button className="button button--outlined">
			<NavLink className="nav-link" end to={CV}>
            CV
			</NavLink>
			</button>
			<button className="button button-page"  onClick={() => {setToggle(!toggle)}}>
			
			Contact
			</button>
			<img className="logo_github" src={LogoGithub} alt=""></img>
			<div className="header_links">
				<div className="container">
					<label className="btn btn-open" htmlFor="nav">
						<img src={MenuBurger} alt="menumenu" className="menu-burger"></img>
					</label>
					<input type="checkbox" id="nav" className="nav-opener" />
					<div className="nav">
						<div className="nav-header">
						</div>
						<ul className="nav-links">
							<label className="btn btn-nav" htmlFor="nav">
							</label>
							<NavLink className="nav-link" end to='/'>
							Accueil
							</NavLink>
							<NavLink className="nav-link" end to='/Projets'>
							Projets
							</NavLink>
							<NavLink className="nav-link" end to='/Contact'>
							Contact
							</NavLink>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</header>
	{toggle && (
        <div id='fenetre_modal_open'>
		<aside id="modal_modifier_1" className="modal" >	
		<div id="wrapper_modal_1">
		<p id="close"  onClick={() => {setToggle(!toggle)}}	
		>X</p>
		<p id="titre_modal_modifier">Me Contacter</p>
		<img className="img-Contact" src={ImageModale} alt="Contact"></img>
		<form className="conteneurGallerie">
		<p className="titre-image">Titre</p>
		<input className="input-titre"></input>
		<p className="nom-message">Nom</p>
		<input className="input-message"></input>
		<p className="message">Message</p>
		<textarea id="test"></textarea>
		<button className="button-valider" type="button">Envoyer</button>
		</form>
		</div>
		</aside>
	</div> 
      )
	  }
	</>
	    )
}

export default Header;