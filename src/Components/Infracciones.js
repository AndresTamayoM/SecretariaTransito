import React from "react";
import {useEffect} from 'react'
import logic from '../Backend/logic/logic'



const Infracciones = ({ infracciones, guardarInfracciones }) => {

  useEffect(()=>{
    logic.consultarInfracciones()
        .then(res => res.json())
        .then(res => guardarInfracciones(res.data))
  })
  
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Fecha de infraccion</th>
          <th scope="col">Placa vehiculo</th>
          <th scope="col">Tipo agente</th>
        </tr>
      </thead>

      <tbody>
        {infracciones.map((infracciones) => (
          <tr>
            <td>{infracciones.fecha}</td>
            <td>{infracciones.placa}</td>
            <td>{infracciones.tipoAgente}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Infracciones;