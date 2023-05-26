import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../redux/store';
import DragonsList from '../components/DragonsList';

describe('dragons', () => {
  test('component renders', () => {
    const tree = render(
      <Provider store={store}>
        <DragonsList />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
