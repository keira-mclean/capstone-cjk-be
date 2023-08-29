import React from 'react';
import './Navbar.css';

export default function Navbar(props) {
    const { page, setPage } = props;
    console.log('Current value of props:', props.page);

    return (
        <nav>
            <img src="https://github.com/keira-mclean/capstone-cjk-be/blob/main/frontend/public/logo2.jpg?raw=true" alt="Logo"></img>
            <ul>
                <li>
                    <a href="https://www.google.com" onClick={(event) => { setPage("Home"); event.preventDefault(); }} className={page === "Home" ? "active" : ""}>
                        HOME
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com" onClick={(event) => { setPage("Buy"); event.preventDefault(); }} className={page === "Buy" ? "active" : ""}>
                        BUY
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com" onClick={(event) => { setPage("Sell"); event.preventDefault(); }} className={page === "Sell" ? "active" : ""}>
                        SELL
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com" onClick={(event) => { setPage("Contact"); event.preventDefault(); }} className={page === "Contact" ? "active" : ""}>
                        CONTACT US
                    </a>
                </li>
            </ul>
        </nav>
    )
};
