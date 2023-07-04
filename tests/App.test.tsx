import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);
    const name = screen.getByText(/Andrew Sipes/i);
    expect(name).toBeInTheDocument();
  });
});
