import React from 'react'

import participantes from '../../services/participantes.json'

import './style.css'
import certificado from '../../assets/wallpaper-certificate.png'

function Certificate(props) {
	return(
		<div className="certificate-background">
			<p className="p-certificate">A comunidade empresa confere ao participante o presente certificado
				<br/>referente a sua participação no evento curso realizado do
				<br/>dia data inicial aodata final, com carga horaria de carga horaria.
				<br/> Nome do usuário
			</p>
		</div>
	);
}

export default Certificate;