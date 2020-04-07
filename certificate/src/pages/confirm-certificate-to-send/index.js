import React from 'react'

import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'
import './style.css'

/*Componentes*/
import Menu2 from '../../components/menu-2/index'
import Certificate from '../../components/certificate/index'
import Footer from '../../components/footer/index'

function ConfirmCertificateToSend(props) {
	return (
		<>
			<Menu2/>
			<div className="page">
				<h1 className="h1-confirm-send">
					<span className="span-confirm">
						Seus certificados</span>
						&nbsp;
						em PDF será enviado para todos os participantes confirmados
				</h1>
				<Certificate/>
			</div>
			<Footer/>
		</>
	);
}

export default ConfirmCertificateToSend;