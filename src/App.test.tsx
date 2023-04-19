import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Busright Interview Scratch title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Busright Interview/i);
  expect(linkElement).toBeInTheDocument();
});
