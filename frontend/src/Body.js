import React from 'react';
import Home from './pages/Home';
import Sell from './pages/Sell';
import Buy from './pages/Buy';
import Contact from './pages/Contact';

export default function Body(props) {

    const pages = {
        //Home: <Home />,
        Sell: <Sell />
        //Buy: <Buy />,
        //Contact: <Contact />
    }

    return (
        <>
            <div>
                {pages[props.page]}
            </div>
        </>
    )
}