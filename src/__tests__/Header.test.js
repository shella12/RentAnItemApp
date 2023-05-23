import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Header from '../componenets/Header';
import { MemoryRouter } from 'react-router';
import store from '../redux/configureStore';
import { Provider } from 'react-redux';

it('renders Footer correctly', () => {
  let tree;
  act(() => {
    tree = renderer.create(
      <React.StrictMode>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']}>
            <Header />
          </MemoryRouter>
        </Provider>
      </React.StrictMode>,
    );
  });
  expect(tree).toMatchSnapshot();
});
