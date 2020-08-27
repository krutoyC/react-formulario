import React,{useState, Fragment, useEffect} from 'react';
import Lista from './Lista';


 

const Formulario = () => {
//aqui puedo escribir js
//aqui creo el state
const [agregarTareas, setagregarTarea] = useState([]);
const [tareaUnica, setTareaUnica] = useState("");
const [inicio, setinicio] = useState(true)

//aqui usamos useEffect para utilizar local storage CICLO DE VIDA DE UN COMPONENTE
useEffect(()=>{
    if(inicio){
        console.log("hola useEffect");
        let tareasGuardadas = JSON.parse(localStorage.getItem("keylistatareas"));
        setinicio(false);
        setagregarTarea(tareasGuardadas);
    }
        console.log("componente actualizado");
        localStorage.setItem("keylistatareas", JSON.stringify(agregarTareas));
        

},[tareaUnica, agregarTareas])


const handleSubmit = (e) => {
    e.preventDefault();
    console.log("saludos de handleSubmit");
    let arregloProvisorio= agregarTareas;
    arregloProvisorio.push(tareaUnica);
    setagregarTarea (arregloProvisorio);
    setTareaUnica("");

}

const borrarTareas = (nombreinventadodos) =>{
    let arregloDeBorrado= agregarTareas.filter((unatareDelArreglodeTarea)=> unatareDelArreglodeTarea!==nombreinventadodos);

    setagregarTarea(arregloDeBorrado);
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
<section className=" w-70 " >
    
    <Lista nombreinventado={agregarTareas} borrarTareas={borrarTareas}>

    </Lista>

</section>

        </Fragment>
    );
};

export default Formulario;