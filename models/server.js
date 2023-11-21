const express = require('express');
const mqtt = require('mqtt');
const cors = require('cors');
const db = require('../database/connection');

const { postStation, publicar } = require('../mqtt/stations');

class Server {

  constructor() {
    this.app = express();
    // this.client = mqtt.connect(process.env.BROKER_URL);
    this.port = process.env.PORT || 3000;
    // this.postStation = postStation;
    // this.publicar = publicar;

    this.dbConnections();

    // this.mqttConection();

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

    this.client.on('message', (topic, message) => {
      if(topic == '/home/sensors/stations') {
        this.postStation(topic, message);
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
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    })
  }
}

module.exports = Server;
