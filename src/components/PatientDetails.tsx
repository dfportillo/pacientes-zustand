import { Bounce, toast } from "react-toastify";
// ----------------------------------------------
import { usePatientsStore } from "../store/store";
import { Patient } from "../types";
import PatientItemDetail from "./PatientItemDetail";

export type PatientDetailsProps = {
    patient:Patient
}


export default function PatientDetails({patient}:PatientDetailsProps) {

    const deletePatientStorage = usePatientsStore((state) => state.deletePatient);
    const getPatientByID= usePatientsStore((state) => state.getPatientByID);
    
    const handleClick = () => {
        deletePatientStorage(patient.id);

        toast.error('paciente eliminado 🐶', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
    
    return (
        <div className=" mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientItemDetail label={'ID'} data={patient.id}/> 
            <PatientItemDetail label={'nombre'} data={patient.name}/> 
            <PatientItemDetail label={'dueño'} data={patient.caretaker}/> 
            <PatientItemDetail label={'email dueño'} data={patient.email}/> 
            <PatientItemDetail label={'fecha de ingreso'} data={patient.date.toString()}/> 
            <PatientItemDetail label={'sintomas'} data={patient.symptoms}/>
            <div className=" flex flex-col justify-between lg:flex-row gap-5 mt-10">
                <button
                    className=" py-2 px-6 bg-indigo-600 hover:bg-indigo-700 font-bold text-white uppercase rounded-lg"
                    onClick={() => getPatientByID(patient.id)}
                >editar
                </button>
                <button
                    className=" py-2 px-6 bg-red-600 hover:bg-red-700 font-bold text-white uppercase rounded-lg"
                    onClick={handleClick}
                >eliminar
                </button>
            </div>
        </div>
    )
}
