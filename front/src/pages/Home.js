import React, { Component } from 'react'

// importando componentes
import Navbar from '../components/navbar'
import CompPesquisa2 from '../components/compPesquisa2'
import CompHome from '../components/compHome'
import Footer from '../components/footer'
import CompTrabalho from '../components/compTrabalho'

// css
import '../styles/css/css.js'

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <CompPesquisa2 />
        <CompHome />
        <CompTrabalho />
        <Footer />
      </>
    )
  }
}

export default Home