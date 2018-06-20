const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema




const testeFisicoSchema = new Schema({
    objetivo: { type: String, uppercase: true },
    tipoTeste: { type: String, uppercase: true },
    data: { type: Date,  required: true },    
    resultados: []
})


module.exports = restful.model('testeFisico', testeFisicoSchema)