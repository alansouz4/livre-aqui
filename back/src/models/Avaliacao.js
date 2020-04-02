// MODEL É A REPRESENTAÇÃO DE COMO NOSSA APLICAÇÃO VAI SE COMUNICAR COM O NOSSO BANCO.

const { Model, DataTypes } = require('sequelize')

class Avaliacao extends Model {
  static init(sequelize) {
    super.init({
      opcaoSim: DataTypes.STRING,
      opcaoNao: DataTypes.STRING,
      descricao: DataTypes.STRING,
    },
    {
      sequelize
    })
  }
}

module.exports = Avaliacao;