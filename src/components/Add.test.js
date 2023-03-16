import { store } from "../store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Add from "../components/Add";

describe("add", () => {
  it("will match snapshot", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Add />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
