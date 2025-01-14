import { create } from "zustand"
import { DraftPatient, Patient } from "../types/indes"
import { v4 as uuidv4 } from "uuid"

type PatientStore = {
    patients: Patient[]  //Array de pacientes
    addPatient: (data: DraftPatient) => void //Funcion para agregar pacientes
}
const createPatient = (patient: DraftPatient): Patient => {
    return {
        ...patient, id: uuidv4()
    }

}
export const usePatienteStore = create<PatientStore>((set) => ({
    patients: [],

    addPatient: data => {

        const newPatiente = createPatient(data)
        set((state) => ({
            patients: [...state.patients, newPatiente]
        }))
    }
}))