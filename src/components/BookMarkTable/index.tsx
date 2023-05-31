import React from "react";
import { bookMarkPatientHeaderData } from "../../constant/bookMarkPatientConstant";
import { BookMarkStorageConvertor } from "../../lib/convertor/bookmarkStorageConvertor";
import Table from "../common/Table";
import { TableContext } from "../PatientTable";
import usePatientTable from "../PatientTable/hooks/usePatientTable";

const BookMarkTable = () => {
  const bookMarkPatientTableValue = usePatientTable();
  return (
    <>
      <Table Context={TableContext} value={bookMarkPatientTableValue}>
        <Table.Header
          Context={TableContext}
          header={bookMarkPatientHeaderData}
        />
        <Table.Body>
          {localStorage.getItem("bookmark") &&
            BookMarkStorageConvertor().map((v) => (
              <Table.Row Context={TableContext} item={v} key={v.patientNum} />
            ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default BookMarkTable;
