'use strict';

// MÉTODO up SERVE PARA DIZER O QUE ESSA MIGRATION VAI REALIZAR NO BANCO DE DADOS, POR EXEMPLO A CRIAÇÃO DE UMA NOVA TABELA.
// MÉTODO donw SERVE PARA DIZER, SE DER ALGUMA COISA ERRADA E PRECISAR DESFAZER ESSA MIGRATION, POR EXEMPLO DELETAR A TABELA QUE O MÉTODO up CRIOU.
// up – CRIA TABELA
// down –DELETA TABELA


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('avaliacaos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      opcaoSim: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      opcaoNao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('avaliacaos');
  }
};
