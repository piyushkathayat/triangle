import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class InputLabel extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    };
    
    inputHandler = (event) => {
        this.setState({value: event.target.value})
        this.props.inputValue(event.target.id, event.target.value);
    };
    
    render() {
        return (
            <label>
                <span>{`${this.props.id} Side`}</span>
                <input
                    type="number"
                    id={this.props.id}
                    value={this.state.value}
                    placeholder='Enter a number'
                    onChange={this.inputHandler}
                />
            </label>
        )
    }
};

InputLabel.propType = {
    id: PropTypes.string.isRequired,
    inputValue: PropTypes.objectOf(PropTypes.string, PropTypes.string)
};
