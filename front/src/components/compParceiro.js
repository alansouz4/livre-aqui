import React, { Component } from 'react'

// facilitador de conexão do banco com o form
import { Form, Input, Select } from '@rocketseat/unform';

// importando axios
import axios from 'axios'

import parceiro from '../assets/parceiro.jpg'

const options = [
  { title: 'Balada' },
  { title: 'Balada Open' },
  { title: 'Restaurante' },
  { title: 'Rodízio de Carnes' },
  { title: 'Rodizio de Pizza' },
  { title: 'Rodizio de Comida Japonesa' },
  { title: 'Restaurante Vegano' },
];

const estado = [
  { title: 'SP' },
];

const pais = [
  { title: 'Brasil' },
];

const dia = [
  { title: 'Seg' },
  { title: 'Ter' },
  { title: 'Qua' },
  { title: 'Qui' },
  { title: 'Sex' },
  { title: 'Sab' },
  { title: 'Dom' },
];

const horario = [
  { title: '24hs' },
  { title: '01:00' },
  { title: '02:00' },
  { title: '03:00' },
  { title: '04:00' },
  { title: '05:00' },
  { title: '06:00' },
  { title: '07:00' },
  { title: '08:00' },
  { title: '09:00' },
  { title: '10:00' },
  { title: '11:00' },
  { title: '12:00' },
  { title: '13:00' },
  { title: '14:00' },
  { title: '15:00' },
  { title: '16:00' },
  { title: '17:00' },
  { title: '18:00' },
  { title: '19:00' },
  { title: '20:00' },
  { title: '21:00' },
  { title: '22:00' },
  { title: '23:00' },
];

class CompParceiro extends Component {
  async handleSubmit(data) {
    console.log(data)

    const response = await axios.post("http://localhost:4000/estabelecimento", data)
    console.log(response)

    alert('Cadastro enviado! Por favor, aguardar retorno do LivreAqui.');
  }
  render() {
    return (
      <>
        {/* <!--Começo conteúdo--> */}
        <section className="howitworks-section spad">

          <div className="container" style={{ marginTop: "50px" }}>

            <div className="row mb-110">

              <div className="col-lg-6 order-2 order-lg-1">
                <div className="howit-item">
                  <h2>Se torne um parceiro!</h2>
                  <p>
                    Se você apoia esta causa e quer saber a imagem que o seu estabelecimento está
                    passando para o público LGTBQI+, seja nosso parceiro. Assinando o Livre Aqui você
                    terá acesso a informações detalhadas como estatísticas de busca, relatório completo
                    de avaliações e feedbacks. Assim, você poderá planejar ações e melhorias no seu
                    espaço, com base na opinião de quem mais importa: seus clientes!
                </p>
                </div>
              </div>

              <div className="col-lg-5 offset-lg-1 order-1 order-lg-2">
                <div className="howit-img">
                  <img src={parceiro} alt="" />
                </div>
              </div>

            </div>
            {/* <!--Fim conteúdo--> */}

            {/* <!--Começo formulário--> */}
            <div className="container-fluid" style={{ marginTop: "10px" }}>

              <Form onSubmit={this.handleSubmit} className="contact-form">

                <div className="form-group">

                  <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-12">
                      <Input type="text" name="nome_estab" className="form-control" placeholder="Nome estabelecimento" required />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-12">
                      <Input type="text" name="cnpj" className="form-control"
                        placeholder="CNPJ" required />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-12">
                      <Input type="text" name="endereco" className="form-control"
                        placeholder="Endereço" required />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-12">
                      <Input type="text" name="bairro" className="form-control"
                        placeholder="Bairro" required />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <Input type="text" name="cidade" className="form-control"
                        placeholder="Cidade" required />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-12">
                      <Select name="estado" options={estado} style={{height: "55px"}} className="form-control"
                        placeholder="Estado" />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <Select name="pais" options={pais} className="form-control"
                      style={{height: "55px"}}  placeholder="Pais" />
                    </div>
                  </div>
                  <br />
                  <div className="row justify-content-center">
                    <div className="col-md-2 col-sm-12">
                      <Select type="text" name="de" className="form-control"
                      style={{height: "55px"}}  placeholder="de" options={dia} required />
                    </div>

                    <div className="col-md-2 col-sm-3">
                      <Select type="text" name="a" className="form-control"
                      style={{height: "55px"}}  placeholder="a" options={dia} required />
                    </div>

                    <div className="col-md-2 col-sm-3">
                      <Select type="text" name="das" className="form-control"
                      style={{height: "55px"}}  placeholder="das" options={horario} required />
                    </div>
                    <div className="col-md-2 col-sm-3">
                      <Select type="text" name="as" className="form-control"
                      style={{height: "55px"}}  placeholder="ás" options={horario} required />
                    </div>
                  </div>
                  <br />
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-12">
                      <Input type="text" name="telefone" className="form-control" maxlength="18"
                        placeholder="telefone" required />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <Input type="text" name="nome_resp" className="form-control"
                        placeholder="Nome responsável" required />
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-auto col-md-8 col-sm-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                      </div>
                      <input type="text" name="email" className="form-control"
                         placeholder="E-mail" />
                    </div>
                  </div>
                </div>
                <br/>
                <div className="row justify-content-center">
                  <div className="col-md-8 col-sm-12">
                    <Select name="servico" options={options} style={{height: "55px"}} className="form-control"
                      placeholder="Qual o segmento de seu estabelecimento?" />
                  </div>
                </div>
                <br />
                <br/>
                <div className="row justify-content-center">
                  <div className="col-md-6 col-sm-12 custom-file">
                    <label className="custom-file-label" htmlFor="foto">Insira uma imagem do estabelecimento</label>
                    <Input type="file" className="custom-file-input" name="foto" required />
                  </div>
                </div>
                <br/><br/>
                <div className="row justify-content-center">
                  <button type="submit" className="btn btn-dark botlu" >Cadastre-se</button>
                </div>
              </Form>
            </div>
          </div>
        </section>
        <br /><br /><br /><br /><br /><br /><br /><br />
        {/* <!--Fim formulário--> */}
      </>
    )
  }
}

export default CompParceiro