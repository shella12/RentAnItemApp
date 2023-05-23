import React from 'react';
import renderer from 'react-test-renderer';
import Registration from '../componenets/auth/Registration';

it('renders Footer correctly', () => {
  const tree = renderer.create(<Registration />);
  expect(tree).toMatchSnapshot();
});
