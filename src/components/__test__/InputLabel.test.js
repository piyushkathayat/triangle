import React from 'react';
import { shallow } from 'enzyme';
import { InputLabel } from '../InputLabel';

describe('Render InputLabel', () => {
    it('Should render InputLabel', () => {
        expect(InputLabel).toBeDefined();
    });

    it('Should render label with input', () => {
        const wrapper = shallow(<InputLabel />);
        expect(wrapper.find('label')).toHaveLength(1);
        expect(wrapper.find('input')).toHaveLength(1);
        expect(wrapper.find('span')).toHaveLength(1);
    });

    it('Should update value', () => {
        const event = {target: {id:'first', value: 30}};
        const callBackFunction = jest.fn();
        const component = shallow(<InputLabel id='first' inputValue={callBackFunction}/>);
        component.instance().inputHandler(event);
        expect(component.state('value')).toEqual(30);
    });
});
