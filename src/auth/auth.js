import { useContext } from 'react';
import { AuthContext } from './auth-context.js';

const Auth = (props) => {
  let authorized = false;
  const context = useContext(AuthContext);
  console.log('Context.user', props.capability);
  if (Object.keys(context.user).length && props.capability) {
    authorized = context.user.capabilities.includes(props.capability);
  }

  return authorized ? props.children : null;
};

export default Auth;