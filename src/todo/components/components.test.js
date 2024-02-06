import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { Input } from "./input";
import { Header } from "./header";
import { Item } from "./item";
import { Main } from "./main";
import { Footer } from "./footer";
import { BrowserRouter as Router } from "react-router-dom";

test("renders Input component", () => {
  render(
    <Input
      onSubmit={() => {}}
      placeholder="Test Placeholder"
      label="Test Label"
    />
  );
  const inputElement = screen.getByTestId("text-input");
  expect(inputElement).toBeInTheDocument();
});

test("calls onSubmit when Enter key is pressed", () => {
  const onSubmitMock = jest.fn();
  render(
    <Input
      onSubmit={onSubmitMock}
      placeholder="Test Placeholder"
      label="Test Label"
    />
  );

  const inputElement = screen.getByTestId("text-input");
  fireEvent.keyDown(inputElement, { key: "Enter" });
  expect(onSubmitMock).toHaveBeenCalled();
});

test("sanitizes input value on submit", () => {
  const onSubmitMock = jest.fn();
  render(
    <Input
      onSubmit={onSubmitMock}
      placeholder="Test Placeholder"
      label="Test Label"
    />
  );
  const inputElement = screen.getByTestId("text-input");
  fireEvent.change(inputElement, {
    target: { value: '<script>alert("test")</script>' },
  });
  fireEvent.keyDown(inputElement, { key: "Enter" });

  expect(onSubmitMock).toHaveBeenCalledWith(
    '&lt;script&gt;alert("test")&lt;/script&gt;'
  );
});

test("renders Header component", () => {
  render(<Header dispatch={() => {}} />);
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});

const mockTodo = { id: "1", title: "Test Todo", completed: false };

test("renders Item component", () => {
  render(<Item todo={mockTodo} dispatch={() => {}} index={0} />);
  const itemElement = screen.getByTestId("todo-item");
  expect(itemElement).toBeInTheDocument();
});

test("toggles todo completion status on checkbox click", () => {
  const dispatchMock = jest.fn();
  render(<Item todo={mockTodo} dispatch={dispatchMock} index={0} />);
  const checkboxElement = screen.getByTestId("todo-item-toggle");
  fireEvent.click(checkboxElement);
  expect(dispatchMock).toHaveBeenCalledWith({
    type: "TOGGLE_ITEM",
    payload: { id: "1" },
  });
});

const mockTodos = [
  { id: "1", title: "Test Todo 1", completed: false },
  { id: "2", title: "Test Todo 2", completed: true },
];

test("renders Main component", () => {
  render(
    <Router>
      <Main todos={mockTodos} dispatch={() => {}} />
    </Router>
  );
  const mainElement = screen.getByTestId("main");
  expect(mainElement).toBeInTheDocument();
});

test("renders Footer component", () => {
  // router should be used to avoid useLocation error because useLocation can be call inside the router
  render(
    <Router>
      <Footer todos={mockTodos} dispatch={() => {}} />
    </Router>
  );
  const footerElement = screen.getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});

test("renders Input component with default value", () => {
  render(
    <Input
      onSubmit={() => {}}
      placeholder="Test Placeholder"
      label="Test Label"
      defaultValue="Default Value"
    />
  );
  const inputElement = screen.getByTestId("text-input");
  expect(inputElement).toHaveValue("Default Value");
});

test("does not call onSubmit for empty input", async () => {
  const onSubmitMock = jest.fn();
  render(
    <Input
      onSubmit={onSubmitMock}
      placeholder="Test Placeholder"
      label="Test Label"
    />
  );

  const inputElement = screen.getByTestId("text-input");
  fireEvent.keyDown(inputElement, { key: "Enter" });

  await waitFor(() => {
    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});

test("calls onBlur when input loses focus", () => {
  const onBlurMock = jest.fn();
  render(
    <Input
      onSubmit={() => {}}
      placeholder="Test Placeholder"
      label="Test Label"
      onBlur={onBlurMock}
    />
  );

  const inputElement = screen.getByTestId("text-input");
  fireEvent.blur(inputElement);

  expect(onBlurMock).toHaveBeenCalled();
});

test("handles special characters in input value", async () => {
  const onSubmitMock = jest.fn();
  render(
    <Input
      onSubmit={onSubmitMock}
      placeholder="Test Placeholder"
      label="Test Label"
    />
  );

  const inputElement = screen.getByTestId("text-input");
  fireEvent.change(inputElement, {
    target: { value: '<script>alert("test")</script>' },
  });
  fireEvent.keyDown(inputElement, { key: "Enter" });

  await waitFor(() => {
    expect(onSubmitMock).toHaveBeenCalledWith(
      '&lt;script&gt;alert("test")&lt;/script&gt;'
    );
  });
});

test("calls dispatch with ADD_ITEM action when submitting a new todo", () => {
  const dispatchMock = jest.fn();
  render(<Header dispatch={dispatchMock} />);
  const inputElement = screen.getByTestId("text-input");

  fireEvent.change(inputElement, { target: { value: "New Todo" } });
  fireEvent.keyDown(inputElement, { key: "Enter" });

  expect(dispatchMock).toHaveBeenCalledWith({
    type: "ADD_ITEM",
    payload: { title: "New Todo" },
  });
});

test("edits and updates todo on double click", () => {
  const dispatchMock = jest.fn();
  render(<Item todo={mockTodo} dispatch={dispatchMock} index={0} />);
  const labelElement = screen.getByTestId("todo-item-label");

  fireEvent.doubleClick(labelElement);

  const inputElement = screen.getByTestId("text-input");
  fireEvent.change(inputElement, { target: { value: "Updated Todo" } });
  fireEvent.keyDown(inputElement, { key: "Enter" });

  expect(dispatchMock).toHaveBeenCalledWith({
    type: "UPDATE_ITEM",
    payload: { id: "1", title: "Updated Todo" },
  });
});

test("removes todo on button click", () => {
  const dispatchMock = jest.fn();
  render(<Item todo={mockTodo} dispatch={dispatchMock} index={0} />);
  const buttonElement = screen.getByTestId("todo-item-button");

  fireEvent.click(buttonElement);
  expect(dispatchMock).toHaveBeenCalledWith({
    type: "REMOVE_ITEM",
    payload: { id: "1" },
  });
});

test('toggles all todos completion status on "Toggle All" checkbox click', () => {
  const dispatchMock = jest.fn();

  // Mock useLocation to avoid the error
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: jest.fn(() => ({ pathname: "/" })),
  }));

  render(
    <Router>
      <Main todos={mockTodos} dispatch={dispatchMock} />
    </Router>
  );

  const toggleAllCheckbox = screen.getByTestId("toggle-all");

  fireEvent.click(toggleAllCheckbox);
  expect(dispatchMock).toHaveBeenCalledWith({
    type: "TOGGLE_ALL",
    payload: { completed: true },
  });
});

test('calls dispatch with REMOVE_COMPLETED_ITEMS action when "Clear completed" button is clicked', () => {
  const dispatchMock = jest.fn();
  render(
    <Router>
      <Footer todos={mockTodos} dispatch={dispatchMock} />
    </Router>
  );

  const clearCompletedButton = screen.getByText("Clear completed");

  fireEvent.click(clearCompletedButton);
  expect(dispatchMock).toHaveBeenCalledWith({ type: "REMOVE_COMPLETED_ITEMS" });
});
