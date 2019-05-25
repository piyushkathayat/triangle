import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Triangle from "./components/Triangle";
import { MESSAGE_HEADER } from './constants/common';
import App from './App';

describe('renders without crashing', () => {
  const wrapper = shallow(<App />);

  it('Should render a App into ReactDom', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('Should render a Header', () => {
    const header = <div>{MESSAGE_HEADER}</div>;
    expect(wrapper.contains(header)).toEqual(true);
  });

  it('Should render a component Triangle', () => {
    const triangle = <div>{Triangle}</div>;
    expect(wrapper.contains(triangle)).toEqual(true);
  });
});
