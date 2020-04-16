import React from 'react'

/*Componentes*/
import MenuComponent from '../../components/menu-1/index'
import MessageAlert from '../../components/message-alert/index';
import Footer from '../../components/footer/index';

function PageConfirmation(props) {

	return (
		<>
			<MenuComponent />
			<MessageAlert />
			<Footer />
		</>
	);
}

export default PageConfirmation;