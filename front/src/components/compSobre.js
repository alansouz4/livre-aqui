import React, { Component } from 'react'

import home1 from '../assets/home1.jpg'
import home2 from '../assets/home2.jpg'
import home3 from '../assets/home3.jpg'

class CompSobre extends Component {
  render() {
    return (
      <>
        {/* <!--Começo Missão Valores e Visão--> */}
        <section className="howitworks-section spad">
          <div className="container" style={{ marginTop: "50px" }}>

            <div className="row mb-110">

              <div className="col-lg-6 order-2 order-lg-1">
                <div className="howit-item">
                  <h2>Valores</h2>
                  <p>
                    - Diversidade<br />
                    - Conscientização<br />
                    - Mente aberta<br />
                    - Fomento ao respeito<br />
                    - Mudança social<br />
                    - Dar visibilidade
                  </p>
                </div>

              </div>

              <div className="col-lg-5 offset-lg-1 order-1 order-lg-2">
                <div className="howit-img">
                  <img src={home1} alt="" />
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
                  <h2>Visão</h2>
                  <p>
                  Manter uma classificação de estabelecimentos, com base na avaliação dos usuários, 
                  para que todas as pessoas sejam respeitadas independentemente da orientação sexual. 
                  Destacar os locais livres de LGBTQIfobia e premiar o engajamento desses lugares em prol 
                  desta causa.</p>
                </div>
              </div>

              
            </div>



            <div className="row mb-110">

              <div className="col-lg-6 order-2 order-lg-1">
                <div className="howit-item">
                  <h2>Missão</h2>
                  <p>Mudar a maneira como as pessoas LGBTQI+ são tratadas pela sociedade e estabelecimentos. 
                    Promover uma rede do bem com espaços seguros para que o público LGBTQI+ possa vivenciar 
                    momentos de lazer e diversão com mais amor e respeito.</p>
                </div>
              </div>

              <div className="col-lg-5 offset-lg-1 order-1 order-lg-2">
                <div className="howit-img" >
                  <img src={home3} alt="" />
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* <!--Começo Missão Valores e Visão--> */}
      </>
    )
  }
}

export default CompSobre