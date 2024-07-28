import PatientForm from "./components/PatientForm";
import PatientsList from "./components/PatientsList";
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      <ToastContainer 
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default App
