import React, { useState } from 'react'
import GoogleLogin from 'react-google-login';

/*Importando JSON de usuários*/
import data from '../../services/users.json'

/*Componentes*/
import CreateUser from '../create-user/index'

/*Componente para fazer login e registro de conta com google*/
function GoogleAccount(props) {

	const [ dataGoogle, setDataGoogle ] = useState(false)

	const responseGoogle = response => {
		setDataGoogle(response)
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
		{dataGoogle && <CreateUser  name={dataGoogle.profileObj.name} 
									email={dataGoogle.profileObj.email} 
									password={true} 
									avatar={dataGoogle.profileObj.imageUrl}
		/>}
		</>
	);
}

export default GoogleAccount;