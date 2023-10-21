const express = require('express');
const cors = require('cors');
const db = require('../database/connection');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.dbConnections();

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
