import React from 'react'
import {Link}  from 'react-router-dom'
import Error404 from '../../assets/img/erro404.gif'
import './style.css'

import Menu1 from '../../components/menu-1/index'
import Footer from '../../components/footer/index'


function PageNotFound() {
	return (
		<div>
			<Menu1 />
			<img src={Error404} className="gif-erro" alt="imagem de página não encontrada"/>
			<div style={{textAlign:'center'}}>
				<Link to="/">Voltar para a Home</Link>
			</div>
			<Footer />
		</div>			
	);
}

export default PageNotFound;