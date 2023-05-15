import renderer, { act } from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { fetchFavoriteHouseData, fetchHouseData, testListFavoriteHouses } from './setupTests';
import configureStore from '../redux/configureStore';
import MyFavourites from '../pages/MyFavourites';


const store = configureStore;
fetchHouseData()
fetchFavoriteHouseData(1);

describe('test render', () => {
  test('List Favorites should match snapshoot', () => {
    const tree = renderer.create(
      <React.StrictMode>
        <Provider store={store}>
          <MyFavourites />
        </Provider>
      </React.StrictMode>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
