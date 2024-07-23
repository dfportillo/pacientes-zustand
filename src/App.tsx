import PatientForm from "./components/PatientForm"
import PatientsList from "./components/PatientsList"

function App() {


  return (
    <>
      <div className=" container mx-auto mt-20">
        <h1 className=" font-black text-5xl text-center first-letter:uppercase">
          seguimiento de pacientes {''}
          <span className=" text-indigo-700">
            Veterinaria
          </span>
        </h1>
        <div className=" mt-12 md:flex">
          <PatientForm />
          <PatientsList />

        </div>
      </div>
      
    </>
  )
}

export default App
