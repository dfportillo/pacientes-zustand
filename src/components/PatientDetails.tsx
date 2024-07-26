import { usePatientsStore } from "../store/store";
import { Patient } from "../types";
import PatientItemDetail from "./PatientItemDetail";

export type PatientDetailsProps = {
    patient:Patient
}


export default function PatientDetails({patient}:PatientDetailsProps) {

    const deletePatientStorage = usePatientsStore((state) => state.deletePatient)
    
    return (
        <div className=" mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientItemDetail label={'ID'} data={patient.id}/> 
            <PatientItemDetail label={'nombre'} data={patient.name}/> 
            <PatientItemDetail label={'dueño'} data={patient.caretaker}/> 
            <PatientItemDetail label={'email dueño'} data={patient.email}/> 
            <PatientItemDetail label={'fecha de ingreso'} data={patient.date.toString()}/> 
            <PatientItemDetail label={'sintomas'} data={patient.symptoms}/>
            <div className=" flex justify-between gap-3 mt-10">
                <button
                    className=" py-2 px-6 bg-indigo-600 hover:bg-indigo-700 font-bold text-white uppercase rounded-lg"
                >editar
                </button>
                <button
                    className=" py-2 px-6 bg-red-600 hover:bg-red-700 font-bold text-white uppercase rounded-lg"
                    onClick={() => deletePatientStorage(patient.id)}
                >eliminar
                </button>
            </div>
        </div>
    )
}
