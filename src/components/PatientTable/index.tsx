import React, { createContext, useEffect, useState } from "react";
import { patientHeaderData } from "../../constant/patientConstant";
import useDate from "../../hooks/useDate";
import { usePatientQuery } from "../../queries/patient.query";
import DateInput from "../common/DateInput";
import Table from "../common/Table";
import { TableContextType, TableFieldType } from "../common/Table/types";
import PatientOption from "../PatientOption";
import usePatientTable from "./hooks/usePatientTable";
import { PatientAside } from "./style";

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
  const { date, setDate, filter } = useDate();
  const { data } = usePatientQuery();
  const [sortData, setSortData] = useState<string>("");
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth > 1400) {
      setClick(true);
    }
  }, []);

  const sort = (list: TableFieldType[]): TableFieldType[] => {
    return list.sort((a, b) => (a[sortData] > b[sortData] ? -1 : 1));
  };

  return (
    <Table Context={TableContext} value={patientTableValue}>
      <Table.Header
        Context={TableContext}
        header={patientHeaderData}
        setSort={setSortData}
        bookmark
      />
      <Table.Body>
        {data &&
          sort(filter(data)).map((v) => (
            <Table.Row
              bookmark="bookmark"
              Context={TableContext}
              item={v}
              key={v.patientNum}
            />
          ))}
      </Table.Body>
      <PatientAside click={click} setClick={setClick}>
        <PatientOption />
        <DateInput numberState={date} setNumberState={setDate} />
      </PatientAside>
    </Table>
  );
};

export default PatientTable;
