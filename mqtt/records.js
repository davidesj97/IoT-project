const mqtt = require('mqtt');
const Record = require('../models/record');
const client = mqtt.connect(process.env.BROKER_URL);

const postRecord = async (topic, message) => {
  console.log(`Mensaje recibido en el tema ${topic}: ${message.toString()}`);
  const parse = message.toString();
  const body = JSON.parse(parse);
  const date = new Date();
  console.log(date.toLocaleString());
  try {
    const record = new Record(body);
    await record.save();
  } catch (error) {
    console.log(error);
  } 
}

module.exports = {
  postRecord,
}