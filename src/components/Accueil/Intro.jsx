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
                <span class="letter16">B</span>
				<span class="letter17">i</span>
				<span class="letter18">e</span>
				<span class="letter19">n</span>
				<span class="letter20">v</span>
				<span class="letter21">e</span>
				<span class="letter22">n</span>
				<span class="letter23">u</span>
				<span class="letter24">e</span>
				<span class="letter25"></span>
				<span class="letter26">s</span>
				<span class="letter27">u</span>
				<span class="letter28">r</span>
                <span class="letter01"></span>
				<span class="letter02">m</span>
				<span class="letter03">o</span>
				<span class="letter04">n</span>
				<span class="letter05"></span>
				<span class="letter06">p</span>
				<span class="letter07">o</span>
				<span class="letter08">r</span>
				<span class="letter09">t</span>
				<span class="letter10">f</span>
				<span class="letter11">o</span>
				<span class="letter12">l</span>
				<span class="letter13">i</span>
				<span class="letter14">o</span>
				<span class="letter15">!</span>
                
                        </h3>
					<p className="intro_titles_subtitle"><span class="paragraphe1">Après avoir travaillé 5 ans en tant que technicienne informatique, 
                    j'ai choisi de me reconvertir dans un domaine qui me passionne : le développement web.</span></p>
				<p className="intro_titles_subtitle"><span class="paragraphe2">La curiosité, la créativité, la persévérance sont des moteurs pour moi et m'ont donné envie d'avancer dans ce métier. Vous pouvez consulter ci-dessous mes projets réalisés avec OpenClassRooms, bonne visite ! 
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
                <span class="letter16">P</span>
				<span class="letter17">r</span>
				<span class="letter18">o</span>
				<span class="letter19">j</span>
				<span class="letter20">e</span>
				<span class="letter21">t</span>
				<span class="letter22">:</span>
				<span class="letter25">{project.name === "mon-vieux-grimoire" || project.name === "sophie-bluel" ? TitreProjet :project.name} </span>
                
                        </h3>
			</article>
	</section>
        </>
        )
    )

}

export default Intro;