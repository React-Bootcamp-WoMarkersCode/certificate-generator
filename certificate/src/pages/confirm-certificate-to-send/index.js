import React from 'react'

import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'
import './style.css'

/*Componentes*/
import Menu2 from '../../components/menu-2/index'
import MyDocument from '../../components/my-document/index'
import Footer from '../../components/footer/index'


function ConfirmCertificateToSend(props) {

	/*O nome do participante veio da lista de participante ao clicar no botão "ver certificado" */
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
				<MyDocument 
					name={"Diana"} 
					course={"React"}
					company={"Vindi"}
					startDate={"03/10/20"}
					finishDate={"09/11/1999"}
					workload={"30"}
					user={"Dieogo Dabtas"}
				/>
			</div>
			<Footer/>
		</>
	);
}

export default ConfirmCertificateToSend;