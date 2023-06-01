import React from "react";
import { render } from "@testing-library/react";
import DateInput from "..";

describe("Date Test", () => {
  it("value format test", async () => {
    const DateComponent = render(
      <DateInput numberState="20230324000000" setNumberState={() => {}} />
    );

    const Input = (await DateComponent.findByTestId(
      "input"
    )) as HTMLInputElement;

    expect(Input.value).toBe("2023년 03월 24일 00시 00분 00초");
  });
});
