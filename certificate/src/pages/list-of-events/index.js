import React from 'react';
import Header from '../../components/header/index';
import ListEvents from '../../components/list-events/index';
import Footer from '../../components/footer/index';

function ListOfEvents(props) {

	return (
		<>
		<Header />
		<h1>Esta é a função que trabalha com a pagina para mostrar a lista de eventos</h1>
		<ListEvents />
		<Footer />
		</>
	);
}

export default ListOfEvents;