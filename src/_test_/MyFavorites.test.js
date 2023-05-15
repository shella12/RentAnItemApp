import renderer, { act } from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { fetchFavoriteHouseData, fetchHouseData, testListFavoriteHouses } from './setupTests';
import configureStore from '../redux/configureStore';
import MyFavourites from '../pages/MyFavourites';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { fetchFavorites } from '../redux/favorites/favoriteReducer';

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
