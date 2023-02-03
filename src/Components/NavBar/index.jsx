import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import './style.css';

export default function NavBar(){
    return (
        
        <ul className="nav-list">
        <li className="nav-item">
            <Link to="/"><img src="../img/logo.jpg" alt="logo" /></Link>
            </li>
        <li className="nav-item">
            <Link to="/category/Pc">PC</Link>
            </li>
        <li className="nav-item">
            <Link to="/category/Ps">PS</Link>
            </li>
        <li className="nav-item">
            <Link to="/category/Xbox">Xbox</Link>
            </li>
            <li className="nav-item">
            <Link to="/category/Nintendo">Nintendo</Link>
            </li>
        
        <div className="widgetContainer">
            <CartWidget/>
        </div>
        </ul>
    )
}