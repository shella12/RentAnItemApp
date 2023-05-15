import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import { testListHouses } from './setupTests';
import House from '../componenets/house/House';

describe('test render', () => {
  test('House should match snapshoot', () => {
    const tree = renderer.create(
      <React.StrictMode>
        <House data={testListHouses[0]} />
      </React.StrictMode>,
    ).toJSON();

    expect(tree).toMatchSnapshot()
  })
})
