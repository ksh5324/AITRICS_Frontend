import axios from "axios";
import { TableFieldType } from "../components/common/Table/types";

export const getPatientList = async () => {
  const {
    data,
  }: {
    data: {
      code: number;
      data: { table: TableFieldType[] };
    };
  } = await axios.get(
    "https://file.notion.so/f/s/5c2467be-1290-4b82-a5da-d5e3becba4cb/data.json?id=8f46e8f6-53ac-40a3-ace0-763759816314&table=block&spaceId=daa21fe6-8678-40ae-a1cc-7ff5fa82684d&expirationTimestamp=1685671761139&signature=XfZ9b-y01UgyKeYzJmCFOEOAq601YE_0ZX6NIsTo-O8&downloadName=data.json"
  );

  const stack = [];
  return data.data.table
    .sort((a, b) => (new Date(a.observedAt) > new Date(b.observedAt) ? -1 : 1))
    .filter((v) => {
      if (stack.includes(v.patient)) {
        return false;
      }
      stack.push(v.patient);
      return true;
    })
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
};
