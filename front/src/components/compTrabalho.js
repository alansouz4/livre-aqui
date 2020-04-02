import React, { Component } from 'react'

class CompTrabalho extends Component {
  render(){
    return(
      <>
        <section className="work-section set-bg" id="imgTrabalho">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Como funciona</h2>
                        <p>Confira o passo a passo para se tornar o nosso parceiro e 
                            colocar o seu estabelecimento em destaque.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <div className="single-work-item">
                        <div className="number">01.</div>
                        <div className="work-text">
                            <h4>Cadastre-se</h4>
                            <p>Preencha os dados corretamente do seu espaço, como localização, 
                                serviços e informações relevantes.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-work-item">
                        <div className="number">02.</div>
                        <div className="work-text">
                            <h4>Aguarde nosso contato</h4>
                            <p>Após o recebimento do cadastro, a equipe do Livre Aqui entrará 
                                em contato para confirmação dos dados e da solicitação.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="single-work-item">
                        <div className="number">03.</div>
                        <div className="work-text">
                            <h4>Pronto, agora você faz parte da nossa rede</h4>
                            <p>Com a confirmação de todas as informações, será integrado ao Livre Aqui. 
                                A partir de agora, seu estabelecimento constará na nossa página de busca 
                                com nome, endereço, horário de funcionamento e serviços.
                            </p>
                        </div>
                    </div>
                </div>
               
          
            </div>
        </div>
    </section>
      </>
    )
  }
}

export default CompTrabalho;