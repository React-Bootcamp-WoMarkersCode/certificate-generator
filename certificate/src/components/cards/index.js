/*Este componente está destinado a construção dos 6 cards da pagina Home*/
/*Estou usando o Antd para me auxiliar na construção e layout*/

import React from 'react'
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import './style.css'

function Cards(props) {

	return (
		<div className="div-cards">
			<h1 className="title-1"><span className="sub-title-1">Descubra</span> o que o nosso <span className="sub2-title-1">Gerador de Certificados</span> pode fazer por você </h1>
 
			<div  className="site-card-wrapper">	

					<Card className="card" title="Certificados Ilimitados" bordered={false}>

			          	Envie quantos certificados você precisar 
			        </Card>
				
			        <Card className="card" title="Envios Ilimitados" bordered={false}>
			          	Envie por e-mail o certificado para todos os participantes apenas com um click
			        </Card>
				
			        <Card className="card" title="Controle de participantes" bordered={false}>
			          	Mandou os dados CSV dos participantes mas algum não pode participar? 
			          	Não se preocupe, você pode user o check list de participantes para 
			          	resolver isso!
			        </Card>
				
			        <Card className="card" title="Dados CSV" bordered={false}>
			          	Os dados dos participantes como nome, e-mail e nome do curso devem ser mandados em um arquivo de texo separado por virgulas
			        </Card>
				
			        <Card className="card" title="Uso empresarial" bordered={false}>
			          	Crie uma conta para a sua empresa e gere certificados para seus eventos e cursos
			        </Card>
				
					<Card className="card" title="Praticidade" bordered={false}>
			          	Registre seus eventos/cursos e gere os certificados quando for melhor para você
			        </Card>
			
			</div>
		</div>
	);
}

export default Cards;