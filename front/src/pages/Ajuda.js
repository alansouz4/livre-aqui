import React, { Component } from 'react'

// importando componentes
import Navbar from '../components/navbar'
import CompAjuda  from '../components/compAjuda'
import Footer from '../components/footer'

// css
import '../styles/css/css.js'

class Ajuda extends Component {
  render() {
    return (
      <>
        <Navbar />
        <CompAjuda />
        <Footer />
      </>
    )
  }
}

export default Ajuda