import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("navbar", () => {
  it("renders without issues", () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    expect(screen.getByText(/POKEDEX/i)).toBeInTheDocument();
  });

  it("renders the image", async () => {
    await render(<Navbar />, { wrapper: BrowserRouter });
    expect(screen.getByAltText("poke-icon").src).toContain("pokeball.svg");
  });

  it("click on pokedex returns to home", async () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    await userEvent.click(screen.getByTestId("navbar-link"));
    expect(screen.getByText(/POKEDEX/i)).toBeInTheDocument();
  });
});
