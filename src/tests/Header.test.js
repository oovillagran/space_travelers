import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import '@testing-library/jest-dom/extend-expect';

describe('Test suite for the Header component', () => {
  let header;
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    header = screen.getByText(/Space Travelers' Hub/i);
  });

  it('Should test if Header component is inside the document', () => {
    expect(header).toBeInTheDocument();
  });

  it('Should render a snapshot of the Header component', () => {
    expect(header).toMatchSnapshot();
  });
});
