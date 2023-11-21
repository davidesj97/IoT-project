const mqtt = require('mqtt');
const Estacion = require('../models/station');
const client = mqtt.connect(process.env.BROKER_URL);

const postStation = async (topic, message) => {
  console.log(`Mensaje recibido en el tema ${topic}: ${message.toString()}`);
  const parse = message.toString();
  const body = JSON.parse(parse);
  console.log(body);
  // try {
  //   const estacion = new Estacion(body);
  //   await estacion.save();
  // } catch (error) {
  //   console.log(error);
  // } 
}

const publicar = () => {
  const topic = '/home/sensors/temp/kitchen';
  const message = '{"id": 1, "nombre": "Carlos"}'; // Asegúrate de que el mensaje sea un JSON válido

  client.publish(topic, message, (err) => {
    if (!err) {
      console.log(`Mensaje publicado en el tema ${topic}: ${message}`);
    } else {
      console.error('Error al publicar el mensaje:', err);
    }

    // Cierra la conexión después de publicar
    client.end();
  });
}

module.exports = {
  postStation,
  publicar
}