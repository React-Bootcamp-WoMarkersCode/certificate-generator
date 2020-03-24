import React, { Component } from 'react'

/*Estilos*/
import './style.css'
import 'antd/dist/antd.css';
import { Checkbox, Button } from 'antd';

/*Importando lista de participantes*/
import participantes from '../../services/participantes'

function ListOfPresents(props) {

	/*Toda vez que o checkbox de cada participante 
	mudar de estado essa função será executada*/
	const onChange = event => {
		alert("mudou")
	}

	return (
		<div className="list-participants">
			<h1 className="title-2">Lista de Participantes</h1>

			{
				participantes.map(itemJson => {
					return (
						<>
							<div className="name-participant" >
								<Checkbox onChange={onChange}>{itemJson.name}</Checkbox>
							</div>
							<br/>
						</>
					);
				})
			}

			<Button className="submit-participants" type="primary" danger>Confirmar Participantes</Button>
		</div>
	);
}

export default ListOfPresents;