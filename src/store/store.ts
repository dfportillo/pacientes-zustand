import { create } from "zustand";
import {createJSONStorage, devtools,persist} from 'zustand/middleware'
import { DrawftPatient, Patient } from "../types";
import { v4 as uuidv4 } from 'uuid';

export type PatientStateProps = {
    patients:Patient[];
    activeID: Patient['id'];
    addPatient:(data:DrawftPatient) => void;
    deletePatient:(id:Patient['id']) => void;
    getPatientByID:(id:Patient['id']) => void;
    uppdatePatient:(data:DrawftPatient) => void;
}

const createPatient = (patient:DrawftPatient):Patient =>{
    return {...patient,id:uuidv4()}
}

export const usePatientsStore = create<PatientStateProps>()
(devtools
    (persist(
        (set)=>({
        patients:[],
        activeID:'',
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
        },
        getPatientByID: (id) => {
            set(() => ({
                activeID:id
            }))
        },
        uppdatePatient: (data) =>{
            set((state)=>({
                patients:state.patients.map(patient => patient.id === state.activeID ? {id:state.activeID,...data} :patient),

                activeID:''
        
            })) 
        }
    }),{
        name:'patientStorage',
    })
))