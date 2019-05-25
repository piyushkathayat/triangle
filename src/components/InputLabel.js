import React from 'react';
import PropTypes from 'prop-types';

export const InputLabel = (props) => {
    const inputHandler = (event) => {
        props.inputValue(event.target.id, event.target.value);
    }
    return (
        <label>
            <span>{`${props.id} Side`}</span>
            <input
                type="number"
                id={props.id}
                placeholder='enter a number'
                onChange={inputHandler}
            />
        </label>
    )
};

InputLabel.propType = {
    id: PropTypes.string.isRequired,
    inputValue: PropTypes.objectOf(PropTypes.string, PropTypes.string)
};
