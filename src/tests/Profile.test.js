import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Profile from '../components/Profile';

describe('Test suite for the Profile component', () => {
  let profile;
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </BrowserRouter>,
    );
    profile = screen.getByText(/My Missions/i);
  });

  it('Should render a snapshot of the Profile component', () => {
    expect(profile).toMatchSnapshot();
  });
});
