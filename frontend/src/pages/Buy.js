import React from "react";
import './Buy.css';
import VehicleList from "./VehicleList";
import VehicleFilter from "../VehicleFilter";

export default function Buy(props) {
    return (
        <>

            <h3 className="hero-subtext"></h3>
            <div className="body">
                <div className="sidebar">
                    <VehicleFilter />
                </div>
                <div className="main">
                    <VehicleList />
                </div>
            </div>




        </>
    );
}
