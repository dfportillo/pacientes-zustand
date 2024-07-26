import { usePatientsStore } from "../store/store"
import PatientDetails from "./PatientDetails";

export default function PatientsList() {


    const {
        patients
    } = usePatientsStore();

    return (
        <div className=" md:w-1/2 md:h-screen lg:w-3/5 mx-5 overflow-y-scroll">
            {patients.length ?
                (<>
                    <h2 className=" font-black text-3xl text-center">listado de pacientes</h2>
                    <p className=" text-lg mt-5 mb-10 text-center">
                        administra tus {''}
                        <span className=" text-indigo-600 font-bold">
                            pacientes y citas
                        </span>
                    </p>
                    {
                        (patients.map(patient =>(
                            <PatientDetails
                                key={patient.id}
                                patient={patient}
                            />
                        )))
                    }
                </>) :

                (<>
                    <h2 className=" text-3xl font-black text-center">no hay pacientes</h2>
                    <p className=" text-lg mt-5 mb-10 text-center">
                        comienza agregando pacientes {''}
                        <span className=" text-indigo-600 font-bold">
                            y apareceran en este lugar
                        </span>
                    </p>
                </>)}

        </div>
    )
}
