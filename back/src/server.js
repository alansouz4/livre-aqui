const express = require('express')
const routes = require('./routes')

// importando sequelize, configuração do db
require('./database')

// iniciando express
const app = express()

// converter os dados no formatoo json
app.use(express.json())
// usando modulo rota
app.use(routes)
// abrindo porta para rodar servidor
app.listen(4000, function(){
  console.log("Servidor rodando!")
})