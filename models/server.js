const express = require('express')

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    // Directorio publico
    this.app.use( express.static('public') )
  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.json('get API')
    })

    this.app.put('/api', (req, res) => {
      res.json('put API')
    })

    this.app.post('/api', (req, res) => {
      res.json('post API')
    })

    this.app.delete('/api', (req, res) => {
      res.json('delete API')
    })
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    })
  }
}

module.exports = Server;
