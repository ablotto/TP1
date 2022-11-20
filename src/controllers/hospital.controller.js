// FUNCIONAMIENTO DE TODAS LAS RUTAS DE USUARIO

module.exports = {

    medicos: async (req, res) => {
        try {
            console.log('ejecutando listados de medicos')

            res.json({
                message: "Listado de Médicos"
            })

        } catch (err) {
            console.log(err)
        }
    },

    pacientes: async (req, res) => {
        try {
            console.log('ejecutando Info paciente ' + req.params.idPaciente)

            res.json({
                message: "Informacion del Paciente " + req.params.idPaciente
            })

        } catch (err) {
            console.log(err)
        }
    },

    crear: async (req, res) => {
    }

}