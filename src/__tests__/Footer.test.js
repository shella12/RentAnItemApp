import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../componenets/Footer';

it('renders Footer correctly', () => {
  const tree = renderer.create(<Footer />);
  expect(tree).toMatchSnapshot();
});
