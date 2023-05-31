import React, { PropsWithChildren, useRef, useContext } from "react";
import { TableKinds } from "../../../@types/tableKindsType";
import { saveStorage } from "../../../lib/bookmark/bookmark";
import { TableFieldConvertor } from "../../../lib/convertor/TableFieldCovertor";
import { TimeConvertor } from "../../../lib/convertor/TimeConvertor";
import { PatientTableField } from "../../PatientTable/types";
import {
  TableBody,
  TableContainer,
  TableFieldStyle,
  TableHeader,
  TableRow,
  TableCopyButton,
  BookmarkButton,
} from "./style";
import { TableFieldProps, TableRowProps, PropsContextType } from "./types";

const Table = <T extends TableKinds>({
  children,
  Context,
  value,
}: PropsWithChildren<PropsContextType<T> & { value: T }>) => {
  return (
    <Context.Provider value={value}>
      <TableContainer>{children}</TableContainer>
    </Context.Provider>
  );
};

const Header = <T extends TableKinds, K extends PatientTableField>({
  Context,
  header,
  setSort,
  bookmark,
}: PropsContextType<T> & {
  header: Record<K, { value: string; sort: boolean }>;
  setSort?: (data: string) => void;
}) => {
  const { field } = useContext(Context);
  const headerArray = Object.keys(header);

  return (
    <TableHeader>
      {bookmark && (
        <TableFieldStyle fieldKey="bookmark" key={Math.random()}>
          북마크
        </TableFieldStyle>
      )}
      {headerArray
        .filter((v) => field[v])
        .map((v: PatientTableField) => (
          <TableFieldStyle key={v} fieldKey={v}>
            {header[v].value}
            {header[v].sort && <button onClick={() => setSort(v)}>sort</button>}
          </TableFieldStyle>
        ))}
    </TableHeader>
  );
};

const Body = ({ children }: PropsWithChildren) => {
  return <TableBody>{children}</TableBody>;
};

const Row = <T extends TableKinds, K extends PatientTableField>({
  item,
  Context,
  bookmark,
}: TableRowProps<T>) => {
  const { field } = useContext(Context);
  const itemToArray = Object.keys(item);

  return (
    <TableRow>
      {bookmark && (
        <TableFieldStyle fieldKey="bookmark" key={Math.random()}>
          <BookmarkButton onClick={() => saveStorage(bookmark, item)}>
            북마크
          </BookmarkButton>
        </TableFieldStyle>
      )}
      {itemToArray
        .filter((v) => field[v])
        .map((key: K) => (
          <Field value={{ key, value: item[key] }} key={key} />
        ))}
    </TableRow>
  );
};

const Field = <T extends PatientTableField>({ value }: TableFieldProps<T>) => {
  const { key, value: fieldValue } = value;

  if (key === "value") {
    return (
      <TableFieldStyle fieldKey={key} bold={Number(fieldValue) >= 50}>
        {fieldValue as string}
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
      {TimeConvertor(new Date(fieldValue) as Date)}
    </TableFieldStyle>
  );
};

export default Object.assign(Table, { Header, Body, Row, Field });
