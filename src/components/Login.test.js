import Login from "../components/Login";
import { store } from "../store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render } from "@testing-library/react";

describe("Login", () => {
  it("will verify that the login component is rendering correctly", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it("will display an error if the name or the password is not provided.", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    var inputName = component.getByTestId("name-input");
    fireEvent.change(inputName, { target: { value: "" } });
    var inputPassword = component.getByTestId("password-input");
    fireEvent.change(inputPassword, { target: { value: "" } });
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(component.getByTestId("error-header")).toBeInTheDocument();
  });

  it("will not display an error if the name and the password are provided.", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    var inputName = component.getByTestId("name-input");
    fireEvent.change(inputName, { target: { value: "sarahedo" } });
    var inputPassword = component.getByTestId("password-input");
    fireEvent.change(inputPassword, { target: { value: "password123" } });
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(component.queryByTestId("error-header")).not.toBeInTheDocument();
  });
});
