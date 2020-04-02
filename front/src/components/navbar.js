import React, { Component } from 'react';

import logohome from '../assets/logohome.png'

// trabalhando com as rotas dos links
import { Link } from 'react-router-dom'; 

class Navbar extends Component {
  render() {
    return (
      <>

        {/* <!--Começo Header--> */}
        <header className="header-section listings">
          <div className="container-fluid">
            <div className="logo">
              <Link to="/"><img src={logohome} alt="" /></Link>
            </div>
            {/* <!--Começo NavBar--> */}
            <nav className="main-menu mobile-menu">
              <ul>
                <li>
                  <Link to="/Busca">Procurar lugares</Link>
                </li>
                <li>
                  <Link to="/Ajuda">Ajuda</Link>
                </li>
                <li>
                  <Link to="/Contato">Contato</Link>
                </li>
                <li>
                  <Link to="/Sobre">Sobre nós</Link>
                </li>
              </ul>
            </nav>
            {/* <!--Fim NavBar--> */}
            <div className="header-right">
              <Link to="/Parceiro" className="btn primary-btn botlu">Seja um parceiro</Link>
            </div>
            <div id="mobile-menu-wrap"></div>
          </div>
        </header>
        {/* <!--Fim Header--> */}
      </>
    )
  }
}

export default Navbar