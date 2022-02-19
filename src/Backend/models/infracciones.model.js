const mongoose = require('mongoose');
const {Schema} = mongoose

const InfraccionesSchema = new Schema({
    fecha: {type: Date},
    tipoAgente: {type: String},
    placa: {type:String}
},
{ timestamps: { createdAt: true, updatedAt: true }})

module.exports = mongoose.model("infracciones", InfraccionesSchema)

