import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router";
test("renders learn react link", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/best programmer/i)).toBeInTheDocument();
});
