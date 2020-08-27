import React from 'react';

const ListaComponentes = (props) => {
    return (
       
    <li className="list-group-item d-flex justify-content-between ">{props.nombreitem}<booton className="btn btn-dark" onClick={()=>{props.borrarTareas(props.nombreitem)}}>x</booton></li>
      
    );
};

export default ListaComponentes;