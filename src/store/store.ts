import { create } from "zustand"
import { DraftPatient, Patient } from "../types/indes"
import { v4 as uuidv4 } from "uuid"


type PatientStore = {
    patients: Patient[]  //Array de pacientes
    activePatient: Patient["id"]
    addPatient: (data: DraftPatient) => void //Funcion para agregar pacientes
    deletePatient: (id: Patient["id"]) => void // Funcion para eliminar pacientes
    getPatientId: (id: Patient["id"]) => void // Funcion para extraer paciente para modificarlo
    updatePatient: (data: DraftPatient) => void // Funcion para modificar paciente

}
const createPatient = (patient: DraftPatient): Patient => {
    return {
        ...patient, id: uuidv4()
    }

}
export const usePatienteStore = create<PatientStore>((set) => ({
    patients: [],
    activePatient:"" ,

    addPatient: data => {

        const newPatiente = createPatient(data)
        set((state) => ({
            patients: [...state.patients, newPatiente]
        }))
       
    },

    deletePatient: (id) => {
        set((state) => ({
            patients: state.patients.filter((i) => i.id !== id)
        })
        )
    },
    getPatientId: (id) => {
  
        
        set(() => ({
            activePatient: id
        }))
    }, 
    updatePatient: (data) => {
        set((state) => ({
            patients: state.patients.map((i) => i.id === state.activePatient ? {
                id: state.activePatient, ...data
            } : i ),
            activePatient: ""
        }))
    }


}))