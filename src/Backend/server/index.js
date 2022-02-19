const express = require('express');
const server = express();
const cors = require('cors')
const cassandra = require('../config/cassandraConfig')
const { Vehiculos, Infracciones, Propietarios, Matriculas } = require('../models/')

server.use(express.json());
server.use(cors());

//ENDPOINTS VEHICULOS
server.get("/api/obtenerVehiculos", async (req, res) => {
    let vehiculos = await Vehiculos.find()
    return res.send({ data: vehiculos })
})

server.get("/api/obtenerVehiculo/:placa", async (req, res) => {
    const { placa } = req.params;
    let vehiculo = await Vehiculos.find({ placa: { $regex: new RegExp(placa, "i") } })
    return res.send({ data: vehiculo })
})

server.post("/api/guardarVehiculo/", async (req, res) => {
    const { placa, tipoVehiculo, marca: marca, fechaMatricula: fechaMatricula, propietario: propietario } = req.body
    let vehiculoGuardado = await Vehiculos.create({ placa: placa, tipoVehiculo: tipoVehiculo, marca: marca, fechaMatricula:  fechaMatricula, propietario: propietario })
    return res.send({ data: vehiculoGuardado })
})

//ENDPOINTS INFRACCIONES
server.get("/api/obtenerInfracciones", async (req, res) => {
    let infracciones = await Infracciones.find();
    return res.send({ data: infracciones })
})

server.get("/api/obtenerInfraccion/:id", async (req, res) => {
    const { id } = req.params;
    let infraccion = await Infracciones.findById(id)
        .catch(console.log)
    return res.send({ data: infraccion })
})

server.post("/api/guardarInfraccion/", async (req, res) => {
    const { fecha, tipoAgente, placa } = req.body
    let infraccionGuardada = await Infracciones.create({
        fecha: fecha,
        tipoAgente: tipoAgente,
        placa: placa
    })
    return res.send({ data: infraccionGuardada })
})

//ENDPOINTS PROPIETARIOS
server.get("/api/obtenerPropietarios", async (req, res) => {
    let propietarios = await cassandra.consultar()
    debugger
    return res.send({ data: propietarios })
})

server.get("/api/obtenerPropietario/:identificacion", async (req, res) => {
    const { identificacion } = req.params;
    propietario = await cassandra.consultarUno(identificacion)
    return res.send({ data: propietario })
})

server.post("/api/guardarPropietario/", async (req, res) => {
    const { nombre, identificacion, direccion, naturaleza } = req.body
    propietarioGuardado = await cassandra.guardar(nombre, identificacion, direccion, naturaleza)
    return res.send({ data: propietarioGuardado })
})

module.exports = server;

