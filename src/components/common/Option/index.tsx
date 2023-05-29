import React, { useContext } from "react";
import { TableContext } from "../Table";
import { TableField } from "../Table/types";
import { OptionBox, OptionContainer } from "./style";

const Option = () => {
  const { hiddenOrVisibleField, field } = useContext(TableContext);
  const OptionData: Record<
    Exclude<TableField, "state" | "patient">,
    string
  > = Object.freeze({
    patientNum: "환자번호",
    location: "위치",
    date: "입원일",
    department: "해당과",
    doctorInCharge: "주치의",
    diagnosis: "진단명",
    type: "관측 데이터 종류",
    value: "관측 데이터",
    observedAt: "관측 일자",
  });

  const array = Object.keys(OptionData);

  return (
    <OptionContainer>
      {array.map((v) => (
        <OptionBox>
          <input
            type="checkbox"
            value={v}
            checked={field[v]}
            onChange={hiddenOrVisibleField}
          />
          {OptionData[v]}
        </OptionBox>
      ))}
    </OptionContainer>
  );
};

export default Option;
