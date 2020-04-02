// O controller IRÁ RECEBER E LIDAR COM AS REQUISIÇÕES E DEVOLVE RESPOSTAS PARA O FRONT-END.
const Avaliacao = require('../models/Avaliacao')
module.exports = {
  async store(req, res){
    const {
      opcaoSim,
      opcaoNao,
      descricao,
    } = req.body;

    const user = await Avaliacao.create({
      opcaoSim,
      opcaoNao,
      descricao
    })
    return res.json(user)
  }
}
