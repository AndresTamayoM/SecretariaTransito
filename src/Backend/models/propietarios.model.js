const mongoose = require('mongoose')
const {Schema} = mongoose

const PropietariosSchema = new Schema({
    nombre: {type: String},
    identificacion: {type: String},
    direccion: {type: String},
    naturaleza: {type: String}
})

module.exports = mongoose.model("propietarios", PropietariosSchema)