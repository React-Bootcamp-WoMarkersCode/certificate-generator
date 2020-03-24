import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './footer.css';



function Footer(props) {
	
	return (

	<footer className="footer">
		<section>
			<Row className="container">
				<Col className="col">
					<Row>
						
						<ol>
							<h3>Nossas desenvolvedoras</h3>
							<li>
								<Link to="https://www.linkedin.com/in/beatriz-ali-508940153/" className="footer-link"> Beatriz</Link>
							</li>
							<li>
								<Link to="https://www.linkedin.com/in/chaiana-hermes-8ab6a921/" className="footer-link">Chaiana</Link>
							</li> 
							<li>
								<Link to="https://www.linkedin.com/in/diana-regina-a96840173/" className="footer-link">Diana</Link>
							</li> 
							<li>
								<Link to="https://www.linkedin.com/in/grasiele-kroger/" className="footer-link">Grasiele</Link>
							</li> 
							<li>
								<Link to="https://www.linkedin.com/in/rosemeire-oyakawa-25099838/" className="footer-link">Rosemeire</Link>
							</li> 
							<li>
								<Link to="https://www.linkedin.com/in/sabrina-nabuco-de-oliveira-41008a38/" className="footer-link">Sabrina</Link>
							</li> 
						</ol>		
	 			</Row>
			</Col>
	 			<Col  xs={2} sm={4} md={6} lg={6} xl={10} className="col">
					 <Row>
	 				<ol className="footer-list">
	 				<h3>Gerador de Certificados</h3>
	 					<li ><Link to="#" className="footer-link">Sign In</Link> </li>
	 					<li ><Link to="#" className="footer-link">Sign Up</Link> </li>
	 					<li ><Link to="#" className="footer-link">Começar</Link> </li>
	 				</ol>	
					</Row>
				</Col>
			</Row>
		</section>
	</footer>
	);
}

export default Footer;