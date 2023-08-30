import React, { useState } from 'react';
import "./Filter.css"

const FilterMileage = ({ setMileageOptions }) => {
    const [expanded, setExpanded] = useState(false);
    const [minMileage, setMinMileage] = useState('');
    const [maxMileage, setMaxMileage] = useState('');

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    const handleMinMileageChange = (event) => {
        const { value } = event.target;
        setMinMileage(value);
        setMileageOptions((prevOptions) => ({ ...prevOptions, minMileage: value }));
    };

    const handleMaxMileageChange = (event) => {
        const { value } = event.target;
        setMaxMileage(value);
        setMileageOptions((prevOptions) => ({ ...prevOptions, maxMileage: value }));
    };

    return (
        <div>
            <button className="filter-button" onClick={handleExpand}>
                {expanded ? 'Collapse by Mileage' : 'Filter by Mileage'}
            </button>
            {expanded && (
                <div>
                    <label>
                        Minimum Mileage:
                        <br />
                        <input
                            type="number"
                            value={minMileage}
                            onChange={handleMinMileageChange}
                        />
                    </label>
                    <br />
                    <label>
                        Maximum Mileage:
                        <br />
                        <input
                            type="number"
                            value={maxMileage}
                            onChange={handleMaxMileageChange}
                        />
                    </label>
                </div>
            )}
        </div>
    );
};

export default FilterMileage;
