import React, { useState } from 'react'
import GoogleLogin from 'react-google-login';

/*Importando JSON de usuários*/
import data from '../../services/users.json'

/*Componente para fazer login e registro de conta com google*/
function GoogleAccount(props) {
	/*Estado do JSON de usuarios*/
  	const [ usersData, setUsers ] = useState(data)

  	/*Verifica se a conta já existe*/
  	const [ createUser, setCreateUser ] = useState(false)

	const responseGoogle = response => {
		/*Verificando existencia de usuário*/
		usersData.map(emailCadastrado => {

			if(emailCadastrado.email === response.profileObj.email) {
				alert('Esta conta já está cadastrada')

			} else if (!createUser) {
				/*Adicionando novo usuário*/
				setCreateUser(true)

				/*Coloquei a senha como true pois o usuário 
				já fez o login com o google*/
				setUsers([
			      ...usersData, {
			        eventOwner: response.profileObj.name,
			        email: response.profileObj.email,
			        password: true, 
			        token: false,
			        avatar: response.profileObj.imageUrl
			      }
			    ])
			    console.log(usersData)
			}
		})

	}

	return (
		<>
		<GoogleLogin
		// O clientId foi obitdo através do Google API Console. Existe um passo a passo a ser feito e obter o número.
			clientId="78039332386-46h93ebkr1bb708hqv47h410pdd89mj9.apps.googleusercontent.com"
			render={renderProps => (
				<button onClick={renderProps.onClick} disabled={renderProps.disabled} className="loginBtn loginBtn-google"> 
					Cadastrar com o Google </button>
			)}
			buttonText="Cadastrar com o Google"
			onSuccess={responseGoogle}
			onFailure={responseGoogle}
			/>

		<p>OU</p>
		</>
	);
}

export default GoogleAccount;