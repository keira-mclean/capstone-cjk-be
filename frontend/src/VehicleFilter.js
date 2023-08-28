import React from 'react';
import './VehicleFilter.css';
import FilterMake from "./FilterMake";

export default function VehicleFilter({ setSelectedOptions }) {
    return (
        <>
            <div >
                <FilterMake setSelectedOptions={setSelectedOptions} />
            </div>
        </>
    )
}
