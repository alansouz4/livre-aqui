// MODEL É A REPRESENTAÇÃO DE COMO NOSSA APLICAÇÃO VAI SE COMUNICAR COM O NOSSO BANCO.

const { Model, DataTypes } = require('sequelize')

class Contato extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      assunto: DataTypes.STRING,
      msg: DataTypes.STRING,
    },
    {
      sequelize
    })
  }
}

module.exports = Contato;