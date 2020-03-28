import React, { Component } from 'react'

/*Estilos*/
import './style.css'
import 'antd/dist/antd.css';
import { Checkbox, Button } from 'antd';

/*Importando lista de participantes*/
import participantesData from '../../services/participantes'

class ListOfPresents extends Component {

	/*Toda vez que o checkbox de cada participante 
	mudar de estado essa função será executada*/

	constructor(props) {
		super(props)
		this.state = {

			/*Define o estado do JSON*/
			participantes: participantesData
		}
	}
		
	/*Esta função recebe o nome do participante como parametro*/
	onChange(participante) {

		/*Vamos atualizar o estado do JSON de participantes*/
		/*Estou fazendo o (U)pdate do CRUD dos participantes*/
		this.setState({

			/*Ao percorrer novamente o JSON, o estado será
			atualizado com os valores que iremos retornar*/
			participantes: this.state.participantes.map(itemJson => {

				/*Se econtrarmos o participante*/
				if(itemJson.name === participante) {

					/*Invertendo o estado de sua condição de presença 
					no evento*/
					itemJson['present'] = !itemJson.present

					/*Retornamos esse dado ao JSON novamente*/
					return itemJson;
				}

				/*Retornamos esse dado ao JSON novamente*/
				return itemJson;
			})
		})
	}

	render(){
		return (
			<div className="list-participants">
				<h1 className="title-2">Lista de Participantes</h1>

				{
					this.state.participantes.map(itemJson => {
						return (
							<>
								<div className="name-participant" >
									<Checkbox 
											checked={itemJson.present} 
											onChange={() => this.onChange(itemJson.name)}>
											{itemJson.name}
									</Checkbox>
								</div>
								<br/>
							</>
						);
					})
				}
			</div>
		);
	}
}

export default ListOfPresents;