import React, { useState } from "react";
import './Buy.css';
import VehicleList from "./VehicleList";
import VehicleFilter from "../VehicleFilter";

export default function Buy(props) {
    const [selectedMakes, setSelectedMakes] = useState([]);
    const [selectedModels, setSelectedModels] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);


    return (
        <>
            <h3 className="hero-subtext"></h3>
            <div className="body">
                <div className="sidebar">
                    <VehicleFilter setSelectedOptions={setSelectedMakes} setSelectedModelOptions={setSelectedModels} setSelectedYearOptions={setSelectedYears} />
                </div>
                <div className="main">
                    <VehicleList selectedMakes={selectedMakes} selectedModels={selectedModels} selectedYears={selectedYears} />
                </div>
            </div>
        </>
    );
}
