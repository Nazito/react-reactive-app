import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LoginForm from "../components/LoginForm";

vi.mock("../../../core/services/AuthService.ts");

describe("LoginForm", () => {
  it("should render login form", () => {
    render(<LoginForm />);

    expect(screen.getByPlaceholderText("... Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("... Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("... Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});
