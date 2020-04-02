import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <>
        {/* <!-- Começo Footer --> */}
        <footer class="footer-area section-gap">
				<div className="container">

					<div className="row footer-bottom d-flex justify-content-between">
						<p className="col-lg-8 col-sm-12 footer-text m-0 text-white">
Livre Aqui &copy;<script>document.write(new Date().getFullYear());</script> todos os direitos reservados.
						</p>
						<div className="col-lg-4 col-sm-12 footer-social">
							<a href="#"><i className="fa fa-facebook"></i></a>
							<a href="#"><i className="fa fa-twitter"></i></a>
							<a href="#"><i className="fa fa-dribbble"></i></a>
							<a href="#"><i className="fa fa-behance"></i></a>
						</div>
                        <div className="foot">
                            <p>a</p>
						</div>
					</div>
				</div>
			</footer>
    {/* <!-- Fim footer --> */}
      </>
    )
  }
}

export default Footer