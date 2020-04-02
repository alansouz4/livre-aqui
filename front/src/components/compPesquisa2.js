import React, { Component } from 'react';

// importando axios
import axios from 'axios'

// trabalhando com as rotas dos links
import { Link } from 'react-router-dom';

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
  // CHAMANDO PORTA 4000 DO BACK
  async handleSubmit(data) {
    console.log(data)
    
    const response = await axios.post("http://localhost:4000/pesquisa", data)
    console.log(response)
  }
  render() {
    return (
      <>
        {/* <!--Começo pesquisa--> */}
        <section className="hero-section set-bg" id="imgPesq">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-text">
                  <Form onSubmit={this.handleSubmit} className="filter-search">
                    <div className="category-search">
                      <label htmlFor="categoria">Selecione uma categoria:</label>
                      <Select name="categoria" options={options} className="ca-search" 
                      placeholder="Toque para selecionar" />
                    </div>
                    <div className="location-search">
                      <label htmlFor="local">Selecione uma localização:</label>
                      <Select options={options2} name="local" className="lo-search" 
                      placeholder="Toque para selecionar" />
                    </div>
                    <button type="submit"><Link to="/busca">Pesquisar</Link></button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br/><br/>
        {/* <!--Fim pesquisa--> */}
      </>
    )
  }
}

export default CompPesquisa