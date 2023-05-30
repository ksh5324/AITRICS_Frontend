import { PatientTableField } from "../components/PatientTable/types";

export const patientHeaderData: Record<PatientTableField, string> =
  Object.freeze({
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
