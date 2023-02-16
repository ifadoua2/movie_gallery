import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SimpleMiniComponentForTesting from "./SimpleMiniComponentForTesting";

test("when clicked on the rendered button it executes the handleClickFunction once", () => {
  const handleBtnClick = jest.fn();
  render(<BrowserRouter><SimpleMiniComponentForTesting handleBtnClick={handleBtnClick} /></BrowserRouter>);
  fireEvent.click(screen.getByText(/Test me!/i))
  expect(handleBtnClick).toHaveBeenCalledTimes(1);
  expect(handleBtnClick).toHaveBeenCalled();
});