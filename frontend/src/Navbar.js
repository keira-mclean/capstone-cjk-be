import React from 'react';
import './Navbar.css';
export default function Navbar(props) {

    return (
        <>
            <nav className='container'>
                <div className="site-title">The Lot</div>
                <ul>
                    <li>
                        <a href="https://www.google.com" onClick={(event) => { props.setPage("Home"); event.preventDefault(); }}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" onClick={(event) => { props.setPage("Parks"); event.preventDefault(); }}>
                            Buy
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" onClick={(event) => { props.setPage("Mountains"); event.preventDefault(); }}>
                            Sell
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" onClick={(event) => { props.setPage("Mountains"); event.preventDefault(); }}>
                            Contact Us
                        </a>
                    </li>
                </ul>
            </nav>
        </>

    )
};