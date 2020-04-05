import React from 'react'
import MyDocument from '../../components/my-document/index'
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'
import './style.css'

function ConfirmCertificateToSend(props) {
	return (
		<div className="page">
			<h1 className="h1-confirm-send">
				<span className="span-confirm">
					Seus certificados</span>
					&nbsp;
					em PDF será enviado para todos os participantes confirmados
			</h1>
			<MyDocument/>
		</div>
	);
}

export default ConfirmCertificateToSend;