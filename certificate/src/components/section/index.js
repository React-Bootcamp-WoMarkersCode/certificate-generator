import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Section(props) {

	return (
		<div className="div-section">
			<h1 className="h1-section">
				<span className="span-3">
				Suas alunas </span> e participantes
				precisam de um 
				&nbsp;
				
				<span className="span-1-home">
					certificado
				</span>? 
			</h1>
			<h2 className="h2-section">
				Siga nosso 
				&nbsp;
				<span className="span-4">
					passo a passo
				</span>,
					 é 
					&nbsp;
						<span className="span-4" >
							rápido
						</span>
					&nbsp;
					é <span className="span-4"> 
						prático!
					</span>
			</h2>
			<Link to="/sign-in">
				<button className="button-section">
					EU QUERO
				</button>
			</Link>
		</div>

	);
}

export default Section;
