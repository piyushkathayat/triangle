import React, { Component } from 'react';
import { InputLabel } from './InputLabel';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './Triangle.css';

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

    isDisabled = () => _.size(this.state.sides) !== 3;

    render() {
        return (
            <form data-ts="Form" className="triangle-input">
            <fieldset>
                <InputLabel id='first' inputValue={this.handleInputValue} />
                <InputLabel id='second' inputValue={this.handleInputValue} />
                <InputLabel id='third' inputValue={this.handleInputValue} />

                <button
                    data-ts="Button"
                    className="ts-primary"
                    disabled={this.isDisabled()}
                    onClick={this.onHandleValidate}
                >
                    <span>Validate Triangle</span>
                </button>
            </fieldset>
        </form>
        )
    }
};

InputSides.propType = {
    validateSides: PropTypes.func
};

