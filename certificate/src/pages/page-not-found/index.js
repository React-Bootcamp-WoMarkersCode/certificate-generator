<<<<<<< HEAD
import React from 'react'
import {Link}  from 'react-router-dom'
import Error404 from '../../assets/img/erro404.gif'
=======
import React from 'react';
>>>>>>> DianaRegina

function PageNotFound() {
	return (
		<div>
			<img src={Error404} alt="imagem de página não encontrada"/>

			<Link to="/">Voltar para a Home</Link>
		</div>
	);
}

export default PageNotFound;