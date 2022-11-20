// RUTAS DE USUARIOS

const router = require("express").Router(); // importar express.Router()

const hospitalController = require('../controllers/hospital.controller') // importar el archivo de controladores de usuarios


router.get('/medicos', hospitalController.medicos)
//router.get('/pacientes', hospitalController.medicos)
router.get('/pacientes/:idPaciente', hospitalController.pacientes)



module.exports = router;