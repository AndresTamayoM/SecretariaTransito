import React, {useEffect} from "react";
import logic from '../Backend/logic/logic'

const Propietarios = ({ propietarios, guardarPropietarios }) => {
  useEffect(()=> {
    logic.consultarPropietarios()
    .then(res => res.json())
    .then(res => guardarPropietarios(res.data))
  })
  
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Identificacion</th>
          <th scope="col">Nombre</th>
          <th scope="col">Direccion</th>
          <th scope="col">Naturaleza</th>
        </tr>
      </thead>

      <tbody>
        {propietarios.map((propietario) => (
          <tr>
            <td>{propietario.identificacion}</td>
            <td>{propietario.nombre}</td>
            <td>{propietario.direccion}</td>
            <td>{propietario.naturaleza}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Propietarios;