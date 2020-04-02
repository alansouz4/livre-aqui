module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "root",
  database: "livreaqui",
  define: {
      timestamps: true,
      underscored: true,
  },
};

// timestamps cria dois campos created_at: armazena a data que o registro foi criado
// e updated_at registra a última vez que o registro foi atualizado na base
// preenchidos de forma automática

// underscored - defini o nome das minhas tabelas no fomato (estab_nome_fant)
// pascalCase - caso queira definir no formato camel case (estabNomeFant)
