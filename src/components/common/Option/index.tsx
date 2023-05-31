import React from "react";
import { PatientTableField } from "../../PatientTable/types";
import { OptionBox, OptionContainer } from "./style";
import { PatientOptionProps } from "./types";

const Option = <T extends PatientTableField>({
  OptionData,
  changeEvent,
  checkedList,
}: PatientOptionProps<T>) => {
  const array = Object.keys(OptionData);

  return (
    <OptionContainer>
      {array.map((v, idx) => (
        <OptionBox key={idx}>
          <input
            type="checkbox"
            value={v}
            checked={checkedList[v]}
            onChange={changeEvent}
          />
          {OptionData[v]}
        </OptionBox>
      ))}
    </OptionContainer>
  );
};

export default Option;
