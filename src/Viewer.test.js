import React from "react";
import Viewer from "./Viewer";
import { render } from "react-testing-library";
import { getByTestId } from 'dom-testing-library';
import "jest-dom/extend-expect";

test("Recieves and renders title prop", () => {
  const { getByTestId } = render(
    <Viewer title='Hello, Space!' />
  );
  expect(getByTestId("viewer-title")).toHaveTextContent('Hello, Space!');
});

