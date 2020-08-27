import React, { Fragment } from "react";
import ElementoLista from "./ElementoLista";
import ListaComponentes from "./ListaComponentes";
const Lista = (props) => {
  return (
    <Fragment>
      <ElementoLista></ElementoLista>

      <ul className="w-70">
        {
        props.nombreinventado.map((item, indice)=><ListaComponentes key={indice} nombreitem={item}></ListaComponentes>)
        }
      </ul>
    </Fragment>
  );
};

export default Lista;
