import * as React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

export default function Navigation() {
    return (
        <nav aria-label="main" className="NavMain">
            <ul>
                <li>
                    <div className="NavLink NavAbout">
                        <Link to="/">About</Link>
                    </div>
                </li>
                <li>
                    <div className="NavLink NavExperience">
                        <Link to="/qualifications">Qualifications</Link>
                    </div>
                </li>
                {/* <li>
                    <div className="NavLink NavPatterns">
                        <Link to="/patterns">Patterns</Link>
                    </div>
                </li>
                <li>
                    <div className="NavLink NavBlog">
                        <Link to="/blog">Blog</Link>
                    </div>
                </li> */}
                <li>
                    <div className="NavLink NavContact">
                        <Link to="/contact">Contact</Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
}
