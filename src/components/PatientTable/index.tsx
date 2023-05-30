import React, { createContext } from "react";
import { patientHeaderData } from "../../constant/patientConstant";
import Table from "../common/Table";
import { TableContextType, TableFieldType } from "../common/Table/types";
import PatientOption from "../PatientOption";
import usePatientTable from "./hooks/usePatientTable";

const testData: TableFieldType[] = new Array(30).fill({
  state: "관찰중",
  patient: "김트릭-F-70",
  patientNum: "230947de3",
  location: "114-14-2",
  date: new Date(),
  department: "신경외과",
  doctorInCharge: "김의사",
  diagnosis: "non-st elevation (nstemi) myocardial infarction, elevation, …",
  type: "TEMP",
  value: "53",
  observedAt: new Date("2023-04-23 23:38:00"),
});

export const TableContext = createContext<TableContextType>({
  field: {
    date: true,
    department: true,
    diagnosis: true,
    doctorInCharge: true,
    location: true,
    observedAt: true,
    patient: true,
    patientNum: true,
    state: true,
    type: true,
    value: true,
  },
  hiddenOrVisibleField: () => {},
});

const PatientTable = () => {
  const patientTableValue = usePatientTable();

  return (
    <Table Context={TableContext} value={patientTableValue}>
      <Table.Header Context={TableContext} header={patientHeaderData} />
      <Table.Body>
        {testData.map((v) => (
          <Table.Row Context={TableContext} item={v} />
        ))}
      </Table.Body>
      <PatientOption />
    </Table>
  );
};

export default PatientTable;
