import renderer, { act } from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { fetchFavoriteHouseData, fetchHouseData, testListFavoriteHouses } from '../setupTests';
import store from '../redux/configureStore';
import App from '../App';
import { fetchFavorites } from '../redux/favorites/favoriteReducer';

fetchHouseData();
fetchFavoriteHouseData(1);

jest.mock('../pages/Homepage.js', () => {
  const MockedHomepage = () => <h1>Home Page Component</h1>;
  MockedHomepage.displayName = 'Homepage';
  return MockedHomepage;
});

describe('test App render', () => {
  test('App should match snapshoot', async () => {
    let tree;
    act(() => {
      tree = renderer.create(
        <React.StrictMode>
          <Provider store={store}>
            <MemoryRouter initialEntries={['/']}>
              <App />
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

describe('test App Routing', () => {
  test('test should render MyFavorite page and contain list favorite items', async () => {
    await act(async () => {
      await store.dispatch(fetchFavorites(1));
    });

    render(
      <React.StrictMode>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/houses/favorites']}>
            <App />
          </MemoryRouter>
        </Provider>
      </React.StrictMode>,
    );

    const item = testListFavoriteHouses[0];
    expect(screen.getByText('Favorites')).toBeInTheDocument();
    expect(screen.getByText(item.name)).toBeInTheDocument();
  });

  test('test should render DeleteHouse page and contain list favorite items', async () => {
    await act(async () => {
      store.dispatch(fetchFavorites(1));
    });

    render(
      <React.StrictMode>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/houses/delete']}>
            <App />
          </MemoryRouter>
        </Provider>
      </React.StrictMode>,
    );

    const item = testListFavoriteHouses[0];
    await waitFor(() => {
      expect(screen.getByText('Delete house')).toBeInTheDocument();
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });
});
