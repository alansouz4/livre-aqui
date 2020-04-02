// O controller IRÁ RECEBER E LIDAR COM AS REQUISIÇÕES E DEVOLVE RESPOSTAS PARA O FRONT-END.

const Estab = require('../models/Estabelecimento')
module.exports = {
  async store(req, res){
    const { 
      categoria, 
      local 
    } = req.body;

    
    const resultados = await Estab.findAll({
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
