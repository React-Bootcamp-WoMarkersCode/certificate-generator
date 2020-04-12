import React from 'react';

/*Componentes*/
import Menu1 from '../../components/menu-1/index'
import FormRegister from '../../components/form-register/index';
import GoogleAccount from '../../components/login-register-google/index';
import Footer from '../../components/footer/index';

/*Estilos*/
import './styles.css';
import '../../style/App.css';


function SignUp(props) {

	return (
		<>
			<Menu1/>
			<GoogleAccount />
			<FormRegister />
			<Footer />
		</>
	);
}

export default SignUp;