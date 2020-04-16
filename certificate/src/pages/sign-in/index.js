import React from 'react'

/*Componentes*/
import MenuComponent from '../../components/menu-1/index'
import FormLogin from '../../components/form-login/index';
import Footer from '../../components/footer/index';

/*Estilos*/
import '../../style/App.css';

function SignIn(props) {
	return (
		<>
			<MenuComponent />
			<FormLogin />
			<Footer />
		</>
	);
}

export default SignIn;