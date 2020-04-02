const express = require('express')

//importando o controller
const EstabController = require('./controllers/EstabController')
const ContatoController = require('./controllers/ContatoController')
const PesquisaController = require('./controllers/PesquisaController')
const AvaliacaoController = require('./controllers/AvaliacaoController')

// usando metódo para criar as rotas
const routes = express.Router()

// cors autorizar o uso do link do banco
const cors = require('cors')
routes.use(cors())

// rotas
routes.post("/like", EstabController.like)
routes.post("/deslike", EstabController.deslike)
routes.get('/estabelecimentos', EstabController.renderizar)
routes.post('/estabelecimento', EstabController.store)
routes.post('/pesquisa', PesquisaController.store)
routes.post('/contato', ContatoController.store)



// exportando ela
module.exports = routes;