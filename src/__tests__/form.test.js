import React from 'react';

import { shallow } from 'enzyme';

import TodoForm from '../components/todo/form.js';

const test = jest.fn();

describe('Tests the form functionality', () => {
  it('should render the form when the application starts', () => {
    let app = shallow(<TodoForm handleSubmit={test}/>);

    expect(app.find('h3').exists()).toBe(true);
    expect(app.find('form').exists()).toBe(true);
    expect(app.find('input').exists()).toBe(true);
  });
});
