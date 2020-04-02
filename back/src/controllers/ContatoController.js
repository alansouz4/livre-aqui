const Contato = require('../models/Contato')
module.exports = {
  async store(req, res){
    const {
      nome,
      email,
      assunto,
      msg,
    } = req.body;

    const user = await Contato.create({
      nome,
      email,
      assunto,
      msg
    })
    return res.json(user)
  }
}
