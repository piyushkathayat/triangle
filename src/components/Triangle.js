import React, { Component } from 'react';
import InputSides from './InputSides';
import ResultPanel from './ResultPanel';
import { validateSides, getTriangleType, objectToArray } from '../utils/common';
import './Triangle.css'

export default class Triangle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            result: null
        };
    }

    validateSides = (sidesObject) => {
        const sides = objectToArray(sidesObject);
        const validate = validateSides(sides);
        
        if (validate.isValid) {
            const result = getTriangleType(sides);
            this.setState({result, error: null});
        } else {
            this.setState({error: validate, result: null});
        }
    };

    render() {
        return (
            <div className="triangle-panel">
                <InputSides validateSides={this.validateSides}/>
                <ResultPanel result={this.state.result} error={this.state.error} />
            </div>
        )
    }
}
