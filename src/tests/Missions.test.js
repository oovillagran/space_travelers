import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import Missions from '../components/Missions';
import store from '../redux/store';

describe('missions', () => {
  test('test if missions renders', () => {
    const tree = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
