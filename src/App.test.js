import React from "react";
import { render } from "@testing-library/react";
// import { screen } from "@testing-library/dom";

import App from "./App";

test("renders learn react link", () => {
  const { getByText, getAllByText, getByTestId } = render(<App />);
  const linkElement = getByText(/MyCart/i);
  expect(linkElement).toBeInTheDocument();

  const linkElements = getAllByText(/Products/i);
  linkElements.forEach((element) => expect(element).toBeInTheDocument());

  // expect(getByTestId(document, "product")).toBeInTheDocument();
});
