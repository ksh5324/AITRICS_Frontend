import { useQuery } from "@tanstack/react-query";
import { getPatientList } from "../repository/patient.repository";

export const usePatientQuery = () =>
  useQuery(["patient/list"], getPatientList, {
    cacheTime: 600,
    staleTime: 300,
  });
