import { TableField } from "../../components/common/Table/types";

export const TableFieldConvertor = (key: TableField, value: string) => {
  if (key === "patient") {
    const [name, alpha, num] = value.split("-");
    return `${name} (${alpha}/${num})`;
  }
  if (key === "location") {
    const [ward, unit, num] = value.split("-");
    return `${ward}병동 ${unit}호 ${num}`;
  }
  return value;
};
