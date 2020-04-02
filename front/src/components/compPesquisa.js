import React, { Component } from 'react';

// importando axios
import axios from 'axios'

// importando modal
import Modal from './modal'


// importando imagens
import arrange1 from '../assets/arrange/arrange1.jpg'

// facilitador de conexão do banco com o form
import { Form, Select } from '@rocketseat/unform';

const options = [
  { title: 'Balada' },
  { title: 'Balada Open' },
  { title: 'Restaurante' },
  { title: 'Rodízio de Carnes' },
  { title: 'Rodizio de Pizza' },
  { title: 'Rodizio de Comida Japonesa' },
  { title: 'Restaurante Vegano' },
];

const options2 = [
  { title: 'Bela Vista' },
  { title: 'Consolação' },
  { title: 'Pinheiros' },
  { title: 'República‎' },
  { title: 'Vila Madalena' },
  { title: 'Vila Mariana' },
];

class CompPesquisa extends Component {
  constructor() {
    super();
    this.state = {
      resultado: [],
      pesquisa: undefined
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // CHAMANDO PORTA 4000 DO BACK
  async handleSubmit(data) {
    console.log(data)
    this.setState({ pesquisa: data })
    const response = await axios.post("http://localhost:4000/pesquisa", data)
    const resultado = response.data

    this.setState({ resultado })


    console.log(resultado)
  }


  async renderizar() {

    const response = await axios.get("http://localhost:4000/estabelecimentos")
    const resultado = response.data

    this.setState({ resultado })


    console.log(resultado)
  }

  componentDidMount() {
    this.renderizar()
  }


  async like(id, likes) {


    let { pesquisa } = this.state
    if (pesquisa === undefined) {
      pesquisa = {
        categoria: false,
        local: false
      }
    }
    const dados = { id, pesquisa, likes }
    console.log(dados)

    const response = await axios.post("http://localhost:4000/like", dados)
    const resultado = response.data

    this.setState({ resultado })


    console.log(resultado)

    alert('Like realizado! Obrigado pelo feedback!')
  }

  async deslike(id, deslikes) {


    let { pesquisa } = this.state
    if (pesquisa === undefined) {
      pesquisa = {
        categoria: false,
        local: false
      }
    }
    const dados = { id, pesquisa, deslikes }
    console.log(dados)

    const response = await axios.post("http://localhost:4000/deslike", dados)
    const resultado = response.data

    this.setState({ resultado })


    console.log(resultado)

    alert('Deslike realizado! Obrigado pelo feedback!')
  }

  renderResultado() {
    if (this.state.resultado.length < 1) {
      return <> </>
    } else {
      return this.state.resultado.map(resultado => {
        console.log(resultado.id)
        return (
          <>
            <div className="col-lg-4 col-sm-6 arrange-items">
              <a className="">
                <div className="arrange-pic">
                  <img src={arrange1} alt="" />
                  <div className="rating">
                  <button type="button" data-toggle="modal" data-target="#modalInfo"
                    className="btn btn-link mr-1 botlu" disabled>{resultado.avaliacoes === null ? <> </> : resultado.avaliacoes.toFixed(2)}</button>
                  </div>
                </div>
              </a>
              <div className="arrange-text">
                <h5>{resultado.nome_estab}</h5>
                <span>{resultado.endereco}</span>
                <p>{resultado.servico}</p>
                <div className="open tomorrow mb-2" id="horaLocal">Abre de {resultado.de} a {resultado.a}</div>
                <br />
                <div className="open tomorrow mb-2" id="horaLocal">Horário: {resultado.das}h a {resultado.as}h</div>
                <div className="row d-flex flex-row justify-content-center">
                  
                  <button type="button"
                    className="btn btn-dark mr-1 botlu" onClick={() => this.like(resultado.id, resultado.likes)}>Like</button>
                  <button type="button"
                    className="btn btn-dark mr-1 botlu" onClick={() => this.deslike(resultado.id, resultado.deslikes)}>Deslike</button>
                  <button type="button" data-toggle="modal" data-target="#modalInfo"
                    className="btn btn-dark botlu">+Infos</button>
                    <Modal />
                </div>
              </div>

            </div>

          </>
        );
      })
    }
  }



  render() {
    return (
      <>
        {/* <!--Começo pesquisa--> */}
        <section className="hero-section set-bg" id="imgBusc">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-text">
                  <Form onSubmit={this.handleSubmit} className="filter-search">
                    <div className="category-search">
                      <label htmlFor="categoria">Selecione uma categoria:</label>
                      <Select name="categoria" options={options} className="ca-search "
                        placeholder="Toque para selecionar" />
                    </div>
                    <div className="location-search">
                      <label htmlFor="local">Selecione uma localização:</label>
                      <Select options={options2} name="local" className="lo-search"
                        placeholder="Toque para selecionar" />
                    </div>
                    <button type="submit">Pesquisar</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto text-center">
          <div className="col-lg-9 text-center mx-auto" style={{ marginTop: "50px" }}>
            <div className="row">
              {this.renderResultado()}
            </div>
          </div>

        </section>
        {/* <!--Fim pesquisa--> */}
      </>
    )
  }
}

export default CompPesquisa