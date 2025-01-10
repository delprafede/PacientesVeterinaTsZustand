const NewPacients = () => {
  return (
    <div className=" flex flex-col items-center">
      <h2 className=" text-2xl font-bold text-center mb-3">
        Seguimientos Pacientes
      </h2>
      <p>
        Añade Pacientes Y{" "}
        <span className=" text-indigo-700">Administralos</span>
      </p>
      <form className=" w-full bg-white shadow-lg rounded-lg space-y-3 p-5 mt-5">
     
        <div>
          <label
          className=" font-bold uppercase mb-2" htmlFor="paciente">Paciente</label>
          <input className="w-full p-2  border border-gray-100 rounded-sm" type="text" id="paciente" placeholder="Nombre del Paciente" />
        </div>
        <div >
          <label 
          className=" font-bold uppercase"
          htmlFor="propietario">Propíetario</label>
          <input
           className="w-full p-3  border border-gray-100" 
            type="text"
            id="propietario"
            placeholder="Nombre del Propietario"
          />
        </div>
        <div>
          <label
          className=" font-bold uppercase" htmlFor="email">Email</label>
          <input 
           className="w-full p-3  border border-gray-100" 
          type="email" id="email" placeholder="Email de Registro" />
        </div>
        <div>
          <label 
          className="font-bold uppercase"
          htmlFor="date">Fecha de alta</label>
          <input
          className="w-full p-3  border border-gray-100"
          type="date" id="date" />
        </div>
        <div>
          <label className=" font-bold uppercase" htmlFor="sintomas">Sintomas</label>
          <input
          className="w-full p-3  border border-gray-100"
            type="text"
            id="sintomas"
            placeholder="Sintomas del Paciente"
          />
        </div>
      </form>
    </div>
  );
};

export default NewPacients;
// export default function PatientForm() {

//     return (
//       <div className="md:w-1/2 lg:w-2/5 mx-5">
//           <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

//           <p className="text-lg mt-5 text-center mb-10">
//               Añade Pacientes y {''}
//               <span className="text-indigo-600 font-bold">Administralos</span>
//           </p>

//           <form
//               className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
//               noValidate
//           >
//                 <div className="mb-5">
//                     <label htmlFor="name" className="text-sm uppercase font-bold">
//                         Paciente
//                     </label>
//                     <input
//                         id="name"
//                         className="w-full p-3  border border-gray-100"
//                         type="text"
//                         placeholder="Nombre del Paciente"
//                     />
//                 </div>

//                 <div className="mb-5">
//                   <label htmlFor="caretaker" className="text-sm uppercase font-bold">
//                       Propietario
//                   </label>
//                   <input
//                       id="caretaker"
//                       className="w-full p-3  border border-gray-100"
//                       type="text"
//                       placeholder="Nombre del Propietario"
//                   />
//                 </div>

//               <div className="mb-5">
//                 <label htmlFor="email" className="text-sm uppercase font-bold">
//                     Email
//                 </label>
//                 <input
//                     id="email"
//                     className="w-full p-3  border border-gray-100"
//                     type="email"
//                     placeholder="Email de Registro"
//                 />
//               </div>

//               <div className="mb-5">
//                   <label htmlFor="date" className="text-sm uppercase font-bold">
//                       Fecha Alta
//                   </label>
//                   <input
//                       id="date"
//                       className="w-full p-3  border border-gray-100"
//                       type="date"
//                   />
//               </div>

//               <div className="mb-5">
//                   <label htmlFor="symptoms" className="text-sm uppercase font-bold">
//                   Síntomas
//                   </label>
//                   <textarea
//                       id="symptoms"
//                       className="w-full p-3  border border-gray-100"
//                       placeholder="Síntomas del paciente"
//                   ></textarea>
//               </div>

//               <input
//                   type="submit"
//                   className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
//                   value='Guardar Paciente'
//               />
//           </form>
//       </div>
//     )
//   }
