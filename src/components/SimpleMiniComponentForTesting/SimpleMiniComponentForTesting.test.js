import { fireEvent, render, screen } from "@testing-library/react";
import SimpleMiniComponentForTesting from "./SimpleMiniComponentForTesting";

test("when clicked on the rendered button it executes the handleClickFunction once", () => {
  const handleBtnClick = jest.fn();
  render(<SimpleMiniComponentForTesting handleBtnClick={handleBtnClick} />);
  fireEvent.click(screen.getByText(/Test me!/i))
  expect(handleBtnClick).toHaveBeenCalled();
  expect(handleBtnClick).toHaveBeenCalledTimes(1);
});