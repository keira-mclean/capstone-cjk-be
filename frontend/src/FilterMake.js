import React, { useState } from 'react';



const FilterMake = () => {
    const [expanded, setExpanded] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const options = ['Option 1', 'Option 2', 'Option 3'];

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
            <button onClick={handleExpand}>
                {expanded ? 'Collapse' : 'Expand'}
            </button>
            {expanded && (
                <ul>
                    {options.map((option) => (
                        <li key={option}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={option}
                                    onChange={handleOptionChange}
                                    checked={selectedOptions.includes(option)}
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
