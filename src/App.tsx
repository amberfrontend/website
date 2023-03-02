import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About/About";
import Qualifications from "./pages/Qualifications/Qualifications";
import Contact from "./pages/Contact/Contact";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Header>
                    <Navigation />
                </Header>
                <Main>
                    <Routes>
                        <Route path="/" element={<About />}></Route>
                        <Route
                            path="/qualifications"
                            element={<Qualifications />}
                        ></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                    </Routes>
                </Main>
            </Router>
        </div>
    );
}

export default App;
