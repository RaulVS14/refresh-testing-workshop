import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { logIn as mockLogIn } from "./api";
import Login from "./Login";

jest.mock("./api");

const setup = (ui) => ({
  user: userEvent.setup(),
  ...render(ui),
});

test("allows to log in with correct password", async () => {
  mockLogIn.mockResolvedValueOnce({ success: true });

  const { user } = setup(<Login />);

  const passwordInput = screen.getByLabelText(/password/i);
  await user.type(passwordInput, "password{enter}");

  // option 1
  const successMessage = await screen.findByRole("heading", {
    name: /you are logged in/i,
  });
  expect(successMessage).toBeInTheDocument();

  // option 2
  // await waitFor(() => expect(mockLogIn).toBeCalledTimes(1));
  // expect(
  //   screen.getByRole("heading", { name: /you are logged in/i })
  // ).toBeInTheDocument();

  // option 3
  // await waitForElementToBeRemoved(screen.queryByText(/logging in/i));
  // expect(
  //   screen.getByRole("heading", { name: /you are logged in/i })
  // ).toBeInTheDocument();

  expect(mockLogIn).toBeCalledWith({ password: "password" });
});

test("shows error when logging in with wrong password", async () => {
  mockLogIn.mockRejectedValueOnce({ success: false });

  const { user } = setup(<Login />);

  // enter wrong password
  await user.type(screen.getByLabelText(/password/i), "wrong password");
  await user.click(screen.getByRole("button", { name: /log in/i }));

  // alert displayed
  await waitFor(() =>
    expect(screen.getByRole("alert")).toHaveTextContent(
      /log in failed, try a different password/i
    )
  );

  // make sure API called correctly
  expect(mockLogIn).toBeCalledWith({ password: "wrong password" });
  expect(mockLogIn).toBeCalledTimes(1);
});
