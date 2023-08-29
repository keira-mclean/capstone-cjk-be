import React, { useState } from 'react';
import './Navbar.css';
export default function Navbar(props) {
    const { page, setPage } = props;
    const [tab, setTab] = useState("Home");

    return (
        <nav>
            <img src="https://github.com/keira-mclean/capstone-cjk-be/blob/main/frontend/public/logo2.jpg?raw=true" alt="Logo"></img>
            <ul>
                <li>
                    <a href="https://www.google.com" onClick={(event) => { setPage("Home"); setTab("Home"); event.preventDefault(); }} className={tab === "Home" ? "active" : ""}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com" onClick={(event) => { setPage("Buy"); setTab("Buy"); event.preventDefault(); }} className={tab === "Buy" ? "active" : ""}>
                        Buy
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com" onClick={(event) => { setPage("Sell"); setTab("Sell"); event.preventDefault(); }} className={tab === "Sell" ? "active" : ""}>
                        Sell
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com" onClick={(event) => { setPage("Contact"); setTab("Contact"); event.preventDefault(); }} className={tab === "Contact" ? "active" : ""}>
                        Contact Us
                    </a>
                </li>
            </ul>
        </nav>
    )
};
