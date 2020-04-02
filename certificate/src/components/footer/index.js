import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './footer.css';
import '../../pages/sign-in/index';
import '../../pages/sign-up/index';
import '../../style/App.css';



function Footer(props) {
	
	return (

	<footer className="footer">
		<section>
			<Row className="container">
				<Col xs={10} sm={10} md={5} lg={5} xl={5} className="col">
					<Row>
						
						<ol>
							<h3>Nossas Desenvolvedoras</h3>
							<li>
								<a href="https://www.linkedin.com/in/beatriz-ali-508940153/" className="footer-link"> Beatriz</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/in/chaiana-hermes-8ab6a921/" className="footer-link">Chaiana</a>
							</li> 
							<li>
								<a href="https://www.linkedin.com/in/diana-regina-a96840173/" className="footer-link">Diana</a>
							</li> 
							<li>
								<a href="https://www.linkedin.com/in/grasiele-kroger/" className="footer-link">Grasiele</a>
							</li> 
							<li>
								<a href="https://www.linkedin.com/in/rosemeire-oyakawa-25099838/" className="footer-link">Rosemeire</a>
							</li> 
							<li>
								<a href="https://www.linkedin.com/in/sabrina-nabuco-de-oliveira-41008a38/" className="footer-link">Sabrina</a>
							</li> 
						</ol>		
	 			</Row>
			</Col>
	 			<Col  xs={10} sm={10} md={5} lg={5} xl={5} className="col">
					 <Row>
	 				<ol className="footer-list">
	 				<h3>Gerador de Certificados</h3>
	 					<li>
							<Link to='/sign-in'  className="footer-link">Sign In</Link> 
						</li>
	 					<li>
							<Link to='/sign-up' className="footer-link">Sign Up</Link> 
						</li>
	 					<li>
	 						<Link to="#" className="footer-link">Começar</Link> 
	 					</li>
	 				</ol>	
					</Row>
				</Col>
			</Row>
		</section>
	</footer>
	);
}

export default Footer;