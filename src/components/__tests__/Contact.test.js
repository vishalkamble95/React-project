import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Contact should render the contact component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load button inside Contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Contact should render the contact component", () => {
  render(<Contact />);

  const text = screen.getByText("Contact Us");
  expect(text).toBeInTheDocument();
});

test("should load input name inside contact component", () => {
  render(<Contact />);

  const placeholder = screen.getByPlaceholderText("Enter your name");
  expect(placeholder).toBeInTheDocument();
});

test("should load 2 input boxes inside contact component", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(3);
});
