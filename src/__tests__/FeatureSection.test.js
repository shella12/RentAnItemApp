import React from 'react';
import renderer from 'react-test-renderer';
import FeatureSection from '../components/FeatureSection';

it('renders Footer correctly', () => {
  const tree = renderer.create(<FeatureSection />);
  expect(tree).toMatchSnapshot();
});
