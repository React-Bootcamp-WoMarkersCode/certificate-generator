import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Section(props) {

	return (
		<div className="div-section">
			<h1 className="h1-section">
				<span className="span-3">
				Suas alunas </span> e participantes <br/> 
				precisam de um 
				<span className="span-1">
					certificado
				</span>? 
			</h1>
			<h2 className="h2-section">
				Siga nosso 
				<span className="span-2">
					passo a passo</span>. <br/> é 
					<span className="span-2" >
						rápido
					</span> é <span className="span-2"> 
						prático!
					</span>
			</h2>
			<Link to="/sign-up">
				<button className="button-section">
					EU QUERO
				</button>
			</Link>
		</div>

	);
}

export default Section;