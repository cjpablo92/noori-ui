import React from "react";
import { render } from "@testing-library/react";

import Button from ".";
import { ButtonTypeEnum } from "./types";

describe("Button", () => {
  it("is defined with just the id", () => {
    const { container } = render(<Button id="test"></Button>);
    expect(container).toBeDefined();
  });

  it("is defined with id and type primary", () => {
    const { container } = render(
      <Button id="test" type={ButtonTypeEnum.primary}></Button>
    );
    expect(container).toBeDefined();
  });

  it("is defined with id and type secondary", () => {
    const { container } = render(
      <Button id="test" type={ButtonTypeEnum.secondary}></Button>
    );
    expect(container).toBeDefined();
  });

  it("is defined with id and type terciary", () => {
    const { container } = render(
      <Button id="test" type={ButtonTypeEnum.terciary}></Button>
    );
    expect(container).toBeDefined();
  });
});
