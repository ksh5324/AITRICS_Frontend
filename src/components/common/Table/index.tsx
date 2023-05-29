import React, {
  PropsWithChildren,
  createContext,
  useRef,
  useContext,
} from "react";
import { TableFieldConvertor } from "../../../lib/convertor/TableFieldCovertor";
import { TimeConvertor } from "../../../lib/convertor/TimeConvertor";
import Option from "../Option";
import useTable from "./hooks/useTable";
import {
  TableBody,
  TableContainer,
  TableFieldStyle,
  TableHeader,
  TableRow,
  TableCopyButton,
} from "./style";
import {
  TableContextType,
  TableFieldProps,
  TableRowProps,
  TableField,
} from "./types";

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

const Table = ({ children }: PropsWithChildren) => {
  const { field, hiddenOrVisibleField } = useTable();

  return (
    <TableContext.Provider value={{ field, hiddenOrVisibleField }}>
      <TableContainer>
        {children}
        <Option />
      </TableContainer>
    </TableContext.Provider>
  );
};

const Header = () => {
  const { field } = useContext(TableContext);
  const headerData: Record<TableField, string> = Object.freeze({
    state: "상태",
    patient: "개인정보",
    patientNum: "환자번호",
    location: "위치",
    date: "입원일",
    department: "해당과",
    doctorInCharge: "주치의",
    diagnosis: "진단명",
    type: "관측 데이터 종류",
    value: "관측 데이터",
    observedAt: "관측 일자",
  });
  const headerArray = Object.keys(headerData);

  return (
    <TableHeader>
      {headerArray
        .filter((v) => field[v])
        .map((v: TableField) => (
          <TableFieldStyle key={v} fieldKey={v}>
            {headerData[v]}
          </TableFieldStyle>
        ))}
    </TableHeader>
  );
};

const Body = ({ children }: PropsWithChildren) => {
  return <TableBody>{children}</TableBody>;
};

const Row = ({ item }: TableRowProps) => {
  const { field } = useContext(TableContext);
  const itemToArray = Object.keys(item);
  return (
    <TableRow>
      {itemToArray
        .filter((v) => field[v])
        .map((key: TableField) => (
          <Field value={{ key, value: item[key] }} key={key} />
        ))}
    </TableRow>
  );
};

const Field = <T extends TableField>({ value }: TableFieldProps<T>) => {
  const { key, value: fieldValue } = value;
  if (typeof fieldValue === "string" && key === "value") {
    return (
      <TableFieldStyle fieldKey={key} bold={Number(fieldValue) >= 50}>
        {TableFieldConvertor(key, fieldValue)}
      </TableFieldStyle>
    );
  }

  if (typeof fieldValue === "string" && key === "patientNum") {
    const copyRef = useRef<HTMLDivElement>();
    const handleCopyClipBoard = async () => {
      try {
        await navigator.clipboard.writeText(copyRef.current.innerText);
        alert("클립보드에 복사되었습니다.");
      } catch (error) {
        alert("클립보드 복사에 실패하였습니다.");
      }
    };
    return (
      <TableFieldStyle fieldKey={key}>
        <div ref={copyRef}>{TableFieldConvertor(key, fieldValue)}</div>
        <TableCopyButton onClick={handleCopyClipBoard}>복사</TableCopyButton>
      </TableFieldStyle>
    );
  }
  /**
   * string type
   */
  if (typeof fieldValue === "string") {
    return (
      <TableFieldStyle fieldKey={key}>
        {TableFieldConvertor(key, fieldValue)}
      </TableFieldStyle>
    );
  }
  /**
   * date type
   */
  return (
    <TableFieldStyle fieldKey={key}>
      {TimeConvertor(fieldValue as Date)}
    </TableFieldStyle>
  );
};

export default Object.assign(Table, { Header, Body, Row, Field });
