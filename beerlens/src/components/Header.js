import React, { useState, useEffect } from 'react';
import './styles/Header.css';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown'

import {Curtain, ImageButton, HoverDropdown} from './utils';

function Header() {
    const [countries, setCountries] = useState([]);
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

    useEffect(() => {
        axios.get(`${BACKEND_URL}/countries`)
        .then(response => {
            setCountries(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching countries from backend", error);
        });
    }, [BACKEND_URL]);
    return (
    <header className="header">
        <div className="left-section">
            <div className="logo">
                <img src="/images/logo.png" alt="logo"/>
            </div>
            <input
                type="search"
                placeholder="Search any beer"
                className="search-bar"
            />
        </div>

        <div className="right-section">
            <div className="dropdown">
                <label>Ship to</label>
                <Curtain title={countries[0]} info={countries} />
            </div>

            <div className="dropdown">
                <label>Language</label>
                <Curtain title="English" info={["English", "Swedish"]} />
            </div>

            <div id="User Icon">
                {ImageButton("/login" , "/images/user_icon.png")}
            </div>
            <div id="Shopping Cart">
                {ImageButton("/cart", "/images/shopping_cart.png")}
            </div>
        </div>
    </header>
    );
}

export default Header;
