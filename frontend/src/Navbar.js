import React from 'react';
import './Navbar.css';
export default function Navbar(props) {

    return (

        <nav>
            <img src="https://github.com/keira-mclean/capstone-cjk-be/blob/main/frontend/public/logo2.jpg?raw=true" alt="Logo"></img>
            <ul>
                <li>
                    <a href="https://www.google.com" onClick={(event) => { props.setPage("Home"); event.preventDefault(); }}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com" onClick={(event) => { props.setPage("Buy"); event.preventDefault(); }}>
                        Buy
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com" onClick={(event) => { props.setPage("Sell"); event.preventDefault(); }}>
                        Sell
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com" onClick={(event) => { props.setPage("Contact"); event.preventDefault(); }}>
                        Contact Us
                    </a>
                </li>
            </ul>
        </nav>



        //     <nav className='container'>
        //         <div className="fluid">
        //         <div className="site-title">The Lot</div>
        //         <ul>
        //             <li>
        //                 <a href="https://www.google.com" onClick={(event) => { props.setPage("Home"); event.preventDefault(); }}>
        //                     Home
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="https://www.google.com" onClick={(event) => { props.setPage("Buy"); event.preventDefault(); }}>
        //                     Buy
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="https://www.google.com" onClick={(event) => { props.setPage("Sell"); event.preventDefault(); }}>
        //                     Sell
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="https://www.google.com" onClick={(event) => { props.setPage("Contact"); event.preventDefault(); }}>
        //                     Contact Us
        //                 </a>
        //             </li>
        //         </ul>
        //         </div>
        //     </nav>
        // </>

    )
};