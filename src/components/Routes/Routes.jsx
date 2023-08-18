import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Accueil";
import Booki from "../../pages/Booki";

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