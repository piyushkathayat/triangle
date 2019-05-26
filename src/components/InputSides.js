import React, { Component } from 'react';
import { InputLabel } from './InputLabel';
import { VALIDATE_BUTTON_LABEL } from '../constants/common';
import PropTypes from 'prop-types';
import { size } from 'lodash';
import './InputSides.css';

export default class InputSides extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sides: {}
        };
    };

    onHandleValidate = () => { 
        this.props.validateSides(this.state.sides);
    };

    handleInputValue = (id, input) => {
        const { sides } = this.state;
        if (input !== '') {
            sides[id] = input;
        } else {
            delete sides[id];
        }
        this.setState(sides);
    };
    
    handleOnEnter = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            this.props.validateSides(this.state.sides);
        }
    }

    isDisabled = () => size(this.state.sides) !== 3;

    render() {
        return (
            <form data-ts="Form" className="triangle-input">
            <fieldset>
                <InputLabel id='first' inputValue={this.handleInputValue} />
                <InputLabel id='second' inputValue={this.handleInputValue} />
                <InputLabel id='third' inputValue={this.handleInputValue} />
                <div className="validation-buttons">
                    <button
                        data-ts="Button"
                        className="ts-primary"
                        disabled={this.isDisabled()}
                        onKeyDown={this.handleOnEnter}
                        onClick={this.onHandleValidate}
                    >
                        <span>{VALIDATE_BUTTON_LABEL}</span>
                    </button>
	            </div>
            </fieldset>
        </form>
        )
    }
};

InputSides.propType = {
    validateSides: PropTypes.func
};
