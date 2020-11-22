import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
            <Link className="navbar-brand" to="/">
                <h2 className="text-white">Google Books</h2>
            </Link>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <Link className="nav-link" to="/"><button type="button" className="btn btn-warning text-white">Search Books</button></Link>
                    </li>
                    <li className="nav-item" id="report">
                        <Link className="nav-link" to="/save"><button type="button" className="btn btn-warning text-white">Saved Books</button></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;