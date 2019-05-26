import React from 'react';
import { shallow, mount } from 'enzyme';
import InputSides from '../InputSides';

describe('Test InputSides', () => {
    it('Should render a form with inputLabel and validate button', () => {
        const wrapper = shallow(<InputSides />);
        expect(wrapper.find('form')).toHaveLength(1);
        expect(wrapper.find('fieldset')).toHaveLength(1);
        expect(wrapper.find('#first').length).toEqual(1);
        expect(wrapper.find('#second').length).toEqual(1);
        expect(wrapper.find('#third').length).toEqual(1);
        expect(wrapper.find('div.validation-buttons')).toHaveLength(1);
    });
 
    it('Should update the state on response from inputLabel', () => {
        const component = shallow(<InputSides />);
        // on receive a valid value
        component.instance().handleInputValue('first', 2);
        expect(component.state('sides')).toEqual({'first':2});

        // on receive empty value
        component.instance().handleInputValue('first', '');
        expect(component.state('sides')).toEqual({});
    });
});
