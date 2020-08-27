import React from 'react';
import './App.css';
import Titulo from './comoponents/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Subt from './comoponents/Subt';
import Formulario from './comoponents/Formulario';
import Ejercicio from './comoponents/Ejercicio';

// import Subt from './comoponents/Subt';

// const Bienvenido= props =>{
//   return(

//     <h1>Bienvenido, {props.name}</h1>
//   )
// }

// export default bienvenido;

function App() {

  return (
    <div className="container d-flex-column justify-content-center aligne-content-center">
<Titulo></Titulo>
<hr></hr>
<Subt propiedad=" Esto es un props"></Subt>
<hr></hr>
<Formulario></Formulario>




<hr></hr>
<hr></hr>
<Ejercicio></Ejercicio>


      {/* <Bienvenido name="Rolling-Code"></Bienvenido> */}
    </div>
  );
}


export default App;
