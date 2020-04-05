import React from 'react'
import modelCertificate from '../../assets/model_certificate.png'
import './style.css'

function ModelCertificateHome(props) {

	return (
		<div className="div-model">
			<h1 className="h1-model-certificate"> 
				<span className="span-model-certificate">
					Nosso
				</span>
					&nbsp;
					Modelo
			</h1>

			<img className="img-model-certificate" src={modelCertificate} alt="Modelo de Certificado"/>
		</div>
	);
}

export default ModelCertificateHome;