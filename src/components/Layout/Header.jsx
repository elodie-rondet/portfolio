import React from "react"
import { NavLink } from 'react-router-dom';
import CV from '../../media/cv.pdf';
import MenuBurger from "../../images/menu-burger.png";
import Logo from "../../images/logo.png";
import LogoGithub from "../../images/logo_github.png";
import '../../sass/header.scss';
import ImageModale from "../../images/photo.jpg";
import Fermeture from "../../images/fermeture.png";
import { useState } from 'react';
	
const Header = (classHeader) => {
const [toggle, setToggle] = useState(false);
const [close, setClose] = useState(true);
let contenu = " ";

	  
    return (
		
	<>	
	<header className={toggle || classHeader ? "header_modal_open" : "header"}>
		<div className="header_box">
			<NavLink end to='/'>
			<div className="header_titles">
				<h1 className="header_titles_title">
				<span class="letter">R</span>ondet <span class="letter">E</span>lodie
				</h1>
				<h2 className="header_titles_subtitle">
				<span class="letter">D</span>éveloppeur <span class="letter">w</span>eb
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
			<NavLink className="nav-link" target="_blank" to="https://github.com/elodie-rondet/">
			<img className="logo_github" src={LogoGithub} alt=""></img>
			</NavLink>
			<div className="header_links">
				<div className="container">
					<label className="btn btn-open" htmlFor="nav">
						<img src={MenuBurger} alt="menumenu" className="menu-burger" onClick={() => {setClose(!close)
					}
					
					}></img>
					</label>
					<div className={close  ? "nav hide" :"nav"}>
						<div className="nav-header">
						<img className="close" src={Fermeture} alt="" onClick={() => {setClose(!close)}}></img>
						</div>
						<ul className="nav-links">
							<label className="btn btn-nav" htmlFor="nav">
							</label>
							<NavLink className="nav-link" end to='/' onClick={() => {setClose(!close)}}>
							Accueil
							</NavLink>
							<NavLink className="nav-link" end to='/Projets'>
							Projets
							</NavLink>
							<NavLink className="nav-link" onClick={() => {setClose(!close)
							setToggle(!toggle)}
						}>
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