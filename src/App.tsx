import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

import { THEME } from "./styles/theme";
import { ThemeContext } from "./components/ThemeContext/ThemeContext";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Button from "./components/Button/Button";

import About from "./pages/About/About";
import Qualifications from "./pages/Qualifications/Qualifications";
import Contact from "./pages/Contact/Contact";

import "./App.css";

function App() {
    const [themeMode, setThemeMode] = useState(THEME.DARK);
    const [buttonText, setButtonText] = useState(THEME.DARK.COPY);

    const handleThemeToggle = () => {
        setThemeMode(themeMode === THEME.DARK ? THEME.LIGHT : THEME.DARK);
        setButtonText(
            themeMode === THEME.DARK ? THEME.LIGHT.COPY : THEME.DARK.COPY
        );
    };

    return (
        <div className="App">
            <ThemeContext.Provider value={themeMode}>
                <Router>
                    <Header>
                        <Navigation
                            themeToggleButton={
                                <Button
                                    onClick={handleThemeToggle}
                                    type={"HEADER"}
                                >
                                    {buttonText}
                                    {/* <FontAwesomeIcon icon={faLightBulb} /> */}
                                </Button>
                            }
                        />
                    </Header>
                    <Main>
                        <Routes>
                            <Route path="/" element={<About />}></Route>
                            <Route
                                path="/qualifications"
                                element={<Qualifications />}
                            ></Route>
                            <Route
                                path="/contact"
                                element={<Contact />}
                            ></Route>
                        </Routes>
                    </Main>
                </Router>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
