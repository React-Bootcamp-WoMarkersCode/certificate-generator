/*Este componente está destinado a construção dos 6 cards da pagina Home*/
/*Estou usando o Antd para me auxiliar na construção e layout*/

import React from 'react'
import { Card } from 'antd';
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
			          	Envie o certificado de cada participante por e-mail.
			        </Card>
				
			        <Card className="card" title="Controle de participantes" bordered={false}>
			          	Cadastre seus participantes para cada evento e selecione quem irá receber os certificados em nosso <em>check-list</em>.
			        </Card>
				
			        <Card className="card" title="Escreva sua assinatura" bordered={false}>
			          	Escreva sua assinatura digital em nosso Pad para os seus certificados.
			        </Card>
				
			        <Card className="card" title="Uso empresarial" bordered={false}>
			          	Crie uma conta para você ou sua empresa e gere certificados para seus eventos e cursos.
			        </Card>
					<Card className="card" title="Praticidade" bordered={false}>
			          	Registre seus eventos/cursos e gere os certificados quando for melhor para você e envie a hora que quiser. 
			        </Card>
			
			</div>
		</div>
	);
}

export default Cards;
