import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, message, Input } from 'antd';
import './styles.css';

/*Importando os dados do evento*/
import events from '../../services/events.json';

//Inserindo link para list-presents
import { Link } from 'react-router-dom';
import '../../pages/list-presents/index';

//Redirecionamento
import { Redirect } from 'react-router-dom'



function Event(props){
	//Recebe os dados do formulário de cadastro do evento:
	const [ toEditFormEvent, setToEditFormEvent] = useState(false);

	// JSON dos eventos:
	const [ event, setEvent ] = useState(events);
		
	//Redirecionamento para a página inicial, depois da exclusão do evento
	const [ goToHome, setGoHome ] = useState(false)


	//Buscando os dados do evento:
	let userEvent = ""
	let companyEvent = ""
	let	courseEvent = ""
	let startDateEvent = ""
	let	finishDateEvent = ""
	let	workloadEvent = ""
	let	logoEvent = ""
	let	digitalSignatureEvent = ""
	

	event.map((itemJSON) => {
		//console.log("teste", itemJSON); //tá trazendo os cadastros do events.json
		if(!itemJSON.token) {
			//console.log("teste-1", itemJSON);//não imprimiu nada no console.

			userEvent = itemJSON.user;
			//console.log("userEvent-teste", userEvent); //está imprimindo os 3 user
			companyEvent = itemJSON.company
			courseEvent = itemJSON.course
			startDateEvent = itemJSON.startDate
			finishDateEvent = itemJSON.finishDate
			workloadEvent = itemJSON.workload
			//console.log("workloadEvente", workloadEvent);//está imprimindo a cada vez, o workload
			logoEvent = itemJSON.logo
			digitalSignatureEvent = itemJSON.digitalSignature
		}
	});

	//Dados do evento:
	//Serão usados para editar no formulário
	const [ user,  setUser] = useState(userEvent); 
	//console.log("user", user); //tá pegando os dados do último cadastrado.
	const [ company, setCompany] = useState(companyEvent);
	//console.log("company", company);
	const [ course, setCourse ] = useState(courseEvent);
	//console.log("course", course);
	const [ startDate, setStartDate ] = useState(startDateEvent);
	//console.log("startDate", startDate);
	const [ finishDate, setFinishDate ] = useState(finishDateEvent);
	//console.log("finishDate", finishDate);
	const [ workload, setWorkload ] = useState(workloadEvent);
	//console.log("workload", workload);

	// EDITAR:
	//Ao clicar em Editar: torna o toEditFormEvent true, então quando clica no botão editar, o setToEditFormEvent tem como parâmetro true
	const clickEditFormEvent = (e) => {
		e.preventDefault();
		setToEditFormEvent(!toEditFormEvent)
	}

	
	//Ao salvar as informações editadas:
	const saveEditFormEvent = (e) => {
		e.preventDefault();
		//Os campos que devem ser preenchidos:
		if( !user || !company || !course || !startDate || !finishDate || ! workload){
			message.error('Por favor, preencha todos os campos do formulário.')
			//quando o formulário aparece na tela, essa mensagem aparece, caso o campo não tenha sido preenchido.
		} else { //caso todos os campos estejam preenchidos, o setToEditFormEvent é true
			setToEditFormEvent(!toEditFormEvent)

			//atualizando os dados do evento:
			setEvent(event.map(itemJSON => {
				if(!itemJSON.token){
					itemJSON['user'] = user
					itemJSON['company'] = company
					itemJSON['course'] = course
					itemJSON['startDate'] = startDate
					itemJSON['finishDate'] = finishDate
					itemJSON['workload'] = workload

					return itemJSON;
				} else {
					return itemJSON;
				}
			}) )
			message.success('Os dados do evento foram atualizados com sucesso!')
			//aparece essa mensagem, mas não renderiza os novos dados na tela.
		}
	}

	


	//DELETAR:
	const deleteEvent = (e) => {
		e.preventDefault();
		
		setEvent(
			event.map(itemJSON => {
				if(!itemJSON.token){
					itemJSON['user'] = ''
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
		message.info('O evento foi excluido com sucesso!')
		
		//Redireciona para a página inicial:
		setGoHome(false)
	}



	return(
		<>
		<div className="edit" style={{ display: toEditFormEvent ?  'none' : 'block' }} >
			{/* Verificando o evento: */}
			{/* Para cada evento cadastrado, mostra um botão de excluir, de editar e o checklist de participantes */}
			{event.map(itemJSON => {
				if(!itemJSON.token){
				return(
					<div className="buttons" >

						{/* Botão de excluir evento: */}
						<Button danger className="button-delete" 
							onClick={deleteEvent} 
							key={event.delete}> X 
						</Button>

						{/* Botão de editar o evento */}
						<Button className="button-edit" 
							onClick={clickEditFormEvent} 
							key={event.edit}> EDITAR 
						</Button>

						{/* Mostra o evento */}
						
						<p className="course" key={event.course}>{itemJSON.course}</p>
						
						{/* Botão que vai pra pág com o checklist dos participantes do evento */}
						<Button className="button-check" key={event.check}>
							<Link to="/list-presents"> Check-List de Participantes </Link>
						</Button>
					</div>
				)
			}})
			}
		</div>

		{/* Redirecionamento para Página Inicial */}
		{ goToHome && <Redirect to="/"></Redirect>}
		
		{/* Edição do formulário */}
		{toEditFormEvent && 
		// Mostra na tela o formulário com os campos para serem editados
		//o value está trazendo as informações do último cadastrado "Lucas...."
		//quando eu troco o nome do course (Evento), altera o nome dos 3 eventos que estão sendo mostrados na tela
			<div className="edit-event"
				style={{ display: toEditFormEvent ?  'block' : 'none' }} >

				<h2 className="edit-event-title">Edite os dados do seu evento:</h2>

				<Input 
					className="edit-event-input" 
					placeholder="Usuário" 
					value={user} 
					onChange={ newValue => setUser(newValue.target.value) }/>
				<br/>
				
				<Input 
					className="edit-event-input" 
					placeholder="Organização" 
					value={company} 
					onChange={ newValue => setCompany(newValue.target.value) } />
				<br/>
				
				<Input 
					className="edit-event-input" 
					placeholder="Evento" 
					value={course} 
					onChange={ newValue => setCourse(newValue.target.value) }/>
				<br/>

				<Input 
					className="edit-event-input" 
					placeholder="Data de Início" 
					value={startDate} 
					onChange={ newValue => setStartDate(newValue.target.value) }/>
				<br/>

				<Input 
					className="edit-event-input" 
					placeholder="Data de Fim" 
					value={finishDate} 
					onChange={ newValue => setFinishDate(newValue.target.value) }/>
				<br/>

				<Input 
					className="edit-event-input" 
					placeholder="Carga Horária" 
					value={workload} 
					onChange={ newValue => setWorkload(newValue.target.value) }/>
				<br/>

				<Button 
					className="button-edit-event" type="primary" primary 
					onClick={saveEditFormEvent}>Atualizar dados</Button>
				<br/>

				<Button className="button-edit-event" onClick={clickEditFormEvent}>Voltar</Button>
			</div>
		}
		</>
	);
} 

export default Event;