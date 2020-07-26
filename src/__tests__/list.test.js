import React from "react";

import { shallow } from 'enzyme';

import TodoList from '../components/todo/list.js';

const test = jest.fn();

describe('Tests list functionality', () => {
  it('should render the list when the application starts', () => {
    let testList = [{_id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person 1'}, {_id: 2, complete: false, text: 'Do Laundry', difficulty: 2, assignee: 'Person 2'}];

    let app = shallow(<TodoList list={testList} handleComplete={test}/>);

    expect(app.find('.complete-false').exists()).toBe(true);
  });
});