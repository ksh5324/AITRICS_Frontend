import { ChangeEventHandler } from "react";
import { PatientTableField } from "../../PatientTable/types";

export type PatientOptionProps<T extends PatientTableField> = {
  OptionData: Record<Exclude<PatientTableField, "state" | "patient">, string>;
  changeEvent: ChangeEventHandler;
  checkedList: Record<T, boolean>;
};
