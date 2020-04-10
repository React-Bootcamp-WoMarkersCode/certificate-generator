import React from 'react'

/*Componentes*/
import FormEvent from '../../components/form-event/index'
import Menu2 from '../../components/menu-2/index'
import Footer from '../../components/footer/index'

function CreateEvent(props) {

	return (
		<>	
			<Menu2/>
			<FormEvent />
			<Footer />
		</>
	);
}

export default CreateEvent;