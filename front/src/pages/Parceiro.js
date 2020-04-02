import React, { Component } from 'react'

// importando componente
import Navbar from '../components/navbar'
import CompParceiro from '../components/compParceiro'
import Footer from '../components/footer'

// css
import '../styles/css/css.js'

class Parceiro extends Component {
  render() {
    return (
      <>
        <Navbar />
        <CompParceiro />
        <Footer />
      </>
    )
  }
}

export default Parceiro