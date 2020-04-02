import React, { Component } from 'react'

// importando componentes
import Navbar from '../components/navbar'
import CompSobre from '../components/compSobre'
import Footer from '../components/footer'

// css
import '../styles/css/css.js'

class Sobre extends Component {
  render() {
    return (
      <>
        <Navbar />
        <CompSobre />
        <Footer />
      </>
    )
  }
}

export default Sobre