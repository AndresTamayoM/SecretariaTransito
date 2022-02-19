const {Client} = require('cassandra-driver');
const client = new Client({
    cloud: {
      secureConnectBundle: "C:/Repositorios/secretaria-transito/src/Backend/secure-connect-secretaria-transito.zip",
    },
    credentials: {
      username: "iDiOrAhLfloYxgikqKocdzGL",
      password: "1dXmZRZb_ZDa07zYvIQqcan,C1fi+GS3JjYkFv,OtYKpzbDwvHC5aURu,ttAEvZl1YzMh6gDRHYNqZYNd0PWAKwhCCXUGGqpmg2hDAbW-JenC.bJrpv+YWlXI9Bv3u8d",
    },
    keyspace: "materia"
  });
  const guardar = async function guardarPropietario(nombre, identificacion, direccion, naturaleza){
    await client.connect();
    // Execute a query
    res = await client.execute("INSERT INTO propietarios (identificacion, nombre, direccion, naturaleza) VALUES ('"+identificacion+"','"+nombre+"', '"+direccion+"', '"+naturaleza+"');");
    return nombre
  }

  const consultar = async function consultarPropietario(){
    await client.connect();
    // Execute a query
    const rs = await client.execute("SELECT * FROM materia.propietarios");
    return rs.rows;
  }

  const consultarUno = async function consultarTodosPropietarios(identificacion){
    await client.connect();
    // Execute a query
    const rs = await client.execute("SELECT * FROM materia.propietarios WHERE identificacion = '"+identificacion+"'");
    console.log(rs.rows)
    return rs.rows
}

   const paquetico = {
      consultar,
      consultarUno,
      guardar
  }

  module.exports = paquetico