import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        
        <Router>
            <Routes>
                <Route path="/" element={<App/>} />
               </Routes>
        </Router>
    </React.StrictMode>

);
    


