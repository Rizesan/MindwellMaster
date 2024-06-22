import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./common/navbar";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { FormPage } from "./pages/form";
import { LoginPage } from "./pages/login";
import {Footer} from "./common/footer";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
