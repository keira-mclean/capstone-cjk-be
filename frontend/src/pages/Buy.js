import React, { useState } from "react";
import './Buy.css';
import VehicleList from "./VehicleList";
import VehicleFilter from "../VehicleFilter";

export default function Buy(props) {
    const [selectedMakes, setSelectedMakes] = useState([]);

    return (
        <>

            <h3 className="hero-subtext"></h3>
            <div className="body">
                <div className="sidebar">
                    <VehicleFilter setSelectedOptions={setSelectedMakes} />
                </div>
                <div className="main">
                    <VehicleList selectedMakes={selectedMakes} />
                </div>
            </div>




        </>
    );
}
