import React from 'react';

/*Componentes*/
import MenuComponent from '../../components/menu-1/index'
import ListEvents from '../../components/list-events/index';
import Footer from '../../components/footer/index';

function ListOfEvents(props) {

	const { organizador } = props

	return (
		<>
			<MenuComponent/>
			<ListEvents organizador={organizador}/>
			<Footer/>
		</>
	);
}

export default ListOfEvents;