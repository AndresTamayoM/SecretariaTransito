const consultarVehiculos = () => {
    return fetch('http://localhost:3001/api/obtenerVehiculos/')
}

const consultarVehiculo = (placa) => {
    return fetch('http://localhost:3001/api/obtenerVehiculo/' + placa);
}

const guardarVehiculo = (vehiculoData_MatriculaData) => {
    const { placa, tipoVehiculo, fecha, propietario, marca } = vehiculoData_MatriculaData
    fetch('http://localhost:3001/api/obtenerPropietario/' + propietario)
        .then(res => res.json())
        .then(res => {
            if (!res.data.length == 0) {
                fetch('http://localhost:3001/api/obtenerVehiculo/' + placa)
                    .then(res => res.json())
                    .then(res => {
                        if (res.data.length == 0) {
                            fetch('http://localhost:3001/api/guardarVehiculo/', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    placa: placa,
                                    tipoVehiculo: tipoVehiculo,
                                    marca: marca,
                                    fechaMatricula: fecha,
                                    propietario: propietario
                                })
                            })
                        }
                        else {
                            window.alert("El vehiculo ya fue matriculado");
                        }
                    })
            }
            else {
                window.alert("El propietario no existe");
            }
        })
}

const consultarInfracciones = async () => {
    return fetch('http://localhost:3001/api/obtenerInfracciones', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
}

const consultarInfraccion = (infraccion) => {
    return fetch('http://localhost:3001/api/obtenerInfraccion/' + infraccion);
}

const guardarInfraccion = (infraccion) => {
    const { fecha, tipoAgente, placa } = infraccion.infraccion
    fetch('http://localhost:3001/api/obtenerVehiculo/' + placa)
        .then(res => res.json())
        .then(res => {
            if (!res.data.length == 0) {
                return fetch('http://localhost:3001/api/guardarInfraccion/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        fecha: fecha,
                        tipoAgente: tipoAgente,
                        placa: placa
                    })
                });
            }
            else{
                window.alert("La placa no ha sido matriculada")
            }
        })

}

const consultarPropietarios = () => {
    return fetch('http://localhost:3001/api/obtenerPropietarios')
}

const consultarPropietario = (identificacion) => {
    return fetch('http://localhost:3001/api/obtenerPropietario/' + identificacion)
}

const guardarPropietario = (propietario) => {
    const { nombre, identificacion, direccion, naturaleza } = propietario
    fetch('http://localhost:3001/api/obtenerPropietario/' + identificacion)
        .then(res => res.json())
        .then(res => {
            debugger
            if (res.data.length == 0) {
                fetch('http://localhost:3001/api/guardarPropietario', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nombre: nombre,
                        identificacion: identificacion,
                        direccion: direccion,
                        naturaleza: naturaleza
                    })
                })
            }
            else {
                window.alert("el propietario ya existe")
            }
        })
}


export default {
    consultarInfracciones,
    consultarInfraccion,
    guardarInfraccion,
    consultarPropietario,
    consultarPropietarios,
    guardarPropietario,
    consultarVehiculos,
    consultarVehiculo,
    guardarVehiculo
}