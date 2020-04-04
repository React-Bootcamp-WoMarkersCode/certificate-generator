import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

/*Estilos*/
import './style.css'

/*Importando JSON de usuários*/
import data from '../../services/users.json'

/*Componentes*/
import CreateUser from '../create-user/index'

/*Componente para fazer login e registro de conta com google*/
class GoogleAccount extends Component{
	constructor(props){
		super(props)
		this.state = {dataGoogle: false};
		
	
	}

	responseGoogle(response){
		this.setState({dataGoogle: response})
	}
	render(){
		return(
		 <div className="button-google" >
			<GoogleLogin 
		// O clientId foi obitdo através do Google API Console. Existe um passo a passo a ser feito e obter o número.
			clientId="78039332386-46h93ebkr1bb708hqv47h410pdd89mj9.apps.googleusercontent.com"
			render={renderProps => (
				<button id="buttongoogle"
				onClick={ () => this.responseGoogle()}  className="loginBtn-google"> 
				Cadastrar com o Google </button>
					
					
			)}
			buttonText="Cadastrar com o Google"
			onSuccess={this.responseGoogle}
			onFailure={this.responseGoogle}
			/>
			
		</div>
		<p className="ou">OU</p>
		{dataGoogle && <CreateUser  name={dataGoogle.profileObj.name} 
									email={dataGoogle.profileObj.email} 
									password={true} 
									avatar={dataGoogle.profileObj.imageUrl}
		/>}
		</>
	);
}

export default GoogleAccount; 		

{/* function GoogleAccount(props) {

	const [ dataGoogle, setDataGoogle ] = useState(false)

	const responseGoogle = response => {
		setDataGoogle(response)
	}

	return (
		<>
		
		<div className="button-google" >
		<GoogleLogin 
		// O clientId foi obitdo através do Google API Console. Existe um passo a passo a ser feito e obter o número.
			clientId="78039332386-46h93ebkr1bb708hqv47h410pdd89mj9.apps.googleusercontent.com"
			render={renderProps => (
				<button 
					
					onClick={renderProps.onClick} disabled={renderProps.disabled} className="loginBtn-google"> 
					Cadastrar com o Google </button>
			)}
			buttonText="Cadastrar com o Google"
			onSuccess={responseGoogle}
			onFailure={responseGoogle}
			/>
		</div>

		<p className="ou">OU</p>
		{dataGoogle && <CreateUser  name={dataGoogle.profileObj.name} 
									email={dataGoogle.profileObj.email} 
									password={true} 
									avatar={dataGoogle.profileObj.imageUrl}
		/>}
		</>
	);
}

export default GoogleAccount; */}