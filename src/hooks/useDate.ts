import { useEffect, useState } from "react";

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
  }, [date]);

  useEffect(() => {
    console.log(realDate);
  }, [realDate]);

  return { realDate, date, setDate };
};

export default useDate;
