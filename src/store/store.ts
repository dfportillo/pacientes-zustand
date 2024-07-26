import { create } from "zustand";
import { DrawftPatient, Patient } from "../types";
import { v4 as uuidv4 } from 'uuid';

export type PatientStateProps = {
    patients:Patient[];
    addPatient:(data:DrawftPatient) => void;
    deletePatient:(id:Patient['id']) => void;
}

const createPatient = (patient:DrawftPatient):Patient =>{
    return {...patient,id:uuidv4()}
}

export const usePatientsStore = create<PatientStateProps>((set)=>({
    patients:[],
    addPatient:(data) =>{
        // puedes colocar logica js 

        const newPatient = createPatient(data)

        set((state)=>({
            patients:[...state.patients,newPatient]
        }))
    },
    deletePatient: (id) => {
        
        set((state) =>({
            patients: state.patients.filter( patientDel => patientDel.id !== id)
        }))
    }
}))