import React from "react"
import '../../sass/intro.scss';
import '../../sass/header.scss';
import { ProjectsList  } from '../../components/ProjectsList/projectsList';
import { useParams } from 'react-router-dom';
	
const Intro = (page) => {
    const { name } = useParams()
    const project = ProjectsList.find(project => project.name === name);
    let TitreProjet = "";
    if (project !== undefined) {
    if (project.name === "mon-vieux-grimoire")
    TitreProjet = "Mon Vieux Grimoire";
    else if (project.name === "sophie-bluel")
    TitreProjet = "Sophie Bluel";
    }
    return (
        project === undefined ? (
        <>	
        <section className="intro background_section">
			<article className="intro_titles">
					<h3>
                <span className="letter16">B</span>
				<span className="letter17">i</span>
				<span className="letter18">e</span>
				<span className="letter19">n</span>
				<span className="letter20">v</span>
				<span className="letter21">e</span>
				<span className="letter22">n</span>
				<span className="letter23">u</span>
				<span className="letter24">e</span>
				<span className="letter25"></span>
				<span className="letter26">s</span>
				<span className="letter27">u</span>
				<span className="letter28">r</span>
                <span className="letter01"></span>
				<span className="letter02">m</span>
				<span className="letter03">o</span>
				<span className="letter04">n</span>
				<span className="letter05"></span>
				<span className="letter06">p</span>
				<span className="letter07">o</span>
				<span className="letter08">r</span>
				<span className="letter09">t</span>
				<span className="letter10">f</span>
				<span className="letter11">o</span>
				<span className="letter12">l</span>
				<span className="letter13">i</span>
				<span className="letter14">o</span>
				<span className="letter15">!</span>
                
                        </h3>
					<p className="intro_titles_subtitle"><span className="paragraphe1">Après avoir travaillé 5 ans en tant que technicienne informatique, 
                    j'ai choisi de me reconvertir dans un domaine qui me passionne : le développement web.</span></p>
				<p className="intro_titles_subtitle"><span className="paragraphe2">La curiosité, la créativité, la persévérance sont des moteurs pour moi et m'ont donné envie d'avancer dans ce métier. Vous pouvez consulter ci-dessous mes projets réalisés avec OpenClassRooms, bonne visite ! 
                </span>
                </p>
			</article>
	</section>
        </>
    ) :
    (
<>	
        <section className="intro background_section">
			<article className="intro_titles_page">
					<h3>
                <span className="letter16">P</span>
				<span className="letter17">r</span>
				<span className="letter18">o</span>
				<span className="letter19">j</span>
				<span className="letter20">e</span>
				<span className="letter21">t</span>
				<span className="letter22">:</span>
				<span className="letter25">{project.name === "mon-vieux-grimoire" || project.name === "sophie-bluel" ? TitreProjet :project.name} </span>
                
                        </h3>
			</article>
	</section>
        </>
        )
    )

}

export default Intro;