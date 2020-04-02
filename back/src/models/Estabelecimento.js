// MODEL É A REPRESENTAÇÃO DE COMO NOSSA APLICAÇÃO VAI SE COMUNICAR COM O NOSSO BANCO.

const { Model, DataTypes } = require('sequelize')

class Estabelecimento extends Model {
  static init(sequelize) {
    super.init({
      nome_estab: DataTypes.STRING,
      cnpj: DataTypes.STRING,
      endereco: DataTypes.STRING,
      bairro: DataTypes.STRING,
      cidade: DataTypes.STRING,
      estado: DataTypes.STRING,
      pais: DataTypes.STRING,
      telefone: DataTypes.STRING,
      de: DataTypes.STRING,
      a: DataTypes.STRING,
      das: DataTypes.STRING,
      as: DataTypes.STRING,
      nome_resp: DataTypes.STRING,
      email: DataTypes.STRING,
      servico: DataTypes.STRING,
      foto: DataTypes.STRING,
      likes: DataTypes.BIGINT,
      deslikes: DataTypes.BIGINT,
    },
    {
      sequelize
    })
  }
}

module.exports = Estabelecimento;