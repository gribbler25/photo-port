import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PhotoList from "..";

describe("PhotoList is rendering", () => {
  it("renders", () => {
    render(<PhotoList />);
  });
});

it("renders", () => {
  const { asFragment } = render(<PhotoList />);
  expect(asFragment()).toMatchSnapshot();
});

//need to get help with this one, testing whether the rendering img has the right key?
// it("renders", () => {
//   const { getByTestKey } = render(<PhotoList />);
//   expect(getByTestKey("img")).toHaveKeyof(image.name);
// });

afterEach(cleanup);
