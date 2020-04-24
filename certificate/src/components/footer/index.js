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

		<div className="footer-1">
			<ol className="footer-list-1">
				<h3>Nossas Desenvolvedoras</h3>
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
			</ol>		
		 	<ol className="footer-list-2">
		 		<h3>Gerador de Certificados</h3>
		 		<li>
					<Link to='/sign-in'  className="footer-link">Sign In</Link> 
				</li>
		 		<li>
					<Link to='/sign-up' className="footer-link">Sign Up</Link> 
				</li>
		 		<li>
		 			<Link to="/sign-in" className="footer-link">Começar</Link> 
		 		</li>
		 	</ol>
		</div>

		<div className="footer-2">
			<h4>Licença MIT - Copyright - 2020 - Certificates for Everyone</h4>	
		</div>	
	</footer>
	);
}

export default Footer;