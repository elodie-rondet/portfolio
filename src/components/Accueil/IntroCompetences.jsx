import React from "react"
import '../../sass/introCompetences.scss';
import Javascript from "../../images/javascript.png";
import CSharp from "../../images/c_sharp.png";
import Photoshop from "../../images/photoshop.png";
import Wordpress from "../../images/wordpress.png";
import Reactlogo from "../../images/react.png";
	
const IntroCompetences = () => {

    return (
        <>	
        <section className="competences_section">
		<h1 className="competences_title">Compétences, CMS et logiciels maitrisés</h1>
        <div className="img_competences">
            <img src={Javascript} alt="" id="competences_img_5" className="competences_img"></img>
            <img src={CSharp} alt="" className="competences_img"></img>
            <img src={Photoshop} alt="" id="competences_img_6" className="competences_img"></img>
            <img src={Wordpress} alt="" id="competences_img_1" className="competences_img"></img>
            <img src={Reactlogo} alt="" id="competences_img_7" className="competences_img"></img>
		</div>
	    </section>
        </>
    )
}

export default IntroCompetences;