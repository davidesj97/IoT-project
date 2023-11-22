const mqtt = require('mqtt');
const Unidad = require('../models/unidad');
const client = mqtt.connect(process.env.BROKER_URL);

const postUnidad = async (topic, message) => {
  console.log(`Mensaje recibido en el tema ${topic}: ${message.toString()}`);
  const parse = message.toString();
  const body = JSON.parse(parse);
  const date = new Date();
  console.log(date.toLocaleString());
  try {
    const unidad = new Unidad(body);
    await unidad.save();
  } catch (error) {
    console.log(error);
  } 
}

module.exports = {
  postUnidad,
}