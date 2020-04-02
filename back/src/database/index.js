// sequelize para n=conexão com o banco de dados
const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

// importando modo de comunicação
const Estabelecimento = require('../models/Estabelecimento')
const Contato = require('../models/Contato')
const Pesquisa = require('../models/Pesquisa')
const Avaliacao = require('../models/Avaliacao')

// criando constante de Sequelize atribuindo a variável connection
const connection = new Sequelize(dbConfig)

//INICIA NOSSA CONEXÃO PASSANDO connection CONFIGURAÇÃO DE CONEXÃO
Estabelecimento.init(connection)
Contato.init(connection)
Pesquisa.init(connection)
Avaliacao.init(connection)

// exportando variável
module.exports = connection