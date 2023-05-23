import renderer, { act } from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import { waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FlashMessage from '../componenets/FlashMessage';

describe('test render', () => {
  test('Flash House should match snapshoot', async () => {
    let tree;
    act(() => {
      tree = renderer.create(
        <React.StrictMode>
          <MemoryRouter MemoryRouter initialEntries={['/']}>
            <FlashMessage message="Test Navbar" duration={20} />
          </MemoryRouter>
        </React.StrictMode>,
      );
    });

    await waitFor(() => {
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
