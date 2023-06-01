import React, {
  ChangeEventHandler,
  Dispatch,
  FocusEventHandler,
  InputHTMLAttributes,
  KeyboardEventHandler,
  SetStateAction,
} from "react";
import { DateInputContainer, Input } from "./style";

const DateInput = ({
  numberState,
  setNumberState,
  ...attribute
}: {
  numberState: string;
  setNumberState: Dispatch<SetStateAction<string>>;
} & InputHTMLAttributes<HTMLInputElement>) => {
  const keyboardDate: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Backspace") {
      setNumberState((prev) => prev.slice(0, -1));
    }
    if (numberState.length >= 14) {
      return;
    }
    if (Number(e.key) >= 0) {
      setNumberState((prev) => prev + e.key);
    }
  };

  const dateConvertor = (string: string): string => {
    if (string.length >= 14) {
      return `${string.slice(0, 4)}년 ${string.slice(4, 6)}월 ${string.slice(
        6,
        8
      )}일 ${string.slice(8, 10)}시 ${string.slice(10, 12)}분 ${string.slice(
        12
      )}초`;
    } else if (string.length > 12) {
      return `${string.slice(0, 4)}년 ${string.slice(4, 6)}월 ${string.slice(
        6,
        8
      )}일 ${string.slice(8, 10)}시 ${string.slice(10, 12)}분 ${string.slice(
        12
      )}`;
    } else if (string.length > 10) {
      return `${string.slice(0, 4)}년 ${string.slice(4, 6)}월 ${string.slice(
        6,
        8
      )}일 ${string.slice(8, 10)}시 ${string.slice(10)}`;
    } else if (string.length > 8) {
      return `${string.slice(0, 4)}년 ${string.slice(4, 6)}월 ${string.slice(
        6,
        8
      )}일 ${string.slice(8)}`;
    } else if (string.length > 6) {
      return `${string.slice(0, 4)}년 ${string.slice(4, 6)}월 ${string.slice(
        6
      )}`;
    } else if (string.length > 4) {
      return `${string.slice(0, 4)}년 ${string.slice(4)}`;
    } else {
      return string;
    }
  };

  const changeDate: ChangeEventHandler = (e) => {
    const month = [1, 8, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1];
    /**
     * 년
     */
    if (
      numberState.length === 5 &&
      Number(numberState[numberState.length - 1]) > 1
    ) {
      setNumberState((prev) => `${prev.slice(0, 4)}0${prev.slice(4)}`);
    }

    /**
     * 월
     */
    if (
      numberState.length === 7 &&
      Number(numberState[numberState.length - 3]) === 1 &&
      Number(numberState[numberState.length - 2]) > 2
    ) {
      setNumberState((prev) => `${prev.slice(0, 5)}0${prev.slice(6)}`);
    }
    if (
      numberState.length === 7 &&
      Number(numberState[numberState.length - 1]) > 3
    ) {
      setNumberState((prev) => `${prev.slice(0, 6)}0${prev.slice(6)}`);
    }
    /**
     * 일 윤년 계산
     */
    if (
      numberState.length === 9 &&
      Number(numberState[numberState.length - 3]) ===
        (Number(numberState.slice(5, 6)) === 2 ? 2 : 3) &&
      Number(numberState[numberState.length - 2]) >
        month[Number(numberState.slice(5, 6)) - 1] +
          (Number(numberState.slice(0, 4)) % 4 === 0
            ? Number(numberState.slice(0, 4)) % 100 !== 0
              ? 1
              : Number(numberState.slice(0, 4)) % 400 === 0
              ? 1
              : 0
            : 0)
    ) {
      setNumberState((prev) => `${prev.slice(0, 7)}0${prev.slice(8)}`);
    }
    /**
     * 시
     */
    if (
      numberState.length === 9 &&
      Number(numberState[numberState.length - 1]) > 2
    ) {
      setNumberState((prev) => `${prev.slice(0, 8)}0${prev.slice(8)}`);
    }
    if (
      numberState.length === 11 &&
      Number(numberState[numberState.length - 3]) === 2 &&
      Number(numberState[numberState.length - 2]) > 3
    ) {
      setNumberState((prev) => `${prev.slice(0, 9)}0${prev.slice(10)}`);
    }
    /**
     * 분
     */
    if (
      numberState.length === 11 &&
      Number(numberState[numberState.length - 1]) > 5
    ) {
      setNumberState((prev) => `${prev.slice(0, 10)}0${prev.slice(10)}`);
    }
  };

  const blurEvent: FocusEventHandler = () => {
    if (numberState.length === 0) {
      return;
    }
    if (numberState.length < 14) {
      setNumberState((prev) => prev.padEnd(14, "0"));
    }
  };

  return (
    <DateInputContainer>
      <Input
        type="text"
        {...attribute}
        placeholder="(필터) 기간을 입력해주세요"
        value={dateConvertor(numberState)}
        onChange={changeDate}
        onKeyDown={keyboardDate}
        onBlur={blurEvent}
        data-testid="input"
      />
    </DateInputContainer>
  );
};

export default DateInput;
