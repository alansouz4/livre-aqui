'use strict';

// MÉTODO up SERVE PARA DIZER O QUE ESSA MIGRATION VAI REALIZAR NO BANCO DE DADOS, POR EXEMPLO A CRIAÇÃO DE UMA NOVA TABELA.
// MÉTODO donw SERVE PARA DIZER, SE DER ALGUMA COISA ERRADA E PRECISAR DESFAZER ESSA MIGRATION, POR EXEMPLO DELETAR A TABELA QUE O MÉTODO up CRIOU.
// up – CRIA TABELA
// down –DELETA TABELA


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('estabelecimentos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome_estab: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: false,
      },
            bairro: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            cidade: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            estado: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            pais: {
              type: Sequelize.STRING,
              allowNull: false,
            },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      de: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      a: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      das: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      as: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome_resp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      servico: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      foto: {
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
      return queryInterface.dropTable('estabelecimentos');
  }
};
