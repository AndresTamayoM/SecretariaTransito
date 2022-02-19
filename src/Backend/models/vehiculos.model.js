const mongoose = require('mongoose')
const { Schema } = mongoose;

const VehiculosSchema = new Schema({
    placa: { type: String },
    tipoVehiculo: { type: String },
    marca: {type: String},
    fechaMatricula: {type: Date},
    propietario: {type: String}
})

module.exports = mongoose.model("vehiculos", VehiculosSchema)