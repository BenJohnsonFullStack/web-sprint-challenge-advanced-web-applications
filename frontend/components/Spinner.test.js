// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from "react";
import Spinner from "./Spinner";
import { render, screen } from "@testing-library/react";

test("the spinner renders correctly when on", () => {
  render(<Spinner spinnerOn={true} />);
  const spinnerActive = screen.queryByText(/please wait/i);
  expect(spinnerActive).not.toBeNull();
});

test("the spinner renders correctly when off", () => {
  render(<Spinner spinnerOn={false} />);
  const spinnerActive = screen.queryByText(/please wait/i);
  expect(spinnerActive).toBeNull();
});
