import React, { useState } from 'react'

/*Estilos*/
import 'antd/dist/antd.css';
import { Avatar, message, Button, Input } from 'antd';
import './style.css'

/*Rotas*/
import { Redirect } from 'react-router-dom'

function ProfileCard(props) {

	const { organizador, users, assinatura } = props

	/*Variável que irá renderizar o formulário de registro, mas com 
	os dados do usuário para que possam ser atualizados*/

	const [ toEditForm, setToEditForm] = useState(false)

	/*JSON dos usuários*/
	const [ user, setUser ] = useState(users)

	/*Variável que irá permitir o retorno a Home após o usuário excluir a sua conta*/
	const [ goToHome, setGoHome ] = useState(false)

	/*Recuperando os dados do usuário logado para inserir como valor inicial nos inputs*/
	let nameProfile = ""
	let emailProfile = ""
	let passwordProfile = ""
	let avatarProfile = ""

	user.map(itemJson => {
		if(itemJson.token) {
			nameProfile = itemJson.name
			emailProfile = itemJson.email
			passwordProfile = itemJson.password
			avatarProfile = itemJson.avatar
		}
	})

	/*Dados do perfil do usuário. 
	Serão utilizados para mostrar seus dados na tela e para edita-los no forumulário*/
	const [ name, setName ] = useState(nameProfile)
	const [ email, setEmail ] = useState(emailProfile)
	const [ password, setPassword] = useState(passwordProfile)

	/*Quando a opção de editar conta for acionada*/
	const beforeEditForm = (event) => {
		event.preventDefault();
		setToEditForm(!toEditForm)
	}

	/*Quando o usuário concluir as suas modificações, esta função será executada*/
	const afterEditForm = (event) => {
		event.preventDefault();

		if( !name || !email || !password ) {
			message.error('Os dados não podem ficar vázios')

		} else {
			setToEditForm(!toEditForm)

			/*Atualizando os dados do perfil*/
			setUser(
					user.map(itemJson => {
						
						/*Atualizando o JSON de usuários sem o usuário ativo*/
						if(itemJson.name === organizador){
							itemJson['name'] = name
							itemJson['email'] = email
							itemJson['password'] = password

							return itemJson
						} else {
							return itemJson
						}
				})
			)

			message.success('Seus dados foram atualizados')
		}

		

	}

	/*Quando a opção de deletar conta for acionada*/
	const deleteAccount = (event) => {
		event.preventDefault();
		setUser(
				user.map(itemJson => {
					
					/*Atualizando o JSON de usuários sem o usuário ativo*/
					if(itemJson.token){
						itemJson['name'] = ''
						itemJson['email'] = ''
						itemJson['password'] = ''
						itemJson['token'] = false
						itemJson['avatar'] = ''  

						return itemJson
					} else {
						return itemJson
					}
			})
		)
		console.log(user)

		message.info('Sua conta foi desabilitada')

		/*Redirecionar para a Home*/
		setGoHome(true)
	}
	return (
		<>
			<div className="profile"
				style={{ display: toEditForm ?  'none' : 'block' }}
			>
				<Avatar size='large' src={avatarProfile}/>

				{
						user.map(itemJson => {

							/*Descobrindo quem é o usuário logado*/
							if(itemJson.token) {

								return(
									<>
										<h1>{itemJson.name}</h1>
										<h2>{itemJson.email}</h2>
									</>
								);
							}
						})
				}
				
				<Button type="primary" primary onClick={beforeEditForm}>Editar minha conta</Button>
				<Button type="primary" danger onClick={deleteAccount}>Deletar minha conta</Button>
				<h4 style={{ marginTop: '3%'}}>Sua assinatura</h4>
				<hr style={{ marginLeft: '0%'}} />
				<br/>
				{ assinatura ? (
					<img
						src={assinatura}
						alt="Minha assinatura Digital"
						className="buttons-pad" 
						style={{ marginLeft: '-3%'}}
						/>
				) : <h4 style={{ color: 'red'}}>Sem assinatura</h4> }
				
			</div>
			{ goToHome && <Redirect to="/"></Redirect>}
			
			{
				toEditForm && 

					<div className="edit-profile"
						style={{ display: toEditForm ?  'block' : 'none' }}
					>
						<h2 className="profile-title">Edite os dados da sua conta:</h2>
						<h4>Nome:</h4>
						<Input className="input-edit-1" placeholder="Nome" value={name} onChange={ newValue => setName(newValue.target.value) }/>
						<br/>
						<h4>E-mail:</h4>
						<Input className="input-edit-2" placeholder="E-mail" value={email} onChange={ newValue => setEmail(newValue.target.value) } />
						<br/>
						<h4>Senha:</h4>
						<Input.Password className="input-edit-3" placeholder="Senha" value={password} onChange={ newValue => setPassword(newValue.target.value) }/>
						<br/>
						<Button className="button-edit-profile" type="primary" primary onClick={afterEditForm}>Atualizar dados</Button>
						<br/>
						<Button className="back-button-profile" onClick={beforeEditForm}>Voltar para o perfil</Button>
					</div>
			}
		</>
	);
}

export default ProfileCard;