import React from "react";
import Table from "../components/common/Table";
import { TableContext } from "../components/PatientTable";
import usePatientTable from "../components/PatientTable/hooks/usePatientTable";
import { bookMarkPatientHeaderData } from "../constant/bookMarkPatientConstant";
import { BookMarkStorageConvertor } from "../lib/convertor/bookmarkStorageConvertor";

const BookMark = () => {
  const bookMarkPatientTableValue = usePatientTable();
  return (
    <>
      <Table Context={TableContext} value={bookMarkPatientTableValue}>
        <Table.Header
          Context={TableContext}
          header={bookMarkPatientHeaderData}
          bookmark
        />
        <Table.Body>
          {localStorage.getItem("bookmark") &&
            BookMarkStorageConvertor().map((v) => (
              <Table.Row
                bookmark="boomark"
                Context={TableContext}
                item={v}
                key={v.patientNum}
              />
            ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default BookMark;
