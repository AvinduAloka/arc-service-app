// resources/js/components/SelectDropdown.jsx

import React from 'react';

const SelectDropdown = ({ options, onChange, value }) => {
    return (
        <select value={value} onChange={onChange} className="form-control py-3 mt-1">
            <option value="">Select an option</option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default SelectDropdown;
