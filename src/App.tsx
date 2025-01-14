import PacientForm from "./components/PacientForm";
import PacientList from "./components/PacientList";

export default function App() {

  
  return (
    <div className="container py-20 mx-auto">
      <h1 className=" text-4xl font-black m-auto text-center">
        Seguimiento de Pacientes{" "}
        <span className=" text-indigo-900">Veterinaria</span>
      </h1>
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-4">
        <section className=" ">
          <PacientForm />
        </section>
        <section className=" ">
          <PacientList />
        </section>
      </main>
    </div>
  );
}
