import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../componenets/auth/Login';

it('renders Footer correctly', () => {
  const tree = renderer.create(<Login />);
  expect(tree).toMatchSnapshot();
});
