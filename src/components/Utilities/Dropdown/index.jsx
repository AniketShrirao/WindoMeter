import React, { useEffect, useState } from 'react';

import ReactSelect from 'react-select';
import { StyledSelect } from './Dropdown.styled';

const Dropdown = ({ options,placeholder }) => {

    const [selectValue, setSelectValue] = useState('');

    const filterChangeHandler = (e) => {
        console.log(e);
    }

    return (
        <StyledSelect>
            <ReactSelect
                onChange={filterChangeHandler}
                options={options}
                isSearchable={false}
                className={`value-select`}
                classNamePrefix='value-select'
                defaultValue='All'
                placeholder={placeholder}
                value={options.find(obj => obj.value === selectValue)}
            />
        </StyledSelect>
    )
}

export default Dropdown;