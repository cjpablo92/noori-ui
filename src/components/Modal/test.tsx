import React from "react";
import { render } from "@testing-library/react";

import Modal from ".";

describe("Button", () => {
  it("is defined with just the id", () => {
    const el = document.createElement("div");
    const { container } = render(
      <Modal id="test" isOpen={true} appElement={el}></Modal>
    );
    expect(container).toBeDefined();
  });
});
