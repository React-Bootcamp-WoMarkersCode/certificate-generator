import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './styles.css';

/*Importando os dados do evento*/
import eventsData from '../../services/events';

/*Importando formulário de edição do evento */
import FormEditEvent from '../form-edit-event/index';

function Event(props){
	const [ toEditEvent, setToEditEvent] = useState(eventsData);

	// JSON dos eventos:
	const [ eventData, setEvent ] = useState(eventsData);
	//console.log("event", event); //Aqui está puxando todos os itens de events.json

	// setEvent([
	// 	...eventData, {
	// 		email: "",
	// 		company: "",
	// 		course: "",
	// 		startDate: "",
	// 		finishDate: "",
	// 		workload: "",
	// 		logo: "",
	// 		digitalSignature: ""
	// 	}
	// ])
	

	// const eventos = event.map((itemJSON) => {
	// 	// Verificando qual é o evento:
	// 	if(itemJSON.token === event){
	// 		itemJSON.email = email
	// 		company = itemJSON.company
	// 		course = itemJSON.course
	// 		startDate = itemJSON.startDate
	// 		finishDate = itemJSON.finishDate
	// 		workload = itemJSON.workload
	// 		logo = itemJSON.logo
	// 		digitalSignature = itemJSON.digitalSignature
	// 	}
	// });




	// EDITAR:
	const editEvent = (event) => {
		event.preventDefault();
		setToEditEvent(!toEditEvent)
	}
	//console.log("editar", setToEditEvent);


	//DELETAR:
	const deleteEvent = (event) => {
		event.preventDefault();
		//console.log("event", event);
		setEvent(
			event.map(itemJSON => {
				if(itemJSON.token){
					itemJSON['email'] = ''
					itemJSON['company'] = ''
					itemJSON['course'] = ''
					itemJSON['startDate'] = ''
					itemJSON['finishDate'] = ''
					itemJSON['workload'] = ''
					itemJSON['logo'] = ''
					itemJSON['digitalSignature'] = ''
					itemJSON['token'] = false

					return itemJSON
				} else {
					return itemJSON
				}
			})
		)
		console.log("teste",event);
	}
	return(
		<>
			{eventData.map(itemJSON => {
				return(
					<div className="buttons">
						<Button danger className="button-delete" 
							onClick={deleteEvent} 
							key={eventData.delete}> X </Button>

						<Button className="button-edit" 
							onClick={editEvent} 
							key={eventData.edit}> EDITAR </Button>
							
							{toEditEvent && <FormEditEvent 
								course={itemJSON.course} 
								workload={itemJSON.workload} 
								startDate={itemJSON.startDate} 
								finishDate={itemJSON.finishDate} 
								action={"Editar Evento"}/>}

						<p className="course" key={eventData.course}>{itemJSON.course}</p>

						<Button className="button-check" key={eventData.check}> Check-List de Participantes </Button>

						<Button className="button-certificate" key={eventData.certificate}> Gerar Certificados </Button>
					</div>
				)
			})
			}
		</>
	);
} 

export default Event;