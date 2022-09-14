import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../home";
import Items from "../pages/items";
import Dashboard from "../pages/dashboard";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} />
                <Route path='/pages/items' element={<Items />} />
                <Route path='/pages/dashboard' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;