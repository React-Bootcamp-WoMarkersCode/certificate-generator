import React from 'react';
import Menu2 from '../../components/menu-2/index'
import ListEvents from '../../components/list-events/index';
import Footer from '../../components/footer/index';

function ListOfEvents(props) {

	return (
		<>
		<Menu2 />
		<h1>Esta é a função que trabalha com a pagina para mostrar a lista de eventos</h1>
		<ListEvents />
		<Footer />
		</>
	);
}

export default ListOfEvents;