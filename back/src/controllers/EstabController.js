// O controller IRÁ RECEBER E LIDAR COM AS REQUISIÇÕES E DEVOLVE RESPOSTAS PARA O FRONT-END.
const Estabelecimento = require('../models/Estabelecimento')
module.exports = {
  async store(req, res) {
    const {
      nome_estab,
      cnpj,
      endereco,
      bairro,
      cidade,
      estado,
      pais,
      telefone,
      de,
      a,
      das,
      as,
      nome_resp,
      email,
      servico,
      foto
    } = req.body;

    const user = await Estabelecimento.create({
      nome_estab,
      cnpj,
      endereco,
      bairro,
      cidade,
      estado,
      pais,
      telefone,
      de,
      a,
      das,
      as,
      nome_resp,
      email,
      servico,
      foto
    })
    return res.json(user)
  },

  async renderizar(req, res) {

    const estabelecimento = await Estabelecimento.findAll()

    const estabs = estabelecimento.map( estab => {
      const total = (estab.likes + estab.deslikes)
      const avaliacoes = estab.likes * 5 / total
      const item = estab.dataValues
      item.avaliacoes = isNaN(avaliacoes) ? null : avaliacoes
      return item
    })
    return res.json(estabs)
  },

  async like(req, res) {

    const {
      categoria,
      local
    } = req.body.pesquisa;

    const {
      id, likes
    } = req.body;

    const estabelecimento = await Estabelecimento.update({ likes: likes + 1 }, { where: { id } })

    const resultados = await Estabelecimento.findAll({
      where: {
        servico: categoria,
        bairro: local
      }
    })
    const estabs = resultados.map( estab => {
      const total = (estab.likes + estab.deslikes)
      const avaliacoes = estab.likes * 5 / total
      const item = estab.dataValues
      item.avaliacoes = isNaN(avaliacoes) ? null : avaliacoes

      return item
    })

    return res.json(estabs)

  },

  async deslike(req, res) {

    const {
      categoria,
      local
    } = req.body.pesquisa;

    const {
      id, deslikes
    } = req.body;

    const estabelecimento = await Estabelecimento.update({ deslikes: deslikes + 1 }, { where: { id } })


    const resultados = await Estabelecimento.findAll({
      where: {
        servico: categoria,
        bairro: local
      }
    })

    const estabs = resultados.map( estab => {
      const total = (estab.likes + estab.deslikes)
      const avaliacoes = estab.likes * 5 / total
      const item = estab.dataValues
      item.avaliacoes = isNaN(avaliacoes) ? null : avaliacoes

      return item
    })

    return res.json(estabs)


  }
}
