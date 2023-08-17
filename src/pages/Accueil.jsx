import React from "react"
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Intro from "../components/Accueil/Intro";
import IntroCompetences from "../components/Accueil/IntroCompetences";
import IntroProjets from "../components/Accueil/IntroProjets";
import ImgHeader from "../images/fond-test.jpg";
import '../sass/main.scss';

const Accueil = () => {
    return (
        <>
            <Header />
            <Intro />
            <IntroCompetences />
            <IntroProjets />
            <Footer />
        </>
    )
}

export default Accueil;