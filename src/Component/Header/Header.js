import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

export default function Header(props) {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <a className="navbar-brand" href="#">
                <img className="w-100 h-100" style={{borderRadius:'10px'}} src="/img/logo.png" alt="covid19"></img>
            </a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ml-auto mr-auto mt-2 mt-lg-0">
                    <li className="nav-item mx-3">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>                    
                    <li className="nav-item mx-3">
                        <NavLink className="nav-link" to="/">About</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                        <NavLink className="nav-link" to="/">Contact</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                        <NavLink className="nav-link" to="/">Application</NavLink>
                    </li>
                    
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    
                </form>
            </div>
        </nav>

    )
}
