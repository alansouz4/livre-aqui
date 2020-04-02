import React, { Component } from 'react'

import ajuda2 from '../assets/ajuda2.jpg'

class CompAjuda extends Component {
  render() {
    return (
      <>
        {/* <!--Conteúdo início--> */}
        <section className="howitworks-section spad">
          <div className="container" style={{ marginTop: "50px" }}>
            <div className="row mb-110">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="howit-item">
                  <h2>Você não está sozinho!</h2>
                  <p>Todos os dias milhares de pessoas LGBTQI+ sofrem algum tipo de preconceito.
                    Seja pela sociedade, pela própria família, ambiente de trabalho ou até mesmo de pessoas
                    próximas. Nós sabemos o quanto isso é difícil e pode causar mágoas, tristezas e traumas.
                    Por isso, além de destacarmos lugares livres de LGBTQIfobia, este é um espaço onde você
                    pode encontrar o apoio que precisa. Aqui, vamos colocar contatos de ONGs, casas, repúblicas,
                    entidades e instituições que atuam em prol das pessoas LGBTQI+. Assim, você poderá se sentir
                    acolhido quando necessário.
                    Sinta-se à vontade também para conhecer de perto o trabalho desses locais e até
                    mesmo colaborar para suas causas. Juntos, podemos dar um fim ao ódio e apatia e
                    mostrar para o mundo que o amor sempre vence!
                  </p>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 order-1 order-lg-2">
                <div className="howit-img">
                  <img src={ajuda2} alt="" />
                </div>
              </div>
            </div>
          
            <div className="row">
              <div className="col-md-6 col-sm-12" style={{ marginTop: "50px" }}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Casa 1</h4>
                    <p className="card-text">A Casa 1 é um punhado de coisas: além de uma república de acolhimento, um centro cultural e agora uma clínica social, é também um exercício constante de pensar e promover mudanças estruturais.
                    É ainda um projeto orgânico que se modifica de acordo com a necessidade e a diversidade dos seus públicos.<br />
                      <b>Endereço: Galpão Casa 1 - Rua Adoniran Barbosa 151, Bela Vista - São Paulo </b><br />
                      <b>Contato: centrocasaum@gmail.com </b>
                    </p>
                    <a href="http://www.casaum.org/" className="btn btn-primary bot">Visitar página</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12" style={{ marginTop: "50px" }}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Todxs</h4>
                    <p className="card-text">Somos a primeira startup social brasileira sem fins
                                   lucrativos que promove a inclusão LGBTI+.
                                   Queremos empoderar a comunidade LGBTI+,
                                   educando a sociedade e transformando o Brasil em um país verdadeiramente inclusivo e livre de discriminação.<br />
                      <b>Contato: @todxs</b>
                    </p>
                    <a href="https://www.todxs.org/" className="btn btn-primary bot">Visitar página</a>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="row">
              <div className="col-md-6 col-sm-12" style={{ marginTop: "50px" }}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Parada do Orgulho LGBT de São Paulo - APOGLBT</h4>
                    <p className="card-text">Lutamos pelos direitos civis de gays, lésbicas, bissexuais e transgêneros e combater com afinco a LGBTfobia em âmbito nacional.<br />
                      <b>Endereço: Rua Barão de Itapetininga, 255, sala 716 - São Paulo</b><br />
                      <b>Telefone para contato: (11) 3237-3511</b>
                    </p>
                    <a href="http://paradasp.org.br/" className="btn btn-primary bot">Visitar página</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12" style={{ marginTop: "50px" }}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">EternamenteSou</h4>
                    <p className="card-text">Iniciamos em 2017 em coletivo com profissionais
                    mobilizados pela necessidade da implantação de serviços e projetos voltados
                    ao atendimento psicossocial a pessoas idosas LGBT. Proporcionando uma velhice digna e ativa.<br />
                      <b>Telefone para contato: (11) 94783-8352</b>
                    </p>
                    <a href="http://eternamentesou.org/" className="btn btn-primary bot">Visitar página</a>
                  </div>
                </div>
              </div>
            </div>
          

            <div className="row">
              <div className="col-md-6 col-sm-12" style={{ marginTop: "50px" }}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Centro de Cidadania LGBTI Luana Barbosa dos Reis (Zona Norte)</h4>
                    <p className="card-text">Os Centros de Cidadania LGBTI
                    (Lésbicas, Gays, Bissexuais, Travestis, Mulher Transexual, Homem Trans e Intersexual)
                    são uma iniciativa da Secretaria Municipal de Direitos Humanos e Cidadania.<br />
                      <b>Praça Centenário, 43 - Casa Verde </b> <br />
                      <b>Telefone para contato: (11) 3951-1090</b> <br />
                      <b>E-mail: centrolgbtnorte@prefeitura.sp.gov.br</b>
                    </p>
                    <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/direitos_humanos/lgbti/cch/index.php?p=150960" className="btn btn-primary bot">Visitar página</a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-12" style={{ marginTop: "50px" }}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Centro de Cidadania LGBTI Luiz Carlos Ruas (Centro)</h4>
                    <p className="card-text">Os Centros de Cidadania LGBTI
                    (Lésbicas, Gays, Bissexuais, Travestis, Mulher Transexual, Homem Trans e Intersexual)
                    são uma iniciativa da Secretaria Municipal de Direitos Humanos e Cidadania.<br />
                      <b>Rua General Jardim, 660, sala 32 – A, Vila Buarque </b> <br />
                      <b>Telefone para contato: (11) 3225-0019</b> <br />
                      <b>E-mail: centrodecidadanialgbt@prefeitura.sp.gov.br</b>
                    </p>
                    <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/direitos_humanos/lgbti/cch/index.php?p=150960" className="btn btn-primary bot">Visitar página</a>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>
        {/* <!--Fim conteúdo--> */}
        <br /><br /><br /><br /><br />
      </>
    )
  }
}

export default CompAjuda