import React, { useState, useRef } from 'react';

/*Estilos*/
import 'antd/dist/antd.css';
import { Button, Form, message, DatePicker, Input, Popover, Empty, InputNumber } from 'antd';
import './styles.css';
import './styles-events.css';
import './style-form-event.css'
import './style-digital-assinature.css'

/*Importando os dados do evento*/
import eventosData from '../../services/events.json';

/*Componentes*/
import ProfileCard from '../../components/profile-card/index'
import ListOfPresents from '../../components/list-presents/index'

/*Assinatura digital*/
import SignaturePad from 'react-signature-canvas'
import Popup from 'reactjs-popup'

function ListEvents(props) {

	/*Recebe o organizador e o JSON de organizadores*/
	const { organizador, users } = props

	/*Trabalham para trocar a tela da lista de eventos com o formulário de edição/criação*/
	const [ toEditFormEvent, setToEditFormEvent] = useState(false);
	const [ toCreateFormEvent, setToCreateFormEvent] = useState(false);
	const [ toProfile, setProfile] = useState(false);
	const [ toList, setList] = useState(false);

	/*Esta variavel guarda o evento referente quando o botão check participantes for acionado*/
	const [ eventChecked, setEventChecked] = useState('');

	/*JSON dos eventos*/
	const [ eventos, setEventos ] = useState(eventosData)

	/*Vaiável para saber qual evento foi editado*/
	const [ eventEdited, setEventEdited ] = useState('')
	  
	//Dados do evento:
	//Serão usados para editar no formulário
	const [ company, setCompany] = useState('');
	const [ course, setCourse ] = useState('');
	const [ startDate, setStartDate ] = useState('');
	const [ finishDate, setFinishDate ] = useState('');
	const [ workload, setWorkload ] = useState('');

	/*---------- Assinatura Digital ----------*/
	const [ imageURL, setImageURL ] = useState(null)

	const sigCanvas = useRef({})

	const clear = () => sigCanvas.current.clear();

	const save = () => {
		setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"))
	}

	/*--------- Formulário para criar evento ---------*/
	const { RangePicker } = DatePicker;

	/*Constroi o layout do input de datas*/
	const formItemLayout = {
	  labelCol: {
	    xs: {
	      span: 24,
	    },
	    sm: {
	      span: 8,
	    },
	  },
	  wrapperCol: {
	    xs: {
	      span: 24,
	    },
	    sm: {
	      span: 16,
	    },
	  },
	};

	/*Constroi o layout do input de name/curso*/
	const formInputLayout = {
	  labelCol: {
	    span: 4,
	  },
	  wrapperCol: {
	    span: 8,
	  },
	};

	/*Define as regras para que a data seja aceita */
	const rangeConfig = {
	  rules: [
	    {
	      type: 'array',
	      required: true,
	      message: 'Este campo é obrigatório!',
	    },
	  ],
	};

	/*Define as regras para que os inputs de texto sejam aceitos */
	const rangeInputs = {
		rules: [
	    	{
	        	required: true,
	            message: 'Por favor, preencha esse campo',
	        },
		],
	};

	/*Função acionada quando um evento for ser criado*/
	/*Ela não é chamada caso os campos não forem preeenchidos*/
	const onFinish = fieldsValue => {

	    /*Dados do calendário*/
	    const rangeValue = fieldsValue['range-picker'];

	    if(imageURL === null) {
	    	message.error('Por favor, escreva sua assinatura digital')
	    } else {
	    	setEventos([
				...eventos, {
				user: organizador,
				company: fieldsValue.company, 
				course: fieldsValue.course,
				startDate: rangeValue[0].format('YYYY-MM-DD'), 
				finishDate: rangeValue[1].format('YYYY-MM-DD'), 
				workload: fieldsValue.workload, 
				logo: "https://miro.medium.com/max/478/1*jriufqYKgJTW4DKrBizU5w.png", 
				digitalSignature: imageURL
			}
		])

		message.success('Evento criado com sucesso')

		/*Retira o componente do formulário de eventos e volta para a lista*/
	    setToCreateFormEvent(false)
	    }  
	};

	/*Buscando os eventos do organizador*/

	let eventsOfOrganizer = []

	eventos.map(evento => {
		if(evento.user === organizador) {
			eventsOfOrganizer.push(evento)
		}
	})

	/*Verifica se existem eventos cadastrados para mostrar elemento do Antd 'No Data'*/
	let noEvents = true

	/* ------------- Deletando Eventos ---------------*/
	const deleteEvent = (eventToBeDeleted) => {

		setEventos( eventsOfOrganizer.filter(evento => {
			if(evento.course !== eventToBeDeleted) {
				return evento
			}
		}))
	}

	/* -------------- Editando eventos ----------------*/
	const beforeEdit = () => {

		if( !company || !course || !startDate || !finishDate || ! workload || !imageURL){
			message.error('Por favor, não deixe seus dados vazios.')
			//quando o formulário aparece na tela, essa mensagem aparece, caso o campo não tenha sido preenchido.
		} else {
			setToEditFormEvent(!toEditFormEvent)
		}
	}

	//Ao salvar as informações editadas:
	const saveEditFormEvent = (e) => {
		e.preventDefault();
		//Os campos que devem ser preenchidos:
		if( !company || !course || !startDate || !finishDate || ! workload || !imageURL){
			message.error('Por favor, preencha todos os campos do formulário.')
			//quando o formulário aparece na tela, essa mensagem aparece, caso o campo não tenha sido preenchido.

		} else {
			/*Atualizando o evento do organizador*/
			setEventos(eventsOfOrganizer.map(evento => {
				
				/*Mudando somente o evento requerido*/
				if(eventEdited === evento.course) {
					evento['company'] = company
					evento['course'] = course
					evento['startDate'] = startDate
					evento['finishDate'] = finishDate
					evento['workload'] = workload
					evento['digitalSignature'] = imageURL

					return evento;
				} else {
					return evento;
				}
				
			}) )

			message.success('Os dados do evento foram atualizados com sucesso!')

			/*Voltando para a lista de eventos*/
			//setToEditFormEvent(!toEditFormEvent)
		}
		
	}

	const clickEditFormEvent = (eventToBeEdit) => {

		/*Trocando a lista de eventos pelo formulário de edição*/
		setToEditFormEvent(!toEditFormEvent)

		/*Guardando qual evento será editado*/
		setEventEdited(eventToBeEdit.course)

		setCompany(eventToBeEdit.company)
		setCourse(eventToBeEdit.course)
		setStartDate(eventToBeEdit.startDate)
		setFinishDate(eventToBeEdit.finishDate)
		setWorkload(eventToBeEdit.workload)
	}

	/*Esta função é acionada quando o botão para o check list é acionado*/
	const saveEventToList = (eventToList) => {
		setList(true)
		setEventChecked(eventToList)
	}

	return(
		<>
		
		<div style={{ display: ( toEditFormEvent || toCreateFormEvent || toProfile || toList )?  'none' : null }}>
			<h1 className="title-2-list-events">Olá, {organizador}</h1>
			<Button className="button-add" onClick={() => setToCreateFormEvent(true)}>+ Cadastrar mais um evento</Button>
			<Button className="button-profile" onClick={() => setProfile(true)}>Meu Perfil</Button>
			<br/>
			<h1 className="title">Eventos Cadastrados</h1>
			<div className="listEvents">
			{
				eventos.map(eventoJson => {

					if(eventoJson.user === organizador ){
						noEvents = false
						return(
							<div className="each-event">

								<p className="course">{eventoJson.course}</p>								

								<Button className="button-check" onClick={() => saveEventToList(eventoJson)}>
									Check-List de Participantes 
								</Button>

								<Popover 
									title={<h4 className="h4-list-event">{eventoJson.course}</h4>}
									content={
										<>
											<p><span className="span-list-event">Empresa:</span> {eventoJson.company}</p>
											<p><span className="span-list-event">Inicio do Evento:</span> {eventoJson.startDate}</p>
											<p><span className="span-list-event">Final do Evento:</span> {eventoJson.finishDate}</p>
											<p><span className="span-list-event">Carga Horária:</span> {eventoJson.workload}</p>
											
											<span className="span-list-event">Assinatura Digital</span>
											{ imageURL ? (
													<img
														src={imageURL}
														alt="Minha assinatura Digital"
														className="buttons-pad"

													/>
												) : <h4 style={{ color: 'red'}}>Sem assinatura</h4> }
										</>
									} 
								>
								    <Button className="button-info" >Informações do Evento</Button>
								</Popover>

								<Button className="button-edit" 
									onClick={() => clickEditFormEvent(eventoJson)} > Editar 
								</Button>


								<Button danger className="button-delete" 
									onClick={ () => deleteEvent(eventoJson.course) } > X 
								</Button>
	
							</div>
						)
					}
				})
			}
			</div>
			
			{ noEvents && <Empty style={{marginTop: '5%'}}/> }

		</div>
		{toEditFormEvent && 
		// Mostra na tela o formulário com os campos para serem editados
		//o value está trazendo as informações do último cadastrado "Lucas...."
		//quando eu troco o nome do course (Evento), altera o nome dos 3 eventos que estão sendo mostrados na tela
			<div className="edit-event"
				style={{ display: toEditFormEvent ?  'block' : 'none' }} >

				<h2 className="edit-event-title">Edite os dados do seu evento:</h2>
				<h4>Organização:</h4>
				<Input 
					className="edit-event-input" 
					placeholder="Organização" 
					value={company} 
					onChange={ newValue => setCompany(newValue.target.value) } />
				<br/>
				<h4>Evento:</h4>
				<Input 
					className="edit-event-input" 
					placeholder="Evento" 
					value={course} 
					onChange={ newValue => setCourse(newValue.target.value) }/>
				<br/>
				<h4>Data de Inicio:</h4>
				<Input 
					className="edit-event-input" 
					placeholder="Data de Início" 
					value={startDate} 
					onChange={ newValue => setStartDate(newValue.target.value) }/>
				<br/>
				<h4>Data de Encerramento:</h4>
				<Input 
					className="edit-event-input" 
					placeholder="Data de Fim" 
					value={finishDate} 
					onChange={ newValue => setFinishDate(newValue.target.value) }/>
				<br/>
				<h4>Carga Horaria:</h4>
				<Input 
					className="edit-event-input" 
					placeholder="Carga Horária" 
					value={workload} 
					onChange={ newValue => setWorkload(newValue.target.value) }/>
				<br/>
				<h4>Assinatura Digital:</h4>
				<div>
					<Popup modal trigger={<Button className="button-open-pad">Abrir Pad para assinar</Button>}>
						{ close => (
							<>
								<SignaturePad ref={sigCanvas}
											  canvasProps={{
											  	className: 'signatureCanvas'
											  }}
								/>
								<Button onClick={save} className="button-save">Salvar</Button>
								<Button onClick={clear} >Apagar Tudo</Button>
								<Button onClick={close} className="button-close" >Fechar</Button>
							</>
						)}
					</Popup>
					<br/>
					<br/>
					{ imageURL ? (
						<img
							src={imageURL}
							alt="Minha assinatura Digital"
							className="buttons-pad"

						/>
					) : null }
				</div>

				<Button 
					className="button-edit-event" type="primary" primary 
					onClick={saveEditFormEvent}>Atualizar dados</Button>
				<br/>

				<Button className="back-edit-event" onClick={beforeEdit}>Voltar para a lista de eventos</Button>
			</div>
		}

		{ toCreateFormEvent && 
			<>
				
				<Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>  
			      <div className="inputs-event">
			        <h1 className="h1-form-event">Criando um novo evento</h1>
			        <Form.Item
				        {...formInputLayout}
				        {...rangeInputs}
			          className="input-1-event"
				        name="company"
				        label="Empresa" >

			          <Input placeholder="Digite a empresa responsável pelo evento" />
			        </Form.Item>

			        <Form.Item
			          {...formInputLayout}
			          {...rangeInputs}
			          className="input-2-event"
			          name="course"
			          label="Curso/Evento">
			          <Input placeholder="Digite o nome do evento"  />
			        </Form.Item>

			        <Form.Item 
			          {...rangeInputs}
			          className="input-3-event"
			          label="Carga Horária" 
			          name="workload" >
			          <InputNumber /> 
			        </Form.Item>

			        <Form.Item 
			          name="range-picker" 
			          className="input-4-event"
			          label="Data de inicio/fim do evento" 
			          {...rangeConfig}>
			          <RangePicker />
			        </Form.Item>

			        <div className="upload-assinature">
			        	<h3 className="h3-form-event">Assinatura Digital:</h3>
			        	<div>
							<Popup modal trigger={<Button className="button-open-pad">Abrir Pad para assinar</Button>}>
								{ close => (
									<>
										<SignaturePad ref={sigCanvas}
													  canvasProps={{
													  	className: 'signatureCanvas'
													  }}
										/>
										<Button onClick={save} className="button-save">Salvar</Button>
										<Button onClick={clear} >Apagar Tudo</Button>
										<Button onClick={close} className="button-close" >Fechar</Button>
									</>
								)}
							</Popup>
							<br/>
							<br/>
							{ imageURL ? (
								<img
									src={imageURL}
									alt="Minha assinatura Digital"
									className="buttons-pad"
								/>
							) : <h4 style={{ color: 'red'}}>Sem assinatura</h4> }
						</div>
			        </div>


			        <Form.Item>
			        	<Button type="primary" htmlType="submit" className="button-events">
			        		Cadastrar Novo Evento
			        	</Button>
			            <br/>
			        </Form.Item>

			         
			      </div>
			    </Form>
				<Button 
					onClick={() => setToCreateFormEvent(false)} 
					className="button-back-from-create"
					>
	                Voltar para a lista de Eventos
	            </Button>
			</>
		}

		{ toProfile && 
			<>
				<ProfileCard organizador={organizador} users={users} assinatura={imageURL}/>
				<Button 
					onClick={() => setProfile(false)}
					className="button-back-of-profile" 
					>
	                Voltar para a lista de Eventos
	            </Button>
			</>
		}

		{ toList &&
				<>
					<ListOfPresents evento={eventChecked}/>
					<Button onClick={() => setList(false)} className="button-back-from-list" style={{ marginButtom: '-20%'}}>
	                	Voltar para a lista de Eventos
	            	</Button>
	            </>
		}
		</>		
			
	);
} 

export default ListEvents;