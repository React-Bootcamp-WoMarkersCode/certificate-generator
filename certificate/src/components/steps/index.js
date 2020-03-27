import React from 'react'
import './style.css'

function Steps(props) {

	return (
		<div className="div-steps">
			<h2 className="h2-steps" >
				<span className="span-1-steps">Veja como </span>
					é simples e fácil de usar o nosso 
				<span className="span-2-steps">
					passo a passo
				</span>
			</h2>
			<h3 className="h3-steps" >
				<span className="span-3-steps"> 1 </span>
					Crie uma conta para a sua empresa
			</h3>
			<h3 className="h3-steps">
				<span className="span-3-steps"> 2 </span> 
					Crie um evento 
			</h3>
				<h4 className="h4-steps">
					Insira todas as informações necessárias no formulário. Ele ficará salvo para nós
				</h4>
			<h3 className="h3-steps">
				<span className="span-3-steps"> 3 </span> 
					Insira um arquivo csv para gente ver quem estava nesse evento
			</h3>
			<h3 className="h3-steps">
				<span className="span-3-steps"> 4</span> 
					Quer selecionar os participantes depois? É só acessar o click-list
			</h3>
			<h3 className="h3-steps">
				<span className="span-3-steps"> 5 </span>
					Está na hora de enviar os certificados?
			</h3>
				<h4 className="h4-steps">
					Basta clicar em gerar certificados, nós enviaremos um e-mail para todos os participantes selecionados
			</h4>
		</div>
	);
}

export default Steps;