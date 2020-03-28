import React, { Component } from 'react'
import './style.css'

function MessageAlert(props) {

	return (
		<div className="div-messageAlert">
			<h3 className="h3-success">
				
				Os certificados foram<span className="span-success"> enviados com sucesso</span>, <br/> 
				obrigada por usar nossa plataforma.
			</h3>
		</div>
	);
}

export default MessageAlert;