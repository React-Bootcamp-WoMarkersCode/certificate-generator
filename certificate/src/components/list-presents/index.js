import React, { Component } from 'react'

/*Estilos*/
import './style.css'
import 'antd/dist/antd.css';
import { Checkbox, Button, Input } from 'antd';

/*Importando lista de participantes*/
import participantesData from '../../services/participantes'

class ListOfPresents extends Component {

	/*Toda vez que o checkbox de cada participante 
	mudar de estado essa função será executada*/

	constructor(props) {
		super(props)
		this.state = {

			/*Define o estado do JSON*/
			participantes: participantesData,

			name: '',
			email: '',
			msgError: '',
			participanteCriado: false
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

	/*Esta função faz o (C)reate no JSON de participantes*/
	adicionarParticipante() {

		const { name, email, participanteCriado } = this.state;

			this.setState({ participantes: [...this.state.participantes, {
				"name": name,
				"email": email,
				"present": true,
				"receiveCertificate": false,
				"course": 'react'
			}]})

			this.setState({ participanteCriado: true })
		
	}

	/*Esta função varre o JSON e procura o participante a partir dos dados digitados no input*/
	verificaParticipante = (email) => this.state.participantes.map((itemJson, i)=> {
		if (itemJson.email == email) {
			this.setState({ msgError: 'Este participante já está na sua lista'}) 
		} else if (!this.state.participanteCriado) {
			this.adicionarParticipante()
		} 
	})

	
	/*Esta função será executada ao clicar no botão*/
	/*Verificaremos se o usuário digitou os campos*/
	/*Se sim, chamaremos outra função para  
	verificar se o participante já existe*/
	/*Se não, uma mensagem de erro será mostrada*/
	verificarCampos = event => {

		event.preventDefault();

		const { name, email } = this.state;

		if(!name || !email) {
			this.setState({ msgError: 'Por favor, preencha os dados'} ) 
		} else {
			this.setState({ msgError: ''})
			this.verificaParticipante(email)
		}
	}

	render(){


		return (
			<div className="list-participants">
				<h1 className="title-2">Lista de Participantes</h1>
				<h2>Adicione mais participantes a sua lista:</h2>
				<p>{this.state.msgError}</p>
				<Input placeholder="Name of Participant" value={this.state.name} onChange={e => this.setState({ name: e.target.value})}/>
				<Input placeholder="Email of Participant" onChange={e => this.setState({ email: e.target.value})}/>
				<Button type="primary" danger onClick={this.verificarCampos}>Incluir novo participante</Button>
				<br/>
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