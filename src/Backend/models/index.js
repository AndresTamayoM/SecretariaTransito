const mongoose = require('mongoose')

module.exports = {
    Vehiculos: require('./vehiculos.model'),
    Infracciones: require('./infracciones.model'),
    Propietarios: require('./propietarios.model')
}

