import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, vi, expect } from "vitest";
import Form from "./Form";

describe("LoginForm component", () => {
  it("does not show error messages when submitting a valid form, and calls onSubmit with the correct email/password", async () => {
    const handleSubmit = vi.fn();
    render(<Form onSubmit={handleSubmit} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");
    fireEvent.click(submitButton);

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(handleSubmit).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123",
    });
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it("shows error messages when submitting an invalid form, and does not call onSubmit", async () => {
    const handleSubmit = vi.fn();
    render(<Form onSubmit={handleSubmit} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.click(submitButton);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Email and password are required."
    );
    expect(handleSubmit).not.toHaveBeenCalled();

    await userEvent.type(emailInput, "invalid-email");
    await userEvent.type(passwordInput, "password123");
    fireEvent.click(submitButton);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Invalid email address."
    );
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("updates error messages when the user changes the input values after the first submit", async () => {
    const handleSubmit = vi.fn();
    render(<Form onSubmit={handleSubmit} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.click(submitButton);
    expect(screen.getByRole("alert")).toHaveTextContent(
      "Email and password are required."
    );

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");
    fireEvent.click(submitButton);

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(handleSubmit).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123",
    });
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
