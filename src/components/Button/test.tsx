import React from "react";
import { render } from "@testing-library/react";

import Button from ".";

describe("Button", () => {
  it("is defined with just the id", () => {
    const { container } = render(<Button id="test"></Button>);
    expect(container).toBeDefined();
  });
});
