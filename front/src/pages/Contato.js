import React, { Component } from 'react'

import Navbar from '../components/navbar'
import CompContato from '../components/compContato'
import Footer from '../components/footer'

// css
import '../styles/css/css.js'

class Contato extends Component {
    render() {
    return(
      <>
        <Navbar />
        <CompContato />
        <Footer />
      </>
    )
  }
}

export default Contato