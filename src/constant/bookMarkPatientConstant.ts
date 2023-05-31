import { PatientTableField } from "../components/PatientTable/types";

export const bookMarkPatientHeaderData: Record<
  PatientTableField,
  { value: string; sort: boolean }
> = Object.freeze({
  state: { value: "상태", sort: false },
  patient: { value: "개인정보", sort: false },
  patientNum: { value: "환자번호", sort: false },
  location: { value: "위치", sort: false },
  date: { value: "입원일", sort: false },
  department: { value: "해당과", sort: false },
  doctorInCharge: { value: "주치의", sort: false },
  diagnosis: { value: "진단명", sort: false },
  type: { value: "관측 데이터 종류", sort: false },
  value: { value: "관측 데이터", sort: false },
  observedAt: { value: "관측 일자", sort: false },
});
