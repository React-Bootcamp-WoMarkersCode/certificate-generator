import React from 'react'

/*Componentes*/
import Menu1 from '../../components/menu-1/index'
import FormLogin from '../../components/form-login/index';
import GoogleAccount from '../../components/login-register-google/index';
import Footer from '../../components/footer/index';

/*Estilos*/
import '../../style/App.css';

function SignIn(props) {
	return (
		<>
			<Menu1 />
			<GoogleAccount />
			<FormLogin />
			<Footer />
		</>
	);
}

export default SignIn;