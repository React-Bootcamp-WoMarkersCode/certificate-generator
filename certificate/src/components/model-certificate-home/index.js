import React from 'react';
import './style.css';
import modelCertificate from '../../assets/model_certificate.png'

function ModelCertificateHome(props) {

	return (
		<div className="model">
			<h1 className="h1-model "> <span className="sub-title-1">Nosso </span> <span className="sub-title-1 model-color">modelo</span></h1>
			<img src={modelCertificate} className="modelCertificate" alt="Modelo de Certificado"/>
		</div>
	);
}

export default ModelCertificateHome;