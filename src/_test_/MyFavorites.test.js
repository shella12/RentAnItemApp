import renderer, { act } from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/react';
import { fetchFavoriteHouseData, fetchHouseData } from './setupTests';
import configureStore from '../redux/configureStore';
import MyFavourites from '../pages/MyFavourites';

const store = configureStore;
fetchHouseData();
fetchFavoriteHouseData(1);

describe('test render', () => {
  test('List Favorites should match snapshoot', async () => {
    let tree;
    act(() => {
      tree = renderer.create(
        <React.StrictMode>
          <Provider store={store}>
            <MyFavourites />
          </Provider>
        </React.StrictMode>,
      );
    });

    await waitFor(() => {
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
