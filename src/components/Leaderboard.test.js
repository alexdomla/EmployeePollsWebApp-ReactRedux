import { store } from "../store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Leaderboard from "../components/Leaderboard";

describe("leaderboard", () => {
  it("will match snapshot", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Leaderboard />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
