import { ChangeEventHandler } from "react";
import { PatientTableField } from "../../PatientTable/types";

export type PatientOptionProps<T extends PatientTableField> = {
  OptionData: Record<
    Exclude<PatientTableField, "state" | "patient" | "bookmark">,
    string
  >;
  changeEvent: ChangeEventHandler;
  checkedList: Record<T, boolean>;
};
