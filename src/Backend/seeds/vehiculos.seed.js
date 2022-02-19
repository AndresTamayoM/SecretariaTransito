const mongoose = require('mongoose')
const { MONGO_URI } = require('../config')
const { Vehiculos } = require('../models')

mongoose.connect(MONGO_URI, {useNewUrlParser: true})

const vehiculos = []

Vehiculos.create(vehiculos).then(() => {
    console.log('Vehiculos dummy created')
    mongoose.disconnect()
}).catch(console.log())