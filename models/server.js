const express = require('express');
const mqtt = require('mqtt');
const cors = require('cors');
const db = require('../database/connection');

const station = require('../mqtt/stations');
const record = require('../mqtt/records');
const unidad = require('../mqtt/unidades');

class Server {

  constructor() {
    this.app = express();
    this.client = mqtt.connect(process.env.BROKER_URL);
    this.port = process.env.PORT || 3000;
    this.station = station;
    this.unidad = unidad;
    this.record = record;

    this.dbConnections();

    this.mqttConection();

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  async dbConnections() {
    try {
      
      await db.authenticate();

      await db.sync();

      console.log('Database online')

    } catch (error) {
      throw new Error(error);
    }
  }

  mqttConection() {
    this.client.on('connect', () => {
      console.log('Conexión establecida con el broker MQTT');

    });

    // Suscribirse a un tema al conectar con el broker
    this.client.subscribe('/home/sensors/stations', (err) => {
      if (!err) {
        console.log('Suscripción exitosa al tema');
      } else {
        console.error('Error al suscribirse al tema:', err);
      }
    });

    this.client.subscribe('/home/sensors/unidades', (err) => {
      if (!err) {
        console.log('Suscripción exitosa al tema');
      } else {
        console.error('Error al suscribirse al tema:', err);
      }
    });

    this.client.subscribe('/home/sensors/records', (err) => {
      if (!err) {
        console.log('Suscripción exitosa al tema');
      } else {
        console.error('Error al suscribirse al tema:', err);
      }
    });

    this.client.on('message', (topic, message) => {
      if(topic == '/home/sensors/stations') {
        this.station.postStation(topic, message);
      }

      if(topic == '/home/sensors/unidades') {
        this.unidad.postUnidad(topic, message);
      }

      if(topic == '/home/sensors/records') {
        this.record.postRecord(topic, message);
      }
    });
  }

  middlewares() {

    // CORS
    this.app.use(cors());

    // Lectura y Parseo del body
    this.app.use(express.json());

    // Directorio publico
    this.app.use( express.static('public') )
  }

  routes() {
    this.app.use('/api/unidades', require('../routes/unidades'));
    this.app.use('/api/estaciones', require('../routes/stations'));
    this.app.use('/api/registros', require('../routes/records'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    })
  }
}

module.exports = Server;
