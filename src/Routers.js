import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";

const Routers = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Chat />} />
        </Routes>
        </BrowserRouter>
    )
}
export default Routers;