import React, { useState } from 'react'
import GoogleLogin from 'react-google-login';

/*Estilos*/
import './style.css'
import { message } from 'antd';


/*Importando JSON de usuários*/
import data from '../../services/users.json'

/*Componentes*/
import CreateUser from '../create-user/index'

import { Redirect } from 'react-router-dom'

/*Componente para fazer login e registro de conta com google*/
function GoogleAccount(props) {
	/*Estado do JSON de usuarios*/
	 const [ usersData, setUsers ] = useState(data)

	/*Verifica se o acesso foi aprovado*/
  	const [ acessAproved, setAproved ] = useState(false)


	const responseGoogle = response => {
		alert('carregado')

		/*Verificando se já existe um usuário cadastrado*/
		let listEmails = []

		usersData.map(itemJson => {
			listEmails.push(itemJson.email)
		})

		/*Se o e-mail digitado pelo usuário pelo usuário ainda não está no JSON de usuários*/
		if(!listEmails.includes(response.profileObj.email)) {

			message.success('Conta criada com sucesso')
			
			setUsers([
			      ...usersData, {
			        name: response.profileObj.name,
			        email: response.profileObj.email,
			        password: true, 
			        token: true,
			        avatar: response.profileObj.imageUrl
			      }
			])

			setAproved(true)

		} else {
			message.warning('Este usuário já está cadastrado')
		}



		console.log(response.profileObj)
	}

	return (
		<>
		<div className="button-google" >
		<GoogleLogin 
		// O clientId foi obitdo através do Google API Console. Existe um passo a passo a ser feito e obter o número.
			clientId="78039332386-46h93ebkr1bb708hqv47h410pdd89mj9.apps.googleusercontent.com"
			render={renderProps => (
				<button 
					
					onClick={renderProps.onClick} disabled={renderProps.disabled} className="loginBtn loginBtn-google"> 
					Cadastrar com o Google </button>
			)}
			buttonText="Cadastrar com o Google"
			onSuccess={responseGoogle}
			onFailure={responseGoogle}
			/>
		</div>

		<p className="ou">OU</p>
		{ acessAproved && <Redirect to="/profile"></Redirect>}

		</>
	);
}

export default GoogleAccount;