import React from 'react'
import ReactDOM from 'react-dom';

/*Componentes*/
import FormLogin from '../../components/form-login/index';
import GoogleAccount from '../../components/login-register-google/index';
import Footer from '../../components/footer/index';

/*Estilos*/
import '../../style/App.css';

function SignIn(props) {
	return (
		<>

		{/* Login com o Google: */}
		<GoogleAccount />
		<FormLogin />
		<Footer />
		</>
	);
}

export default SignIn;