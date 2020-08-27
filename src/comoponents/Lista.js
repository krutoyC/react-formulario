import React, { Fragment } from "react";
import ElementoLista from "./ElementoLista";
import ListaComponentes from "./ListaComponentes";
const Lista = (props) => {
  return (
    <Fragment>
      <ElementoLista className="w-70 d-flex justify-content-center"></ElementoLista>

      <ul className="w-70 text-center ">
        {
        props.nombreinventado.map((item, indice)=><ListaComponentes key={indice} nombreitem={item} borrarTareas={props.borrarTareas}></ListaComponentes>)
        }
      </ul>
    </Fragment>
  );
};

export default Lista;
