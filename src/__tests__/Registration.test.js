import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Registration from '../componenets/auth/Registration';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

it('renders Footer correctly', () => {
  let tree;
  act(() => {
    tree = renderer.create(
      <React.StrictMode>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/register']}>
          <Registration handleSuccessfulAuth={()=> {}} />
          </MemoryRouter>
        </Provider>
      </React.StrictMode>,
    );
  });
  expect(tree).toMatchSnapshot();
});
