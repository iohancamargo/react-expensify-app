// react-test-renderer
import {shallow} from 'enzyme';
import React from 'react';
import Header from '../../components/Header';
// import toJSON from 'enzyme-to-json';

test('Should render Header correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());

    const wrapper = shallow(<Header />);
    // expect(wrapper.find('h1').length).toBe(1);
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();
});