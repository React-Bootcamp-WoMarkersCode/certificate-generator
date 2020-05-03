import React, { useState } from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/*Estilos*/
import './style.css'
import './style-certificate.css'
import 'antd/dist/antd.css';
import { Checkbox, Button, Input, message, Table, Tag, Popover, Popconfirm } from 'antd';

import { UserAddOutlined } from '@ant-design/icons';

/*Animação de tela enquanto o e-mail é enviado*/
import Spinner from 'react-spinkit' 
import './style-spinkit.css'

/*Importando lista de participantes*/
import participantesData from '../../services/participantes.json'

import stars from '../../assets/stars.png'
import logo from '../../assets/img/logo_texto_preto.png'

function ListOfPresents(props) {

		/*Recebe o evento selecionado pelo organizador*/
		const { evento } = props

		/*Nome do novo participante no input*/
		const [ name, setName ] = useState('')

		/*E-mail do novo participante no input*/
		const [ email, setEmail ] = useState('')

		/*JSON dos participantes*/
		const [ participantes, setParticipantes ] = useState(participantesData)

		/*Variavel que troca a lista de participants pelos certificados*/
		const [ visible, setVisible ] = useState(true)

		/*Variavel que troca a lista de participants pelos formulário*/
		const [ visibleForm, setVisibleForm ] = useState(false)

		/*Participante selecionado*/
		const [ thisParticipante, setThisParticipante ] = useState('')

		/*Variavel que mostrará uma animação enquanto o e-mail é enviado*/
		const [ loadingEmail, setLoadingEmail] = useState(false)

		/*------- Informações adicionais sobre o evento ------*/
		let numeroDeParticipantes = 0
		let certificadosEvenviados = 0
		let participantesConfirmados = 0

		const showModal = (participante) => {
			setVisible(false)
			setThisParticipante(participante)
		}

		/*Valida os campos de input*/
		const verificarCampos = () => {
			if(!name || !email ) {
				message.error('Por favor, preencha todos os campos')

			} else {

				/*Verificando se o e-mail é valido */
			    if( !email.includes('@') || !email.includes('.') ){
			    	message.error('E-mail invalido!')

			    } else {
			    	
			    	/*Verificando se já existe um participante cadastrado*/
				    let listEmails = []

				    participantes.map(itemJson => {

				    	if(itemJson.course === evento.course) {
				    		listEmails.push(itemJson.email)
				    	}
				    })

				    if(!listEmails.includes(email)) {
						
						setParticipantes([
							...participantes, {
								name: name,
								email: email,
								present: true,
								receiveCertificate: false,
								course: evento.course
							}
						])

						/*Volta para a lista de participntes*/
						setVisibleForm(false)
						message.success('Participante criado com sucesso')
						setName('')
						setEmail('')

					} else {

						message.warning('Este participante já está na sua lista')
					}
			    }
			}
		}

		/* ------------- Deletando Participantes ---------------*/
		const deleteParticipant = (participantToBeDeleted) => {

			setParticipantes( participantes.filter(participante => {
				if(participante.name !== participantToBeDeleted) {
					return participante
				}
			}))
		}

		/*Na mudança de check do participante*/
		const onChange = (participante) => {

			setParticipantes(participantes.map(itemParticipante => {
				
				if(itemParticipante.name === participante.name) {
					itemParticipante['present'] = !participante.present

					if(participante.present) {
						message.success('Este participante receberá certificado')

					} else {
						message.info('Este participante não receberá certificado')
					}

					return itemParticipante;
				} else {

					return itemParticipante;
				}
				
			}))
		}
    	
    	/*Função destinada ao envio de e-mail, recebe o e-mail do participante*/
		const sendEmail = (to) =>{	

			/*Este e-mail enviará os certificados*/
			let from = "certificadowomakerscode@gmail.com"

			setLoadingEmail(true)
			const input = document.getElementsByClassName('certificate-background')[0];
			window.scrollTo(0,0);
			html2canvas(input, {
					windowWidth: input.scrollWidth,
					windowHeight: input.scrollHeight
				})
				.then((canvas) => {
					const imgData = canvas.toDataURL('image/png');
					const pdf = new jsPDF('l', 'mm', 'a4', true);

					pdf.addImage(imgData, 'PNG', 3, 3, 380, 265, '', 'SLOW');
					var formData = new FormData();
					formData.append('file', new Blob([pdf.output('blob')], {type: 'application/pdf'}), "certificado.pdf");
					formData.append('from', from);
					formData.append('to', to);

					fetch('http://localhost:8080/send-mail', {
						method: 'POST',
						body: formData,
					})
					.then(success =>  message.success("Email enviado com sucesso!"))
					.then(before => setLoadingEmail(false))
					.catch(error => message.error("Não foi possível enviar seu email!")
					.then(before => setLoadingEmail(false))
					);
				});

			

			setParticipantes(participantes.map(itemParticipante => {
				
				/*Buscando o participante que recebeu o email*/
				if(itemParticipante.email === to) {

					itemParticipante['receiveCertificate'] = true
					return itemParticipante;

				} else {

					return itemParticipante;
				}
				
			}))

		}

		const dataSource = []

		/*Preenchendo lista de participantes*/
		participantes.map((participante, key) => {
			if(participante.course === evento.course) {

				let statusCertificate = ''
				let statusPresense = ''
				let colorCertificate = ''
				let colorPresense = ''

				/*Verifica se o participante recebeu certificado*/
				statusCertificate = (participante.receiveCertificate) ? 'Enviado' : 'Não Enviado'
				colorCertificate = (participante.receiveCertificate) ? 'green' : 'orange'

				/*Verifica se o participante está confirmado no evento*/
				statusPresense = (participante.present) ? 'Confirmada' : 'Não Confirmado'
				colorPresense = (participante.present) ? 'green' : 'red'

				dataSource.push({
					key: key,
					checkbox: <Checkbox 
									checked={participante.present} 
									onChange={() => onChange(participante) }>
							   </Checkbox>,

    				participante: participante.name,

    				email: participante.email,

   					status: <Tag color={colorCertificate}>{statusCertificate}</Tag>,

   					presense: <Tag color={colorPresense}>{statusPresense}</Tag>,

   					certificado: <Button 
   									type="primary" 
   									disabled={!participante.present} 
   									className="buttom-ver-certificado" 
   									onClick={() => showModal(participante)}>
									Acessar 
								</Button>,

					delete:
							<Popconfirm 
								title="Você tem certeza de que quer excluir este participante?"
								onConfirm={() => deleteParticipant(participante.name) }
								okText="Sim"
								cancelText="Não"
							>
								<Button danger 
									className="button-delete" 
								> X 
								</Button>
							</Popconfirm>
    			})
			}

		})

		const columns = [
		  {
		  	title: 'Atualizar Presença',
		  	dataIndex: 'checkbox',
		  	key: 'checkbox'
		  },
		  {
		    title: 'Participante',
		    dataIndex: 'participante',
		    key: 'participante',
		  },
		  {
		    title: 'E-mail',
		    dataIndex: 'email',
		    key: 'email',
		  },
		  {
		    title: 'Status',
		    dataIndex: 'status',
		    key: 'status',
		  },
		  {
		    title: 'Presença',
		    dataIndex: 'presense',
		    key: 'presense',
		  },
		  ,
		  {
		    title: 'Certificado',
		    dataIndex: 'certificado',
		    key: 'certificado',
		  }
		  ,
		  {
		    title: 'Excluir da lista',
		    dataIndex: 'delete',
		    key: 'delete',
		  }
		];

		return (
			<>
				<div className="list-participants" style={{ display: visible ?  'grid' : 'none' }} >
					<div className="input-participantes" style={{ display: visibleForm ?  'grid' : 'none' }}>
						<h2>Adicione mais participantes a sua lista:</h2>
						<Input className="input-1" placeholder="Nome do participante" value={name} onChange={newName => setName(newName.target.value)}/>
						<br/>
						<Input className="input-2" placeholder="E-mail do participante" value={email} onChange={newEmail => setEmail(newEmail.target.value)}/>
						<br/>
						<Button className="button-parcipants" type="primary" danger onClick={() => {verificarCampos()}}>Incluir novo participante</Button>
						<Button className="buttom-voltar-participants" onClick={ () => setVisibleForm(false) }>Voltar para a lista</Button>
					</div>

					<div style={{ display: visibleForm ?  'none' : 'block' }}>
						<Button className="button-add-participant" onClick={ () => setVisibleForm(true) }><UserAddOutlined/>Incluir participante</Button>

						<h1 className="title-2">Lista de Participantes</h1>
						<Popover content={<h5>Click para enviar certificados para todos os participantes</h5>}>
							<Button className="buttom-send-to-all">Enviar para todos</Button>
						</Popover>

						<Popover content={<h5>Click para cancelar a presença de todos os participantes</h5>}>
							<Button className="buttom-cancel">Cancelar todos</Button>
						</Popover>
						<Table dataSource={dataSource} columns={columns} />
					</div>				
				
				</div>
				<div style={{ display: visible ?  'none' : 'grid' }}>

					{ loadingEmail && 
						<div className='overlay-content'> 
							<Spinner name="ball-grid-pulse" color="white"/>
						</div>}
					
					<div className="certificate-background">
						<img src={logo} alt="Logo da empresa" className="img-logo-certificate"/>
						<img src={stars} alt="5 estrelas" className="img-stars"/> 
						<p className="p-certificate">A comunidade <span className="info-certificate">{evento.company}</span> confere ao participante <span className="info-certificate">{thisParticipante.name}</span> o presente certificado 
							<br/>referente a sua participação no evento <span className="info-certificate">{evento.course}</span> realizado do 
							<br/>dia <span className="info-certificate">{evento.startDate}</span> ao <span className="info-certificate">{evento.finishDate}</span>, com carga horaria de <span className="info-certificate">{evento.workload} horas.</span>
							<br/>
						</p>
						<img alt="Assinatura Digital" src={evento.digitalSignature} className="digitalSignature" />
						<hr/>
						<p className="p-2-certificate">{evento.user}</p>
					</div>

					<Button className="button-email" type="primary" onClick={() => sendEmail(thisParticipante.email)}>Enviar certificado</Button>
					<Button className="button-voltar" onClick={ () => setVisible(true) }>Voltar para a lista de participantes</Button>
				</div>
			</>
		);
}

export default ListOfPresents;
