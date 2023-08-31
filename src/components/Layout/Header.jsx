import React from "react"
import { NavLink } from 'react-router-dom';
import CV from '../../media/cv.pdf';
import MenuBurger from "../../images/menu-burger.webp";
import LogoGithub from "../../images/logo_github.webp";
import Linkedin from "../../images/linkedin.webp";
import '../../sass/header.scss';
import ImageModale from "../../images/test-visuel-portfolio.webp";
import Fermeture from "../../images/fermeture.webp";
import { useState,useEffect } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
	
const Header = (classHeader) => {
const [toggle, setToggle] = useState(false);
const [close, setClose] = useState(true);
const form = useRef();


useEffect(() => emailjs.init("iFaNbPvcmFu0LXYpu"), []);
 const sendEmail = (e) => {
   e.preventDefault();
let email = document.querySelector("input.input-message").value;
let nom = document.querySelector("input.input-titre").value;
let content = document.querySelector("textarea#test").value;
   emailjs.send('service_1kd2zrx', 'template_pvvkowk', {
	name: nom,
	 recipient: email,
	 content: content,
   })
     .then((result) => {
		alert("Votre message a bien été envoyé")
     }, (error) => {
         console.log(error)
     });
 };

	  
    return (
		
	<>	
	<title>Rondet Elodie</title>
	<header className={toggle || classHeader ? "header_modal_open" : "header"}>
		<div className="header_box">
			<NavLink end to='/'>
			<div className="header_titles">
				<h1 className="header_titles_title">
				<span className="letter">R</span>ondet <span className="letter">E</span>lodie
				</h1>
				<h2 className="header_titles_subtitle">
				<span className="letter">D</span>éveloppeur <span className="letter">w</span>eb
					</h2>
			</div>
			</NavLink>
			<button className="button button--outlined">
			<a className="nav-link" href={CV} download="cv.pdf">CV</a>
			</button>
			<button className="button button-page"  onClick={() => {setToggle(!toggle)}}>
			
			Contact
			</button>
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
							<NavLink  key="accueil" className="nav-link" end to='/' onClick={() => {setClose(!close)}}>
							Accueil
							</NavLink>
							<NavLink key="projets" className="nav-link" href="#projets" end to='/#projets'>
							Projets
							</NavLink>
							<NavLink key="contact" className="nav-link" onClick={() => {setClose(!close)
							setToggle(!toggle)}
						}>
							Contact
							</NavLink>
							<div className="conteneur-liens-sociaux">
								<NavLink key="git" className="nav-link" target="_blank" to="https://github.com/elodie-rondet/" name="github" alt="github" >
									<img className="logo_github" src={LogoGithub} alt="logo" width="246" height="233"></img>
								</NavLink>
								<NavLink key="linkedin" className="nav-link" target="_blank" to="https://www.linkedin.com/in/elodie-rondet-337653121/" name="github" alt="github" >
									<img className="logo_github" src={Linkedin} alt="logo" width="246" height="262"></img>
								</NavLink>
							</div>
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
			<img className="img-Contact" src={ImageModale} alt="Contact"></img>
			<form id="conteneurGallerie" className="conteneurGallerie" ref={form}>
			<p className="titre-image">Titre</p>
			<input className="input-titre" required></input>
			<p className="nom-message">Nom</p>
			<input className="input-message" required></input>
			<p className="message">Message</p>
			<textarea id="test" required></textarea>
			<button className="button-valider" type="button"  ref={form} onClick={(e) => {
			
			if (document.querySelector('.input-message').value !== ''
			&& document.querySelector('#test').value !== ''
			&& document.querySelector('.input-titre').value !== '') {
			sendEmail(e);
			}
			else
			 alert('Veuillez remplir tous les champs')
			}}>Envoyer</button>
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