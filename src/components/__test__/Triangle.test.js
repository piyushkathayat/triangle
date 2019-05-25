import React from 'react';
import { shallow } from 'enzyme';
import { TRIANGLE_RULE, SCALENE_TRIANGLE } from '../../constants/common';
import InputSides from '../../components/InputSides';
import ResultPanel from '../../components/ResultPanel';
import Triangle from '../../components/Triangle';

describe('Render Triangle', () => {
    it('Should render InputSides', () => {
        expect(InputSides).toBeDefined();
    }) ;

    it('Should render ResultPanel', () => {
        expect(ResultPanel).toBeDefined();
    }) ;

    it('Should have initial state null', () => {
        const component = shallow(<Triangle/>);
        expect(component.state('result')).toEqual(null);
        expect(component.state('error')).toEqual(null);
    });
});

describe('Test validateSides', () => {
    const component = shallow(<Triangle/>);

    it('Should update error', () => {
        const sidesObject = {'first': 1, 'second': 2, 'third': 3};
        component.instance().validateSides(sidesObject);
        expect(component.state('result')).toEqual(null);
        expect(component.state('error')).toEqual({isValid: false, message: TRIANGLE_RULE});
    });

    it('Should update result', () => {
        const sidesObject = {'first': 3, 'second': 5, 'third': 7};
        component.instance().validateSides(sidesObject);
        expect(component.state('result')).toEqual(SCALENE_TRIANGLE);
        expect(component.state('error')).toEqual(null);
    });
})