// SE ENCARGA DE CONECTAR TODAS LAS RUTAS

const { Router } = require("express") // importar express

const hospitalRoutes = require("./hospital.routes") // importar el archivo de rutas de usuarios

const rutas_init = () => { // aca se ponen todas las rutas que existen
  const router = Router() // crear una instancia de express.Router()

  router.use("/hospital", hospitalRoutes) // para acceder a las rutas de usuarios de la api siempre deberá empezar con /hospital

  return router // retornar el router
};

module.exports = { rutas_init } // exportar el archivo de rutas de la api