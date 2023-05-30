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
    "https://file.notion.so/f/s/5c2467be-1290-4b82-a5da-d5e3becba4cb/data.json?id=8f46e8f6-53ac-40a3-ace0-763759816314&table=block&spaceId=daa21fe6-8678-40ae-a1cc-7ff5fa82684d&expirationTimestamp=1685493930677&signature=mulHZL4K3A3iVrYCs-sn2Bc4FqrdhNkkDiaAKhcxITs&downloadName=data.json"
  );
  return data.data.table;
};
