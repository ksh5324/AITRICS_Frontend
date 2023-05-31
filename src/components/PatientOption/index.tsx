import React, { useContext } from "react";
import Option from "../common/Option";
import { TableContext } from "../PatientTable";
import { PatientTableField } from "../PatientTable/types";

const PatientOption = () => {
  const { field, hiddenOrVisibleField } = useContext(TableContext);
  const OptionData: Record<
    Exclude<PatientTableField, "state" | "patient" | "bookmark">,
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

  return (
    <Option
      OptionData={OptionData}
      changeEvent={hiddenOrVisibleField}
      checkedList={field}
    />
  );
};

export default PatientOption;
