import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Profile from "../components/Profile";
import "@testing-library/jest-dom/extend-expect";
import store from "../redux/store";
import { Provider } from "react-redux";

describe("Test suite for the Profile component", () => {
  let profile;
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </BrowserRouter>
    );
    profile = screen.getByText(/My Missions/i);
  });

  it("Should render a snapshot of the Profile component", () => {
    expect(profile).toMatchSnapshot();
  });
});
