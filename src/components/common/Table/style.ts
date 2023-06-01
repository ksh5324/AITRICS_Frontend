import styled from "styled-components";
import { PatientTableField } from "../../PatientTable/types";

type TableFieldStyleProps = {
  fieldKey: PatientTableField | "bookmark";
  bold?: boolean;
};

export const TableContainer = styled.table`
  position: relative;
  height: 80vh;
  border-radius: 15px;
  border-spacing: 0;
`;

export const TableHeader = styled.thead`
  width: 100%;
  height: 10%;
  background-color: #6b7be0;
  padding: 0px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`;

export const TableBody = styled.tbody`
  width: 100%;
  height: 90%;

  background-color: white;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const TableRow = styled.tr`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;

  font-size: 11px;

  & + & {
    border-top: 1px solid #ccc;
  }
`;

const getWidth: Record<PatientTableField | "bookmark", string> = {
  bookmark: "40px",
  state: "45px",
  patient: "80px",
  patientNum: "100px",
  location: "85px",
  date: "130px",
  department: "80px",
  doctorInCharge: "60px",
  diagnosis: "360px",
  type: "60px",
  value: "50px",
  observedAt: "120px",
};

export const TableFieldStyle = styled.td<TableFieldStyleProps>`
  width: ${({ fieldKey }) => getWidth[fieldKey]};

  height: 100px;
  word-break: keep-all;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ bold }) => bold && 700};
  color: ${({ bold }) => (bold ? "#ff0000" : "black")};

  & + & {
    padding-left: 3px;
    border-left: 1px solid #ddd;
  }
`;

export const TableCopyButton = styled.button`
  margin-left: 5px;
`;

export const BookmarkButton = styled.button`
  background: none;
  border: none;
  font-size: 11px;
`;
