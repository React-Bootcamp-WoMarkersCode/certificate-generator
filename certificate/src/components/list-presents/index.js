import React, { Component } from 'react'

/*Estilos*/
import './style.css'
import './style-certificate.css'
import 'antd/dist/antd.css';
import { Checkbox, Button, Input } from 'antd';

/*Importando lista de participantes*/
import participantesData from '../../services/participantes.json'

/*Importando lista de eventos*/
import eventosData from '../../services/events.json'
import { PDFDownloadLink } from '@react-pdf/renderer'
import MyDocument from '../../components/my-document/index'

import stars from '../../assets/stars.png'
import logo from '../../assets/img/logo_texto_preto.png'

class ListOfPresents extends Component {

	/*Toda vez que o checkbox de cada participante 
	mudar de estado essa função será executada*/

	constructor(props) {
		super(props)
		this.state = {

			/*Define o estado do JSON*/
			participantes: participantesData,
			eventos: eventosData,

			name: '',
			email: '',
			msgError: '',

			/*Permite a troca de tela entre a lista de participante e o seu certificado*/
			visible: true,

			/*Informações que serão mostradas no certificado*/
			nameParticipant: '',
			course: '',
		}
	}

	showModal = (nameParticipant, course) => {
    	this.setState({	visible: false });
    	this.setState({ nameParticipant: nameParticipant})
    	this.setState({ course: course})
  	};
		
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

		const { name, email } = this.state;

			this.setState({ participantes: [...this.state.participantes, {
				"name": name,
				"email": email,
				"present": true,
				"receiveCertificate": false,
				"course": 'Java Poo'
			}]})		
	}

	
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
			
			/*Verificando se já existe um participante cadastrado*/
			let listEmails = []

			this.state.participantes.map(itemJson => {
				listEmails.push(itemJson.email)
			})

			if(!listEmails.includes(email)) {
				this.adicionarParticipante()
			} else {
				this.setState({ msgError: 'Este participante já está na sua lista'} )
			}
		}
	}

	/*Esta função mostra o certificado do participante*/
	verCertificado() {

		const { nameParticipant, course, eventos } = this.state 

		let company = ''
		let user = ''
		let startDate = ''
		let finishDate = ''
		let workload = ''

		eventos.map(itemJson => {
			if(itemJson.course === course) {
				startDate = itemJson.startDate
				finishDate = itemJson.finishDate
				workload = itemJson.workload
				company = itemJson.company
				user = itemJson.user
			}
		})

		return(
			<>   
			    <div className="certificate-background">
					<img src={logo} className="img-logo-certificate"/>
					<img src={stars} className="img-stars"/>   
					<p className="p-certificate">A comunidade empresa confere ao participante <span className="info-certificate">{nameParticipant}</span> o presente certificado 
						<br/>referente a sua participação no evento <span className="info-certificate">{course}</span> oferecido pela <span className="info-certificate">{company}</span> realizado do 
						<br/>dia <span className="info-certificate">{startDate}</span> ao <span className="info-certificate">{finishDate}</span>, com carga horaria de <span className="info-certificate">{workload} horas.</span>
						<br/>
					</p>
					<hr/>
					<p className="p-2-certificate">{user}</p>
				</div>
				<div className="div-buttons">
					<Button className="button-voltar" onClick={ () => this.setState({ visible: true })}>Voltar para a lista</Button>
					<Button className="button-email" >Mandar por e-mail</Button>

					<PDFDownloadLink
				        document={<MyDocument 

				        	name={nameParticipant} 
				        	course={course}
				        	company={company} 
				        	startDate={startDate} 
				        	finishDate={finishDate} 
				        	workload={workload}
				        	user={user}
				        
				        />}
				        fileName="certificado.pdf"
				        style={{
					          textDecoration: "none",
					          padding: "10px",
					          height: '10px',
					          textAlign: 'center',
					          color: "#ff4000",
					  
					        }}
					      >
				        {({ blob, url, loading, error }) =>
				          loading ? "Loading document..." : "Download Pdf"
				        }
				      </PDFDownloadLink>

				</div>
			</>
		);
	}

	render(){

		const { visible, msgError, participantes, name , course} = this.state
		return (
			<>

				<div className="list-participants"
					style={{ display: visible ?  'grid' : 'none' }}
				>

					<div className="input-participantes">
						<h2>Adicione mais participantes a sua lista:</h2>
						<p className="msg-error-participant">{msgError}</p>
						<Input className="input-1" placeholder="Nome do participante" value={name} onChange={e => this.setState({ name: e.target.value})}/>
						<br/>
						<Input className="input-2" placeholder="E-mail of participante" onChange={e => this.setState({ email: e.target.value})}/>
						<br/>
						<Button className="button-parcipants" type="primary" danger onClick={this.verificarCampos}>Incluir novo participante</Button>
					</div>
					
					
					<div className="participantes">
						<h1 className="title-2">Lista de Participantes</h1>
							
								{
									participantes.map(itemJson => {
										return (
											<>
												<div className="name-participant" >
													<Checkbox 
															checked={itemJson.present} 
															onChange={() => this.onChange(itemJson.name)}>
															{itemJson.name}
													</Checkbox>

													<Button type="primary" disabled={!itemJson.present} onClick={() => this.showModal(itemJson.name, itemJson.course) } >
														Ver certificado
													</Button>						

												</div>
												<br/>
											</>
										);
									})

								}
					</div>
				</div>
				<div style={{ display: visible ?  'none' : 'grid' }}>
					{this.verCertificado()}
				</div>
			</>
		);
	}
}

export default ListOfPresents;