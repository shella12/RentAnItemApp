import renderer, { act } from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import { waitFor } from '@testing-library/react';
import { testListHouses } from '../setupTests';
import House from '../componenets/house/House';

describe('test render', () => {
  test('House should match snapshoot', async () => {
    let tree;
    act(() => {
      tree = renderer.create(
        <React.StrictMode>
          <House data={testListHouses[0]} />
        </React.StrictMode>,
      );
    });

    await waitFor(() => {
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
