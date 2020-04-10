import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
/*Importando os dados do evento*/
import eventsData from '../../services/events';


export class Event extends Component {
	//Criando o estado inicial: sem evento 
	constructor(props){
		super(props)
		this.state = {
			eventos: eventsData,
			course: '',
			errorMsg: '',
			eventoCriado: false
		}
	}

	//Recebe o nome do evento 
	onChange(evento){
		this.setState({
			//Faz o update, conforme os eventos são adicionados.
			//////////////////////////////////////
			//PRECISA FILTRAR POR ORGANIZAÇÃO
			//////////////////////////////////////
			eventos: this.state.eventos.map(itemJSON => {
				if(itemJSON.course === evento){
					return itemJSON;
				}
				return itemJSON;
			})
		})
	}

	//Cria o evento:
	adicionarEvent(){
		const { email, company, course, startDate, finishDate, workload, logo, digitalSignature, eventoCriado } = this.state;

		this.setState({ eventos: [...this.state.eventos, {
			"email": email,
			"company": company,
			"course": course,
			"startDate": startDate,
			"finishDate": finishDate,
			"worload": workload,
			"logo": logo,
			"digitalSignature": digitalSignature
		}]})

		this.setState({ eventoCriado: true })
	}

		verificarEvento = (course) => this.state.eventos.map((itemJSON, i) => {
			if(itemJSON.course == course){
				this.setState({ errorMsg: 'Evento já cadastrado' })
			} else if (!this.state.eventoCriado){
				this.adicionarEvent()
			}
		})

	

	render() {

		return(
			<div>
				<Button danger> X </Button>
				<Button> EDITAR </Button>
				{this.state.eventos.map(itemJSON => {
					return(
						<div>
							<p onChange={() => this.onChange(itemJSON.course)}>{itemJSON.course}</p>
						</div>
					)
				})}
				<Button> Check-List de Participantes </Button>
				<Button> Gerar Certificados </Button>

			</div>

		)
	}
}


export default Event;