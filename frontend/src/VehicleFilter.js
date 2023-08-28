import React from 'react';
import './VehicleFilter.css';
import FilterMake from "./FilterMake";

export default function VehicleFilter() {

    return (
        <>
            <div >
                <FilterMake options={options} />
            </div>


        </>
    )
}

