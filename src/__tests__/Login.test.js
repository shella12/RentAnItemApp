import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Login from '../componenets/auth/Login';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

it('renders Footer correctly', () => {
  let tree;
  act(() => {
    tree = renderer.create(
      <React.StrictMode>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/login']}>
            <Login handleSuccessfulAuth={()=> {}} />
          </MemoryRouter>
        </Provider>
      </React.StrictMode>,
    );
  });
  expect(tree).toMatchSnapshot();
});
