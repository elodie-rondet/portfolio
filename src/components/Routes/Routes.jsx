import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Accueil";
import Booki from "../../pages/Booki";
import SophieBluel from "../../pages/SophieBluel";
import NinaCarducci from "../../pages/NinaCarducci";
import Kasa from "../../pages/Kasa";

const IndexRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='*' element={<Home />}/>
                <Route path='/:name' element={<Booki />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;