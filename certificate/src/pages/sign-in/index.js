import React from 'react'
import FormLogin from '../../components/form-login'
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import Footer from '../../components/footer/index';
import '../../style/App.css';

function SignIn(props) {
	const responseGoogle = (response) => {
		console.log(response);
	}
	return (
		<>
		{/* Login com o Google: */}
		<GoogleLogin
		// O clientId foi obitdo através do Google API Console. Existe um passo a passo a ser feito para obter o número.
			clientId="78039332386-46h93ebkr1bb708hqv47h410pdd89mj9.apps.googleusercontent.com"
			render={renderProps => (
				<button onClick={renderProps.onClick} disabled={renderProps.disabled} className="loginBtn loginBtn-google"> 
					Cadastrar com o Google </button>
			)}
			buttonText="Cadastrar com o Google"
			onSuccess={responseGoogle}
			onFailure={responseGoogle}
		/>

		<FormLogin />

		<Footer />
		</>
	);
}

export default SignIn;