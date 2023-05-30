import { ChangeEventHandler, Context } from "react";
import { TableKinds } from "../../../@types/tableKindsType";
import { PatientTableField } from "../../PatientTable/types";

type StringOrOptionGeneric<T extends string, U = "", K = string> = {
  [t in T]: t extends U ? K : string;
};

export type TableFieldType = StringOrOptionGeneric<
  PatientTableField,
  "date" | "observedAt",
  Date
> & { state: "신규" | "관찰중" | "해제" };

export type TableListType = TableFieldType[];

export type EachFieldHide = { [t in PatientTableField]: boolean };

export type TableContextType = {
  field: EachFieldHide;
  hiddenOrVisibleField: ChangeEventHandler<HTMLDivElement>;
};

export type TableRowProps<T extends TableKinds> = {
  item: TableFieldType;
  Context: Context<T>;
};

export type PropsContextType<T extends TableKinds> = { Context: Context<T> };

export type TableFieldProps<T extends PatientTableField> = {
  value: { key: T; value: TableFieldType[T] };
};
