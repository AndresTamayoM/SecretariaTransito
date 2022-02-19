import React, { useState } from "react";
import styled from "@emotion/styled";
//import server from "../Backend/server/index.js";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 50px 100px;
  padding: 0 50px 50 px 0;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;


const FormularioVehiculos = ({guardarInformacionVehiculo}) => {
  const [datos, guardarDatos] = useState([{
      placa: '',
      marca: '',
      fechaMatricula: '',
      propietario: '',
      tipoVehiculo: ''
  }]);

  const { placa, marca, fechaMatricula, propietario, tipoVehiculo } = datos;

  const obtenerInformacion = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const agregarVehiculo = (e) => {
    e.preventDefault();
    guardarInformacionVehiculo(datos);
  };

  return (

    <form onSubmit={agregarVehiculo}>

      <Campo className="row">
        <Label className="col-sm-2 col-form-label">Placa:</Label>
        <input className="col-3"
          type="text"
          name="placa"
          value={placa}
          onChange={obtenerInformacion}
          required
        />
        <Label className="col-sm-2 col-form-label">Marca:</Label>
        <input className="col-3"
          type="text"
          name="marca"
          value={marca}
          onChange={obtenerInformacion}
          required
        />
        </Campo>

        <Campo className="row">
        <Label className="col-sm-2 col-form-label">Fecha de matricula:</Label>
        <input className="col-3"
          type="date"
          name="fecha"
          value={fechaMatricula}
          onChange={obtenerInformacion}
          required
        />
        <Label className="col-sm-2 col-form-label">Propietario:</Label>
        <input className="col-3"
          type="text"
          name="propietario"
          value={propietario}
          onChange={obtenerInformacion}
          required
        />
      </Campo>

      <Campo>
        <Label>Tipo de vehiculo</Label>
        <InputRadio
          type="radio"
          name="tipoVehiculo"
          value="automovil"
          checked={tipoVehiculo === "automovil"}
          onChange={obtenerInformacion}
        />Automovil

        <InputRadio
          type="radio"
          name="tipoVehiculo"
          value="moto"
          checked={tipoVehiculo === "moto"}
          onChange={obtenerInformacion}
        />Moto
        <InputRadio
          type="radio"
          name="tipoVehiculo"
          value="carroPesado"
          checked={tipoVehiculo === "carroPesado"}
          onChange={obtenerInformacion}
        />Carro pesado
      </Campo>

      <Boton type="submit">Guardar informacion del Vehiculo</Boton>
    </form>
  );
};

export default FormularioVehiculos;
