import React from "react";
import './Buy.css';
import Vehicle from "../Vehicle";
import VehicleList from "./VehicleList";

export default function Buy(props) {
    return (
        <>

            <h3 className="hero-subtext">There is not much going on here... yet!</h3>
            <div>
                <VehicleList />
                <Vehicle />
            </div>


        </>
    );
}
