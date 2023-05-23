import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Footer from '../componenets/Footer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

it('renders Footer correctly', () => {
  let tree;
  act(() => {
    tree = renderer.create(
      <React.StrictMode>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']}>
            <Footer />
          </MemoryRouter>
        </Provider>
      </React.StrictMode>,
    );
  });
  expect(tree).toMatchSnapshot();
});
