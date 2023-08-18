import React from "react"
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Intro from "../components/Accueil/Intro";
import IntroCompetences from "../components/Accueil/IntroCompetences";
import IntroProjets from "../components/Accueil/IntroProjets";
import '../sass/main.scss';
import { useState } from 'react';

const Accueil = () => {
    let page = "page";
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <Header/>
            <Intro page ={!toggle} />
            <IntroCompetences />
            <IntroProjets />
            <Footer />
        </>
    )
}

export default Accueil;