import renderer, { act } from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import HouseDetails from '../pages/HouseDetail/HouseDetails';
import { testListHouses } from '../setupTests';

describe('test render', () => {
  test('House Details page should match snapshot', async () => {
    const item = testListHouses[0];
    let tree;
    act(() => {
      tree = renderer.create(
        <React.StrictMode>
          <Provider store={store}>
            <MemoryRouter initialEntries={[`/houses/${item.id}`]}>
              <HouseDetails />
            </MemoryRouter>
          </Provider>
        </React.StrictMode>,
      );
    });

    await waitFor(() => {
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
