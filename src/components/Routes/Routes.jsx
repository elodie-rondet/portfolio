import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Accueil";
import Page from "../../pages/Page";

const IndexRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='*' element={<Home />}/>
                <Route path='/:name' element={<Page />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;