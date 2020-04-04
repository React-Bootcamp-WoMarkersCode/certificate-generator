import React from 'react'

/*Componentes*/
import Header from '../../components/header/index'
import Section from '../../components/section/index'
import Cards from '../../components/cards/index'
import ModelCertificateHome from '../../components/model-certificate-home/index'
import Steps from '../../components/steps/index'
import Footer from '../../components/footer/index'
 
function Home(props) {

	return (
		<>
			<h1>Esta é a função que trabalha com a pagina Home</h1>
			<Header />
			<Section />
			<Cards />
			<Steps />
			<ModelCertificateHome />
			<Footer />	
					
		</>
	);
}

export default Home;