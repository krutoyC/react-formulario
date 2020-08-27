import React,{useState} from 'react';

const Ejercicio = () => {
//aqui puedo escribir js


//aqui me creo el state
const[agregarTexto, setagregarTexto] = useState("");
const handleClick = (e) =>{
    console.log("mensaje desde la funcion");
    if(agregarTexto.length===0){

        setagregarTexto(`TXTO AGREGADO por ${carlos}`)
    }else{
        setagregarTexto("");
    }
    

}

const carlos = "CARLOS RODRIGUEZ";

    return (



        <div>
            <h1>Agregar texto aqui</h1>
    <h3 id="agregaralgo">Aprieta boton: {agregarTexto} </h3>
            
        <button className="btn btn-dark" onClick={handleClick}>SALUDOS</button>
        </div>
    );
};


export default Ejercicio;