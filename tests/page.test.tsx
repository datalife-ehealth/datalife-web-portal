import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the main heading", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Welcome to the Clinical Portal"
      })
    ).toBeInTheDocument();
  });

  it("communicates that clinical workflows are unavailable", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("status")
    ).toHaveTextContent("Clinical workflows are not available");
  });
});
