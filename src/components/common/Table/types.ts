import { ChangeEventHandler, MouseEventHandler } from "react";

type StringOrOptionGeneric<T extends string, U = "", K = string> = {
  [t in T]: t extends U ? K : string;
};

export type TableFieldType = StringOrOptionGeneric<
  TableField,
  "date" | "observedAt",
  Date
> & { state: "신규" | "관찰중" | "해제" };

export type TableListType = TableFieldType[];

export type EachFieldHide = { [t in TableField]: boolean };

export type TableContextType = {
  field: EachFieldHide;
  hiddenOrVisibleField: ChangeEventHandler<HTMLDivElement>;
};

export type TableRowProps = {
  item: TableFieldType;
};

export type TableFieldProps<T extends TableField> = {
  value: { key: T; value: TableFieldType[T] };
};

export type TableField =
  | "state"
  | "patient"
  | "patientNum"
  | "date"
  | "location"
  | "department"
  | "doctorInCharge"
  | "diagnosis"
  | "type"
  | "value"
  | "observedAt";
