import React from "react";
import { Route, Routes } from "react-router-dom";
import Katalog from "./component/Home/Katalog";

const MainRoutes = () => {
    <Routes>
        <Route path="/katalog" element={<Katalog />} />
    </Routes>;
};

export default MainRoutes;
