import renderer, { act } from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { fetchHouseData } from '../setupTests';
import configureStore from '../redux/configureStore';
import Home from '../pages/Homepage';

const store = configureStore;
fetchHouseData();

jest.mock('../pages/Homepage.js', () => {
  const MockedHomepage = () => (<>
    <h1>Houses</h1>
    <p className="flex-center empty-list">No Houses: List Empty</p>
  </>);
  MockedHomepage.displayName = 'Homepage';
  return MockedHomepage;
});

describe('test render', () => {
  test('Add House page should match snapshoot', async () => {
    let tree;
    act(() => {
      tree = renderer.create(
        <React.StrictMode>
          <Provider store={store}>
            <MemoryRouter initialEntries={['/houses']}>
              <Home />
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
