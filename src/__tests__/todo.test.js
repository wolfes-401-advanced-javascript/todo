import React from 'react';

import { shallow } from 'enzyme';

import ToDo from '../components/todo.js';


describe('Testing the functionality of the ToDo app', () => {
  it('should render when the application starts', () => {
    let app = shallow(<ToDo/>);
    expect(app.find('.todo').exists()).toBe(true);
  });
});