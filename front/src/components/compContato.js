import React, { Component } from 'react'

// facilitador de conexão do banco com o form
import { Input, Form, Textarea } from '@rocketseat/unform'

// importando axios
import axios from 'axios'

class CompContato extends Component {
  // CHAMANDO PORTA 4000 DO BACK
  async handleSubmit(data) {
    console.log(data)      
    
    const response = await axios.post("http://localhost:4000/contato", data)
    console.log(response)

    alert('Contato enviado! Por favor, aguardar nosso retorno.');
  }
  render(){
    return(
      <>
        {/* <!--Começo do conteúdo infos para contato--> */}
        <section className="contact-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="cs-info">
                  <h2>Nos contate.</h2>
                  <p>Encontrou algum erro em nossa página? Gostaria de enviar sugestões, 
                    elogios ou críticas? Escreve pra gente (sempre com carinho e respeito, tá bem?). 
                    Teremos o maior prazer em receber o seu feedback e melhorar a nossa forma de atuação!
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Form onSubmit={this.handleSubmit} className="contact-form"
                name="contato" data-netlify="true">
                  <input type="hidden" name="form-name" value="contato" />
                  <div className="row">
                    <div className="col-lg-6">
                      <Input type="text" name="nome" placeholder="Seu nome" />
                    </div>
                    <div className="col-lg-6">
                      <Input type="email" name="email" placeholder="Seu e-mail" />
                    </div>
                    <div className="col-lg-12 text-center">
                      <Input type="text" name="assunto" placeholder="Assunto" />
                      <Textarea type="text" name="msg" placeholder="Mensagem"></Textarea>
                      <button type="submit">Enviar contato</button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Fim conteúdo infos para contato--> */}
      </>
    )
  }
}

export default CompContato
