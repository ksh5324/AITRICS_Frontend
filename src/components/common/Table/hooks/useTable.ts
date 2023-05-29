import { useState, MouseEventHandler, ChangeEventHandler } from "react";
import { EachFieldHide } from "../types";

const useTable = () => {
  const [field, setField] = useState<EachFieldHide>({
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
  });
  const hiddenOrVisibleField: ChangeEventHandler<HTMLInputElement> = (e) => {
    setField((prev) => ({ ...prev, [e.target.value]: !prev[e.target.value] }));
  };
  return { field, hiddenOrVisibleField };
};

export default useTable;
