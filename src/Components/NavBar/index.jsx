import React from "react";
import CartWidget from "../CartWidget";
import './style.css';

export default function NavBar(){
    return (
        
        <ul className="nav-list">
        <li>
            <a href="#pc" className="nav-item">PC</a>
            </li>
        <li>
            <a href="#ps" className="nav-item">PS</a>
            </li>
        <li>
            <a href="#xbox" className="nav-item">XBOX</a>
            </li>
        <li>
            <a href="#nintendo" className="nav-item">Nintendo</a>
            </li>
        
        <div className="widgetContainer">
            <CartWidget/>
        </div>
        </ul>
    )
}