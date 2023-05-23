import React from 'react';
import renderer from 'react-test-renderer';
import FeatureSection from '../componenets/FeatureSection';

it('renders Footer correctly', () => {
  const tree = renderer.create(<FeatureSection />);
  expect(tree).toMatchSnapshot();
});
