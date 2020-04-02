import React, { Component } from 'react'

// trabalhando com as rotas dos links
import { Link } from 'react-router-dom';  

import home1 from '../assets/home1.jpg'
import home2 from '../assets/home2.jpg'
import home3 from '../assets/home3.jpg'

class CompHome extends Component {
  render() {
    return (
      <>
        {/* <!--Começo conteúdo página--> */}
        <section className="howitworks-section spad">
          <div className="container">
            <div className="row mb-110">
              <div className="col-lg-5 offset-lg-1 order-1 order-lg-2">
                <div className="howit-img">
                  <img src={home1} alt="" />
                </div>
              </div>
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="howit-item">
                  <h2>Procure lugares</h2>
                  <p>Tá a fim de conhecer um estabelecimento novo? Ouviu falar de um lugar, 
                    mas tá com receio de ir e se desapontar? Aqui você pode pesquisar exatamente o que 
                    procura ou baseado na experiência que gostaria de ter. Como resultado da busca você 
                    terá uma lista com os locais mais bem avaliados, levando em consideração o que 
                    pessoas como nós disseram do espaço em relação ao atendimento aos LGBTQI+. Assim, 
                    você poderá ter uma visão completa do lugar, baseado nas experiências de outros 
                    usuários. </p>
                </div>
                <div className="header-right">
                  <Link to="/Busca" className="btn primary-btn botlu">Procurar</Link>
                </div>
              </div>
            </div>
            <div className="row mb-110">
              <div className="col-lg-5">
                <div className="howit-img insige-bg">
                  <img src={home2} alt="" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="howit-item">
                  <h2>Vá ao local</h2>
                  <p>Visitou um estabelecimento e se sentiu totalmente confortável? 
                    Teve uma experiência incrível com o atendimento e o público do local? 
                    Notou pessoas LGBTQI+ trabalhando e sendo bem tratadas? Avalie aqui! Nos ajude a 
                    mostrar que esse espaço é digno e vamos criar uma rede de lugares seguros para nós!
                    Mas e se a experiência não foi boa e você se sentiu acuado ou julgado? Nos conte também! 
                    Assim, poderemos mostrar para as outras pessoas que este não é um espaço que recebe o 
                    público LGBTQI+ de forma respeitosa e empática.
                    E se você não é uma pessoa LGBTQI+ mas quer contribuir para essa rede do bem, 
                    fique à vontade para avaliar os locais. Precisamos que todos, independentemente 
                    da sexualidade, nos ajude nessa luta para o fim de qualquer fobia e julgamento em 
                    qualquer tipo de estabelecimento.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mb-110">
              <div className="col-lg-5 offset-lg-1 order-1 order-lg-2">
                <div className="howit-img">
                  <img src={home3} alt="" />
                </div>
              </div>
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="howit-item">
                  <h2>Vamos juntos!</h2>
                  <p>Ser tratado com respeito e empatia é um direito de todos. Por isso, contamos 
                    com a ajuda de vocês para criar uma comunidade onde todas as pessoas sejam bem tratadas. 
                    Livre de rótulos. Livre de ódio. Livre do julgamento alheio. Vamos juntos criar essa 
                    rede do bem e colaborar para um mundo com mais amor e respeito. Nos ajude a aumentar 
                    essa corrente! 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Começo conteúdo página--> */}
      </>
    )
  }
}

export default CompHome