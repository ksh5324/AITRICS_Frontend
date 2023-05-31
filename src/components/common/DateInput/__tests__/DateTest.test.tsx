import React from "react";
import { render } from "@testing-library/react";
import DateInput from "..";

describe("Date Test", () => {
  it("value format test", () => {
    const Component = render(
      <DateInput numberState="" setNumberState={() => {}} />
    );
  });
});
