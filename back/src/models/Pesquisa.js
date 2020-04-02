// MODEL É A REPRESENTAÇÃO DE COMO NOSSA APLICAÇÃO VAI SE COMUNICAR COM O NOSSO BANCO.

const { Model, DataTypes } = require('sequelize')

class Pesquisa extends Model {
  static init(sequelize) {
    super.init({
      categoria: DataTypes.STRING,
      local: DataTypes.STRING,
    },
    {
      sequelize
    })
  }
}

module.exports = Pesquisa;