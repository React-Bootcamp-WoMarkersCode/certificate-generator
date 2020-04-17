import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

/*Cria estilo com style componente*/
const styles = StyleSheet.create({
	pdf: {
		marginLeft: '10%'
	},
	page: {
		display: 'flex',
		flexDirection: 'row'
	}, section: {
		marginTop: '10%',
		padding: 10,
		flexGrow: 1,
		textAlign: 'center',
		alignItems: 'center',
	}, assinatura: {
		width: '10%',
		height: '10%',
		marginTop: '5%'
	}, logo: {
		width: '15%',
		height: '15%'
	}, text: {
		width: '70%'
	}
});


const MyDocument = (props) => {

	const { name, course, company, startDate, finishDate, workload, user, digitalSignature } = props

	return(
		
			<Document title="Certificado de participação" >
				<Page 
					size="A4" 
					orientation="landscape"
					style={styles.page}>
					<View style={styles.section} >
						<Image alt="Logo" style={styles.logo} source="logo_texto_cinza.png"  />
						<Text style={styles.text}>A comunidade {company} confere ao participante {name} o presente certificado</Text>
						<Text style={styles.text}>referente a sua participação no evento {course} realizado do</Text>
						<Text style={styles.text}>dia {startDate} ao {finishDate}, totalizando {workload} horas de atividades.</Text>

						<Image style={styles.assinatura} source={digitalSignature} alt="Assinatura Digital" />
						<Text style={styles.text}>{user}</Text>
					</View>
				</Page>
			</Document>	
		
	);
}

export default MyDocument;