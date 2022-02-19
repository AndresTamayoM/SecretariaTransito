import React, { useState } from "react";
import Header from "./Components/Header";
import Vehiculos from "./Components/Vehiculos";
import Infracciones from "./Components/Infracciones";
import Propietarios from "./Components/Propietarios";
import FormularioVehiculos from "./Components/FormularioVehiculos";
import FormularioInfracciones from "./Components/FormularioInfracciones";
import FormularioPropietarios from "./Components/FormularioPropietarios";
import Navegacion from "./Components/Navegacion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";
import logic from './Backend/logic/logic'

//styled component

const Contenedor = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  let vehiculosIniciales = [];
  let infraccionesIniciales = [];
  let propietariosIniciales = [];

  if (!vehiculosIniciales) {
    vehiculosIniciales = [];
  }
  if (!infraccionesIniciales) {
    infraccionesIniciales = [];
  }
  if (!propietariosIniciales) {
    propietariosIniciales = [];
  }

  const [vehiculos, guardarVehiculos] = useState(vehiculosIniciales);
  const [infracciones, guardarInfracciones] = useState(infraccionesIniciales);
  const [propietarios, guardarPropietarios] = useState(propietariosIniciales);

  const guardarInformacionVehiculo = (vehiculoData_matriculaData) => {
    logic.guardarVehiculo(vehiculoData_matriculaData)
    guardarVehiculos([])
  };
  const guardarInformacionInfracciones = (infraccion) => {
    logic.guardarInfraccion({ infraccion })
    guardarInfracciones([])
  };
  const guardarInformacionPropietarios = (propietario) => {
    logic.guardarPropietario(propietario)
    guardarPropietarios([])
  };

  return (
    <Router>
      <Contenedor>
        <Header titulo="Secretaria de Transito" />

        <Navegacion />

        <Switch>
          <Route path="/Vehiculos">
            <ContenedorFormulario>
              <FormularioVehiculos
                guardarInformacionVehiculo={guardarInformacionVehiculo}
              />
            </ContenedorFormulario>

            <ContenedorFormulario>
              <Vehiculos vehiculos={vehiculos} guardarVehiculos={guardarVehiculos} />
            </ContenedorFormulario>
          </Route>

          <Route path="/Infracciones">
            <ContenedorFormulario>
              <FormularioInfracciones
                guardarInformacionInfracciones={guardarInformacionInfracciones} />
            </ContenedorFormulario>

            <ContenedorFormulario>
              <Infracciones infracciones={infracciones} guardarInfracciones={guardarInfracciones} />
            </ContenedorFormulario>

          </Route>

          <Route path="/Propietarios">
            <ContenedorFormulario>
              <FormularioPropietarios
                guardarInformacionPropietarios={guardarInformacionPropietarios} />
            </ContenedorFormulario>

            <ContenedorFormulario>
              <Propietarios propietarios={propietarios} guardarPropietarios={guardarPropietarios} />
            </ContenedorFormulario>
          </Route>
        </Switch>
      </Contenedor>
    </Router>
  );
}

export default App;
