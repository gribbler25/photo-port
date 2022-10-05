import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

const { asFragment } = render(<About />);
describe("About component", () => {
  //render the ABout test
  it("renders", () => {
    render(<About />);
  });
  it("matches snapshot DOM node structure", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
