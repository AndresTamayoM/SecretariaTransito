import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

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

const FormularioPropietarios = ({guardarInformacionPropietarios}) => {
  const [datos, guardarDatos] = useState({
    identificacion: "",
    nombre: "",
    direccion: "",
    naturaleza: "",
  });

  const { identificacion, nombre, direccion, naturaleza } = datos;

  const obtenerInformacion = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const agregarPropietario = (e) => {
    e.preventDefault();

    guardarInformacionPropietarios(datos);

    //Reiniciar el from
    guardarDatos({
      identificacion: "",
      nombre: "",
      direccion: "",
      naturaleza: ""
    })
  };

  return (
    <form onSubmit={agregarPropietario}>
      <Campo className="row">
        <Label className="col-sm-2 col-form-label">Identificacion:</Label>
        <input
          className="col-3"
          type="text"
          name="identificacion"
          value={identificacion}
          onChange={obtenerInformacion}
          required
        />
        <Label className="col-sm-2 col-form-label">Nombre:</Label>
        <input
          className="col-3"
          type="text"
          name="nombre"
          value={nombre}
          onChange={obtenerInformacion}
          required
        />
      </Campo>
      <Campo className="row">
        <Label className="col-sm-2 col-form-label">Direccion:</Label>
        <input
          className="col-3"
          type="text"
          name="direccion"
          value={direccion}
          onChange={obtenerInformacion}
          required
        />
      </Campo>
      <Campo>
        <Label>Tipo propietario:</Label>
        <InputRadio
          type="radio"
          name="naturaleza"
          value="persona"
          checked={naturaleza === "persona"}
          onChange={obtenerInformacion}
        />
        Persona
        <InputRadio
          type="radio"
          name="naturaleza"
          value="empresa"
          checked={naturaleza === "empresa"}
          onChange={obtenerInformacion}
        />
        Empresa
      </Campo>
      <Boton type="submit">Guardar informacion del Propietario</Boton>
    </form>
  );
};

export default FormularioPropietarios;
