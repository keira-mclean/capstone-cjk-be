import React, { useState, useEffect } from 'react';
import "./Filter.css"

const FilterMake = ({ setSelectedOptions }) => {
    const [expanded, setExpanded] = useState(false);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:5000/api/autos/makes", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setResponse(await res.json());
        }
        fetchData();
    }, []);

    if (!response) return null;

    const options = response;

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    const handleOptionChange = (event) => {
        const { value } = event.target;
        setSelectedOptions((prevSelectedOptions) =>
            prevSelectedOptions.includes(value)
                ? prevSelectedOptions.filter((option) => option !== value)
                : [...prevSelectedOptions, value]
        );
    };

    return (
        <div>
            <button className="filter-button" onClick={handleExpand}>
                {expanded ? 'Collapse by Make' : 'Filter by Make'}
            </button>
            {expanded && (
                <ul className="makeList">
                    {options.map((option) => (
                        <li key={option} className="make">
                            <label>
                                <input
                                    type="checkbox"
                                    value={option}
                                    onChange={handleOptionChange}
                                />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FilterMake;
