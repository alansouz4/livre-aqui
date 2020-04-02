import React, { Component } from 'react'

import CompCarousel from './compCarousel';

// importando axios
import axios from 'axios'

class Modal extends Component {

    // CHAMANDO PORTA 4000 DO BACK
    async handleSubmit(data) {
        const id = localStorage.getItem("idAval")
        const dados = {data, id}
        console.log(dados)
        const response = await axios.post("http://localhost:4000/avaliacao", dados)
        console.log(response)
        alert("Avaliação realizada com sucesso")
    }
    
    render() {
        console.log(this)
        return (
            <>
                {/* <!--Modal temporário para informações do Lugar--> */}
                <div className="modal fade" id="modalInfo" tabindex="-1" role="dialog" aria-labelledby="modalInfoTitulo"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalInfoTitulo">Bistro</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <CompCarousel />
                            </div>
                            <div className="modal-body">
                            <h5>Rua Cesar Minedo, 1000 - Vila Olimpia</h5>
                            <p>Drikes as sextas e sábados</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary botlu" data-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Fim Modal temporário para informações do Lugar--> */}
            </>
        )
    }
}

export default Modal