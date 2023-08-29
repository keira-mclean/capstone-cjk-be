import React from 'react';
import './VehicleFilter.css';
import FilterMake from "./FilterMake";
import FilterModel from './FilterModel';
import FilterYear from './FilterYear';
import FilterMileage from './FilterMileage';
import FilterPrice from './FilterPrice';

export default function VehicleFilter({ setSelectedOptions, setSelectedModelOptions, setSelectedYearOptions, setMileageOptions, setPriceOptions }) {
    return (
        <>
            <div >
                <div class="search-control search-control--filter hzn-typography--headline-1">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                    Filter
                </div>
                <FilterMake setSelectedOptions={setSelectedOptions} />
                <FilterModel setSelectedModelOptions={setSelectedModelOptions} />
                <FilterYear setSelectedYearOptions={setSelectedYearOptions} />
                <FilterMileage setMileageOptions={setMileageOptions} />
                <FilterPrice setPriceOptions={setPriceOptions} />
            </div>
        </>
    )
}
