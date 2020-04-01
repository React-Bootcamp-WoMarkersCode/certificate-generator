import React from 'react';
import ReactDOM from 'react-dom';

/*Componentes*/
import GoogleAccount from '../../components/login-register-google/index';
import Footer from '../../components/footer/index';

/*Estilos*/
import './styles.css';
import '../../style/App.css';


function SignUp(props) {

	return (
		<>
		{/* Login formal: */}
		{/* Login com o Google: */}
		<GoogleAccount />
		{/* Rodapé: */}
		<Footer />
		</>
	);
}

export default SignUp;