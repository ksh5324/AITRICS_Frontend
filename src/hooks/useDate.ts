import { useEffect, useState } from "react";
import { TableFieldType } from "../components/common/Table/types";

const useDate = () => {
  const [date, setDate] = useState<string>("");
  const [realDate, setRealDate] = useState<string>("");

  useEffect(() => {
    if (date.length === 14) {
      setRealDate(
        `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(
          6,
          8
        )} ${date.slice(8, 10)}:${date.slice(10, 12)}:${date.slice(12.14)}`
      );
    }
    if (date.length === 0) {
      setRealDate("");
    }
  }, [date]);

  useEffect(() => {
    console.log(realDate);
  }, [realDate]);

  const filter = (data: TableFieldType[]): TableFieldType[] => {
    return data.filter(
      (v: TableFieldType) =>
        new Date(realDate || "2023-01-01 00:00:00") < new Date(v.observedAt)
    );
  };

  return { date, setDate, filter };
};

export default useDate;
