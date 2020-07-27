import React from 'react';
import Login from '../src/auth/login.js';
import AuthContext from '../src/auth/auth-context.js';
import Auth from '../src/auth/auth.js';

import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <AuthContext>
        <Login />
        <Auth capability="read">
          <ToDo />
        </Auth>
      </AuthContext>
    );
  }
}
