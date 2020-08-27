import React,{useState, Fragment} from 'react';
import Lista from './Lista';


 

const Formulario = () => {
//aqui puedo escribir js
//aqui creo el state
const [agregarTareas, setagregarTarea] = useState([]);
const [tareaUnica, setTareaUnica] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("saludos de handleSubmit");
    let arregloProvisorio= agregarTareas;
    arregloProvisorio.push(tareaUnica);
    setagregarTarea (arregloProvisorio);
    setTareaUnica("");

}



    return (

        <Fragment>

        <form className="w-70 d-flex justify-content-center" onSubmit={handleSubmit}>
        <div className="form-group">
        <input 
        className="form-group"
        tipe="text"
        placeholder="agregar texto"
        onChange={(e)=>setTareaUnica(e.target.value)}
        value={tareaUnica}
        ></input>
        <button className="btn btn-success"
        tipe="submit"
        >AGREGAR</button>
            
        </div>
        </form>
<section className=" w-70" >
    
    <Lista nombreinventado={agregarTareas}>

    </Lista>

</section>

        </Fragment>
    );
};

export default Formulario;