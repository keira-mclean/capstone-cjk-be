import React, { useState } from 'react';
import "./Filter.css"

const FilterPrice = ({ setPriceOptions }) => {
    const [expanded, setExpanded] = useState(false);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    const handleMinPriceChange = (event) => {
        const { value } = event.target;
        setMinPrice(value);
        setPriceOptions((prevOptions) => ({ ...prevOptions, minPrice: value }));
    };

    const handleMaxPriceChange = (event) => {
        const { value } = event.target;
        setMaxPrice(value);
        setPriceOptions((prevOptions) => ({ ...prevOptions, maxPrice: value }));
    };

    return (
        <div>
            <button onClick={handleExpand}>
                {expanded ? 'Collapse by Price' : 'Filter by Price'}
            </button>
            {expanded && (
                <div>
                    <label>
                        Minimum Price:
                        <br />
                        <input
                            type="number"
                            value={minPrice}
                            onChange={handleMinPriceChange}
                        />
                    </label>
                    <br />
                    <label>
                        Maximum Price:
                        <br />
                        <input
                            type="number"
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                        />
                    </label>
                </div>
            )}
        </div>
    );
};

export default FilterPrice;
