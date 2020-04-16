import React from 'react';

/*Componentes*/
import MenuComponent from '../../components/menu-1/index'
import FormRegister from '../../components/form-register/index';
import Footer from '../../components/footer/index';

/*Estilos*/
import './styles.css';
import '../../style/App.css';


function SignUp(props) {

	return (
		<>
			<MenuComponent/>
			<FormRegister />
			<Footer />
		</>
	);
}

export default SignUp;