import React, { Component } from 'react'

// importando componentes
import Navbar from '../components/navbar'
import CompPesquisa from '../components/compPesquisa'
import Footer from '../components/footer'

// css
import '../styles/css/css.js'

class Busca extends Component {
  render(){
    return(
      <>
        <Navbar />
        <CompPesquisa />
        <Footer />
      </>
    )
  }
}

export default Busca