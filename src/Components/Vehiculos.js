import React, { useEffect } from "react";
import logic from '../Backend/logic/logic';

const Vehiculos = ({ vehiculos, guardarVehiculos }) => {

  useEffect(() => {
    logic.consultarVehiculos()
      .then(res => res.json())
      .then(res => guardarVehiculos(res.data))
  })

  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Placa</th>
          <th scope="col">Marca</th>
          <th scope="col">Fecha de matricula</th>
          <th scope="col">Propietario</th>
          <th scope="col">Tipo de vehiculo</th>
        </tr>
      </thead>

      <tbody>
        {vehiculos.map((vehiculo) => (
          <tr>
            <td>{vehiculo.placa}</td>
            <td>{vehiculo.marca}</td>
            <td>{vehiculo.fechaMatricula}</td>
            <td>{vehiculo.propietario}</td>
            <td>{vehiculo.tipoVehiculo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Vehiculos;
