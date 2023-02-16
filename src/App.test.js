import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders movie gallery title in child navbar", () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/movie gallery/i);
  expect(linkElement).toBeInTheDocument();
});


