import React from "react";
import Table from "../components/common/Table";
import { TableFieldType } from "../components/common/Table/types";

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

const Main = () => {
  return (
    <>
      <Table>
        <Table.Header />
        <Table.Body>
          {testData.map((v) => (
            <Table.Row item={v} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default Main;
