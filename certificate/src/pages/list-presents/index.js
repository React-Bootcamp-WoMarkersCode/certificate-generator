import React from 'react'

/*Componentes*/
import Menu2 from '../../components/menu-2/index'
import ListOfPresents from '../../components/list-presents/index'
import Footer from '../../components/footer/index'

/*Pagina para listar os participantes*/
function ListPresents(props) {

	return (
		<>
			<Menu2/>		
			<ListOfPresents />
			<Footer/>
		</>
	);
}

export default ListPresents;